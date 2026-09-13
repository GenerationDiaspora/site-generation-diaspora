"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const SLIDES = [
  { src: "/images/bio/bio-hamid-lafredi.png",   name: "Hamid Lafredi",        role: "Président" },
  { src: "/images/bio/bio-ahmed-ghayat.png",    name: "Ahmed Ghayat",         role: "Président d'honneur" },
  { src: "/images/bio/bio-morad-fadil.png",     name: "Morad Fadil",          role: "Vice-Président" },
  { src: "/images/bio/bio-tarik-jaabouki.png",  name: "Tarik Jaabouki",       role: "Vice-Président" },
  { src: "/images/bio/bio-omar-walali.png",     name: "Omar Walali Loudyi",   role: "Secrétaire Général" },
  { src: "/images/bio/bio-rhissam-boudina.png", name: "Rhissam Boudina",      role: "Secrétaire Adjoint" },
  { src: "/images/bio/bio-younes-drissi.png",   name: "Younes Drissi Slimani",role: "Trésorier" },
  { src: "/images/bio/bio-mehdi-bennis.png",    name: "Mehdi Bennis",         role: "Trésorier Adjoint" },
  { src: "/images/bio/bio-smain-qasimi.png",    name: "Smaïn Qasimi",        role: "Conseiller" },
  { src: "/images/bio/bio-fady-ait-yazza.png",  name: "Fady Ait Yazza",       role: "Référent Communication" },
  { src: "/images/bio/bio-manal-hanini.png",    name: "Manal Hanini",         role: "Référente Recrutement" },
  { src: "/images/bio/bio-zirar-focus.png",     name: "Zirar Focus",          role: "Photographe & Créateur de Contenu" },
];

const AUTOPLAY_DELAY = 5000;

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animDir, setAnimDir] = useState<"left" | "right">("right");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number, dir: "left" | "right" = "right") => {
    setAnimDir(dir);
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  const prev = useCallback(() => goTo(current - 1, "left"), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, "right"), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => next(), AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  return (
    <section className="py-20 bg-beige overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ils font Génération Diaspora</h2>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
            style={{ aspectRatio: "16/9" }}>
            {SLIDES.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={`Bio de ${slide.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 1024px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Précédent"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={next}
            aria-label="Suivant"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                aria-label={`Aller à ${slide.name}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  i === current
                    ? "w-6 h-2 bg-primary-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Name + role under dots */}
          <p className="text-center mt-3 text-sm text-gray-500">
            <span className="font-semibold text-gray-800">{SLIDES[current].name}</span>
            {" · "}
            <span>{SLIDES[current].role}</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Découvrir toute l&apos;équipe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
