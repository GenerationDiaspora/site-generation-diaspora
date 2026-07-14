import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Ftour Pluriel 2026 — Génération Diaspora",
  description:
    "Hamid Lafredi, président de Génération Diaspora, représentait l'association à la 16ème édition du Ftour Pluriel à Casablanca, réunissant 180 invités autour du vivre-ensemble.",
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
            Génération Diaspora au Ftour Pluriel — 16ème édition
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            À Casablanca, la 16ème édition du Ftour Pluriel a réuni 180 invités
            autour d&apos;une rupture du jeûne placée sous le signe de la jeunesse, du
            dialogue, du vivre-ensemble et de la tamaghrabit. Génération Diaspora
            y était représentée par son président, Hamid Lafredi.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Il est 17h30 passées lorsque les premiers invités arrivent. Les
              poignées de main se prolongent, les sourires sont francs. Dans la
              salle, des tables dressées avec soin : dattes, lait et gâteaux
              marocains. L&apos;atmosphère est chaleureuse.
            </p>

            {/* Citation Hamid */}
            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                &ldquo;Le ftour est un moment très important pour nous. Le partager
                dans cet esprit d&apos;ouverture, avec des Marocains venus d&apos;horizons
                différents et des amis d&apos;autres pays, c&apos;est fort.&rdquo;
              </p>
              <footer className="text-sm font-semibold text-primary-700">
                — Hamid Lafredi, président de Génération Diaspora
              </footer>
            </blockquote>

            <p className="leading-relaxed">
              Il a ajouté que cette rencontre donnait une image fidèle des liens
              qui unissent les Marocains établis en France et ceux qui vivent au
              Royaume — dans les deux sens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un rendez-vous incontournable du Ramadan
            </h2>

            <p className="leading-relaxed">
              Le Ftour Pluriel est porté par les associations{" "}
              <strong>Marocains Pluriels</strong> et{" "}
              <strong>Salam Lekoulam</strong>. Réunir des femmes et des hommes
              aux parcours variés pour partager un moment à la fois intime et
              public, ancré dans la tradition mais ouvert sur le monde — telle
              est l&apos;ambition de cet événement.
            </p>

            <p className="leading-relaxed">
              À 18h32, l&apos;appel à la prière s&apos;élève. Chacun rompt le jeûne à sa
              table. Autour des tables, musulmans, juifs et chrétiens partagent
              un moment collectif. Un imam, un rabbin et un prêtre s&apos;expriment
              successivement devant l&apos;assemblée.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              La jeunesse à l&apos;honneur
            </h2>

            <p className="leading-relaxed">
              Cette 16ème édition a placé la jeunesse au centre. Sept jeunes
              Marocains s&apos;illustrant à travers le monde ont été sélectionnés et
              honorés d&apos;un médaillon symbolique du vivre-ensemble.
            </p>

            {/* Citation Ahmed Ghayat */}
            <blockquote className="border-l-4 border-secondary-500 pl-6 py-2 bg-secondary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                &ldquo;Ces jeunes, où qu&apos;ils vivent, portent une part du Maroc avec
                eux.&rdquo;
              </p>
              <footer className="text-sm font-semibold text-secondary-700">
                — Ahmed Ghayat, président de Marocains Pluriels
              </footer>
            </blockquote>

            <p className="leading-relaxed">
              La soirée s&apos;est conclue par une prestation musicale de{" "}
              <strong>Rita Soko</strong>, après un dîner convivial où les
              échanges se sont poursuivis bien au-delà de la rupture du jeûne.
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

          {/* Source presse */}
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
            <ExternalLink className="w-4 h-4 flex-shrink-0" />
            <span>
              Source :{" "}
              <a
                href="https://fr.le360.ma/societe/mille-visages-mille-horizons-une-identite-quand-le-ftour-pluriel-celebre-la-jeunesse-et-la_2ELRC3VOLRD7RO4DPDWF37FFGU/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Lire l&apos;article complet sur Le360
              </a>{" "}
              — Hajar Kharroubi et Adil Gadrouz, 02/03/2026
            </span>
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
