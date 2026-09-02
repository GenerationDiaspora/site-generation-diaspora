import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Monitor } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Déconstruire les mirages, bâtir des ponts — Génération Diaspora",
  description:
    "Génération Diaspora et Oxy'Jeunes ont réuni jeunes MRE et jeunes du Royaume autour d'une question centrale : comment se voient-ils vraiment, au-delà des apparences et des préjugés ? Un mot d'ordre : Réalité.",
};

const galleryPhotos: { src: string; alt: string }[] = [];

const speakers = [
  {
    name: "Younes Boumehdi",
    role: "Intervenant — Jeunesse et diaspora",
  },
  {
    name: "Oumaima El Mansouri",
    role: "Intervenante — Oxy'Jeunes",
  },
  {
    name: "Rhissam Boudina",
    role: "Modérateur — Génération Diaspora",
  },
];

export default function WebinaireMREPage() {
  return (
    <div className="bg-beige">
      {/* Retour */}
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
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-orange-800">
        <Image
          src="/images/events/webinaire-retour-mre/poster.jpg"
          alt="Webinaire Retour Estival des MRE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
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
              25 juin 2026 · 21h
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-4 h-4" />
              En ligne — En partenariat avec Oxy&apos;Jeunes
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Déconstruire les mirages, bâtir des ponts
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-red-500 pl-5 italic">
            Génération Diaspora a organisé un webinaire fondateur en collaboration
            avec Oxy&apos;Jeunes, réunissant jeunes de la diaspora et du Royaume autour
            d&apos;une question centrale : comment se voient-ils vraiment, au-delà des
            apparences et des préjugés ?
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Pendant cette rencontre, les intervenants ont mis à nu les
              représentations que chacun porte de l&apos;autre. D&apos;un côté, les MRE,
              souvent perçus comme distants, nostalgiques ou en quête perpétuelle
              d&apos;ostentation. De l&apos;autre, les jeunes du Maroc, parfois vus, à tort,
              comme inexpérimentés face aux opportunités du monde occidental, ou au
              contraire, comme les gardiens exclusifs de l&apos;identité marocaine.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Au-delà des clichés
            </h2>

            <p className="leading-relaxed">
              Au-delà de ces clichés, l&apos;échange a révélé une vérité plus riche :
              une jeunesse partagée, animée par les mêmes aspirations, traversée
              par les mêmes doutes, capable de se comprendre lorsqu&apos;on lui en donne
              l&apos;occasion. Les jeunes présents ont compris que leurs différences de
              contexte n&apos;étaient pas des obstacles, mais des moyens de s&apos;entre-connaître.
            </p>

            <p className="leading-relaxed">
              Ce webinaire, orchestré au moment du traditionnel retour estival de
              la diaspora, a posé les bases d&apos;une conviction nouvelle : on ne bâtit
              pas la solidarité en niant les différences, mais en les traversant
              ensemble, honnêtement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Réalité
            </h2>

            <p className="leading-relaxed">
              De cette soirée est né un mot d&apos;ordre : Réalité. Voir l&apos;autre tel
              qu&apos;il est, sans les voiles de l&apos;idéalisation ni les ombres du doute.
              Génération Diaspora s&apos;engage à poursuivre ce travail de clarté, car
              c&apos;est sur des fondations vraies que se construisent les liens durables.
            </p>
          </div>

          {/* Intervenants */}
          <div className="mt-12 bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Intervenants
            </h2>
            <ul className="space-y-4">
              {speakers.map((s) => (
                <li key={s.name} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{s.name}</span>
                    <span className="text-gray-600"> — {s.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Galerie */}
      {galleryPhotos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Galerie
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
