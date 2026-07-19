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
  presidentHonneur,
  bureauLegal,
  postesOperationnels,
  conseillers,
  membres,
  roadmap2026,
  stats,
  type BureauMember,
  type Membre,
} from "@/data/bureau";


export const metadata: Metadata = {
  title: "À propos - Génération Diaspora",
  description:
    "Découvrez l'histoire de Génération Diaspora, notre équipe et notre mission pour la diaspora.",
};

function InitialsAvatar({
  initials,
  size = "md",
  variant = "primary",
}: {
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "gold" | "teal";
}) {
  const sizes = {
    sm: "w-16 h-16 text-lg",
    md: "w-20 h-20 text-xl",
    lg: "w-24 h-24 text-2xl",
    xl: "w-32 h-32 text-3xl",
  };
  const gradients = {
    primary: "from-primary-500 to-primary-700",
    secondary: "from-secondary-400 to-secondary-600",
    gold: "from-gold-400 to-gold-600",
    teal: "from-primary-500 to-primary-700",
  };
  return (
    <div
      className={`${sizes[size]} mx-auto rounded-full bg-gradient-to-br ${gradients[variant]} flex items-center justify-center`}
    >
      <span className="font-bold text-white">{initials}</span>
    </div>
  );
}

function BureauCard({
  member,
  size = "md",
  variant = "primary",
}: {
  member: BureauMember;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "gold" | "teal";
}) {
  return (
    <div className="text-center">
      <InitialsAvatar initials={member.initials} size={size} variant={variant} />
      <h3 className="font-semibold mt-3 mb-1 text-gray-900">{member.name}</h3>
      <p
        className={`text-sm font-medium ${
          variant === "gold"
            ? "text-gold-600"
            : variant === "secondary"
            ? "text-secondary-600"
            : "text-primary-600"
        }`}
      >
        {member.role}
      </p>
      {member.description && (
        <p className="text-xs text-gray-500 mt-1">{member.description}</p>
      )}
    </div>
  );
}

function MembreCard({ membre }: { membre: Membre }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <span className="font-bold text-white text-lg">{membre.initials}</span>
      </div>
      <p className="text-sm font-semibold text-gray-900 mt-2 leading-tight">
        {membre.name}
      </p>
    </div>
  );
}

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

      {/* Chiffres clés */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Bureau 2026 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
              Notre Bureau 2026
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Une équipe renouvelée, engagée et passionnée au service de la
              jeunesse marocaine
            </p>

            {/* Parrain & Président d'honneur */}
            <div className="mb-12 text-center">
              <BureauCard member={presidentHonneur} size="md" variant="gold" />
            </div>

            {/* Bureau légal */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gray-200" />
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider px-4">
                  Bureau légal
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {bureauLegal.map((member) => (
                  <BureauCard
                    key={member.name}
                    member={member}
                    size={member.role === "Président" ? "lg" : "md"}
                    variant="primary"
                  />
                ))}
              </div>
            </div>

            {/* Postes opérationnels */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gray-200" />
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider px-4">
                  Poste opérationnel
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="flex justify-center">
                {postesOperationnels.map((member) => (
                  <BureauCard
                    key={member.name}
                    member={member}
                    size="md"
                    variant="teal"
                  />
                ))}
              </div>
            </div>

            {/* Conseillers */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gray-200" />
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider px-4">
                  Conseillers
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {conseillers.map((member) => (
                    <BureauCard
                      key={member.name}
                      member={member}
                      size="sm"
                      variant="secondary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Membres */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
              Nos Membres
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {membres.length} membres engagés pour faire rayonner la diaspora
              marocaine
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
              {membres.map((membre) => (
                <MembreCard key={membre.name} membre={membre} />
              ))}
            </div>
          </div>
        </div>
      </section>

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