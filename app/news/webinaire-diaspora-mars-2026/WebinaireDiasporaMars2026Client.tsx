"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Monitor, ArrowLeft, ExternalLink } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useTranslate } from "@/lib/i18n";

const galleryPhotos: { src: string; alt: string }[] = [
  // Ajouter ici les photos du webinaire une fois disponibles
  // { src: "/images/events/webinaire-diaspora-mars-2026/photo-1.jpg", alt: "Webinaire Diaspora Mars 2026 — Photo 1" },
];

const speakerKeys = ["ghayet", "heurteloup"] as const;

export default function WebinaireDiasporaMars2026Client() {
  const { t, tList } = useTranslate();
  const a = "news.webinaireDiasporaMars";
  const themes = tList(`${a}.themes`);

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
          src="/images/events/webinaire-diaspora-mars-2026/affiche.jpeg"
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
              <Monitor className="w-4 h-4" />
              {t(`${a}.formatLabel`)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {t(`${a}.title`)}
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            {t(`${a}.leadBefore`)}
            <strong> {t(`${a}.leadStrong`)}</strong>.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">{t(`${a}.body1`)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(`${a}.section1Title`)}
            </h2>

            <p className="leading-relaxed">{t(`${a}.body2`)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(`${a}.section2Title`)}
            </h2>

            <p className="leading-relaxed">{t(`${a}.body3`)}</p>
          </div>

          {/* Thèmes abordés */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t(`${a}.themesTitle`)}
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
              {t(`${a}.speakersTitle`)}
            </h2>
            <ul className="space-y-4">
              {speakerKeys.map((key) => (
                <li key={key} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{t(`${a}.speakers.${key}.name`)}</span>
                    <span className="text-gray-600"> — {t(`${a}.speakers.${key}.role`)}</span>
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
                href="https://aujourdhui.ma/chroniques/immersion-au-sein-de-la-jeunesse-generation-diaspora-enactus-encg-settat"
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
      {galleryPhotos.length > 0 && (
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
      )}

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
