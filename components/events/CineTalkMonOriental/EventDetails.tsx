import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Film, Mic2, ArrowRight } from "lucide-react";

interface EventDetailsProps {
  registrationUrl?: string;
}

export default function EventDetails({ registrationUrl }: EventDetailsProps) {
  const ctaHref = registrationUrl ?? "#inscription";

  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche — infos */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-4 block">
              Détails de l&apos;événement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-balance">
              Une soirée cinéma unique à Paris
            </h2>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-amber-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Date &amp; heure</p>
                  <p className="text-gray-900 font-semibold">Dimanche 10 Mai 2026 — 15h00</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Lieu</p>
                  <p className="text-gray-900 font-semibold">
                    TSF, le Cercle Rouge
                    <span className="block text-gray-600 font-normal text-sm">30 avenue Georges Sand, 93210 Saint-Denis</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Film className="w-5 h-5 text-amber-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Format</p>
                  <p className="text-gray-900 font-semibold">Projection suivie d&apos;un débat</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mic2 className="w-5 h-5 text-amber-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Invité</p>
                  <p className="text-gray-900 font-semibold leading-snug">
                    Khalid Zaouche et Jawad Zaouche{" "}
                    <span className="font-normal text-gray-600">ainsi que l&apos;équipe du film</span>
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#inscription"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                Je m&apos;inscris
                <ArrowRight className="w-4 h-4" />
              </Link>
              {registrationUrl && registrationUrl !== "[INSCRIPTION_URL]" && (
                <a
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Formulaire externe
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Entrée sur inscription obligatoire
            </p>
          </div>

          {/* Colonne droite — affiche */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 md:w-72 rotate-2 shadow-2xl rounded-xl overflow-hidden aspect-[2/3]">
              <Image
                src="/images/events/cine-talk-mon-oriental/poster.webp"
                alt="Affiche du film Mon Oriental — Khalid Zaouche"
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
