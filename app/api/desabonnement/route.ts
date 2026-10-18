import { NextResponse } from "next/server";
import { EMAIL_REGEX } from "@/lib/webinaire-silence-urnes";
import { unsubscribeContact, verifyUnsubscribeSignature } from "@/lib/desabonnement";

// Désabonnement en un clic.
// - Page /desabonnement : POST JSON { e, s }
// - Gmail / Outlook (en-tête List-Unsubscribe-Post, RFC 8058) : POST /api/desabonnement?e=…&s=…
// Jamais en GET, pour que les antivirus qui pré-ouvrent les liens ne désabonnent personne.
export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    let e = url.searchParams.get("e") ?? "";
    let s = url.searchParams.get("s") ?? "";

    if (request.headers.get("content-type")?.includes("application/json")) {
      const body = (await request.json()) as { e?: string; s?: string };
      e = body.e ?? e;
      s = body.s ?? s;
    }

    const email = e.trim();
    if (!email || !EMAIL_REGEX.test(email) || !s || !verifyUnsubscribeSignature(email, s)) {
      return NextResponse.json({ error: "Lien de désabonnement invalide." }, { status: 400 });
    }

    if (!(await unsubscribeContact(email))) {
      return NextResponse.json(
        { error: "Erreur lors du désabonnement. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API desabonnement:", error);
    return NextResponse.json(
      { error: "Erreur lors du désabonnement. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
