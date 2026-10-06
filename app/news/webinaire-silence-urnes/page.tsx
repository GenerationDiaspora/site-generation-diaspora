import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Monitor } from "lucide-react";
import RegistrationForm from "@/components/events/WebinaireSilenceUrnes/RegistrationForm";

export const metadata: Metadata = {
  title: "Entendez le silence de nos jeunes dans les urnes — Génération Diaspora",
  description:
    "Webinaire le mercredi 21 octobre à 21h : les jeunes de Génération Diaspora vous invitent à discuter de l’abstention des jeunes, tant en France qu’au Maroc. Avec Mehdi Alaoui et Assad Mohamed. Inscription gratuite.",
};

const speakers = [
  {
    name: "Mehdi Alaoui",
    role: "Founder & CEO de Geeks et LaStartupStation",
  },
  {
    name: "Assad Mohamed",
    role: "Délégué territorial et départemental groupe SOS",
  },
];

export default function WebinaireSilenceUrnesPage() {
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

      {/* Bandeau */}
      <div className="relative mt-6 overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-red-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Webinaire
            </span>
            <p className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
              Silence dans les urnes !
            </p>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Mercredi 21 octobre · 21h · En ligne
            </p>
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
              21 octobre 2026 · 21h – 22h
            </span>
            <span className="flex items-center gap-1">
              <Monitor className="w-4 h-4" />
              En ligne — Google Meet
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
            Entendez le silence de nos jeunes dans les urnes, tant en France qu’au Maroc
          </h1>

          {/* Corps */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Silence dans les urnes !
            </h2>

            <p className="leading-relaxed">
              Le taux de participation aux élections législatives au Maroc est si bas
              qu’il serait irresponsable de ne pas en faire un élément majeur de
              réflexion, de même en France où des élections présidentielles se
              préparent et où les jeunes franco-marocains se dirigent eux-mêmes,
              majoritairement, vers l’abstention.
            </p>

            <p className="leading-relaxed font-semibold">Et là il y a péril...</p>

            <p className="leading-relaxed">
              Péril car si les forces de la jeunesse se détournent de la construction -
              par l’expression de leurs voix - de la société dans laquelle ils vivent,
              alors tout perd sens.
            </p>

            <p className="leading-relaxed">
              Le silence de la jeunesse lors des rendez-vous électoraux laisse la place
              à tous les aléas car ce sont les générations d’aujourd’hui et de demain
              qui abandonnent les rênes.
            </p>

            <p className="leading-relaxed">
              Transposons cela à la dimension d’une famille :
            </p>

            <p className="leading-relaxed">
              Imaginons des parents qui font appel à leurs enfants au moment de prendre
              de grandes décisions :
            </p>

            <p className="leading-relaxed">
              Achat d’une voiture, décision concernant les études, attitude vis-à-vis
              d’un problème interne ou externe… et qu’à ce moment là les enfants leur
              répondent : &quot;nous n’en avons rien à faire, faites ce que vous voulez,
              cela ne nous concerne pas&quot;.
            </p>

            <p className="leading-relaxed">
              Alors la famille n’aura plus ni cohésion, ni unité, ni avenir commun…
            </p>

            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-red-500 pl-5 italic">
              N’en sommes nous pas là ?
            </p>

            <p className="leading-relaxed">
              Il ne s’agit pas de rejeter la responsabilité de l’abstention sur la
              jeunesse, mais elle en a bien sûr sa part…
            </p>

            <p className="leading-relaxed">
              Il est impérieux que les politiques - tous - que les Partis - tous – que
              les élus - tous - fassent leur examen de conscience.
            </p>

            <p className="leading-relaxed">
              Que n’ont-ils pas fait, qu’ont-ils mal fait, qu’ont-ils raté ?
            </p>

            <p className="leading-relaxed">
              Que doivent ils faire dès à présent pour retrouver la confiance de la
              jeunesse ?
            </p>
          </div>

          {/* Invitation */}
          <div className="mt-12 bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100">
            <p className="text-lg font-semibold text-gray-900 leading-relaxed">
              C’est de tout cela que les jeunes de Génération Diaspora vous invitent à
              discuter lors du webinaire qui y sera consacré
            </p>
            <p className="mt-4 text-xl font-bold text-red-800">
              Le mercredi 21 octobre à 21 heures
            </p>
            <h2 className="mt-6 text-xl font-bold text-gray-900 mb-4">
              Autour de deux invités :
            </h2>
            <ul className="space-y-4">
              {speakers.map((s) => (
                <li key={s.name} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{s.name}</span>
                    <span className="text-gray-600"> — {s.role}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-bold text-primary-700">Inscription gratuite.</p>
          </div>
        </div>
      </article>

      {/* Inscription */}
      <section id="inscription" className="pb-16">
        <div className="container mx-auto px-4">
          <RegistrationForm />
        </div>
      </section>

      {/* Retour */}
      <div className="container mx-auto px-4 pb-12 text-center">
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
