"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Facebook, Twitter } from "lucide-react";
import HeroSection from "@/components/events/WebinaireMRE/HeroSection";
import EventDetails from "@/components/events/WebinaireMRE/EventDetails";
import AboutWebinaire from "@/components/events/WebinaireMRE/AboutWebinaire";
import RegistrationForm from "@/components/events/WebinaireMRE/RegistrationForm";
import { useTranslate } from "@/lib/i18n";

const PAGE_URL = "https://www.generationdiaspora.com/news/webinaire-retour-mre";

export default function WebinaireRetourMREClient() {
  const { t } = useTranslate();
  const s = "webinaireMRE.inscriptionSection";
  const p = "webinaireMRE.pageFooter";

  return (
    <div className="bg-beige">
      {/* Retour */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("common.backToNews")}
        </Link>
      </div>

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Détails */}
      <EventDetails />

      {/* 3. À propos */}
      <AboutWebinaire />

      {/* 4. Formulaire d'inscription */}
      <section id="inscription" className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3 block">
              {t(`${s}.label`)}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 text-balance">
              {t(`${s}.title`)}
            </h2>
            <p className="text-gray-500 mt-3">
              {t(`${s}.subtitle`)}
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* 5. Footer page */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-xl p-2 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt={t("common.logoAlt")}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <a
              href="https://www.generationdiaspora.com"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              www.generationdiaspora.com
            </a>

            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t(`${p}.seeAllEvents`)}
            </Link>

            {/* Partage */}
            <div className="flex items-center gap-3 pt-2">
              <p className="text-white/40 text-xs uppercase tracking-widest">{t(`${p}.shareLabel`)}</p>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(t(`${p}.whatsappShareText`) + " " + PAGE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur WhatsApp"
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur Facebook"
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(t(`${p}.twitterShareText`))}&url=${encodeURIComponent(PAGE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partager sur X / Twitter"
                className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" aria-hidden="true" />
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
