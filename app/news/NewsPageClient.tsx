"use client";

import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const DATE_LOCALES: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-US",
  ar: "ar-MA",
};

interface NewsListItem {
  id: number;
  itemKey: string;
  categoryKey: string;
  date: string;
  imageSrc?: string;
  href?: string;
  gradient?: string;
}

const newsItems: NewsListItem[] = [
  {
    id: -1,
    itemKey: "webinaireDiaspora",
    categoryKey: "webinaire",
    date: "2026-03-26",
    imageSrc: "/images/events/webinaire-diaspora-mars-2026/affiche.jpeg",
    href: "/news/webinaire-diaspora-mars-2026",
  },
  {
    id: 0,
    itemKey: "ftourPluriel",
    categoryKey: "evenement",
    date: "2026-03-01",
    imageSrc: "/images/events/ftour-pluriel-2026/main-ftour.jpg",
    href: "/news/ftour-pluriel-2026",
  },
  {
    id: 1,
    itemKey: "mentorship",
    categoryKey: "programme",
    date: "2025-11-01",
    gradient: "from-primary-400 to-primary-600",
  },
  {
    id: 2,
    itemKey: "festival",
    categoryKey: "evenement",
    date: "2025-10-15",
    gradient: "from-secondary-400 to-secondary-600",
  },
  {
    id: 3,
    itemKey: "partnership",
    categoryKey: "partenariat",
    date: "2025-10-01",
    gradient: "from-primary-500 to-secondary-500",
  },
  {
    id: 4,
    itemKey: "workshop",
    categoryKey: "atelier",
    date: "2025-09-20",
    gradient: "from-primary-600 to-primary-400",
  },
  {
    id: 5,
    itemKey: "education",
    categoryKey: "projet",
    date: "2025-09-05",
    gradient: "from-secondary-500 to-primary-500",
  },
  {
    id: 6,
    itemKey: "networking",
    categoryKey: "evenement",
    date: "2025-08-25",
    gradient: "from-primary-400 to-secondary-400",
  },
];

export default function NewsPageClient() {
  const { t, locale } = useTranslate();

  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("news.hero.title")}</h1>
            <p className="text-xl opacity-90">
              {t("news.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => {
                const title = t(`news.items.${item.itemKey}.title`);
                const excerpt = t(`news.items.${item.itemKey}.excerpt`);
                const category = t(`news.categories.${item.categoryKey}`);
                const CardWrapper = item.href
                  ? ({ children }: { children: React.ReactNode }) => (
                      <Link href={item.href!} className="block group">
                        {children}
                      </Link>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="group">{children}</div>
                    );

                return (
                  <article
                    key={item.id}
                    className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <CardWrapper>
                      {/* Image ou gradient */}
                      {item.imageSrc ? (
                        <div className="h-48 relative overflow-hidden">
                          <Image
                            src={item.imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`h-48 bg-gradient-to-br ${item.gradient ?? ""}`} />
                      )}

                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                            {category}
                          </span>
                          <span className="text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString(DATE_LOCALES[locale], {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {excerpt}
                        </p>
                        {item.href ? (
                          <span className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group/btn">
                            {t("common.readMore")}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        ) : (
                          <button className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group/btn">
                            {t("common.readMore")}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </CardWrapper>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {t("news.ctaNewsletter.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("news.ctaNewsletter.text")}
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {t("news.ctaNewsletter.cta")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
