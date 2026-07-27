"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useTranslate } from "@/lib/i18n";

const galleryPhotos = [
  { src: "/images/events/ftour-pluriel-2026/IMG_6703.jpg", alt: "Ftour Pluriel 2026 — Photo 1" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6722.jpg", alt: "Ftour Pluriel 2026 — Photo 2" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6745.jpg", alt: "Ftour Pluriel 2026 — Photo 3" },
  { src: "/images/events/ftour-pluriel-2026/IMG_6776.jpg", alt: "Ftour Pluriel 2026 — Photo 4" },
];

const personalityKeys = ["azoulay", "bittonGhouli", "ghayat", "lafredi"] as const;

export default function FtourPluriel2026Client() {
  const { t } = useTranslate();
  const a = "news.ftourPluriel";

  return (
    <div className="bg-beige">
      {/* Bouton retour */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("common.backToNews")}
        </Link>
      </div>

      {/* Cover image */}
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden">
        <Image
          src="/images/events/ftour-pluriel-2026/main-ftour.jpg"
          alt={t(`${a}.title`)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {t(`${a}.badge`)}
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
              {t(`${a}.dateLabel`)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {t(`${a}.location`)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {t(`${a}.title`)}
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            {t(`${a}.lead`)}
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">{t(`${a}.body1`)}</p>

            {/* Citation Hamid */}
            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                &ldquo;{t(`${a}.quote1Text`)}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-primary-700">
                {t(`${a}.quote1Author`)}
              </footer>
            </blockquote>

            <p className="leading-relaxed">{t(`${a}.body2`)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(`${a}.section1Title`)}
            </h2>

            <p className="leading-relaxed">{t(`${a}.body3`)}</p>

            <p className="leading-relaxed">{t(`${a}.body4`)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(`${a}.section2Title`)}
            </h2>

            <p className="leading-relaxed">{t(`${a}.body5`)}</p>

            {/* Citation Ahmed Ghayat */}
            <blockquote className="border-l-4 border-secondary-500 pl-6 py-2 bg-secondary-50 rounded-r-xl my-8">
              <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                &ldquo;{t(`${a}.quote2Text`)}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-secondary-700">
                {t(`${a}.quote2Author`)}
              </footer>
            </blockquote>

            <p className="leading-relaxed">{t(`${a}.body6`)}</p>
          </div>

          {/* Personnalités présentes */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t(`${a}.personalitiesTitle`)}
            </h2>
            <ul className="space-y-4">
              {personalityKeys.map((key) => (
                <li key={key} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {t(`${a}.personalities.${key}.name`)}
                    </span>
                    <span className="text-gray-600"> — {t(`${a}.personalities.${key}.role`)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Source presse */}
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
            <ExternalLink className="w-4 h-4 flex-shrink-0" />
            <span>
              {t(`${a}.sourceLabel`)}{" "}
              <a
                href="https://fr.le360.ma/societe/mille-visages-mille-horizons-une-identite-quand-le-ftour-pluriel-celebre-la-jeunesse-et-la_2ELRC3VOLRD7RO4DPDWF37FFGU/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                {t(`${a}.sourceLinkText`)}
              </a>{" "}
              {t(`${a}.sourceCredit`)}
            </span>
          </div>
        </div>
      </article>

      {/* Galerie photos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t(`${a}.galleryTitle`)}
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
          {t("common.seeAllNews")}
        </Link>
      </div>
    </div>
  );
}
