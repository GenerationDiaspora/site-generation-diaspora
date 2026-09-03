export interface BureauMember {
  name: string;
  role: string;
  initials: string;
  photo: string;
  description?: string;
  availability?: string;
}

export interface Membre {
  name: string;
  initials: string;
  photo: string;
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

// Bureau 2026

export const presidentHonneur: BureauMember = {
  name: "Ahmed Ghayat",
  role: "Parrain & Président d'honneur",
  initials: "AG",
  photo: "/images/membre-gd/PresidentDhonneur.Ahmed.Ghayat.jpg",
};

export const bureauLegal: BureauMember[] = [
  {
    name: "Hamid Lafredi",
    role: "Président",
    initials: "HL",
    photo: "/images/membre-gd/President.Hamid.Lafredi.jpg",
    description: "Direction stratégique et représentation",
  },
  {
    name: "Morad Fadil",
    role: "Vice-Président",
    initials: "MF",
    photo: "/images/membre-gd/Vice.President.Morad.Fadil.jpg",
    description: "Support et coordination",
  },
  {
    name: "Omar Walali Loudiyi",
    role: "Secrétaire Général",
    initials: "OW",
    photo: "/images/membre-gd/SecretaireGeneral.Omar.Walali.Loudiyi.jpg",
    description: "Organisation et administration",
    availability: "4–6h/semaine",
  },
  {
    name: "Youness Drissi Slimani",
    role: "Trésorier",
    initials: "YDS",
    photo: "/images/membre-gd/Trésorier.Youness.Slimane.webp",
    description: "Gestion financière de l'association",
    availability: "4–6h/semaine",
  },
  {
    name: "Mehdi Bennis",
    role: "Trésorier Adjoint",
    initials: "BM",
    photo: "/images/membre-gd/TrésorierAdjoint.Mehdi.Bennis.jpg",
    description: "Support financier",
  },
];

export const conseillers: BureauMember[] = [
  {
    name: "Rhissam Boudina",
    role: "Conseiller",
    initials: "RB",
    photo: "/images/membre-gd/Rhissam.Boudina.jpg",
    availability: "2–4h/semaine",
  },
];

export const membres: Membre[] = [
  {
    name: "Ahmed",
    initials: "AH",
    photo: "/images/membre-gd/avatar-placeholder.svg",
  },
  {
    name: "Fady Aït Azza",
    initials: "FA",
    photo: "/images/membre-gd/Fady.Aït.Azza.jpg",
  },
  {
    name: "Hassan",
    initials: "HS",
    photo: "/images/membre-gd/avatar-placeholder.svg",
  },
  {
    name: "Manal Hanini",
    initials: "MH",
    photo: "/images/membre-gd/Manal.HANINI.jpg",
  },
  {
    name: "Smaïn Qasimi",
    initials: "SQ",
    photo: "/images/membre-gd/Smaïn.Qasimi.jpg",
  },
  {
    name: "Tarik Jaabouki",
    initials: "TJ",
    photo: "/images/membre-gd/Tarik.Jaabouki.jpg",
  },
  {
    name: "Zirar",
    initials: "ZS",
    photo: "/images/membre-gd/Zirar.Sizare.jpg",
  },
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
