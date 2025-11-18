import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualités - Génération Diaspora",
  description: "Découvrez les dernières actualités, événements et projets de Génération Diaspora.",
};

const newsItems = [
  {
    id: 1,
    title: "Lancement de notre nouveau programme de mentorat",
    date: "2025-11-01",
    category: "Programme",
    excerpt: "Nous sommes ravis d'annoncer le lancement de notre programme de mentorat qui mettra en relation des entrepreneurs expérimentés avec de jeunes porteurs de projets.",
    image: "from-primary-400 to-primary-600",
  },
  {
    id: 2,
    title: "Retour sur notre festival culturel annuel",
    date: "2025-10-15",
    category: "Événement",
    excerpt: "Plus de 500 personnes ont participé à notre festival culturel annuel. Retrouvez les moments forts de cette journée exceptionnelle riche en partages et en émotions.",
    image: "from-secondary-400 to-secondary-600",
  },
  {
    id: 3,
    title: "Partenariat avec des organisations locales",
    date: "2025-10-01",
    category: "Partenariat",
    excerpt: "Génération Diaspora renforce son réseau en signant de nouveaux partenariats avec des organisations locales pour amplifier notre impact sur le terrain.",
    image: "from-primary-500 to-secondary-500",
  },
  {
    id: 4,
    title: "Atelier entrepreneuriat : Les clés du succès",
    date: "2025-09-20",
    category: "Atelier",
    excerpt: "Notre dernier atelier sur l'entrepreneuriat a réuni 50 participants désireux d'apprendre les meilleures pratiques pour lancer et développer leur entreprise.",
    image: "from-primary-600 to-primary-400",
  },
  {
    id: 5,
    title: "Nouvelle initiative pour l'éducation des jeunes",
    date: "2025-09-05",
    category: "Projet",
    excerpt: "Lancement d'un nouveau projet éducatif destiné aux jeunes de la diaspora pour les accompagner dans leur parcours scolaire et professionnel.",
    image: "from-secondary-500 to-primary-500",
  },
  {
    id: 6,
    title: "Soirée networking : Connecter les talents",
    date: "2025-08-25",
    category: "Événement",
    excerpt: "Une soirée de networking exceptionnelle a permis à nos membres de créer de nouvelles connexions et d'explorer des opportunités de collaboration.",
    image: "from-primary-400 to-secondary-400",
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
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`h-48 bg-gradient-to-br ${item.image}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
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
                    <button className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group">
                      Lire plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
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
              Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités directement dans votre boîte mail
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              S'inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

