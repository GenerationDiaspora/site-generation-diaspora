"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

interface Props {
  email: string;
  signature: string;
}

export default function UnsubscribeConfirm({ email, signature }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleUnsubscribe() {
    setStatus("loading");
    try {
      const res = await fetch("/api/desabonnement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ e: email, s: signature }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <h1 className="text-green-800 font-bold text-2xl mb-2">Vous êtes désabonné(e) ✅</h1>
        <p className="text-green-700 mb-5">
          {email} ne recevra plus d&apos;emails de Génération Diaspora.
        </p>
        <Link href="/" className="text-primary-600 font-semibold hover:text-primary-700">
          Retour au site
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-xl mx-auto">
      <h1 className="text-gray-900 font-bold text-2xl mb-2">Se désabonner</h1>
      <p className="text-gray-600 mb-6">
        Vous ne recevrez plus d&apos;emails de Génération Diaspora à l&apos;adresse{" "}
        <strong>{email}</strong>.
      </p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4 text-red-700 text-sm">
          Le désabonnement n&apos;a pas pu être effectué. Réessayez, ou écrivez-nous à{" "}
          <a href="mailto:contact@generationdiaspora.com" className="underline">
            contact@generationdiaspora.com
          </a>
          .
        </div>
      )}

      <button
        type="button"
        onClick={handleUnsubscribe}
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Désabonnement en cours…" : "Confirmer le désabonnement"}
      </button>
    </div>
  );
}
