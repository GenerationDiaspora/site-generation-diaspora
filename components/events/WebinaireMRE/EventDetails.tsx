import Image from "next/image";
import Link from "next/link";
import { Calendar, Monitor, Users, ArrowRight } from "lucide-react";

export default function EventDetails() {
  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche — infos */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4 block">
              Détails de l&apos;événement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-balance">
              Un webinaire ouvert à toute la diaspora
            </h2>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Date &amp; heure</p>
                  <p className="text-gray-900 font-semibold">Jeudi 25 Juin 2026 — 21h00</p>
                  <p className="text-gray-500 text-sm">Heure française (Paris)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Format</p>
                  <p className="text-gray-900 font-semibold">Webinaire en ligne</p>
                  <p className="text-gray-500 text-sm">Le lien de connexion sera envoyé après inscription</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-700" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">En partenariat avec</p>
                  <p className="text-gray-900 font-semibold">Oxy&apos;Jeunes</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#inscription"
                className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-lg"
              >
                Je m&apos;inscris gratuitement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Gratuit · Inscription obligatoire pour recevoir le lien
            </p>
          </div>

          {/* Colonne droite — affiche */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 md:w-72 -rotate-1 shadow-2xl rounded-xl overflow-hidden aspect-[2/3]">
              <Image
                src="/images/events/webinaire-retour-mre/poster.jpg"
                alt="Affiche — Retour Estival des MRE — Webinaire 25 Juin 2026"
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
