"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import { useTranslate } from "@/lib/i18n";

export default function Home() {
  const { t } = useTranslate();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden p-3" style={{ backgroundColor: '#F7F4EE' }}>
              <Image
                src="/logo.png"
                alt={t("common.logoAlt")}
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-balance opacity-90">
              {t("home.hero.subtitle")}
            </p>
            <Link
              href="#newsletter"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("home.hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("home.mission.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t("home.mission.text")}
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t("home.mission.values.proximity.title")}</h3>
                <p className="text-gray-600">{t("home.mission.values.proximity.desc")}</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t("home.mission.values.humanity.title")}</h3>
                <p className="text-gray-600">{t("home.mission.values.humanity.desc")}</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t("home.mission.values.solidarity.title")}</h3>
                <p className="text-gray-600">{t("home.mission.values.solidarity.desc")}</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t("home.mission.values.fraternity.title")}</h3>
                <p className="text-gray-600">{t("home.mission.values.fraternity.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t("home.actions.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.actions.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Webinaire — Passé */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/events/webinaire-diaspora-mars-2026/affiche.jpeg"
                  alt={t("home.actions.webinaire.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t("home.actions.webinaire.dateBadge")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{t("home.actions.webinaire.category")}</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  {t("home.actions.webinaire.title")}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t("home.actions.webinaire.excerpt")}
                </p>
                <Link href="/news/webinaire-diaspora-mars-2026" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  {t("common.seeEvent")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Ftour Pluriel */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/events/ftour-pluriel-2026/main-ftour.jpg"
                  alt={t("home.actions.ftour.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t("home.actions.ftour.dateBadge")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{t("home.actions.ftour.category")}</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  {t("home.actions.ftour.title")}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t("home.actions.ftour.excerpt")}
                </p>
                <Link href="/news/ftour-pluriel-2026" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  {t("common.seeEvent")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/news" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              {t("home.actions.seeAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {t("home.aboutPreview.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t("home.aboutPreview.p1")}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("home.aboutPreview.p2")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {t("home.aboutPreview.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/team.jpg"
                alt={t("home.aboutPreview.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
