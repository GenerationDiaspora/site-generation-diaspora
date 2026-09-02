import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Actualités - Génération Diaspora",
  description:
    "Découvrez les dernières actualités, événements et projets de Génération Diaspora.",
};

const newsItems = [
  {
    id: -3,
    title: "Webinaire — Retour Estival des MRE : Mieux se comprendre, mieux avancer ensemble",
    date: "2026-06-25",
    category: "Webinaire",
    excerpt:
      "Jeudi 25 juin à 21h (heure française). Comment améliorer la perception entre jeunes MRE et jeunes du Royaume ? Un webinaire gratuit et ouvert à tous, en partenariat avec Oxy'Jeunes.",
    imageSrc: "/images/events/webinaire-retour-mre/poster.jpg",
    href: "/news/webinaire-retour-mre",
  },
  {
    id: -2,
    title: "Diaspora Ciné Talk — Mon Oriental : Entre mémoire et identité",
    date: "2026-05-10",
    category: "Diaspora Ciné Talk",
    excerpt:
      "Projection & débat autour du film documentaire Mon Oriental de Khalid Zaouche. Le 10 mai 2026 à 15h à Paris. En présence du réalisateur. Inscription obligatoire.",
    imageSrc: "/images/events/cine-talk-mon-oriental/poster.webp",
    href: "/news/cine-talk-mon-oriental",
  },
  {
    id: -1,
    title: "Webinaire : Diaspora Marocaine — Entre perception, contribution et avenir commun",
    date: "2026-03-26",
    category: "Webinaire",
    excerpt:
      "Plus de 2 heures de débat, d'échanges et de prises de parole pour fédérer les jeunesses de la diaspora et du Royaume autour d'un idéal commun. Ahmed Ghayet et Mehdi Heurteloup parmi les intervenants.",
    imageSrc: "/images/events/webinaire-diaspora-mars-2026/affiche.jpeg",
    href: "/news/webinaire-diaspora-mars-2026",
  },
  {
    id: 0,
    title: "Génération Diaspora au Ftour Pluriel — 16ème édition",
    date: "2026-03-01",
    category: "Événement",
    excerpt:
      "Hamid Lafredi, président de Génération Diaspora, était présent à la 16ème édition du Ftour Pluriel à Casablanca, aux côtés de 180 invités réunis pour célébrer la jeunesse marocaine et le vivre-ensemble.",
    imageSrc: "/images/events/ftour-pluriel-2026/main-ftour.jpg",
    href: "/news/ftour-pluriel-2026",
  },
];

export default function NewsPage() {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
            <p className="text-xl opacity-90">
              Restez informé de nos derniers événements, projets et initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => {
                const CardWrapper = item.href
                  ? ({ children }: { children: React.ReactNode }) => (
                      <Link href={item.href!} className="block group">
                        {children}
                      </Link>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="group">{children}</div>
                    );

                return (
                  <article
                    key={item.id}
                    className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <CardWrapper>
                      {/* Image ou gradient */}
                      {"imageSrc" in item && item.imageSrc ? (
                        <div className="h-48 relative overflow-hidden">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className={`h-48 bg-gradient-to-br ${"gradient" in item ? item.gradient : ""}`}
                        />
                      )}

                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                            {item.category}
                          </span>
                          <span className="text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString("fr-FR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        {item.href ? (
                          <span className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group/btn">
                            Lire plus
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        ) : (
                          <button className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group/btn">
                            Lire plus
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </CardWrapper>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ne manquez aucune actualité
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir toutes nos
              actualités directement dans votre boîte mail
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              S&apos;inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
