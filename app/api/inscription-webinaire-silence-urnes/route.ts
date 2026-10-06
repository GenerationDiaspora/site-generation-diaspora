import { NextResponse } from "next/server";

const MIN_FILL_MS = 3000;

const EVENT_TITLE = "Webinaire : Entendre le silence de la jeunesse dans les urnes";
const MEET_URL = "https://meet.google.com/rfh-nmbz-end";
const MEET_PHONE = "+33 1 87 40 30 92";
const MEET_PIN = "730706396";
const MEET_MORE_NUMBERS = "https://tel.meet/rfh-nmbz-end?pin=1659463244666";

// 21 octobre 2026 21h00–22h00 Paris (UTC+2 → 19h00–20h00 UTC)
const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: "20261021T190000Z/20261021T200000Z",
    details:
      `Lien Google Meet : ${MEET_URL}\n` +
      `Ou composez le : ${MEET_PHONE} Code : ${MEET_PIN}\n` +
      `Plus de numéros : ${MEET_MORE_NUMBERS}`,
    location: MEET_URL,
  }).toString();

interface RegistrationBody {
  email: string;
  _hp?: string;
  _t?: number;
}

export async function POST(request: Request) {
  try {
    const body: RegistrationBody = await request.json();
    const { email, _hp, _t } = body;

    // Anti-bot
    if (_hp && _hp.trim() !== "") {
      console.warn("Bot détecté (honeypot)");
      return NextResponse.json({ success: true }, { status: 200 });
    }
    if (_t && typeof _t === "number" && Date.now() - _t < MIN_FILL_MS) {
      console.warn("Bot détecté (timing)");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Merci de renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (!apiKey) {
      console.error("Clé Brevo manquante");
      return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 });
    }

    const listId = parseInt(process.env.BREVO_LIST_WEBINAIRE_SILENCE_URNES_ID ?? "13", 10);

    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: {
          EVENEMENT: "Webinaire — Silence dans les urnes (21 octobre 2026)",
        },
        ...(listId > 0 ? { listIds: [listId] } : {}),
      }),
    });

    if (!contactRes.ok) {
      console.error("Erreur Brevo contacts:", await contactRes.json());
      return NextResponse.json({ error: "Erreur lors de l'enregistrement." }, { status: 500 });
    }

    // Email de confirmation
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "contact@generationdiaspora.com";
    const senderName = process.env.BREVO_SENDER_NAME ?? "Génération Diaspora";

    // ICS calendar invite — 21 octobre 2026 21h00–22h00 Paris (UTC+2 → 19h00–20h00 UTC)
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Generation Diaspora//Webinaire Silence Urnes//FR",
      "CALSCALE:GREGORIAN",
      "METHOD:REQUEST",
      "BEGIN:VEVENT",
      "UID:webinaire-silence-urnes-20261021@generationdiaspora.com",
      "DTSTART:20261021T190000Z",
      "DTEND:20261021T200000Z",
      "DTSTAMP:20261006T000000Z",
      `ORGANIZER;CN=Génération Diaspora:mailto:${senderEmail}`,
      `ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${email}`,
      `SUMMARY:${EVENT_TITLE}`,
      `DESCRIPTION:Lien Google Meet : ${MEET_URL}\\n` +
        `Ou composez le : ${MEET_PHONE} Code : ${MEET_PIN}\\n` +
        `Plus de numéros : ${MEET_MORE_NUMBERS}`,
      `LOCATION:${MEET_URL}`,
      `URL:${MEET_URL}`,
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const icsBase64 = Buffer.from(icsContent, "utf-8").toString("base64");

    const emailPayload = {
      sender: { name: senderName, email: senderEmail },
      to: [{ email }],
      subject: "✅ Inscription confirmée — Webinaire : Entendre le silence de la jeunesse dans les urnes",
      attachment: [
        {
          content: icsBase64,
          name: "webinaire-silence-urnes.ics",
        },
      ],
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0B5D3B, #14532d, #7f1d1d); color: white; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 4px; opacity: 0.8; text-transform: uppercase;">Génération Diaspora</p>
            <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;">Entendre le silence de la jeunesse dans les urnes</h1>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">Webinaire · Mercredi 21 octobre 2026 · 21h00 – 22h00 (heure de Paris) · 19h00 – 20h00 (heure de Rabat)</p>
          </div>
          <div style="background: #fafaf9; padding: 32px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <p style="font-size: 16px; color: #374151;">Bonjour,</p>
            <p style="color: #374151;">Votre inscription au webinaire <strong>Entendre le silence de la jeunesse dans les urnes</strong> est confirmée ! Voici toutes les informations pour rejoindre la session.</p>

            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <p style="margin: 0 0 12px; color: #14532d; font-weight: 700; font-size: 15px;">📅 Mercredi 21 octobre 2026 · 21h00 – 22h00 (heure de Paris) · 19h00 – 20h00 (heure de Rabat)</p>

              <p style="margin: 0 0 6px; color: #0B5D3B; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Informations de connexion Google Meet</p>

              <p style="margin: 0 0 10px; color: #374151;">
                📹 <strong>Lien vidéo :</strong><br/>
                <a href="${MEET_URL}" style="color: #0B5D3B; font-weight: 700; font-size: 15px;">${MEET_URL}</a>
              </p>

              <p style="margin: 0 0 10px; color: #374151;">
                📞 <strong>Par téléphone :</strong><br/>
                ${MEET_PHONE} — Code : <strong>${MEET_PIN}</strong>
              </p>

              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Autres numéros : <a href="${MEET_MORE_NUMBERS}" style="color: #0B5D3B;">tel.meet/rfh-nmbz-end</a>
              </p>
            </div>

            <div style="text-align: center; margin: 28px 0 8px;">
              <a href="${GOOGLE_CALENDAR_URL}" style="display: inline-block; background: #0B5D3B; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 16px; padding: 14px 28px; border-radius: 8px;">📅 Oui, j'ajoute à mon agenda Google</a>
            </div>
            <p style="margin: 0 0 16px; color: #6b7280; font-size: 12px; text-align: center;">
              Outlook, Apple Calendar… : ouvrez le fichier <strong>.ics</strong> joint à cet email.
            </p>

            <p style="color: #6b7280; font-size: 13px; margin-top: 16px;">Avec Mehdi Alaoui et Assad Mohamed.</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              Association Génération Diaspora ·
              <a href="https://www.generationdiaspora.com" style="color: #0B5D3B;">www.generationdiaspora.com</a>
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
    console.error("Erreur API inscription-webinaire-silence-urnes:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
