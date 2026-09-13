"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const SITUATIONS = [
  "Étudiant(e)",
  "Salarié(e)",
  "Entrepreneur(e)",
  "Indépendant(e) / freelance",
  "En recherche d'emploi",
  "Chercheur(se) / universitaire",
  "Responsable associatif",
  "Autre",
];

interface FormData {
  nomComplet: string;
  email: string;
  anneeNaissance: string;
  villeResidence: string;
  nationalite: string;
  villeOrigineMaroc: string;
  telephone: string;
  linkedin: string;
  reseauxSociaux: string;
  situation: string;
  situationAutre: string;
  formation: string;
  profession: string;
}

const EMPTY: FormData = {
  nomComplet: "",
  email: "",
  anneeNaissance: "",
  villeResidence: "",
  nationalite: "",
  villeOrigineMaroc: "",
  telephone: "",
  linkedin: "",
  reseauxSociaux: "",
  situation: "",
  situationAutre: "",
  formation: "",
  profession: "",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow text-sm";

export default function CandidatureForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      ...form,
      situation: form.situation === "Autre" ? `Autre : ${form.situationAutre}` : form.situation,
    };

    try {
      const res = await fetch("/api/recrutement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle className="w-16 h-16 text-primary-600" />
        <h3 className="text-2xl font-bold text-gray-900">Candidature envoyée !</h3>
        <p className="text-gray-600 max-w-md">
          Merci pour ton intérêt pour Génération Diaspora. Nous reviendrons vers toi très prochainement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-primary-600 underline text-sm hover:text-primary-700"
        >
          Envoyer une autre candidature
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Identité */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Prénom et nom" required>
          <input
            type="text"
            required
            placeholder="Ex : Youness Drissi"
            value={form.nomComplet}
            onChange={set("nomComplet")}
            className={inputCls}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            placeholder="ton@email.com"
            value={form.email}
            onChange={set("email")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Année de naissance" required>
          <input
            type="number"
            required
            min={1950}
            max={2010}
            placeholder="Ex : 1995"
            value={form.anneeNaissance}
            onChange={set("anneeNaissance")}
            className={inputCls}
          />
        </Field>
        <Field label="Numéro de téléphone" required>
          <input
            type="tel"
            required
            placeholder="+33 6 12 34 56 78"
            value={form.telephone}
            onChange={set("telephone")}
            className={inputCls}
          />
        </Field>
      </div>

      {/* Localisation */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Ville et pays de résidence" required>
          <input
            type="text"
            required
            placeholder="Ex : Paris, France"
            value={form.villeResidence}
            onChange={set("villeResidence")}
            className={inputCls}
          />
        </Field>
        <Field label="Ville d'origine au Maroc" required>
          <input
            type="text"
            required
            placeholder="Ex : Casablanca"
            value={form.villeOrigineMaroc}
            onChange={set("villeOrigineMaroc")}
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Nationalité(s)" required>
        <input
          type="text"
          required
          placeholder="Ex : Franco-marocaine"
          value={form.nationalite}
          onChange={set("nationalite")}
          className={inputCls}
        />
      </Field>

      {/* Situation */}
      <Field label="Situation actuelle" required>
        <div className="grid sm:grid-cols-2 gap-2">
          {SITUATIONS.map((s) => (
            <label key={s} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="situation"
                value={s}
                checked={form.situation === s}
                onChange={set("situation")}
                required
                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-400"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">{s}</span>
            </label>
          ))}
        </div>
        {form.situation === "Autre" && (
          <input
            type="text"
            required
            placeholder="Précise ta situation…"
            value={form.situationAutre}
            onChange={set("situationAutre")}
            className={`${inputCls} mt-2`}
          />
        )}
      </Field>

      {/* Parcours */}
      <Field label="Études / formation principale">
        <input
          type="text"
          placeholder="Ex : Master Data Science — École Polytechnique"
          value={form.formation}
          onChange={set("formation")}
          className={inputCls}
        />
      </Field>

      <Field label="Profession ou domaine d'activité actuel">
        <input
          type="text"
          placeholder="Ex : Data Engineer chez …"
          value={form.profession}
          onChange={set("profession")}
          className={inputCls}
        />
      </Field>

      {/* Réseaux */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="LinkedIn">
          <input
            type="url"
            placeholder="https://linkedin.com/in/…"
            value={form.linkedin}
            onChange={set("linkedin")}
            className={inputCls}
          />
        </Field>
        <Field label="Instagram ou autre réseau social">
          <input
            type="text"
            placeholder="@pseudo ou lien"
            value={form.reseauxSociaux}
            onChange={set("reseauxSociaux")}
            className={inputCls}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer ma candidature"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Les champs marqués <span className="text-red-500">*</span> sont obligatoires. Tes données sont utilisées
        uniquement dans le cadre de ta candidature à Génération Diaspora.
      </p>
    </form>
  );
}
