"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Monitor } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Actualités", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Barre d'annonce — Webinaire Retour Estival MRE */}
      {announcementVisible && (
        <div className="bg-gradient-to-r from-red-900 via-red-700 to-orange-700 text-white">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <Monitor className="w-4 h-4 flex-shrink-0 text-red-200" />
              <p className="text-xs sm:text-sm font-medium truncate">
                <span className="font-bold">Webinaire — Retour Estival des MRE</span>
                <span className="hidden sm:inline text-white/80"> · Jeudi 25 Juin 2026 · 21h · Gratuit</span>
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href="/news/webinaire-retour-mre#inscription"
                className="bg-white text-red-900 text-xs font-bold px-3 py-1 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
                onClick={() => setMobileMenuOpen(false)}
              >
                Je m&apos;inscris →
              </Link>
              <button
                type="button"
                aria-label="Fermer l'annonce"
                onClick={() => setAnnouncementVisible(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar principale */}
      <div className="shadow-sm" style={{ backgroundColor: '#F3F1EF' }}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-20">
              <Image
                src="/logo.png"
                alt="Logo Génération Diaspora"
                width={75}
                height={75}
                className="object-contain transition-transform"
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
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
              Newsletter
            </Link>
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
                  key={item.name}
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
                Newsletter
              </Link>
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
}

