import { NextResponse } from "next/server";

interface RegistrationBody {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  ville?: string;
  newsletter?: boolean;
}

export async function POST(request: Request) {
  try {
    const body: RegistrationBody = await request.json();
    const { prenom, nom, email, telephone, ville } = body;

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

    // 1. Créer / mettre à jour le contact dans Brevo
    const listId = parseInt(process.env.BREVO_LIST_CINE_TALK_ID ?? "0", 10);

    const contactPayload: Record<string, unknown> = {
      email,
      updateEnabled: true,
      attributes: {
        FIRSTNAME: prenom,
        LASTNAME: nom,
        ...(telephone ? { SMS: telephone } : {}),
        ...(ville ? { VILLE: ville } : {}),
      },
      ...(listId > 0 ? { listIds: [listId] } : {}),
    };

    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(contactPayload),
    });

    if (!contactRes.ok) {
      const err: unknown = await contactRes.json();
      console.error("Erreur Brevo contacts:", err);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement du contact." },
        { status: 500 }
      );
    }

    // 2. Envoyer l'email de confirmation
    const senderEmail =
      process.env.BREVO_SENDER_EMAIL ?? "contact@generationdiaspora.com";
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
            EVENT_NAME: "Ciné Talk — Mon Oriental",
            EVENT_DATE: "Samedi 10 Mai 2026 à 15h",
            EVENT_LIEU: "Paris [LIEU À COMPLÉTER]",
          },
        }
      : {
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name: `${prenom} ${nom}` }],
          subject: "✅ Inscription confirmée — Ciné Talk Mon Oriental",
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #7c2d12, #b45309, #f97316); color: white; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 900; letter-spacing: 2px;">CINÉ TALK</h1>
                <p style="margin: 0; font-size: 16px; opacity: 0.9; letter-spacing: 4px;">MON ORIENTAL</p>
              </div>
              <div style="background: #fafaf9; padding: 32px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
                <p style="font-size: 16px; color: #374151;">Bonjour <strong>${prenom}</strong>,</p>
                <p style="color: #374151;">Votre inscription au <strong>Ciné Talk — Mon Oriental</strong> est confirmée !</p>
                <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin: 20px 0;">
                  <p style="margin: 0 0 8px; color: #9a3412; font-weight: 600;">📅 Samedi 10 Mai 2026 à 15h00</p>
                  <p style="margin: 0 0 8px; color: #9a3412;">📍 Paris — Lieu à préciser</p>
                  <p style="margin: 0; color: #9a3412;">🎬 Projection &amp; Débat · En présence du réalisateur Khalid Zaouche</p>
                </div>
                <p style="color: #6b7280; font-size: 14px;">
                  Conservez cet email. Nous vous enverrons les informations pratiques (adresse exacte, accès)
                  dès qu'elles seront disponibles.
                </p>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
                <p style="color: #9ca3af; font-size: 12px; text-align: center;">
                  Association Génération Diaspora · <a href="https://www.generationdiaspora.com" style="color: #004e35;">www.generationdiaspora.com</a>
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
      // pour ne pas bloquer l'inscrit
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
