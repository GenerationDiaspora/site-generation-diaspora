import { Metadata } from "next";
import WebinaireRetourMREClient from "./WebinaireRetourMREClient";

const PAGE_URL = "https://www.generationdiaspora.com/news/webinaire-retour-mre";

export const metadata: Metadata = {
  title: "Webinaire — Retour Estival des MRE | Génération Diaspora",
  description:
    "Webinaire gratuit le jeudi 25 juin 2026 à 21h. Retour estival des MRE : comment améliorer la perception entre jeunes MRE et jeunes du Royaume ? En partenariat avec Oxy'Jeunes.",
  openGraph: {
    title: "Webinaire — Retour Estival des MRE | Génération Diaspora",
    description:
      "Webinaire gratuit le jeudi 25 juin 2026 à 21h. Retour estival des MRE : comment améliorer la perception entre jeunes MRE et jeunes du Royaume ?",
    url: PAGE_URL,
    images: [
      {
        url: "/images/events/webinaire-retour-mre/poster.jpg",
        width: 600,
        height: 900,
        alt: "Affiche — Retour Estival des MRE — Webinaire 25 Juin 2026",
      },
    ],
    type: "website",
  },
};

export default function WebinaireMREPage() {
  return <WebinaireRetourMREClient />;
}
