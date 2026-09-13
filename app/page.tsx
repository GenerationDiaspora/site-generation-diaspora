import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import TeamCarousel from "@/components/home/TeamCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/logo-white.png"
                alt="Logo Génération Diaspora"
                width={256}
                height={256}
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
            {/* Webinaire Retour Estival MRE — Passé */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-orange-800">
                <Image
                  src="/images/events/webinaire-retour-mre/poster.jpg"
                  alt="Webinaire Retour Estival des MRE"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    25 juin 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">Webinaire</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  Retour Estival des MRE — Entre deux rives
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Deux jeunesses qui se croisent. Comment améliorer la perception mutuelle ? En partenariat avec Oxy&apos;Jeunes.
                </p>
                <Link href="/news/webinaire-retour-mre" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  Voir l&apos;événement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* SMAPIMMO — Foot marocain & diaspora — Passé */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-950 via-red-900 to-green-950">
                <Image
                  src="/images/events/smapimmo/photo-1.jpg"
                  alt="Grande Rencontre du Foot marocain et de la diaspora"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    13 juin 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Conférence-débat</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  Grande Rencontre du Foot marocain et de la diaspora
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Au SMAPIMMO, avec Marocains Pluriels et TFT Maroc. Un débat fédérateur autour du sport, de l&apos;engagement et de l&apos;avenir.
                </p>
                <Link href="/news/smapimmo" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  Voir l&apos;événement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Diaspora Ciné Talk */}
            <div className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gradient-to-b from-amber-950 via-orange-900 to-amber-800">
                <Image
                  src="/images/events/cine-talk-mon-oriental/photo-3.jpg"
                  alt="Diaspora Ciné Talk Mon Oriental"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-800/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    10 mai 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Diaspora Ciné Talk</span>
                <h3 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  Mon Oriental — Entre mémoire et identité
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Projection & débat du film de Khalid Zaouche. En présence de Samira Sitail, Ambassadeure du Maroc en France.
                </p>
                <Link href="/news/cine-talk-mon-oriental" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
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

      <TeamCarousel />

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

