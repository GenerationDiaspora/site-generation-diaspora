import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden p-3" style={{ backgroundColor: '#F7F4EE' }}>
              <Image
                src="/logo.png"
                alt="Logo Génération Diaspora"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Génération Diaspora
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-balance opacity-90">
              Une voix – et une voie – nouvelle pour la jeunesse de la diaspora et le vivre-ensemble
            </p>
            <Link
              href="#newsletter"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Rejoignez la newsletter
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
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Génération Diaspora se veut un cadre structuré au service de la jeunesse marocaine en France,
              tout en entretenant des liens étroits avec la jeunesse du Royaume et celle du monde.
              Nous œuvrons pour l'insertion harmonieuse des jeunes Marocains de France dans la société française,
              tout en faisant vivre et rayonner les valeurs du Maroc transmises par les générations précédentes.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Proximité</h3>
                <p className="text-gray-600">Au plus près de la jeunesse pour mieux l'accompagner</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Humanité</h3>
                <p className="text-gray-600">Placer l'humain au cœur de toutes nos actions</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Solidarité</h3>
                <p className="text-gray-600">Soutenir et accompagner chaque membre dans ses projets</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Fraternité</h3>
                <p className="text-gray-600">Créer des liens durables entre les jeunes de France, du Maroc et d'ailleurs</p>
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
              Nos Actions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des activités régulières dans les domaines sportif, culturel, social, civique et humanitaire
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Webinaire — Passé */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/events/webinaire-diaspora-mars-2026/affiche.jpeg"
                  alt="Webinaire Diaspora Marocaine"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    26 mars 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Webinaire</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  Diaspora Marocaine : Entre perception, contribution et avenir commun
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Plus de 2h de débat en live sur l&apos;engagement de la jeunesse MRE, avec Ahmed Ghayet et Mehdi Heurteloup.
                </p>
                <Link href="/news/webinaire-diaspora-mars-2026" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  Voir l&apos;événement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Ftour Pluriel */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/events/ftour-pluriel-2026/main-ftour.jpg"
                  alt="Ftour Pluriel 2026"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    1 mars 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Événement</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  Génération Diaspora au Ftour Pluriel — 16ème édition
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  180 invités réunis à Casablanca pour célébrer la jeunesse marocaine et le vivre-ensemble.
                </p>
                <Link href="/news/ftour-pluriel-2026" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  Voir l&apos;événement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/news" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              Voir toutes les actualités <ArrowRight className="w-4 h-4" />
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
                À propos de nous
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Créée le 6 septembre 2025 conformément à la loi française du 1er juillet 1901,
                Génération Diaspora est née d'une dynamique citoyenne et collective. Notre association
                ambitionne de devenir une plateforme durable de mobilisation, de créativité et de solidarité.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous souhaitons contribuer à l'émergence d'une génération engagée, responsable et fière de son héritage,
                pleinement intégrée dans son présent et tournée vers l'avenir, tout en favorisant le rapprochement
                entre les deux rives de la Méditerranée.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Découvrir notre histoire
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/team.jpg"
                alt="L'équipe Génération Diaspora"
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

