"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Heart, Globe } from "lucide-react";

export default function RejoindreGDPage() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    ville: "",
    telephone: "",
    competences: "",
    motivation: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/recrutement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rejoindre Génération Diaspora</h1>
            <p className="text-xl opacity-90">
              Tu es jeune, engagé(e) et fier(e) de tes racines ? Rejoins un collectif qui agit pour la jeunesse marocaine en France et dans le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi rejoindre */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Une communauté engagée</h3>
              <p className="text-gray-600 text-sm">Rejoins des jeunes passionnés qui partagent tes valeurs et ton envie d&apos;agir.</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Des projets concrets</h3>
              <p className="text-gray-600 text-sm">Participe à des événements, webinaires et initiatives qui ont un impact réel.</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Un réseau international</h3>
              <p className="text-gray-600 text-sm">Connecte-toi avec la diaspora marocaine en France, au Maroc et dans le monde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Ta candidature</h2>
            <p className="text-gray-500 text-center mb-8 text-sm">2 minutes, et tu fais partie de l&apos;aventure.</p>

            {status === "success" ? (
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-14 h-14 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Candidature envoyée !</h3>
                <p className="text-gray-600 mb-6">
                  Merci pour ton intérêt. Nous reviendrons vers toi très prochainement.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Retour à l&apos;accueil <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={form.prenom}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="ton@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                    <input
                      type="text"
                      name="ville"
                      required
                      value={form.ville}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Paris, Lyon…"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="+33 6 …"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Domaines d&apos;intérêt</label>
                  <select
                    name="competences"
                    value={form.competences}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Choisir (optionnel)</option>
                    <option value="Communication & Réseaux sociaux">Communication & Réseaux sociaux</option>
                    <option value="Événementiel & Logistique">Événementiel & Logistique</option>
                    <option value="Culture & Médias">Culture & Médias</option>
                    <option value="Sport">Sport</option>
                    <option value="Humanitaire & Social">Humanitaire & Social</option>
                    <option value="Tech & Numérique">Tech & Numérique</option>
                    <option value="Finance & Administration">Finance & Administration</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pourquoi veux-tu nous rejoindre ?</label>
                  <textarea
                    name="motivation"
                    value={form.motivation}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="En quelques mots…"
                  />
                  <p className="text-xs text-gray-400 mt-1 text-right">{form.motivation.length}/500</p>
                </div>

                {status === "error" && (
                  <p className="text-secondary-600 text-sm text-center">
                    Une erreur est survenue. Réessaie ou écris-nous à{" "}
                    <a href="mailto:contact@generationdiaspora.com" className="underline">
                      contact@generationdiaspora.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Envoi en cours…" : (
                    <>Envoyer ma candidature <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Tes données ne seront pas partagées. Nous te répondrons dans les meilleurs délais.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
