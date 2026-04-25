import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// Attributs Brevo à créer dans le dashboard avant utilisation :
// Contacts > Paramètres > Attributs des contacts > Créer attribut
//
//   Nom              | Type    | Description
//   ─────────────────|─────────|─────────────────────────────────────────────
//   PRENOM           | Texte   | Prénom
//   NOM              | Texte   | Nom
//   SMS              | Texte   | Téléphone (existant par défaut)
//   VILLE            | Texte   | Ville de résidence
//   SOURCE_EVENEMENT | Texte   | Comment avez-vous entendu parler ?
//   CONTACT_FUTUR    | Texte   | Souhait d'être contacté (oui/non)
//   OPTIN_COMMS      | Booléen | Consentement communications RGPD
//   EVENEMENT        | Texte   | Nom de l'événement concerné
// ─────────────────────────────────────────────────────────────────────────────

interface RegistrationBody {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  ville?: string;
  source?: string;
  contactFutur?: string;
  newsletter?: boolean;
}

/**
 * Normalise un numéro de téléphone en format E.164 (+336XXXXXXXX).
 * Retourne null si le numéro ne peut pas être converti.
 */
function toE164(raw: string): string | null {
  // Supprimer tous les caractères non numériques sauf le +
  const cleaned = raw.replace(/[\s.\-()]/g, "");

  // Déjà au format international +XXX…
  if (/^\+\d{7,15}$/.test(cleaned)) return cleaned;

  // Format 00XXXX → +XXXX
  if (/^00\d{7,13}$/.test(cleaned)) return "+" + cleaned.slice(2);

  // Numéro français commençant par 0X → +33X…
  if (/^0[1-9]\d{8}$/.test(cleaned)) return "+33" + cleaned.slice(1);

  // Numéro marocain commençant par 0X (10 chiffres) → +212X…
  if (/^0[5-7]\d{8}$/.test(cleaned)) return "+212" + cleaned.slice(1);

  return null;
}

export async function POST(request: Request) {
  try {
    const body: RegistrationBody = await request.json();
    const { prenom, nom, email, telephone, ville, source, contactFutur, newsletter } = body;

    if (!prenom || !nom || !email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Prénom, nom et email valide sont obligatoires." },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;

    if (!apiKey) {
      console.error("Clé Brevo manquante");
      return NextResponse.json(
        { error: "Configuration email manquante" },
        { status: 500 }
      );
    }

    // 1. Créer / mettre à jour le contact dans Brevo avec tous les champs
    const listId = parseInt(process.env.BREVO_LIST_CINE_TALK_ID ?? "0", 10);

    // Normaliser le téléphone — skip si format invalide
    const smsFormatted = telephone ? toE164(telephone) : null;
    if (telephone && !smsFormatted) {
      console.warn("Numéro de téléphone ignoré (format invalide):", telephone);
    }

    const buildAttributes = (includeSms: boolean) => ({
      PRENOM: prenom,
      NOM: nom,
      ...(includeSms && smsFormatted ? { SMS: smsFormatted } : {}),
      ...(ville ? { VILLE: ville } : {}),
      ...(source ? { SOURCE_EVENEMENT: source } : {}),
      ...(contactFutur ? { CONTACT_FUTUR: contactFutur } : {}),
      OPTIN_COMMS: newsletter === true ? "oui" : "non",
      EVENEMENT: "Diaspora Ciné Talk — Mon Oriental (10 mai 2026)",
    });

    const buildPayload = (includeSms: boolean): Record<string, unknown> => ({
      email,
      updateEnabled: true,
      attributes: buildAttributes(includeSms),
      ...(listId > 0 ? { listIds: [listId] } : {}),
    });

    const postContact = (payload: Record<string, unknown>) =>
      fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify(payload),
      });

    let contactRes = await postContact(buildPayload(true));

    // Si Brevo rejette à cause d'un numéro SMS déjà utilisé → retry sans SMS
    if (!contactRes.ok) {
      const errBody = await contactRes.json() as { code?: string; message?: string };
      const isSmsError =
        errBody.code === "duplicate_parameter" ||
        (errBody.message ?? "").toLowerCase().includes("sms") ||
        (errBody.message ?? "").toLowerCase().includes("phone");
      const isDuplicateSms = isSmsError;

      if (isDuplicateSms && telephone) {
        console.warn("SMS déjà présent dans Brevo, retry sans téléphone:", telephone);
        const retryRes = await postContact(buildPayload(false));
        if (!retryRes.ok) {
          const retryErr: unknown = await retryRes.json();
          console.error("Erreur Brevo contacts (retry):", retryErr);
          return NextResponse.json(
            { error: "Erreur lors de l'enregistrement du contact." },
            { status: 500 }
          );
        }
      } else {
        console.error("Erreur Brevo contacts:", errBody);
        return NextResponse.json(
          { error: "Erreur lors de l'enregistrement du contact." },
          { status: 500 }
        );
      }
    }

    // 2. Envoyer l'email de confirmation
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "contact@generationdiaspora.com";
    const senderName = process.env.BREVO_SENDER_NAME ?? "Génération Diaspora";
    const templateId = process.env.BREVO_TEMPLATE_CONFIRMATION_ID
      ? parseInt(process.env.BREVO_TEMPLATE_CONFIRMATION_ID, 10)
      : null;

    const emailPayload = templateId
      ? {
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name: `${prenom} ${nom}` }],
          templateId,
          params: {
            PRENOM: prenom,
            NOM: nom,
            EVENT_NAME: "Diaspora Ciné Talk — Mon Oriental",
            EVENT_DATE: "Dimanche 10 Mai 2026 à 15h",
          },
        }
      : {
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name: `${prenom} ${nom}` }],
          subject: "✅ Inscription confirmée — Diaspora Ciné Talk · Mon Oriental",
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #7c2d12, #b45309, #f97316); color: white; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 4px; opacity: 0.8; text-transform: uppercase;">Génération Diaspora</p>
                <h1 style="margin: 0 0 6px; font-size: 24px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">Diaspora Ciné Talk</h1>
                <p style="margin: 0; font-size: 15px; opacity: 0.9; letter-spacing: 3px; text-transform: uppercase;">Mon Oriental</p>
              </div>
              <div style="background: #fafaf9; padding: 32px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
                <p style="font-size: 16px; color: #374151;">Bonjour <strong>${prenom}</strong>,</p>
                <p style="color: #374151;">Votre inscription au <strong>Diaspora Ciné Talk — Mon Oriental</strong> est bien enregistrée !</p>

                <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin: 20px 0;">
                  <p style="margin: 0 0 8px; color: #9a3412; font-weight: 600;">📅 Dimanche 10 Mai 2026 à 15h00</p>
                  <p style="margin: 0 0 8px; color: #9a3412;">📍 TSF, le Cercle Rouge — 30 avenue Georges Sand, 93210 Saint-Denis</p>
                  <p style="margin: 0; color: #9a3412;">🎬 Projection &amp; Débat · Khalid Zaouche, Jawad Zaouche &amp; l'équipe du film</p>
                </div>

                <p style="color: #6b7280; font-size: 13px;">
                  Votre inscription : <strong>${prenom} ${nom}</strong>${ville ? ` — ${ville}` : ""}
                </p>

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
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const err: unknown = await emailRes.json();
      console.error("Erreur Brevo email:", err);
      // Contact créé mais email échoué — on retourne quand même success
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API inscription-cine-talk:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
