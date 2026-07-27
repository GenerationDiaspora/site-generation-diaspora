"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslate } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const LANGUAGE_LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useTranslate();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/60 p-1 ${className}`}
      role="group"
      aria-label={t("nav.languageLabel")}
    >
      <Globe className="w-4 h-4 text-gray-400 mx-1.5" aria-hidden="true" />
      {(Object.keys(LANGUAGE_LABELS) as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
            locale === code
              ? "bg-primary-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {LANGUAGE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslate();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Navbar principale */}
      <div className="shadow-sm" style={{ backgroundColor: '#F7F4EE' }}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <Image
                src="/logo-symbol.svg"
                alt={t("common.logoAlt")}
                width={60}
                height={68}
                unoptimized
                className="object-contain transition-transform"
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group inline-flex items-center gap-1.5"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link
                href="/#newsletter"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {t("nav.newsletter")}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Bouton Menu Mobile */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2 inline-flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#newsletter"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.newsletter")}
              </Link>
              <LanguageSwitcher className="self-center mt-2" />
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
}
