import { Metadata } from "next";
import WebinaireDiasporaMars2026Client from "./WebinaireDiasporaMars2026Client";

export const metadata: Metadata = {
  title: "Webinaire Diaspora Marocaine — Génération Diaspora",
  description:
    "Retour sur le webinaire du 26 mars 2026 : Diaspora Marocaine entre perception, contribution et avenir commun. Plus de 2 heures d'échanges, de débats et de prises de parole pour fédérer les deux jeunesses.",
};

export default function WebinaireDiasporaMars2026Page() {
  return <WebinaireDiasporaMars2026Client />;
}
