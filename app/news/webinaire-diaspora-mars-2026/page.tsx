import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Monitor, ArrowLeft, ExternalLink } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Webinaire Diaspora Marocaine — Génération Diaspora",
  description:
    "Retour sur le webinaire du 26 mars 2026 : Diaspora Marocaine entre perception, contribution et avenir commun. Plus de 2 heures d'échanges, de débats et de prises de parole pour fédérer les deux jeunesses.",
};

const galleryPhotos: { src: string; alt: string }[] = [
  // Ajouter ici les photos du webinaire une fois disponibles
  // { src: "/images/events/webinaire-diaspora-mars-2026/photo-1.jpg", alt: "Webinaire Diaspora Mars 2026 — Photo 1" },
];

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

const themes = [
  "Obstacles administratifs rencontrés par les jeunes MRE",
  "Défaillances des institutions dédiées à la diaspora",
  "Création de médias par et pour la diaspora",
  "Opportunités dans le sport et la culture",
  "Droit de vote des Marocains résidant à l'étranger",
  "Unification des jeunesses marocaines des deux rives",
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
          alt="Webinaire Diaspora Marocaine — Mars 2026"
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
              26 mars 2026
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-4 h-4" />
              En ligne — Live streaming
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Diaspora Marocaine : Entre perception, contribution et avenir commun
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            Le 26 mars 2026 à 20h30, Génération Diaspora a organisé son premier
            webinaire en live streaming. Pendant plus de deux heures, intervenants
            et participants ont débattu de l&apos;engagement de la jeunesse MRE, des
            obstacles qu&apos;elle rencontre et du mot d&apos;ordre qui a émergé de la soirée :
            <strong> FÉDÉRER</strong>.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Rassembler les jeunes Marocains résidant à l&apos;étranger et ceux du
              Royaume autour d&apos;un même idéal — c&apos;est le pari qu&apos;a relevé ce webinaire.
              À travers des échanges libres et un débat ouvert, les participants ont
              exprimé leur volonté profonde de s&apos;investir pour le Maroc, tout en
              pointant les freins concrets qui entravent cet engagement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Des sujets au cœur des préoccupations MRE
            </h2>

            <p className="leading-relaxed">
              La soirée a abordé des thématiques aussi diverses que les obstacles
              administratifs auxquels font face les jeunes MRE, les défaillances
              des institutions censées les représenter, ou encore la place de la
              culture et du sport comme leviers d&apos;engagement. Le droit de vote des
              expatriés et la création de médias propres à la diaspora ont également
              animé les discussions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Fédérer
            </h2>

            <p className="leading-relaxed">
              Au terme de ces échanges, un concept fort s&apos;est imposé : celui de
              l&apos;unification des deux jeunesses — celle de la diaspora et celle du
              Royaume. Les participants ont réclamé des structures rénovées et
              représentatives pour concrétiser cet engagement. Ce webinaire n&apos;est
              qu&apos;un premier pas dans la construction d&apos;un dialogue durable.
            </p>
          </div>

          {/* Thèmes abordés */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Thèmes abordés
            </h2>
            <ul className="space-y-3">
              {themes.map((theme) => (
                <li key={theme} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{theme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intervenants */}
          <div className="mt-8 bg-primary-50 rounded-2xl p-6 md:p-8">
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
