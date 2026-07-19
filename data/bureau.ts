export interface BureauMember {
  name: string;
  role: string;
  initials: string;
  description?: string;
  availability?: string;
}

export interface Membre {
  name: string;
  initials: string;
  isNew?: boolean;
  joinDate?: string;
  city?: string;
  fonction?: string;
}

export interface RoadmapPhase {
  phase: string;
  period: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

// Bureau 2026

export const presidentHonneur: BureauMember = {
  name: "Ahmed Ghayat",
  role: "Parrain & Président d'honneur",
  initials: "AG",
};

export const bureauLegal: BureauMember[] = [
  {
    name: "Hamid LAFREDI",
    role: "Président",
    initials: "HL",
    description: "Direction stratégique et représentation",
  },
  {
    name: "Morad FADIL",
    role: "Vice-Président",
    initials: "MF",
    description: "Support et coordination",
  },
  {
    name: "Zakaria El Rhosn",
    role: "Secrétaire Général",
    initials: "ZE",
    description: "Organisation et administration",
    availability: "4–6h/semaine",
  },
  {
    name: "Omar Walali Loudyi",
    role: "Trésorier & Responsable Communication",
    initials: "OW",
    description: "Gestion financière et porte-parole",
    availability: "4–6h/semaine",
  },
  {
    name: "Youness DRISSI SLIMANI",
    role: "Secrétaire Adjoint",
    initials: "YD",
    description: "Assistance administrative et développement de projets",
    availability: "2–4h/semaine",
  },
  {
    name: "Mehdi Bennis",
    role: "Trésorier Adjoint",
    initials: "BM",
    description: "Support financier.",
  },
];

export const postesOperationnels: BureauMember[] = [
  {
    name: "Smaïn Qasimi",
    role: "Responsable Événements",
    initials: "SQ",
    description: "Sport, Jeunesse, Éducation",
    availability: "4–6h/semaine",
  },
];

export const conseillers: BureauMember[] = [
  {
    name: "Tarik Jaabouki",
    role: "Conseiller",
    initials: "TJ",
    availability: "< 1h/semaine",
  },
  {
    name: "Rhissam Boudina",
    role: "Conseiller",
    initials: "RB",
    availability: "2–4h/semaine",
  },
  {
    name: "Imane Kaaouch",
    role: "Conseillère",
    initials: "IK",
    availability: "< 2h/semaine",
  },
];

export const membres: Membre[] = [
  { name: "Ahmed Ghayat", initials: "AG" },
  {
    name: "Mehdi Bennis",
    initials: "BM",
    isNew: true,
    joinDate: "20 janvier 2026",
    city: "Montpellier",
    fonction: "Développeur informatique freelance",
  },
  { name: "Hamid LAFREDI", initials: "HL" },
  { name: "Imane Kaaouch", initials: "IK" },
  {
    name: "Lamia Haddou",
    initials: "LH",
    isNew: true,
    joinDate: "16 janvier 2026",
    city: "Saint-Ouen-sur-Seine",
    fonction: "Responsable programmes transition numérique",
  },
  { name: "Morad Fadil", initials: "MF" },
  { name: "Omar WALALI LOUDYI", initials: "OW" },
  { name: "Rhissam Boudina", initials: "RB" },
  {
    name: "Safaa Ez-ziani",
    initials: "SE",
    isNew: true,
    joinDate: "14 janvier 2026",
    city: "Annecy / Clermont-Ferrand",
    fonction: "Growth Marketing Manager",
  },
  { name: "Smaïn QASIMI", initials: "SQ" },
  { name: "Tarik JAABOUKI", initials: "TJ" },
  { name: "Youness DRISSI SLIMANI", initials: "YD" },
  { name: "Zakaria El Rhosn", initials: "ZE" },
  { name: "Zirare", initials: "ZI" },
];

export const roadmap2026: RoadmapPhase[] = [
  {
    phase: "T1 – Connexion & Culture",
    period: "Janvier – Mars 2026",
    description:
      "Organisation de webinaires thématiques et d'activités culturelles en ligne pour fédérer la communauté, partager les savoirs et renforcer le sentiment d'appartenance à travers les frontières.",
  },
  {
    phase: "T2 – Dialogue institutionnel",
    period: "Avril – Juin 2026",
    description:
      "Organisation de rencontres physiques avec des ambassades et consulats représentant la diaspora marocaine. Un espace de dialogue structuré pour faire entendre la voix des Marocains du monde et tisser des liens durables avec les institutions.",
  },
  {
    phase: "T3 – Célébrer la jeunesse",
    period: "Juillet – Septembre 2026",
    description:
      "Événement physique dédié à la mise en valeur de la jeunesse marocaine de la diaspora — parcours, talents et réussites. Un moment de visibilité, de fierté collective et d'inspiration pour la nouvelle génération.",
  },
  {
    phase: "T4 – Plateforme Diaspora",
    period: "Octobre – Décembre 2026",
    description:
      "Lancement de la plateforme numérique de Génération Diaspora : un espace centralisé pour connecter les membres, accéder aux ressources, suivre les projets et renforcer l'impact collectif de la diaspora marocaine.",
  },
];

export const stats: Stat[] = [
  { label: "Membres", value: "14" },
  { label: "Candidatures bureau", value: "8" },
  { label: "Postes pourvus", value: "7" },
  { label: "Engagement", value: "100%" },
];