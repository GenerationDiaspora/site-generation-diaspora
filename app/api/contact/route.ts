import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires" },
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

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: `${name} via Génération Diaspora`,
          email: "contact@generationdiaspora.com",
        },
        to: [
          {
            email: "contact@generationdiaspora.com",
            name: "Génération Diaspora",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Contact] Message de ${name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #004e35; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0;">Nouveau message — Génération Diaspora</h2>
            </div>
            <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
              <p><strong>Message :</strong></p>
              <p style="white-space: pre-wrap; background: white; padding: 16px; border-radius: 6px; border: 1px solid #e0e0e0;">${message}</p>
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
              <p style="color: #888; font-size: 12px;">
                Pour répondre, cliquez sur "Répondre" — la réponse partira directement à ${email}.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Erreur Brevo:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message envoyé" }, { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
