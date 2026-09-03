import { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Users,
  Heart,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Calendar,
} from "lucide-react";
import {
  bureauLegal,
  conseillers,
  membres,
  roadmap2026,
} from "@/data/bureau";
import TeamShowcase from "@/components/about/TeamShowcase";


export const metadata: Metadata = {
  title: "À propos - Génération Diaspora",
  description:
    "Découvrez l'histoire de Génération Diaspora, notre équipe et notre mission pour la diaspora.",
};

export default function AboutPage() {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de nous
            </h1>
            <p className="text-xl opacity-90">
              Découvrez qui nous sommes, notre histoire et ce qui nous anime au
              quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Notre Histoire
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Le 6 septembre 2025 s&apos;est tenue l&apos;Assemblée constitutive de
                l&apos;association Génération Diaspora, officiellement créée conformément
                à la loi française du 1er juillet 1901 et au décret du 16 août
                1901. Cette réunion fondatrice a permis l&apos;adoption des statuts et
                l&apos;élection du bureau de l&apos;association.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Portée par une dynamique citoyenne et collective, Génération
                Diaspora se veut un cadre structuré au service de la jeunesse
                franco-marocaine en France et de la communauté marocaine du monde,
                tout en entretenant des liens étroits avec la jeunesse du Royaume.
                L&apos;association se fonde sur quatre valeurs clés : proximité, humanité,
                solidarité et fraternité.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Au-delà des actions ponctuelles, l&apos;association ambitionne de
                devenir une plateforme durable de mobilisation, de créativité et
                de solidarité — un véritable outil au service des deux rives de
                la Méditerranée. Le siège social est établi au{" "}
                <strong>73, rue du Château, 92100 Boulogne-Billancourt</strong>.
              </p>
            </div>
              </div>

              {/* Photo */}
              <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about/team.jpg"
                  alt="L'équipe Génération Diaspora"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Proximité
                </h3>
                <p className="text-gray-600">
                  Agir aux côtés de la population marocaine de France, et en
                  particulier de la jeunesse
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Humanité
                </h3>
                <p className="text-gray-600">
                  Placer l&apos;humain au cœur de toutes nos actions, à travers le
                  social et l&apos;humanitaire
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Solidarité
                </h3>
                <p className="text-gray-600">
                  Soutenir chaque membre dans ses projets via le sport, la
                  culture, le civisme et le vivre-ensemble
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Fraternité
                </h3>
                <p className="text-gray-600">
                  Établir un partenariat concret entre la jeunesse de France,
                  du Maroc et du monde
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Bureau & Nos Membres */}
      <TeamShowcase
        bureauLegal={bureauLegal}
        conseillers={conseillers}
        membres={membres}
      />

      {/* Feuille de route 2026 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Feuille de route 2026
              </h2>
            </div>
            <p className="text-center text-gray-600 mb-12">
              Notre programme d&apos;actions pour l&apos;année 2026
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap2026.map((phase, index) => (
                <div
                  key={phase.phase}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-700 font-bold text-sm">
                      T{index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{phase.phase}</h3>
                  <p className="text-xs text-primary-600 font-medium mb-3">
                    {phase.period}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Contactez-nous
            </h2>
            <p className="text-gray-600 mb-6">
              Pour toute question ou demande d&apos;information, n&apos;hésitez pas à nous
              contacter
            </p>
            <div className="space-y-6">
              <a
                href="mailto:contact@generationdiaspora.com"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                contact@generationdiaspora.com
              </a>

              <div>
                <p className="text-gray-600 mb-4 font-semibold">
                  Suivez-nous sur les réseaux sociaux :
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.facebook.com/groups/1013728587602196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/generation.diaspora.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/company/génération-diaspora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}