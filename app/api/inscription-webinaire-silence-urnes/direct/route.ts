import { NextResponse } from "next/server";
import {
  EMAIL_REGEX,
  registerAttendee,
  verifyEmailSignature,
} from "@/lib/webinaire-silence-urnes";

// Inscription en un clic depuis le mail d'invitation (lien signé).
// Appelé en POST par la page /news/webinaire-silence-urnes/merci, et non en GET,
// pour que les antivirus qui pré-ouvrent les liens des emails n'inscrivent personne.
export async function POST(request: Request) {
  try {
    const { e, s } = (await request.json()) as { e?: string; s?: string };
    const email = (e ?? "").trim();

    if (!email || !EMAIL_REGEX.test(email) || !s || !verifyEmailSignature(email, s)) {
      return NextResponse.json({ error: "Lien d'inscription invalide." }, { status: 400 });
    }

    const result = await registerAttendee(email);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API inscription-webinaire-silence-urnes/direct:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
