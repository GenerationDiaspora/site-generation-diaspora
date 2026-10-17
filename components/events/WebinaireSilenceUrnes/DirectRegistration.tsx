"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CalendarPlus } from "lucide-react";

type Status = "loading" | "success" | "error";

interface Props {
  email: string;
  signature: string;
  googleCalendarUrl: string;
}

export default function DirectRegistration({ email, signature, googleCalendarUrl }: Props) {
  const [status, setStatus] = useState<Status>("loading");
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    fetch("/api/inscription-webinaire-silence-urnes/direct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ e: email, s: signature }),
    })
      .then((res) => setStatus(res.ok ? "success" : "error"))
      .catch(() => setStatus("error"));
  }, [email, signature]);

  if (status === "loading") {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 font-semibold">Inscription en cours…</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
        <p className="text-red-800 font-bold text-lg mb-2">
          Nous n&apos;avons pas pu finaliser votre inscription.
        </p>
        <p className="text-red-700 text-sm mb-5">
          Inscrivez-vous en quelques secondes avec votre adresse email :
        </p>
        <Link
          href="/news/webinaire-silence-urnes#inscription"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          S&apos;inscrire
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
      <h1 className="text-green-800 font-bold text-2xl md:text-3xl mb-2">
        Merci, vous êtes inscrit(e) ✅
      </h1>
      <p className="text-green-700 mb-5">
        Vous allez recevoir l&apos;invitation par email ({email}), avec le lien Google Meet.
      </p>
      <a
        href={googleCalendarUrl}
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
