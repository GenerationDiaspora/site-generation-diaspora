import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "À propos - Génération Diaspora",
  description:
    "Découvrez l'histoire de Génération Diaspora, notre équipe et notre mission pour la diaspora.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
