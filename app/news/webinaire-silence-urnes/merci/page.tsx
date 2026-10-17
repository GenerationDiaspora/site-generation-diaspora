import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import DirectRegistration from "@/components/events/WebinaireSilenceUrnes/DirectRegistration";
import { GOOGLE_CALENDAR_URL } from "@/lib/webinaire-silence-urnes";

export const metadata: Metadata = {
  title: "Inscription au webinaire — Génération Diaspora",
  robots: { index: false, follow: false },
};

const speakers = [
  {
    name: "Mehdi Alaoui",
    role: "Founder & CEO de Geeks et LaStartupStation",
    photo: "/images/events/webinaire-silence-urnes/mehdi-alaoui.jpg",
  },
  {
    name: "Assad Mohamed",
    role: "Délégué territorial et départemental groupe SOS",
    photo: "/images/events/webinaire-silence-urnes/assad-mohamed.jpg",
  },
];

export default function MerciPage({
  searchParams,
}: {
  searchParams: { e?: string; s?: string };
}) {
  const { e, s } = searchParams;
  if (!e || !s) {
    redirect("/news/webinaire-silence-urnes#inscription");
  }

  return (
    <div className="bg-beige">
      {/* Affiche */}
      <div className="container mx-auto px-4 pt-8">
        <div className="relative max-w-6xl mx-auto aspect-[1125/469] overflow-hidden rounded-2xl shadow-lg bg-gray-900">
          <Image
            src="/images/events/webinaire-silence-urnes/affiche.jpg"
            alt="Webinaire : Entendre le silence de la jeunesse — mercredi 21 octobre 2026, 21h (heure de France), 19h (heure du Maroc)"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
            priority
          />
          <div className="absolute top-3 left-3 md:top-5 md:left-5">
            <span className="bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Webinaire
            </span>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <section className="container mx-auto px-4 mt-8">
        <DirectRegistration email={e} signature={s} googleCalendarUrl={GOOGLE_CALENDAR_URL} />
      </section>

      {/* Infos clés */}
      <section className="container mx-auto px-4 mt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Entendez le silence de nos jeunes dans les urnes, tant en France qu’au Maroc
          </h2>
          <p className="mt-4 text-2xl md:text-3xl font-bold text-red-800">
            Le mercredi 21 octobre à 21 heures (heure de France), 19 heures (heure du Maroc)
          </p>
          <p className="mt-3 text-gray-600">
            Webinaire en live et gratuit sur Google Meet. Les interactions en live et par chat seront possibles.
          </p>
          <h3 className="mt-6 text-xl font-bold text-gray-900">
            Avec nos deux invités :
          </h3>
          <div className="mt-8 grid sm:grid-cols-2 gap-10">
            {speakers.map((sp) => (
              <div key={sp.name} className="flex flex-col items-center">
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <Image src={sp.photo} alt={sp.name} fill sizes="176px" className="object-cover" />
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900">{sp.name}</p>
                <p className="text-gray-600">{sp.role}</p>
              </div>
            ))}
          </div>
          <Link
            href="/news/webinaire-silence-urnes"
            className="mt-10 inline-flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700"
          >
            Lire la présentation du webinaire <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
