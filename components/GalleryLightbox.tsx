"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslate } from "@/lib/i18n";

interface GalleryLightboxProps {
  photos: { src: string; alt: string }[];
}

export default function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const { t } = useTranslate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  }, [photos.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % photos.length : 0));
  }, [photos.length]);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next, close]);

  // Bloquer le scroll quand le lightbox est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setActiveIndex(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Bouton fermer */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label={t("gallery.close")}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Compteur */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {t("gallery.counter", { current: activeIndex + 1, total: photos.length })}
          </div>

          {/* Bouton précédent */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label={t("gallery.prev")}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bouton suivant */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label={t("gallery.next")}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Miniatures */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}
                className={`relative w-12 h-8 rounded overflow-hidden transition-opacity ${
                  index === activeIndex ? "opacity-100 ring-2 ring-white" : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={photo.src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
