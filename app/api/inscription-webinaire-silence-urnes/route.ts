import { NextResponse } from "next/server";
import { EMAIL_REGEX, registerAttendee } from "@/lib/webinaire-silence-urnes";

const MIN_FILL_MS = 3000;

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

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Merci de renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    const result = await registerAttendee(email);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
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
