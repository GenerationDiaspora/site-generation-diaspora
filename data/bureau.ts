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
    name: "Ahmed Ghayat",
    role: "Président d'honneur",
    initials: "AG",
    photo: "/images/membre-gd/PresidentDhonneur.Ahmed.Ghayat.jpg",
  },
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
    name: "Tarik Jaabouki",
    role: "Vice-Président",
    initials: "TJ",
    photo: "/images/membre-gd/Tarik.Jaabouki.jpg",
  },
  {
    name: "Omar Walali Loudyi",
    role: "Secrétaire Général",
    initials: "OW",
    photo: "/images/membre-gd/SecretaireGeneral.Omar.Walali.Loudiyi.jpg",
    description: "Organisation et administration",
  },
  {
    name: "Rhissam Boudina",
    role: "Secrétaire Adjoint",
    initials: "RB",
    photo: "/images/membre-gd/Rhissam.Boudina.jpg",
  },
  {
    name: "Youness Drissi Slimani",
    role: "Trésorier",
    initials: "YDS",
    photo: "/images/membre-gd/Trésorier.Youness.Slimane.webp",
    description: "Gestion financière de l'association",
  },
  {
    name: "Mehdi Bennis",
    role: "Trésorier Adjoint",
    initials: "BM",
    photo: "/images/membre-gd/TrésorierAdjoint.Mehdi.Bennis.jpg",
    description: "Support financier",
  },
  {
    name: "Smaïn Qasimi",
    role: "Conseiller",
    initials: "SQ",
    photo: "/images/membre-gd/Smaïn.Qasimi.jpg",
  },
  {
    name: "Fady Ait Yazza",
    role: "Référent Communication",
    initials: "FA",
    photo: "/images/membre-gd/Fady.Aït.Azza.jpg",
  },
  {
    name: "Manal Hanini",
    role: "Référente Recrutement",
    initials: "MH",
    photo: "/images/membre-gd/Manal.HANINI.jpg",
  },
  {
    name: "Zirar",
    role: "Photographe & Créateur de Contenu",
    initials: "ZS",
    photo: "/images/membre-gd/Zirar.Sizare.jpg",
  },
];

export const conseillers: BureauMember[] = [];

export const membres: Membre[] = [];

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
