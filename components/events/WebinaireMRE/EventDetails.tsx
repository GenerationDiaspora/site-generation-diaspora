"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Monitor, Users, ArrowRight } from "lucide-react";
import { useTranslate } from "@/lib/i18n";

export default function EventDetails() {
  const { t } = useTranslate();
  const d = "webinaireMRE.eventDetails";

  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche — infos */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4 block">
              {t(`${d}.eyebrow`)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-balance">
              {t(`${d}.title`)}
            </h2>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{t(`${d}.dateTimeLabel`)}</p>
                  <p className="text-gray-900 font-semibold">{t(`${d}.dateTimeValue`)}</p>
                  <p className="text-gray-500 text-sm">{t(`${d}.dateTimeSub`)}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{t(`${d}.formatLabel`)}</p>
                  <p className="text-gray-900 font-semibold">{t(`${d}.formatValue`)}</p>
                  <p className="text-gray-500 text-sm">{t(`${d}.formatSub`)}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{t(`${d}.partnerLabel`)}</p>
                  <p className="text-gray-900 font-semibold">{t(`${d}.partnerValue`)}</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#inscription"
                className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-lg"
              >
                {t(`${d}.cta`)}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              {t(`${d}.ctaSub`)}
            </p>
          </div>

          {/* Colonne droite — affiche */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 md:w-72 -rotate-1 shadow-2xl rounded-xl overflow-hidden aspect-[2/3]">
              <Image
                src="/images/events/webinaire-retour-mre/poster.jpg"
                alt={t(`${d}.posterAlt`)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
