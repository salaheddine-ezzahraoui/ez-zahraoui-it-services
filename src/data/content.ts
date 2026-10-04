import type { NavLink, Service, ProcessStep, Project } from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'À propos', path: '/about' },
  { label: 'Méthode de travail', path: '/process' },
  { label: 'Projets', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export const CONTACT = {
  phone: '+212 645 552 678',
  email: 'salaheddine.ezzahraoui1@gmail.com',
  whatsapp: 'https://wa.me/212645552678',
  linkedin: 'https://www.linkedin.com/in/salaheddine-ez-zahraoui-6566963a9/',
  googleBusiness: 'https://www.google.com/maps/search/?api=1&query=EZ-ZAHRAOUI+IT+SERVICES+Tanger',
  location: 'Tanger, Maroc',
  responseTime: 'Réponse sous 1 à 2 jours ouvrés',
}

export const SERVICES: Service[] = [
  {
    id: 'installation-postes',
    icon: 'Monitor',
    title: 'Installation et configuration de postes',
    shortDescription:
      'Mise en service de nouveaux ordinateurs, installation des logiciels nécessaires et configuration de l\'environnement de travail.',
    benefits: [
      'Installation du système d\'exploitation',
      'Installation et configuration des logiciels',
      'Transfert des fichiers et paramètres',
      'Configuration du profil utilisateur',
    ],
    useCase:
      'Vous équipez de nouveaux collaborateurs ou vous remplacez des ordinateurs vieillissants.',
    included: [
      'Installation et configuration du poste',
      'Installation des logiciels standards',
      'Transfert des données depuis l\'ancien poste',
      'Vérification du bon fonctionnement',
    ],
    notIncluded: [
      'Achat du matériel informatique',
      'Licences logicielles',
      'Développement de logiciels sur mesure',
    ],
  },
  {
    id: 'reseaux-imprimantes',
    icon: 'Wifi',
    title: 'Réseaux, imprimantes et connectivité',
    shortDescription:
      'Configuration et dépannage de votre réseau local, Wi-Fi, imprimantes partagées et partage de fichiers.',
    benefits: [
      'Configuration du réseau local et Wi-Fi',
      'Installation d\'imprimantes en réseau',
      'Configuration du partage de fichiers',
      'Résolution des problèmes de connectivité',
    ],
    useCase:
      'Votre réseau est lent, votre imprimante ne fonctionne pas ou le partage de fichiers est difficile.',
    included: [
      'Diagnostic du réseau existant',
      'Configuration du routeur et des équipements',
      'Installation et partage d\'imprimantes',
      'Configuration des dossiers partagés',
    ],
    notIncluded: [
      'Achat d\'équipements réseau',
      'Travaux de câblage structurel',
      'Maintenance des équipements physiques',
    ],
  },
  {
    id: 'utilisateurs-ad',
    icon: 'Users',
    title: 'Gestion des utilisateurs et Active Directory',
    shortDescription:
      'Organisation des comptes utilisateurs, des permissions et des accès aux ressources de l\'entreprise.',
    benefits: [
      'Création et gestion des comptes utilisateurs',
      'Configuration des permissions d\'accès',
      'Mise en place d\'Active Directory',
      'Organisation des accès aux ressources',
    ],
    useCase:
      'Vous accueillez de nouveaux collaborateurs ou vos accès sont mal organisés.',
    included: [
      'Inventaire des comptes existants',
      'Création des comptes utilisateurs',
      'Configuration des permissions',
      'Documentation des accès',
    ],
    notIncluded: [
      'Achat de licences Windows Server',
      'Migration complète d\'un domaine existant',
      'Support des applications métier spécifiques',
    ],
  },
  {
    id: 'audit-documentation',
    icon: 'FileText',
    title: 'Audit informatique et documentation',
    shortDescription:
      'Inventaire de votre parc informatique, identification des points faibles et recommandations d\'amélioration.',
    benefits: [
      'Inventaire complet du parc informatique',
      'Identification des points faibles',
      'Recommandations d\'amélioration',
      'Documentation des configurations',
    ],
    useCase:
      'Vous n\'avez pas d\'inventaire de votre parc ou vous souhaitez faire le point sur votre infrastructure.',
    included: [
      'Inventaire du matériel et des logiciels',
      'Analyse de la sécurité et des sauvegardes',
      'Rapport de recommandations',
      'Documentation de l\'existant',
    ],
    notIncluded: [
      'Mise en œuvre des recommandations',
      'Achat de matériel ou de licences',
      'Formation des utilisateurs',
    ],
  },
  {
    id: 'support-maintenance',
    icon: 'Wrench',
    title: 'Support et maintenance informatique',
    shortDescription:
      'Assistance technique régulière, maintenance préventive et résolution des incidents pour votre parc informatique.',
    benefits: [
      'Assistance à distance ou sur site',
      'Maintenance préventive du parc',
      'Résolution des incidents',
      'Conseils et accompagnement',
    ],
    useCase:
      'Vous n\'avez pas de support informatique régulier et vous souhaitez un interlocuteur technique fiable.',
    included: [
      'Interventions à distance ou sur site',
      'Maintenance préventive',
      'Résolution des incidents courants',
      'Conseils et recommandations',
    ],
    notIncluded: [
      'Support 24/7',
      'Gestion des applications métier spécifiques',
      'Achat de matériel ou de licences',
    ],
  },
]

export const CHALLENGES = [
  {
    icon: 'Monitor',
    title: 'Ordinateurs lents ou mal configurés',
    description: 'Des postes qui ralentissent, redémarrent ou ne fonctionnent pas de manière fiable au quotidien.',
  },
  {
    icon: 'Wifi',
    title: 'Problèmes de réseau et d\'imprimantes',
    description: 'Connexions instables, imprimantes inaccessibles ou fichiers difficiles à partager entre collaborateurs.',
  },
  {
    icon: 'Users',
    title: 'Comptes utilisateurs non organisés',
    description: 'Des accès mal définis, des comptes partagés ou des permissions peu claires pour votre équipe.',
  },
  {
    icon: 'FileText',
    title: 'Absence de documentation informatique',
    description: 'Aucun inventaire de votre parc, aucune trace des configurations réalisées ou des équipements en place.',
  },
  {
    icon: 'Shield',
    title: 'Sauvegarde et sécurité insuffisantes',
    description: 'Pas de sauvegardes automatiques ou des mesures de sécurité minimales pour protéger vos données.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Analyse de vos besoins',
    description: 'Nous échangeons sur votre situation, vos équipements actuels et vos objectifs pour comprendre précisément vos besoins.',
  },
  {
    number: 2,
    title: 'Diagnostic et recommandations',
    description: 'Nous examinons votre environnement informatique et identifions les points d\'amélioration prioritaires.',
  },
  {
    number: 3,
    title: 'Intervention et configuration',
    description: 'Nous réalisons les installations et configurations nécessaires, avec votre accord et en minimisant l\'impact sur votre activité.',
  },
  {
    number: 4,
    title: 'Suivi et support',
    description: 'Nous restons disponibles pour les questions, la maintenance et l\'accompagnement dans la durée.',
  },
]

export const METHOD_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Premier échange',
    description: 'Nous discutons de votre situation, de vos besoins et de vos contraintes. Cet échange peut se faire par téléphone, e-mail ou sur site.',
  },
  {
    number: 2,
    title: 'Compréhension de l\'environnement',
    description: 'Nous examinons votre parc informatique, votre réseau et vos outils pour comprendre votre environnement technique.',
  },
  {
    number: 3,
    title: 'Proposition claire',
    description: 'Nous vous présentons un plan d\'action détaillé avec un devis transparent. Vous savez exactement ce qui est inclus et ce qui ne l\'est pas.',
  },
  {
    number: 4,
    title: 'Intervention planifiée',
    description: 'Nous réalisons les travaux convenus, en minimisant l\'impact sur votre activité et en vous informant de l\'avancement.',
  },
  {
    number: 5,
    title: 'Vérification et documentation',
    description: 'Nous testons chaque élément mis en place et documentons l\'ensemble de votre environnement pour votre référence.',
  },
  {
    number: 6,
    title: 'Support continu',
    description: 'Nous restons disponibles pour la maintenance, les questions et l\'accompagnement dans la durée, si vous le souhaitez.',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Intervention adaptée',
    description: 'Des solutions adaptées à la taille et aux besoins réels de votre entreprise, sans sur-dimensionnement.',
  },
  {
    title: 'Communication claire',
    description: 'Des explications compréhensibles, sans jargon technique inutile. Vous savez ce que nous faisons et pourquoi.',
  },
  {
    title: 'Documentation',
    description: 'Chaque intervention est documentée : inventaire, configurations, recommandations. Vous gardez la trace de ce qui a été fait.',
  },
  {
    title: 'Support local',
    description: 'Interventions sur site à Tanger et assistance à distance selon vos besoins. Un interlocuteur proche et disponible.',
  },
  {
    title: 'Approche progressive',
    description: 'Nous avançons étape par étape, sans solutions inutiles ou coûteuses. Chaque recommandation a un objectif concret.',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'it-equipment-manager',
    title: 'IT Equipment Manager',
    status: 'Projet technique',
    description:
      'Application de suivi et d\'organisation des équipements informatiques. Elle permet de gérer les PC, ordinateurs portables, serveurs, routeurs, commutateurs et imprimantes dans un environnement professionnel.',
    technologies: ['Flask', 'SQLite', 'SQLAlchemy', 'Bootstrap', 'Docker'],
    features: [
      'Suivi du parc informatique',
      'Gestion des équipements (PC, serveurs, réseau, imprimantes)',
      'Base de données SQLite avec SQLAlchemy',
      'Interface web responsive avec Bootstrap',
      'Conteneurisation avec Docker',
    ],
  },
  {
    id: 'cloud-helpdesk-platform',
    title: 'Cloud Helpdesk Platform',
    status: 'Lab technique',
    description:
      'Concept de plateforme de gestion des incidents et tickets informatiques. L\'objectif est de permettre aux équipes de suivre, traiter et résoudre les demandes de support de manière organisée.',
    technologies: ['Python', 'FastAPI', 'Base de données', 'Docker', 'Azure'],
    features: [
      'Création et suivi de tickets',
      'Gestion des statuts et priorités',
      'API REST avec FastAPI',
      'Déploiement conteneurisé avec Docker',
      'Concept de déploiement cloud sur Azure',
    ],
  },
  {
    id: 'small-business-deployment',
    title: 'Small Business IT Deployment',
    status: 'Projet en développement',
    description:
      'Exemple de workflow de déploiement informatique pour une PME : installation de postes, configuration du réseau, mise en place des imprimantes et des utilisateurs.',
    technologies: ['Windows', 'Réseau', 'Active Directory', 'Microsoft 365'],
    features: [
      'Installation et configuration de postes',
      'Mise en place du réseau et du Wi-Fi',
      'Configuration des imprimantes partagées',
      'Création des comptes utilisateurs',
      'Documentation de l\'environnement',
    ],
  },
]
