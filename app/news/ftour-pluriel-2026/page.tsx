import { Metadata } from "next";
import FtourPluriel2026Client from "./FtourPluriel2026Client";

export const metadata: Metadata = {
  title: "Ftour Pluriel 2026 — Génération Diaspora",
  description:
    "Hamid Lafredi, président de Génération Diaspora, représentait l'association à la 16ème édition du Ftour Pluriel à Casablanca, réunissant 180 invités autour du vivre-ensemble.",
};

export default function FtourPluriel2026Page() {
  return <FtourPluriel2026Client />;
}
