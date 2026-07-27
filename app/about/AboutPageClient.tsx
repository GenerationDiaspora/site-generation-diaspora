"use client";

import Image from "next/image";
import {
  Mail,
  Users,
  Heart,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Calendar,
} from "lucide-react";
import {
  presidentHonneur,
  bureauLegal,
  postesOperationnels,
  conseillers,
  membres,
  roadmap2026,
  stats,
} from "@/data/bureau";
import TeamShowcase from "@/components/about/TeamShowcase";
import { useTranslate } from "@/lib/i18n";

export default function AboutPageClient() {
  const { t } = useTranslate();

  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl opacity-90">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t("about.history.title")}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("about.history.p1")}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("about.history.p2")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("about.history.p3")}{" "}
                <strong>{t("about.history.address")}</strong>.
              </p>
            </div>
              </div>

              {/* Photo */}
              <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about/team.jpg"
                  alt={t("about.history.imageAlt")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              {t("about.values.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t("about.values.proximity.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.values.proximity.desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t("about.values.humanity.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.values.humanity.desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t("about.values.solidarity.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.values.solidarity.desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t("about.values.fraternity.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.values.fraternity.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200 text-sm">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Bureau & Nos Membres */}
      <TeamShowcase
        presidentHonneur={presidentHonneur}
        bureauLegal={bureauLegal}
        postesOperationnels={postesOperationnels}
        conseillers={conseillers}
        membres={membres}
      />

      {/* Feuille de route 2026 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t("about.roadmap.title")}
              </h2>
            </div>
            <p className="text-center text-gray-600 mb-12">
              {t("about.roadmap.subtitle")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap2026.map((phase, index) => (
                <div
                  key={phase.key}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-700 font-bold text-sm">
                      T{index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{t(`about.roadmap.${phase.key}.phase`)}</h3>
                  <p className="text-xs text-primary-600 font-medium mb-3">
                    {t(`about.roadmap.${phase.key}.period`)}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`about.roadmap.${phase.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {t("about.contactCta.title")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("about.contactCta.text")}
            </p>
            <div className="space-y-6">
              <a
                href="mailto:contact@generationdiaspora.com"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                contact@generationdiaspora.com
              </a>

              <div>
                <p className="text-gray-600 mb-4 font-semibold">
                  {t("about.contactCta.followUs")}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.facebook.com/groups/1013728587602196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/generation.diaspora.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/company/génération-diaspora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
