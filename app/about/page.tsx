import { Metadata } from "next";
import Image from "next/image";
import { Mail, Users, Target, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos - Génération Diaspora",
  description: "Découvrez l'histoire de Génération Diaspora, notre équipe et notre mission pour la diaspora.",
};

export default function AboutPage() {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-xl opacity-90">
              Découvrez qui nous sommes, notre histoire et ce qui nous anime au quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Notre Histoire</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Le 6 septembre 2025 s'est tenue l'Assemblée constitutive de l'association Génération Diaspora,
                officiellement créée conformément à la loi française du 1er juillet 1901 et au décret du 16 août 1901.
                Cette réunion fondatrice a permis l'adoption des statuts et l'élection du bureau de l'association.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Portée par une dynamique citoyenne et collective, Génération Diaspora se veut un cadre structuré
                au service de la jeunesse marocaine en France, tout en entretenant des liens étroits avec la jeunesse
                du Royaume et celle du monde. L'association se fonde sur quatre valeurs clés : proximité, humanité,
                solidarité et fraternité.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Au-delà des actions ponctuelles, l'association ambitionne de devenir une plateforme durable de mobilisation,
                de créativité et de solidarité, au service de la jeunesse et du rapprochement entre les deux rives de la Méditerranée.
                Le siège social est établi au 72 avenue Kléber, 75016 Paris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Nos Valeurs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Proximité</h3>
                <p className="text-gray-600">
                  Au plus près de la jeunesse pour mieux l'accompagner dans son parcours
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Humanité</h3>
                <p className="text-gray-600">
                  Placer l'humain au cœur de toutes nos actions et décisions
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Solidarité</h3>
                <p className="text-gray-600">
                  Soutenir et accompagner chaque membre dans ses projets et aspirations
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fraternité</h3>
                <p className="text-gray-600">
                  Créer des liens durables entre les jeunes de France, du Maroc et d'ailleurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Notre Bureau</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Une équipe passionnée et engagée au service de la jeunesse marocaine
            </p>

            {/* Président */}
            <div className="mb-12 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Mehdi HAZGUER</h3>
              <p className="text-primary-600 font-semibold mb-2">Président</p>
            </div>

            {/* Vice-Présidents */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Hiba DADDA</h3>
                <p className="text-primary-600 font-medium">Vice-Présidente</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Hamid LAFREDI</h3>
                <p className="text-primary-600 font-medium">Vice-Président</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Smain QASIMI</h3>
                <p className="text-primary-600 font-medium">Vice-Président</p>
              </div>
            </div>

            {/* Secrétaires et Trésoriers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Younes OUMOULAY</h3>
                <p className="text-secondary-600 font-medium text-sm">Secrétaire Général</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Zakaria ELRHOSN</h3>
                <p className="text-secondary-600 font-medium text-sm">Secrétaire Général Adjoint</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Omar WALALI LOUDYI</h3>
                <p className="text-secondary-600 font-medium text-sm">Trésorier</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Morad FADIL</h3>
                <p className="text-secondary-600 font-medium text-sm">Trésorier Adjoint</p>
              </div>
            </div>

            {/* Porte-parole */}
            <div className="mb-12 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ilyan BERRADI</h3>
              <p className="text-primary-600 font-medium">Porte-parole</p>
            </div>

            {/* Conseillers */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Conseillers</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <p className="text-gray-700">Eliav AMOUYAL</p>
                <p className="text-gray-700">Mohamed BOUTAMRA</p>
                <p className="text-gray-700">Ayoub DADDA</p>
                <p className="text-gray-700">Youness DRISSI SLIMANI</p>
                <p className="text-gray-700">Taoufik EL GALAI</p>
                <p className="text-gray-700">Aya GOUZMI</p>
                <p className="text-gray-700">Imane KAAOUCHE</p>
                <p className="text-gray-700">Nehoray MOYAL</p>
                <p className="text-gray-700">Zirar SIRAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contactez-nous</h2>
            <p className="text-gray-600 mb-6">
              Pour toute question ou demande d'information, n'hésitez pas à nous contacter
            </p>
            <div className="space-y-4">
              <a
                href="mailto:contact@generation-diaspora.com"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                contact@generation-diaspora.com
              </a>
              <p className="text-gray-600">
                <strong>Téléphone :</strong> +33 7 45 89 63 08
              </p>
              <p className="text-gray-600">
                <strong>Adresse :</strong><br />
                72 Avenue Kléber<br />
                75016 Paris, France
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

