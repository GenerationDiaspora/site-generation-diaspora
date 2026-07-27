"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslate } from "@/lib/i18n";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  pays: string;
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
  pays: "",
  source: "",
  contactFutur: "",
  newsletter: false,
};

// Valeur envoyée à l'API (stable, indépendante de la langue d'affichage — cohérence des données CRM)
const SOURCE_OPTIONS = [
  { key: "instagram", value: "Instagram" },
  { key: "facebook", value: "Facebook" },
  { key: "linkedin", value: "LinkedIn" },
  { key: "referral", value: "Recommandation d'un proche" },
  { key: "newsletter", value: "Newsletter Génération Diaspora" },
  { key: "search", value: "Recherche sur Internet" },
  { key: "other", value: "Autre" },
] as const;

export default function RegistrationForm() {
  const { t } = useTranslate();
  const f = "webinaireMRE.registrationForm";
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadedAt, setLoadedAt] = useState(0);

  useEffect(() => { setLoadedAt(Date.now()); }, []);

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

    const honeypot = (e.currentTarget.elements.namedItem("_hp") as HTMLInputElement)?.value;

    try {
      const res = await fetch("/api/inscription-webinaire-mre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _hp: honeypot, _t: loadedAt }),
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
        err instanceof Error ? err.message : t(`${f}.genericError`)
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <p className="text-3xl mb-3">✅</p>
        <p className="text-green-800 font-bold text-lg mb-2">
          {t(`${f}.successTitle`)}
        </p>
        <p className="text-green-700 text-sm mb-3">
          {t(`${f}.successText`)}
        </p>
        <p className="text-green-600 text-xs bg-green-100 rounded-lg px-4 py-2">
          📬 {t(`${f}.successSpam`)}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {t(`${f}.title`)}
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        {t(`${f}.subtitle`)}
      </p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
          <label htmlFor="_hp">{t(`${f}.honeypotLabel`)}</label>
          <input type="text" id="_hp" name="_hp" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Prénom / Nom */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="prenom" className="text-sm font-medium text-gray-700">
              {t(`${f}.firstNameLabel`)} <span className="text-red-500">*</span>
            </label>
            <Input
              id="prenom"
              name="prenom"
              type="text"
              required
              autoComplete="given-name"
              value={form.prenom}
              onChange={handleChange}
              placeholder={t(`${f}.firstNamePlaceholder`)}
              disabled={status === "loading"}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="nom" className="text-sm font-medium text-gray-700">
              {t(`${f}.lastNameLabel`)} <span className="text-red-500">*</span>
            </label>
            <Input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="family-name"
              value={form.nom}
              onChange={handleChange}
              placeholder={t(`${f}.lastNamePlaceholder`)}
              disabled={status === "loading"}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            {t(`${f}.emailLabel`)} <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t(`${f}.emailPlaceholder`)}
            disabled={status === "loading"}
          />
        </div>

        {/* Téléphone / Pays */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="telephone" className="text-sm font-medium text-gray-700">
              {t(`${f}.phoneLabel`)}
            </label>
            <Input
              id="telephone"
              name="telephone"
              type="tel"
              autoComplete="tel"
              value={form.telephone}
              onChange={handleChange}
              placeholder={t(`${f}.phonePlaceholder`)}
              disabled={status === "loading"}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="pays" className="text-sm font-medium text-gray-700">
              {t(`${f}.countryLabel`)}
            </label>
            <Input
              id="pays"
              name="pays"
              type="text"
              value={form.pays}
              onChange={handleChange}
              placeholder={t(`${f}.countryPlaceholder`)}
              disabled={status === "loading"}
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-1.5">
          <label htmlFor="source" className="text-sm font-medium text-gray-700">
            {t(`${f}.sourceLabel`)}
          </label>
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            disabled={status === "loading"}
            className="flex h-10 w-full rounded-lg border border-gray-300 bg-beige px-3 py-2 text-sm transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
          >
            <option value="">{t(`${f}.sourceSelectPlaceholder`)}</option>
            {SOURCE_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.value}>{t(`${f}.sourceOptions.${opt.key}`)}</option>
            ))}
          </select>
        </div>

        {/* Contact futur */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            {t(`${f}.contactFutureLabel`)}
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
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
              />
              <span className="text-sm text-gray-700">{t(`${f}.yes`)}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactFutur"
                value="non"
                checked={form.contactFutur === "non"}
                onChange={handleChange}
                disabled={status === "loading"}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
              />
              <span className="text-sm text-gray-700">{t(`${f}.no`)}</span>
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
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            {t(`${f}.consentLabel`)}
          </span>
        </label>

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full bg-red-700 hover:bg-red-800"
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
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t(`${f}.submitLoading`)}
            </span>
          ) : (
            t(`${f}.submitIdle`)
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          {t(`${f}.footerNote`)}
        </p>
      </form>
    </div>
  );
}
