import { createHmac, timingSafeEqual } from "crypto";

// Lien de désabonnement des emails Génération Diaspora : signature HMAC de l'email.
// Le préfixe sépare cette signature de celle des liens d'inscription en un clic.
export function signUnsubscribe(email: string): string | null {
  const secret = process.env.INVITE_SIGNING_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret)
    .update(`desabonnement:${email.trim().toLowerCase()}`)
    .digest("hex")
    .slice(0, 32);
}

export function verifyUnsubscribeSignature(email: string, signature: string): boolean {
  const expected = signUnsubscribe(email);
  if (!expected || signature.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

// Bloque l'adresse dans Brevo : elle ne recevra plus aucun email de campagne.
export async function unsubscribeContact(email: string): Promise<boolean> {
  const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
  if (!apiKey) {
    console.error("Clé Brevo manquante");
    return false;
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": apiKey },
    body: JSON.stringify({ email, updateEnabled: true, emailBlacklisted: true }),
  });

  if (!res.ok) {
    console.error("Erreur Brevo désabonnement:", await res.json());
    return false;
  }
  return true;
}
