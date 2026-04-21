"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  source: string;
  contactFutur: string;
  newsletter: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormData = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  ville: "",
  source: "",
  contactFutur: "",
  newsletter: false,
};

const SOURCE_OPTIONS = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Recommandation d'un proche",
  "Newsletter Génération Diaspora",
  "Recherche sur Internet",
  "Autre",
];

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inscription-cine-talk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { success?: boolean; error?: string } = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      setForm(initialForm);
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
        <p className="text-2xl mb-2">✅</p>
        <p className="text-green-800 font-semibold text-lg mb-1">
          Inscription confirmée !
        </p>
        <p className="text-green-700 text-sm">
          Un email de confirmation vous a été envoyé.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Réserver ma place
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Inscription obligatoire — places très limitées
      </p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Prénom / Nom */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="prenom" className="text-sm font-medium text-gray-700">
              Prénom <span className="text-secondary-500">*</span>
            </label>
            <Input
              id="prenom"
              name="prenom"
              type="text"
              required
              autoComplete="given-name"
              value={form.prenom}
              onChange={handleChange}
              placeholder="Votre prénom"
              disabled={status === "loading"}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="nom" className="text-sm font-medium text-gray-700">
              Nom <span className="text-secondary-500">*</span>
            </label>
            <Input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="family-name"
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              disabled={status === "loading"}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-secondary-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            disabled={status === "loading"}
          />
        </div>

        {/* Téléphone / Ville */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="telephone" className="text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <Input
              id="telephone"
              name="telephone"
              type="tel"
              autoComplete="tel"
              value={form.telephone}
              onChange={handleChange}
              placeholder="+33 6 …"
              disabled={status === "loading"}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ville" className="text-sm font-medium text-gray-700">
              Ville de résidence
            </label>
            <Input
              id="ville"
              name="ville"
              type="text"
              autoComplete="address-level2"
              value={form.ville}
              onChange={handleChange}
              placeholder="Paris, Lyon…"
              disabled={status === "loading"}
            />
          </div>
        </div>

        {/* Comment avez-vous entendu parler de cet événement ? */}
        <div className="space-y-1.5">
          <label htmlFor="source" className="text-sm font-medium text-gray-700">
            Comment avez-vous entendu parler de cet événement ?
          </label>
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            disabled={status === "loading"}
            className="flex h-10 w-full rounded-lg border border-gray-300 bg-beige px-3 py-2 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
          >
            <option value="">— Sélectionner —</option>
            {SOURCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Voulez-vous être contacté pour les futurs événements ? */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Souhaitez-vous être contacté(e) par Génération Diaspora pour les futurs événements et activités ?
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactFutur"
                value="oui"
                checked={form.contactFutur === "oui"}
                onChange={handleChange}
                disabled={status === "loading"}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-sm text-gray-700">Oui</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactFutur"
                value="non"
                checked={form.contactFutur === "non"}
                onChange={handleChange}
                disabled={status === "loading"}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-sm text-gray-700">Non</span>
            </label>
          </div>
        </div>

        {/* RGPD */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            checked={form.newsletter}
            onChange={handleChange}
            disabled={status === "loading"}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            J&apos;accepte de recevoir les communications de Génération Diaspora
          </span>
        </label>

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Inscription en cours…
            </span>
          ) : (
            "Confirmer mon inscription"
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Vos données sont utilisées uniquement dans le cadre de cet événement.
        </p>
      </form>
    </div>
  );
}
