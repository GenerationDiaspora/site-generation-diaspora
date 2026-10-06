"use client";

import { useState, useEffect, type FormEvent } from "react";
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormStatus = "idle" | "loading" | "success" | "error";

// 21 octobre 2026 21h00–22h00 Paris (UTC+2 → 19h00–20h00 UTC)
const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: "Webinaire : Entendre le silence de la jeunesse dans les urnes",
    dates: "20261021T190000Z/20261021T200000Z",
    details:
      "Lien Google Meet : https://meet.google.com/rfh-nmbz-end\n" +
      "Ou composez le : +33 1 87 40 30 92 Code : 730706396\n" +
      "Plus de numéros : https://tel.meet/rfh-nmbz-end?pin=1659463244666",
    location: "https://meet.google.com/rfh-nmbz-end",
  }).toString();

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadedAt, setLoadedAt] = useState(0);

  useEffect(() => { setLoadedAt(Date.now()); }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const honeypot = (e.currentTarget.elements.namedItem("_hp") as HTMLInputElement)?.value;

    try {
      const res = await fetch("/api/inscription-webinaire-silence-urnes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _hp: honeypot, _t: loadedAt }),
      });

      const data: { success?: boolean; error?: string } = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <p className="text-3xl mb-3">✅</p>
        <p className="text-green-800 font-bold text-lg mb-2">
          Inscription confirmée !
        </p>
        <p className="text-green-700 text-sm mb-5">
          Vous allez recevoir l&apos;invitation par email, avec le lien Google Meet.
        </p>
        <a
          href={GOOGLE_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-5"
        >
          <CalendarPlus className="w-4 h-4" />
          Ajouter à Google Agenda
        </a>
        <p className="text-green-600 text-xs bg-green-100 rounded-lg px-4 py-2">
          📬 Si vous ne recevez pas d&apos;email dans quelques minutes, vérifiez votre dossier <strong>Spam</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        S&apos;inscrire
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Gratuit · L&apos;invitation Google Agenda vous sera envoyée par email
      </p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
          <label htmlFor="_hp">Ne pas remplir</label>
          <input type="text" id="_hp" name="_hp" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            disabled={status === "loading"}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? "Inscription en cours…" : "S'inscrire"}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Vos données sont utilisées uniquement dans le cadre de cet événement.
        </p>
      </form>
    </div>
  );
}
