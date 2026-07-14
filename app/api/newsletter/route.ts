import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Intégration avec Brevo (Sendinblue)
    if (process.env.NEXT_PUBLIC_BREVO_API_KEY) {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          listIds: [parseInt(process.env.BREVO_LIST_ID || "1")],
          updateEnabled: true,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Erreur Brevo:", error);
        throw new Error("Erreur lors de l'inscription");
      }
    }

    // Intégration avec Mailchimp (alternative)
    if (process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY) {
      const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
      const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

      const response = await fetch(
        `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`,
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Erreur Mailchimp:", error);
        throw new Error("Erreur lors de l'inscription");
      }
    }

    return NextResponse.json(
      { message: "Inscription réussie" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}

