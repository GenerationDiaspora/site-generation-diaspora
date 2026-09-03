import { Metadata } from "next";
import { Users, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Rejoindre Génération Diaspora",
  description:
    "Tu es jeune, engagé(e) et fier(e) de tes racines ? Rejoins Génération Diaspora — association de la jeunesse marocaine en France.",
};

export default function RejoindreGDPage() {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoindre Génération Diaspora
            </h1>
            <p className="text-xl opacity-90">
              Tu es jeune, engagé(e) et fier(e) de tes racines ? Rejoins un collectif qui agit pour la jeunesse marocaine en France et dans le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi rejoindre */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Une communauté engagée</h3>
              <p className="text-gray-600 text-sm">
                Rejoins des jeunes passionnés qui partagent tes valeurs et ton envie d&apos;agir.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Des projets concrets</h3>
              <p className="text-gray-600 text-sm">
                Participe à des événements, webinaires et initiatives qui ont un impact réel.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Un réseau international</h3>
              <p className="text-gray-600 text-sm">
                Connecte-toi avec la diaspora marocaine en France, au Maroc et dans le monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire Google */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Ta candidature
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Quelques minutes suffisent pour nous rejoindre.
            </p>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnvJvqxliSOzEyfJ2An2E2cwhxxtYn_Fcy50YnYLckY9un4A/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulaire de candidature Génération Diaspora"
              >
                Chargement du formulaire…
              </iframe>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              Si le formulaire ne s&apos;affiche pas,{" "}
              <a
                href="https://forms.gle/dcqgSv1uUKB5re9m9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline"
              >
                cliquez ici pour y accéder directement
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
