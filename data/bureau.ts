export interface BureauMember {
  name: string;
  roleKey: string;
  initials: string;
  photo: string;
  descriptionKey?: string;
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
  key: "t1" | "t2" | "t3" | "t4";
}

export interface Stat {
  labelKey: string;
  value: string;
}

// Bureau 2026

export const presidentHonneur: BureauMember = {
  name: "Ahmed Ghayat",
  roleKey: "about.team.roles.presidentHonneur",
  initials: "AG",
  photo: "/images/membre-gd/PresidentDhonneur.Ahmed.Ghayat.jpg",
};

export const bureauLegal: BureauMember[] = [
  {
    name: "Hamid Lafredi",
    roleKey: "about.team.roles.president",
    initials: "HL",
    photo: "/images/membre-gd/President.Hamid.Lafredi.jpg",
    descriptionKey: "about.team.descriptions.president",
  },
  {
    name: "Morad Fadil",
    roleKey: "about.team.roles.vicePresident",
    initials: "MF",
    photo: "/images/membre-gd/Vice.President.Morad.Fadil.jpg",
    descriptionKey: "about.team.descriptions.vicePresident",
  },
  {
    name: "Omar Walali Loudiyi",
    roleKey: "about.team.roles.secretaireGeneral",
    initials: "OW",
    photo: "/images/membre-gd/SecretaireGeneral.Omar.Walali.Loudiyi.jpg",
    descriptionKey: "about.team.descriptions.secretaireGeneral",
    availability: "4–6h/semaine",
  },
  {
    name: "Youness Slimane",
    roleKey: "about.team.roles.tresorier",
    initials: "YS",
    photo: "/images/membre-gd/Trésorier.Youness.Slimane.webp",
    descriptionKey: "about.team.descriptions.tresorier",
    availability: "4–6h/semaine",
  },
  {
    name: "Mehdi Bennis",
    roleKey: "about.team.roles.tresorierAdjoint",
    initials: "BM",
    photo: "/images/membre-gd/TrésorierAdjoint.Mehdi.Bennis.jpg",
    descriptionKey: "about.team.descriptions.tresorierAdjoint",
  },
];

export const postesOperationnels: BureauMember[] = [
  {
    name: "Smaïn Qasimi",
    roleKey: "about.team.roles.responsableEvenements",
    initials: "SQ",
    photo: "/images/membre-gd/Smaïn.Qasimi.jpg",
    descriptionKey: "about.team.descriptions.responsableEvenements",
    availability: "4–6h/semaine",
  },
];

export const conseillers: BureauMember[] = [
  {
    name: "Tarik Jaabouki",
    roleKey: "about.team.roles.conseiller",
    initials: "TJ",
    photo: "/images/membre-gd/Tarik.Jaabouki.jpg",
    availability: "< 1h/semaine",
  },
  {
    name: "Rhissam Boudina",
    roleKey: "about.team.roles.conseiller",
    initials: "RB",
    photo: "/images/membre-gd/Rhissam.Boudina.jpg",
    availability: "2–4h/semaine",
  },
];

export const membres: Membre[] = [
  {
    name: "Fady Aït Azza",
    initials: "FA",
    photo: "/images/membre-gd/Fady.Aït.Azza.jpg",
  },
  {
    name: "Joudi Jaoudi",
    initials: "JJ",
    photo: "/images/membre-gd/Joudi.Jaoudi.jpg",
  },
  {
    name: "Zirar",
    initials: "ZS",
    photo: "/images/membre-gd/Zirar.Sizare.jpg",
  },
  {
    name: "Manal Hanini",
    initials: "MH",
    photo: "/images/membre-gd/Manal.HANINI.jpg",
  },
];

export const roadmap2026: RoadmapPhase[] = [
  { key: "t1" },
  { key: "t2" },
  { key: "t3" },
  { key: "t4" },
];

export const stats: Stat[] = [
  { labelKey: "about.stats.membres", value: "13" },
  { labelKey: "about.stats.candidatures", value: "8" },
  { labelKey: "about.stats.postes", value: "6" },
  { labelKey: "about.stats.engagement", value: "100%" },
];
