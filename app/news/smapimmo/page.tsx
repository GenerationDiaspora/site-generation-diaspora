import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Grande Rencontre du Foot marocain et de la diaspora — Génération Diaspora",
  description:
    "À l'occasion du SMAPIMMO, Génération Diaspora, Marocains Pluriels et TFT Maroc ont réuni un public nombreux autour du football marocain, du rôle de la diaspora et des perspectives d'avenir.",
};

const galleryPhotos: { src: string; alt: string }[] = [
  { src: "/images/events/smapimmo/photo-1.jpg", alt: "Panel — Grande Rencontre du Foot marocain et de la diaspora" },
  { src: "/images/events/smapimmo/photo-2.jpg", alt: "Espace conférences SMAPIMMO" },
  { src: "/images/events/smapimmo/photo-3.jpg", alt: "Le public lors de la conférence-débat" },
];

const speakers = [
  { name: "Jawad El Hajri", role: "Intervenant — Monde sportif" },
  { name: "Saïd El Abadi", role: "Intervenant — Médias" },
  { name: "El ROCMA", role: "Intervenant — Digital & Culture" },
  { name: "Morad Fadil", role: "Intervenant — Génération Diaspora" },
  { name: "Ahmed Ghayet", role: "Intervenant — Marocains Pluriels" },
];

export default function SmapimmoPage() {
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

      {/* Cover */}
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden bg-gradient-to-br from-green-950 via-red-900 to-green-950">
        <Image
          src="/images/events/smapimmo/photo-1.jpg"
          alt="Grande Rencontre du Foot marocain et de la diaspora — SMAPIMMO"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Conférence-débat
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
              13 juin 2026
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              SMAPIMMO — Paris · Entrée libre
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Grande Rencontre du Foot marocain et de la diaspora
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            À l&apos;occasion du Salon Marocain de la Promotion Immobilière,
            Génération Diaspora a co-organisé une conférence-débat fédératrice autour
            du football marocain, du rôle de la diaspora et des perspectives d&apos;avenir.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Ouverte au public et accessible en entrée libre, la rencontre a réuni
              un public nombreux et varié : jeunes, familles, passionnés de football,
              acteurs associatifs et membres de la diaspora. L&apos;objectif : créer un
              espace d&apos;échange direct autour du rayonnement du sport marocain et de
              la contribution des Marocains du monde.
            </p>

            <p className="leading-relaxed">
              En partenariat avec Marocains Pluriels et le média TFT Maroc, la
              conférence a réuni des profils issus du monde sportif, médiatique,
              associatif et digital. Ensemble, ils ont porté un message commun :
              le football dépasse le terrain. Il peut devenir un levier de cohésion,
              d&apos;inspiration et de mobilisation au service du Maroc, de sa jeunesse
              et de ses diasporas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Trois idées centrales
            </h2>

            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              {[
                { num: "01", title: "Mobilisation", text: "Un public intergénérationnel rassemblé autour d'un format ouvert, accessible et participatif." },
                { num: "02", title: "Transmission", text: "Des intervenants qui partagent expériences, regards et pistes concrètes pour valoriser les talents." },
                { num: "03", title: "Impact", text: "La diaspora comme force de proposition, capable de mobiliser compétences, réseaux et énergie." },
              ].map((item) => (
                <div key={item.num} className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                  <span className="text-2xl font-bold text-primary-300">{item.num}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed">
              Les débats ont porté sur l&apos;avenir du sport marocain, la valorisation
              des talents issus de la diaspora et le lien entre identité, engagement
              et réussite. Les participants ont exprimé une volonté commune de
              contribuer, de transmettre et de faire avancer des initiatives utiles,
              au Maroc comme dans les pays de résidence.
            </p>

            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed">
                Une diaspora engagée, fière de ses racines et désireuse de contribuer
                activement au rayonnement du Maroc.
              </p>
            </blockquote>
          </div>

          {/* Intervenants */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-6 md:p-8 border border-primary-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Intervenants</h2>
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

          {/* Partenaires */}
          <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Partenaires</h2>
            <p className="text-gray-600 text-sm">
              SMAPIMMO · Marocains Pluriels · Génération Diaspora · TFT Maroc
            </p>
          </div>
        </div>
      </article>

      {/* Galerie */}
      {galleryPhotos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Galerie</h2>
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
