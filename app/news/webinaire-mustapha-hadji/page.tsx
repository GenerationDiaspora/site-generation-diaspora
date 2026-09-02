import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspirer la réussite par le sport — Génération Diaspora",
  description:
    "Génération Diaspora a organisé un webinaire avec Mustapha Hadji, légende du football marocain. Un échange consacré à la réussite par le sport : persévérance, discipline et transmission. Un mot d'ordre : Inspirer.",
};

export default function WebinaireMustaphaHadjiPage() {
  return (
    <div className="bg-beige">
      {/* Retour */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux actualités
        </Link>
      </div>

      {/* Cover — gradient sport */}
      <div className="relative h-72 md:h-96 lg:h-[500px] mt-6 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-gold-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-6xl mb-4">⚽</p>
            <p className="text-2xl font-bold opacity-80">Inspirer la réussite par le sport</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Webinaire
            </span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* En-tête */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              2026
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-4 h-4" />
              En ligne
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Inspirer la réussite par le sport
          </h1>

          {/* Chapeau */}
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary-500 pl-5 italic">
            Génération Diaspora a organisé un webinaire avec Mustapha Hadji,
            légende du football marocain. Un échange consacré à un thème simple
            mais puissant : la réussite par le sport.
          </p>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Pendant cette rencontre, Mustapha Hadji est revenu sur son propre
              parcours, des débuts modestes jusqu&apos;aux plus grandes compétitions
              internationales. Il a partagé les obstacles traversés, les choix
              qui ont compté et la discipline qui a fait la différence. Au-delà
              de l&apos;anecdote sportive, ce sont des conseils concrets qu&apos;il a livrés
              aux jeunes présents : sur la persévérance, l&apos;exigence envers
              soi-même, et la capacité à transformer chaque échec en apprentissage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un parcours qui dépasse le sport
            </h2>

            <p className="leading-relaxed">
              Cet échange a résonné bien au-delà du seul monde du sport. Le
              parcours de Mustapha Hadji illustre ce que la jeunesse de la
              diaspora peut accomplir lorsqu&apos;elle s&apos;appuie sur ses racines pour
              avancer, sans jamais perdre de vue ses ambitions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Un mot d&apos;ordre : Inspirer
            </h2>

            <p className="leading-relaxed">
              De cette soirée est né un mot d&apos;ordre : Inspirer. Donner à voir des
              trajectoires exemplaires, pour que chaque jeune puisse s&apos;y reconnaître
              et y puiser la force d&apos;avancer. Génération Diaspora poursuit cette
              mission à travers chacune de ses actions : mettre en lumière des
              parcours qui donnent envie d&apos;agir, et créer les occasions de les
              entendre.
            </p>
          </div>

          {/* Invité */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Invité d&apos;honneur
            </h2>
            <div className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">Mustapha Hadji</span>
                <span className="text-gray-600"> — Ancien international marocain, légende du football africain</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Retour */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voir toutes les actualités
        </Link>
      </div>
    </div>
  );
}
