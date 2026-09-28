import { NextResponse } from "next/server";

const MIN_FILL_MS = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Chaîne sans espace mêlant majuscules/minuscules au hasard (ex : "hNTRzoRvwrqVUnoHR")
function looksRandom(s: string | undefined) {
  if (!s) return false;
  const t = s.trim();
  if (t.length < 12 || /\s/.test(t)) return false;
  const caseSwitches = (t.match(/[a-z][A-Z]|[A-Z][a-z]/g) || []).length;
  return caseSwitches >= 4;
}

function escHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top">${escHtml(label)}</td><td style="padding:6px 12px;color:#111827">${escHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nomComplet,
      email,
      anneeNaissance,
      villeResidence,
      nationalite,
      villeOrigineMaroc,
      telephone,
      linkedin,
      reseauxSociaux,
      situation,
      formation,
      profession,
      _hp,
      _t,
    } = body;

    // ── Protection anti-bot ────────────────────────────────────────────────
    // On répond 200 pour ne pas indiquer au bot qu'il a été détecté
    const ignore = (reason: string) => {
      console.warn(`Bot détecté (${reason}) — candidature ignorée`);
      return NextResponse.json({ message: "Candidature reçue" }, { status: 200 });
    };
    if (_hp && String(_hp).trim() !== "") return ignore("honeypot");
    if (typeof _t !== "number" || !_t || Date.now() - _t < MIN_FILL_MS) return ignore("timing");
    const gibberish = [nomComplet, villeResidence, nationalite, villeOrigineMaroc, formation, profession, reseauxSociaux]
      .filter(looksRandom).length;
    if (gibberish >= 2) return ignore("texte aléatoire");
    // ──────────────────────────────────────────────────────────────────────

    const requiredFields = { nomComplet, email, anneeNaissance, villeResidence, nationalite, villeOrigineMaroc, telephone, situation };
    const missing = Object.entries(requiredFields).filter(([, v]) => !v || !String(v).trim());
    if (missing.length > 0 || !EMAIL_RE.test(String(email))) {
      return NextResponse.json({ error: "Champs obligatoires manquants ou email invalide" }, { status: 400 });
    }

    const annee = Number(anneeNaissance);
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(annee) || annee < 1940 || annee > currentYear - 12) {
      return NextResponse.json({ error: "Année de naissance invalide" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Configuration Brevo manquante" }, { status: 500 });
    }

    // Sépare prénom / nom sur le premier espace pour Brevo
    const spaceIdx = nomComplet.trim().indexOf(" ");
    const prenom = spaceIdx > 0 ? nomComplet.slice(0, spaceIdx) : nomComplet;
    const nom = spaceIdx > 0 ? nomComplet.slice(spaceIdx + 1) : "";

    // 1. Créer / mettre à jour le contact Brevo
    // On n'utilise que les attributs standards Brevo pour éviter les erreurs
    // si les attributs custom ne sont pas encore créés dans le compte
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: prenom,
          NOM: nom,
          SMS: telephone,
        },
        updateEnabled: true,
      }),
    });

    // Si une liste de recrutement est configurée, on l'ajoute séparément
    const listId = parseInt(process.env.BREVO_RECRUTEMENT_LIST_ID || "0");
    if (listId > 0 && (brevoRes.ok || brevoRes.status === 204)) {
      await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify({ emails: [email] }),
      });
    }

    // 2. Email de notification
    const htmlContent = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:32px 24px;border-radius:12px">
        <div style="background:#0B5D3B;padding:20px 24px;border-radius:8px 8px 0 0;margin:-32px -24px 24px">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">Nouvelle candidature — Génération Diaspora</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08)">
          <tbody>
            ${row("Nom complet", nomComplet)}
            ${row("Email", email)}
            ${row("Année de naissance", String(anneeNaissance))}
            ${row("Téléphone", telephone)}
            ${row("Ville & pays", villeResidence)}
            ${row("Origine Maroc", villeOrigineMaroc)}
            ${row("Nationalité(s)", nationalite)}
            ${row("Situation", situation)}
            ${row("Formation", formation)}
            ${row("Profession", profession)}
            ${row("LinkedIn", linkedin)}
            ${row("Réseaux sociaux", reseauxSociaux)}
          </tbody>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#9ca3af;text-align:center">Candidature reçue via generationdiaspora.com</p>
      </div>
    `;

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "Génération Diaspora", email: "contact@generationdiaspora.com" },
        to: [{ email: "contact@generationdiaspora.com", name: "Génération Diaspora" }],
        subject: `Nouvelle candidature — ${nomComplet}`,
        htmlContent,
      }),
    });

    return NextResponse.json({ message: "Candidature reçue" }, { status: 200 });
  } catch (error) {
    console.error("Erreur recrutement:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
