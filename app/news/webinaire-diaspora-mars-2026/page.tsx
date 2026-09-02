import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Monitor, ArrowLeft, ExternalLink } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Fédérer notre jeunesse — Génération Diaspora",
  description:
    "Le 26 mars 2026, Génération Diaspora organisait son tout premier webinaire en direct. Pendant plus de deux heures, intervenants et participants ont échangé sur l'engagement des jeunes MRE. Un mot d'ordre en est sorti : Fédérer.",
};

const galleryPhotos: { src: string; alt: string }[] = [];

const speakers = [
  {
    name: "Ahmed Ghayet",
    role: "Président de Marocains Pluriels, chroniqueur",
  },
  {
    name: "Mehdi Heurteloup",
    role: "Intervenant — Jeunesse et diaspora marocaine",
  },
];

export default function WebinaireDiasporaMars2026Page() {
  return (
    <div className="bg-beige">
      {/* Bouton retour */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux actualités
        </Link>
      </div>

      {/* Cover image */}
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden">
        <Image
          src="/images/events/webinaire-diaspora-mars-2026/affiche.jpeg"
          alt="Webinaire Fédérer notre jeunesse — Mars 2026"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Webinaire
            </span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* En-tête */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              26 mars 2026 · 20h30
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-4 h-4" />
              En ligne — Live streaming
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Fédérer notre jeunesse
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            Le 26 mars 2026, à 20h30, Génération Diaspora organisait son tout premier
            webinaire en direct. Un rendez-vous fondateur, pensé comme un espace de
            parole pour la jeunesse marocaine résidant à l&apos;étranger.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Pendant plus de deux heures, intervenants et participants ont échangé
              sur l&apos;engagement des jeunes MRE : les formes qu&apos;il peut prendre, les
              freins qui le limitent, et les moyens de le renforcer. La discussion a
              mis en lumière un constat partagé : cette jeunesse, dispersée entre
              plusieurs pays et plusieurs villes, dispose d&apos;une énergie réelle, mais
              manque souvent d&apos;un cadre pour la canaliser.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Fédérer
            </h2>

            <p className="leading-relaxed">
              De ces échanges est né un mot d&apos;ordre : Fédérer. Réunir des jeunes
              issus de parcours et de territoires différents autour d&apos;un projet
              commun, plutôt que de les laisser agir chacun de leur côté. C&apos;est
              précisément la mission que Génération Diaspora s&apos;est donnée dès sa
              création.
            </p>

            <p className="leading-relaxed">
              Ce premier webinaire n&apos;était qu&apos;un point de départ. Il a posé les
              bases d&apos;une conviction simple : une jeunesse fédérée pèse plus,
              s&apos;exprime mieux et construit davantage.
            </p>

            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed">
                Rejoindre Génération Diaspora, c&apos;est prendre part à cette dynamique
                dès aujourd&apos;hui.
              </p>
            </blockquote>
          </div>

          {/* Intervenants */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Intervenants
            </h2>
            <ul className="space-y-4">
              {speakers.map((s) => (
                <li key={s.name} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{s.name}</span>
                    <span className="text-gray-600"> — {s.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Source presse */}
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
            <ExternalLink className="w-4 h-4 flex-shrink-0" />
            <span>
              Source :{" "}
              <a
                href="https://aujourdhui.ma/chroniques/immersion-au-sein-de-la-jeunesse-generation-diaspora-enactus-encg-settat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Lire la chronique sur Aujourd&apos;hui.ma
              </a>{" "}
              — Ahmed Ghayet, 30/03/2026
            </span>
          </div>
        </div>
      </article>

      {/* Galerie photos */}
      {galleryPhotos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Galerie photos
              </h2>
              <GalleryLightbox photos={galleryPhotos} />
            </div>
          </div>
        </section>
      )}

      {/* Retour */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voir toutes les actualités
        </Link>
      </div>
    </div>
  );
}
