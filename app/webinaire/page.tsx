import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Monitor, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Webinaire — Diaspora Marocaine : Entre perception, contribution et avenir commun",
  description:
    "Génération Diaspora organise un live streaming le jeudi 26 mars 2026 à 20h30 autour de la jeunesse MRE. Inscription gratuite.",
};

const INSCRIPTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfxDgkmf8NjtiCbnShcDhTa8QHvktCRRKN7LAAr0xyxsCtRA/viewform";

const intervenants = [
  {
    initials: "MH",
    name: "Mehdi Heurteloup",
    role: "Spécialiste des médias digitaux et entrepreneur",
    color: "from-red-600 to-red-800",
  },
  {
    initials: "AG",
    name: "Ahmed Ghayat",
    role: "Auteur — Acteur associatif et culturel",
    color: "from-primary-600 to-primary-800",
  },
];

const themes = ["Perception", "Contribution", "Avenir Commun"];

const infos = [
  { icon: Calendar, label: "Jeudi 26 mars 2026" },
  { icon: Clock, label: "20h30 — heure de Paris" },
  { icon: Monitor, label: "Live Streaming en ligne" },
];

export default function WebinairePage() {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div>
                {/* Badge LIVE */}
                <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  LIVE · 26 Mars 2026
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Diaspora Marocaine
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4 italic">
                  Entre perception, contribution et avenir commun
                </p>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-red-500 pl-4">
                  La vision royale vise à faire de la diaspora un acteur clé du
                  nouveau modèle de développement du Royaume
                </p>

                <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-300">
                  {infos.map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-red-400" />
                      {label}
                    </span>
                  ))}
                </div>

                <a
                  href={INSCRIPTION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-red-900/30"
                >
                  Je m&apos;inscris gratuitement
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Affiche */}
              <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 bg-slate-800">
                <Image
                  src="/images/events/webinaire-diaspora-mars-2026/affiche.jpeg"
                  alt="Affiche du webinaire Diaspora Marocaine"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
            {themes.map((theme) => (
              <span
                key={theme}
                className="bg-white border-2 border-primary-200 text-primary-700 font-bold px-6 py-3 rounded-full text-lg shadow-sm"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Jeunes MRE au rendez-vous…
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Beaucoup d&apos;articles de presse, d&apos;analyses, de débats… ont pour
                sujet la Diaspora Marocaine, notamment sa jeunesse.{" "}
                <strong className="text-gray-800">
                  Et si nous écoutions ces jeunes !?
                </strong>
              </p>
              <p>
                Le tissu associatif au sein de la jeunesse MRE est vivace et
                actif : la jeunesse s&apos;exprime, agit, innove, prend en mains son
                présent et avenir…
              </p>
              <p>
                Les jeunes de Génération Diaspora — qui regroupe des jeunes de
                différentes régions de France — y consacrent un Webinaire, afin
                de faire le point et tracer des perspectives.
              </p>
              <p>
                La parole y circulera, les idées s&apos;y exprimeront autour de ces
                thèmes :{" "}
                <strong className="text-primary-700">
                  Perception, Contribution, Avenir Commun.
                </strong>
              </p>
              <p className="font-semibold text-gray-800">
                Rendez-vous le Jeudi 26 Mars à 20h30, autour de 2 invités et des
                nombreuses questions que vous souhaiterez poser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intervenants */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Les intervenants
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {intervenants.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}
                  >
                    <span className="text-white font-bold text-2xl">
                      {p.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {p.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section inscription */}
      <section id="inscription" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Réservez votre place</h2>
            <p className="text-gray-400 text-lg mb-8">
              Participation gratuite — Accès en ligne
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-sm">
              {[
                { icon: Calendar, label: "26 mars 2026" },
                { icon: Clock, label: "20h30 Paris" },
                { icon: Monitor, label: "Live en ligne" },
                { icon: ArrowRight, label: "Accès gratuit" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white/5 rounded-xl p-3 flex flex-col items-center gap-2"
                >
                  <Icon className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">{label}</span>
                </div>
              ))}
            </div>
            <a
              href={INSCRIPTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg shadow-red-900/40"
            >
              S&apos;inscrire maintenant
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          {/* Formulaire intégré */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdfxDgkmf8NjtiCbnShcDhTa8QHvktCRRKN7LAAr0xyxsCtRA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="bg-white rounded-2xl"
            >
              Chargement…
            </iframe>
          </div>
        </div>
      </section>

      {/* Organisateur */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src="/logo.png"
                alt="Logo Génération Diaspora"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Webinaire organisé par l&apos;association{" "}
              <strong className="text-gray-900">Génération Diaspora</strong> —
              dédiée à l&apos;épanouissement de la jeunesse marocaine en France.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
