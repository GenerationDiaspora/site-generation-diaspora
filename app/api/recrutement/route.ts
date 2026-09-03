import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prenom, nom, email, ville, telephone, competences, motivation } = body;

    if (!prenom || !nom || !email || !email.includes("@") || !ville) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (apiKey) {
      // Créer/mettre à jour le contact Brevo avec ses infos
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          attributes: {
            PRENOM: prenom,
            NOM: nom,
            VILLE: ville,
            SMS: telephone || "",
          },
          listIds: [parseInt(process.env.BREVO_RECRUTEMENT_LIST_ID || "14")],
          updateEnabled: true,
        }),
      });

      // Envoyer un email de notification à l'association
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: "Génération Diaspora", email: "contact@generationdiaspora.com" },
          to: [{ email: "contact@generationdiaspora.com", name: "Génération Diaspora" }],
          subject: `Nouvelle candidature — ${prenom} ${nom}`,
          htmlContent: `
            <h2>Nouvelle candidature reçue</h2>
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Ville :</strong> ${ville}</p>
            ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ""}
            ${competences ? `<p><strong>Compétences / Domaines :</strong> ${competences}</p>` : ""}
            ${motivation ? `<p><strong>Motivation :</strong> ${motivation}</p>` : ""}
          `,
        }),
      });
    }

    return NextResponse.json({ message: "Candidature reçue" }, { status: 200 });
  } catch (error) {
    console.error("Erreur recrutement:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
