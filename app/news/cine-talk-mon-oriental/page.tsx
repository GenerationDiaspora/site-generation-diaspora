import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Diaspora Ciné Talk — Quand l'identité prend vie à l'écran | Génération Diaspora",
  description:
    "Génération Diaspora a organisé son premier événement physique : le Diaspora Ciné Talk. Projection du film Mon Oriental, primé à Cannes 2026, en présence de Samira Sitail, Ambassadeure du Maroc en France. Un mot d'ordre : Identité.",
};

const galleryPhotos: { src: string; alt: string }[] = [
  { src: "/images/events/cine-talk-mon-oriental/poster.webp", alt: "Affiche Diaspora Ciné Talk — Mon Oriental" },
];

export default function CineTalkMonOrientalPage() {
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
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden bg-gradient-to-b from-amber-950 via-orange-900 to-amber-800">
        <Image
          src="/images/events/cine-talk-mon-oriental/poster.webp"
          alt="Diaspora Ciné Talk — Mon Oriental"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Diaspora Ciné Talk
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
              10 mai 2026
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Paris, France
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Diaspora Ciné Talk : quand l&apos;identité prend vie à l&apos;écran
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-amber-500 pl-5 italic">
            Génération Diaspora a organisé son premier événement physique : le
            Diaspora Ciné Talk. Une soirée marquante, rehaussée par la présence
            honorifique de Samira Sitail, Ambassadeure du Maroc en France.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Au cœur de cet événement, la diffusion en exclusivité de{" "}
              <em>Mon Oriental</em>, film primé à Cannes en 2026. Un choix qui
              n&apos;avait rien d&apos;anodin : au-delà de l&apos;œuvre cinématographique, c&apos;est
              une réflexion sur l&apos;identité qui s&apos;est engagée avec le public présent,
              entre héritage, appartenance et regard porté sur soi.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un tournant pour l&apos;association
            </h2>

            <p className="leading-relaxed">
              Ce premier rendez-vous physique a marqué un tournant pour
              l&apos;association. Après les webinaires en ligne, Génération Diaspora
              réunissait pour la première fois ses membres et sympathisants autour
              d&apos;un moment partagé, dans un lieu et un temps communs. La présence
              de l&apos;Ambassadeure a donné à cette soirée une portée particulière,
              soulignant la reconnaissance institutionnelle dont bénéficie déjà
              l&apos;association.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Identité
            </h2>

            <p className="leading-relaxed">
              De cette soirée est né un mot d&apos;ordre : Identité. Un fil conducteur
              que Génération Diaspora entend continuer à explorer, à travers la
              culture et l&apos;art, pour permettre à chacun de mieux se comprendre et
              de mieux se raconter.
            </p>
          </div>

          {/* Présences notables */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Présences notables
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Samira Sitail</span>
                  <span className="text-gray-600"> — Ambassadeure du Maroc en France (présence honorifique)</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Khalid Zaouche</span>
                  <span className="text-gray-600"> — Réalisateur de <em>Mon Oriental</em></span>
                </div>
              </li>
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
