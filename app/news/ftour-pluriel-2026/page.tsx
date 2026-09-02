import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Au rendez-vous de la fraternité — Génération Diaspora",
  description:
    "À Casablanca, la 16ème édition du Ftour Pluriel a réuni 180 invités autour d'une rupture du jeûne placée sous le signe de la jeunesse, du dialogue et du vivre-ensemble. Un mot d'ordre : Fraternité.",
};

const galleryPhotos = [
  { src: "/images/events/ftour-pluriel-2026/IMG_6703.jpg", alt: "Ftour Pluriel 2026 — Photo 1" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6722.jpg", alt: "Ftour Pluriel 2026 — Photo 2" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6745.jpg", alt: "Ftour Pluriel 2026 — Photo 3" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6776.jpg", alt: "Ftour Pluriel 2026 — Photo 4" },
];

const personalities = [
  {
    name: "André Azoulay",
    role: "Conseiller du Roi Mohammed VI, président fondateur de l'Association Essaouira Mogador",
  },
  {
    name: "Katia Bitton & Aalya Ghouli",
    role: "Co-présidentes de Salam Lekoulam",
  },
  {
    name: "Ahmed Ghayat",
    role: "Président de Marocains Pluriels",
  },
  {
    name: "Hamid Lafredi",
    role: "Président de Génération Diaspora",
  },
];

export default function FtourPluriel2026Page() {
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
          src="/images/events/ftour-pluriel-2026/main-ftour.jpg"
          alt="Ftour Pluriel 2026 — Génération Diaspora"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Événement
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
              1er mars 2026
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Casablanca, Maroc
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Au rendez-vous de la fraternité
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            À Casablanca, la 16ème édition du Ftour Pluriel a réuni 180 invités
            autour d&apos;une rupture du jeûne placée sous le signe de la jeunesse,
            du dialogue et du vivre-ensemble. Un moment fort de Tamaghrabit,
            cette identité marocaine plurielle et rassembleuse, à laquelle
            Génération Diaspora est particulièrement attachée.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              L&apos;association y était représentée par son président, Hamid Lafredi,
              aux côtés d&apos;invités venus d&apos;horizons variés, réunis autour d&apos;une même
              table pour partager bien plus qu&apos;un repas. Ce type de rendez-vous
              illustre une conviction que porte Génération Diaspora depuis sa
              création : les liens les plus solides se tissent dans des moments
              simples, partagés, où la parole circule librement.
            </p>

            <p className="leading-relaxed">
              Participer au Ftour Pluriel, c&apos;était aussi affirmer une présence :
              celle d&apos;une jeunesse de la diaspora qui ne se contente pas de
              regarder le Maroc de loin, mais qui prend part, activement, aux
              moments qui rassemblent le pays.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Fraternité
            </h2>

            <p className="leading-relaxed">
              De cette soirée est né un mot d&apos;ordre : Fraternité. Une valeur que
              Génération Diaspora s&apos;efforce de faire vivre à chaque occasion, en
              tissant des ponts entre les jeunes de la diaspora et celles et ceux
              qui, au Maroc, partagent la même volonté de dialogue et de
              rassemblement.
            </p>
          </div>

          {/* Personnalités présentes */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Personnalités présentes
            </h2>
            <ul className="space-y-4">
              {personalities.map((p) => (
                <li key={p.name} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {p.name}
                    </span>
                    <span className="text-gray-600"> — {p.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Galerie photos */}
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
