import { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Actualités - Génération Diaspora",
  description:
    "Découvrez les dernières actualités, événements et projets de Génération Diaspora.",
};

export default function NewsPage() {
  return <NewsPageClient />;
}
