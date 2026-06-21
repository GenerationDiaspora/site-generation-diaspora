import { NextResponse } from "next/server";

const MIN_FILL_MS = 3000;

interface RegistrationBody {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  pays?: string;
  source?: string;
  contactFutur?: string;
  newsletter?: boolean;
  _hp?: string;
  _t?: number;
}

function toE164(raw: string): string | null {
  const cleaned = raw.replace(/[\s.\-()]/g, "");
  if (/^\+\d{7,15}$/.test(cleaned)) return cleaned;
  if (/^00\d{7,13}$/.test(cleaned)) return "+" + cleaned.slice(2);
  if (/^0[1-9]\d{8}$/.test(cleaned)) return "+33" + cleaned.slice(1);
  if (/^0[5-7]\d{8}$/.test(cleaned)) return "+212" + cleaned.slice(1);
  return null;
}

export async function POST(request: Request) {
  try {
    const body: RegistrationBody = await request.json();
    const { prenom, nom, email, telephone, pays, source, contactFutur, newsletter, _hp, _t } = body;

    // Anti-bot
    if (_hp && _hp.trim() !== "") {
      console.warn("Bot détecté (honeypot)");
      return NextResponse.json({ success: true }, { status: 200 });
    }
    if (_t && typeof _t === "number" && Date.now() - _t < MIN_FILL_MS) {
      console.warn("Bot détecté (timing)");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!prenom || !nom || !email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Prénom, nom et email valide sont obligatoires." },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (!apiKey) {
      console.error("Clé Brevo manquante");
      return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 });
    }

    const listId = parseInt(process.env.BREVO_LIST_WEBINAIRE_MRE_ID ?? "0", 10);
    const smsFormatted = telephone ? toE164(telephone) : null;

    const buildPayload = (includeSms: boolean): Record<string, unknown> => ({
      email,
      updateEnabled: true,
      attributes: {
        PRENOM: prenom,
        NOM: nom,
        ...(includeSms && smsFormatted ? { SMS: smsFormatted } : {}),
        ...(pays ? { VILLE: pays } : {}),
        ...(source ? { SOURCE_EVENEMENT: source } : {}),
        ...(contactFutur ? { CONTACT_FUTUR: contactFutur } : {}),
        OPTIN_COMMS: newsletter === true ? "oui" : "non",
        EVENEMENT: "Webinaire — Retour Estival des MRE (25 juin 2026)",
      },
      ...(listId > 0 ? { listIds: [listId] } : {}),
    });

    const postContact = (payload: Record<string, unknown>) =>
      fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify(payload),
      });

    let contactRes = await postContact(buildPayload(true));

    if (!contactRes.ok) {
      const errBody = await contactRes.json() as { code?: string; message?: string };
      const isSmsError =
        errBody.code === "duplicate_parameter" ||
        (errBody.message ?? "").toLowerCase().includes("sms") ||
        (errBody.message ?? "").toLowerCase().includes("phone");

      if (isSmsError && telephone) {
        console.warn("SMS dupliqué, retry sans téléphone:", telephone);
        const retryRes = await postContact(buildPayload(false));
        if (!retryRes.ok) {
          console.error("Erreur Brevo contacts (retry):", await retryRes.json());
          return NextResponse.json({ error: "Erreur lors de l'enregistrement." }, { status: 500 });
        }
      } else {
        console.error("Erreur Brevo contacts:", errBody);
        return NextResponse.json({ error: "Erreur lors de l'enregistrement." }, { status: 500 });
      }
    }

    // Email de confirmation
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "contact@generationdiaspora.com";
    const senderName = process.env.BREVO_SENDER_NAME ?? "Génération Diaspora";

    const emailPayload = {
      sender: { name: senderName, email: senderEmail },
      to: [{ email, name: `${prenom} ${nom}` }],
      subject: "✅ Inscription confirmée — Webinaire Retour Estival des MRE",
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c, #c2410c); color: white; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 4px; opacity: 0.8; text-transform: uppercase;">Génération Diaspora × Oxy'Jeunes</p>
            <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;">Retour Estival des MRE</h1>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">Webinaire · 25 Juin 2026 · 21h00</p>
          </div>
          <div style="background: #fafaf9; padding: 32px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <p style="font-size: 16px; color: #374151;">Bonjour <strong>${prenom}</strong>,</p>
            <p style="color: #374151;">Votre inscription au webinaire <strong>Retour Estival des MRE</strong> est confirmée !</p>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0 0 8px; color: #991b1b; font-weight: 600;">📅 Jeudi 25 Juin 2026 à 21h00 (heure française)</p>
              <p style="margin: 0 0 8px; color: #991b1b;">💻 Webinaire en ligne — le lien vous sera envoyé avant l'événement</p>
              <p style="margin: 0; color: #991b1b;">🤝 En partenariat avec Oxy'Jeunes</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              Association Génération Diaspora ·
              <a href="https://www.generationdiaspora.com" style="color: #004e35;">www.generationdiaspora.com</a>
            </p>
          </div>
        </div>
      `,
    };

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      console.error("Erreur Brevo email:", await emailRes.json());
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API inscription-webinaire-mre:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
