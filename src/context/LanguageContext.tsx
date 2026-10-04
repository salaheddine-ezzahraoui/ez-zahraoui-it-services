import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.process': 'Our Method',
    'nav.portfolio': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Request a Diagnostic',

    // Hero
    'hero.tagline': 'Your IT partner in Tangier',
    'hero.title': 'A well-managed IT infrastructure, serving your business.',
    'hero.subtitle': 'EZ-ZAHRAOUI IT SERVICES supports small and medium-sized businesses in Tangier with the installation, configuration, security, and maintenance of their IT environment.',
    'hero.cta': 'Request a Diagnostic',
    'hero.secondary': 'Explore Our Services',

    // Challenges
    'challenges.title': 'Your IT Challenges',
    'challenges.subtitle': 'Common situations in small businesses that disrupt daily work.',
    'challenges.1.title': 'Slow or Misconfigured Computers',
    'challenges.1.desc': 'Computers that slow down, restart, or do not work reliably on a daily basis.',
    'challenges.2.title': 'Network and Printer Issues',
    'challenges.2.desc': 'Unstable connections, inaccessible printers, or files difficult to share between employees.',
    'challenges.3.title': 'Disorganized User Accounts',
    'challenges.3.desc': 'Poorly defined access, shared accounts, or unclear permissions for your team.',
    'challenges.4.title': 'Lack of IT Documentation',
    'challenges.4.desc': 'No inventory of your equipment, no record of configurations or equipment in place.',
    'challenges.5.title': 'Insufficient Backup and Security',
    'challenges.5.desc': 'No automatic backups or minimal security measures to protect your data.',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Concrete interventions to organize, secure, and maintain your IT environment.',
    'services.1.title': 'Computer Installation & Setup',
    'services.1.desc': 'Deployment of new computers, installation of necessary software, and configuration of the work environment.',
    'services.2.title': 'Networks, Printers & Connectivity',
    'services.2.desc': 'Configuration and troubleshooting of your local network, Wi-Fi, shared printers, and file sharing.',
    'services.3.title': 'User Management & Active Directory',
    'services.3.desc': 'Organization of user accounts, permissions, and access to company resources.',
    'services.4.title': 'IT Audit & Documentation',
    'services.4.desc': 'Inventory of your IT equipment, identification of weaknesses, and improvement recommendations.',
    'services.5.title': 'IT Support & Maintenance',
    'services.5.desc': 'Regular technical assistance, preventive maintenance, and incident resolution for your IT equipment.',
    'services.viewAll': 'View All Services',

    // Process
    'process.title': 'How We Work',
    'process.subtitle': 'A practical and documented method, adapted to your situation.',
    'process.1.title': 'Needs Analysis',
    'process.1.desc': 'We discuss your situation, current equipment, and objectives to understand your needs precisely.',
    'process.2.title': 'Diagnostic & Recommendations',
    'process.2.desc': 'We examine your IT environment and identify priority areas for improvement.',
    'process.3.title': 'Intervention & Configuration',
    'process.3.desc': 'We carry out the necessary installations and configurations, with your agreement and minimal disruption.',
    'process.4.title': 'Follow-up & Support',
    'process.4.desc': 'We remain available for questions, maintenance, and ongoing support.',
    'process.viewAll': 'View Detailed Method',

    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Technical support, transparent and adapted to small businesses.',
    'why.1.title': 'Tailored Intervention',
    'why.1.desc': 'Solutions adapted to the size and real needs of your business, without over-engineering.',
    'why.2.title': 'Clear Communication',
    'why.2.desc': 'Understandable explanations, without unnecessary technical jargon. You know what we do and why.',
    'why.3.title': 'Documentation',
    'why.3.desc': 'Every intervention is documented: inventory, configurations, recommendations. You keep a record of what was done.',
    'why.4.title': 'Local Support',
    'why.4.desc': 'On-site interventions in Tangier and remote assistance as needed. A close and available contact.',
    'why.5.title': 'Progressive Approach',
    'why.5.desc': 'We proceed step by step, without unnecessary or costly solutions. Every recommendation has a concrete goal.',

    // Project Highlight
    'project.title': 'Technical Project',
    'project.subtitle': 'A personal project that illustrates our approach to IT organization.',
    'project.viewAll': 'View Projects',

    // Final CTA
    'cta.title': 'Need to organize or secure your IT?',
    'cta.subtitle': 'Contact EZ-ZAHRAOUI IT SERVICES to discuss your IT environment and identify the first useful actions.',
    'cta.button': 'Get in Touch',

    // Footer
    'footer.description': 'EZ-ZAHRAOUI IT SERVICES supports SMEs in Tangier with the installation, organization, and maintenance of their IT environment.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    // Services Page
    'servicesPage.title': 'Our Services',
    'servicesPage.subtitle': 'Concrete interventions to organize, secure, and maintain your IT environment. Each service is adapted to your situation.',
    'servicesPage.included': 'What is included',
    'servicesPage.notIncluded': 'What is not included',
    'servicesPage.useCase': 'Typical use case',
    'servicesPage.pricing': 'About Pricing',
    'servicesPage.pricingText': 'Hardware purchases and software licenses are billed separately from technical services. Each quote is detailed and transparent: you know exactly what is included and what is not.',
    'servicesPage.cta': 'Request a Quote',
    'servicesPage.customTitle': 'Need a custom service?',
    'servicesPage.customText': 'Every business is unique. Contact us to discuss your specific needs and receive a tailored proposal.',

    // About Page
    'aboutPage.title': 'About',
    'aboutPage.subtitle': 'An IT professional serving small businesses in Tangier.',
    'aboutPage.founder': 'Salaheddine Ez-Zahraoui',
    'aboutPage.role': 'Founder — EZ-ZAHRAOUI IT SERVICES',
    'aboutPage.p1': 'Salaheddine Ez-Zahraoui is an IT infrastructure professional based in Tangier, Morocco. He supports small and medium-sized businesses with the installation, configuration, and maintenance of their IT environment.',
    'aboutPage.p2': 'His approach is pragmatic: understand the real needs of each business, propose appropriate and documented solutions, and remain available for day-to-day support.',
    'aboutPage.p3': 'EZ-ZAHRAOUI IT SERVICES is a project in development, with the ambition to become a trusted IT partner for SMEs in the Tangier region.',
    'aboutPage.approach': 'Our Approach',
    'aboutPage.approachText': 'The principles that guide each of our interventions.',
    'aboutPage.1.title': 'Practical Approach',
    'aboutPage.1.desc': 'We focus on concrete solutions adapted to your reality, without unnecessary jargon or over-engineering.',
    'aboutPage.2.title': 'Documentation',
    'aboutPage.2.desc': 'Every intervention is documented: equipment inventory, configurations, recommendations. You keep a record of what was done.',
    'aboutPage.3.title': 'Integrated Security',
    'aboutPage.3.desc': 'Security and data backup are considered from the design stage, not added as an afterthought.',
    'aboutPage.4.title': 'Clear Communication',
    'aboutPage.4.desc': 'We explain what we do and why, in understandable language. You always know what is done and why.',
    'aboutPage.5.title': 'Pragmatism',
    'aboutPage.5.desc': 'We favor proven, stable solutions adapted to your budget and reality. No unnecessary or costly solutions.',
    'aboutPage.cta': 'Let\'s Work Together',
    'aboutPage.ctaText': 'Contact us to discuss your IT needs. We would be happy to help.',

    // Process Page
    'processPage.title': 'Our Method',
    'processPage.subtitle': 'A clear and structured method, from first discussion to ongoing support.',
    'processPage.1.title': 'First Exchange',
    'processPage.1.desc': 'We discuss your situation, needs, and constraints. This exchange can be done by phone, email, or on-site.',
    'processPage.2.title': 'Understanding the Environment',
    'processPage.2.desc': 'We examine your IT equipment, network, and tools to understand your technical environment.',
    'processPage.3.title': 'Clear Proposal',
    'processPage.3.desc': 'We present a detailed action plan with a transparent quote. You know exactly what is included and what is not.',
    'processPage.4.title': 'Planned Intervention',
    'processPage.4.desc': 'We carry out the agreed work, minimizing impact on your business and keeping you informed.',
    'processPage.5.title': 'Verification & Documentation',
    'processPage.5.desc': 'We test each element and document your entire environment for your reference.',
    'processPage.6.title': 'Ongoing Support',
    'processPage.6.desc': 'We remain available for maintenance, questions, and ongoing support, if you wish.',
    'processPage.confidentiality': 'Confidentiality and Data Respect',
    'processPage.confidentialityText': 'We attach particular importance to the confidentiality of your data and IT environment. The information you provide is used solely for the purpose of our intervention. We respect your data and privacy at every step of our collaboration.',
    'processPage.cta': 'Start Your Project',
    'processPage.ctaText': 'Contact us for a first discussion about your needs. It is without obligation.',

    // Portfolio Page
    'portfolioPage.title': 'Projects',
    'portfolioPage.subtitle': 'Technical and personal projects that illustrate our approach to IT organization.',
    'portfolioPage.note': 'Important Note',
    'portfolioPage.noteText': 'The projects presented on this page are personal projects, technical labs, or projects in development. They do not represent commercial work for clients. They are shared to illustrate our technical skills.',
    'portfolioPage.cta': 'Have a Project in Mind?',
    'portfolioPage.ctaText': 'Let\'s discuss your IT project. We will help you find the best approach.',

    // Contact Page
    'contactPage.title': 'Contact',
    'contactPage.subtitle': 'A question, a project, a need for a diagnostic? Contact us using the form below or directly by phone, email, or WhatsApp.',
    'contactPage.responseTime': 'Response within 1 to 2 business days',
    'contactPage.phone': 'Phone',
    'contactPage.email': 'Email',
    'contactPage.whatsapp': 'WhatsApp',
    'contactPage.whatsappText': 'Send a message',
    'contactPage.linkedin': 'LinkedIn',
    'contactPage.linkedinText': 'Professional profile',
    'contactPage.serviceArea': 'Service Area',
    'contactPage.serviceAreaText': 'Tangier, Morocco — on-site and remote interventions.',
    'contactPage.formTitle': 'Request a Diagnostic or Contact',
    'contactPage.formSubtitle': 'Fill out this form and we will get back to you quickly.',
    'contactPage.fullName': 'Full Name',
    'contactPage.fullNamePlaceholder': 'Your full name',
    'contactPage.company': 'Company',
    'contactPage.companyPlaceholder': 'Your company name',
    'contactPage.emailLabel': 'Email Address',
    'contactPage.emailPlaceholder': 'you@company.ma',
    'contactPage.phoneLabel': 'Phone',
    'contactPage.phonePlaceholder': '+212 6 XX XX XX XX',
    'contactPage.service': 'Service Needed',
    'contactPage.servicePlaceholder': 'Select a service',
    'contactPage.computers': 'Number of Computers',
    'contactPage.computersPlaceholder': 'Select',
    'contactPage.message': 'Your Message',
    'contactPage.messagePlaceholder': 'Describe your need, your situation, your questions...',
    'contactPage.consent': 'I accept that my data is processed in accordance with the',
    'contactPage.consentLink': 'Privacy Policy',
    'contactPage.consentEnd': 'to respond to my request.',
    'contactPage.privacy': 'Your information is used only to respond to your request.',
    'contactPage.send': 'Send Message',
    'contactPage.sending': 'Sending...',
    'contactPage.successTitle': 'Message Sent!',
    'contactPage.successText': 'Thank you for your message. We will respond as soon as possible. You can also contact us directly by phone or WhatsApp.',
    'contactPage.sendAnother': 'Send Another Message',
    'contactPage.error.fullName': 'Please enter your full name.',
    'contactPage.error.email': 'Please enter a valid email address.',
    'contactPage.error.phone': 'Please enter a valid phone number.',
    'contactPage.error.service': 'Please select a service.',
    'contactPage.error.message': 'Your message is too short (10 characters minimum).',
    'contactPage.error.consent': 'You must accept the privacy policy.',

    // Privacy Page
    'privacyPage.title': 'Privacy Policy',
    'privacyPage.updated': 'Last updated: October 2026',
    'privacyPage.1': 'Data Controller',
    'privacyPage.1Text': 'EZ-ZAHRAOUI IT SERVICES, represented by Salaheddine Ez-Zahraoui, is responsible for the processing of personal data collected on this site.',
    'privacyPage.2': 'Data Collected',
    'privacyPage.2Text': 'Through the contact form, we collect the following information:',
    'privacyPage.2List': 'Full name, Company name (optional), Email address, Phone number, Service requested, Number of computers (optional), Message',
    'privacyPage.3': 'Use of Data',
    'privacyPage.3Text': 'The data collected is used solely to respond to your contact or diagnostic request. It is not sold or shared with third parties for commercial purposes.',
    'privacyPage.4': 'Data Retention',
    'privacyPage.4Text': 'Data is retained for the time necessary to process your request, then deleted. No data is kept indefinitely.',
    'privacyPage.5': 'Your Rights',
    'privacyPage.5Text': 'In accordance with applicable regulations, you have the right to access, rectify, and delete your personal data. To exercise these rights, contact us at the address provided on this site.',
    'privacyPage.6': 'Security',
    'privacyPage.6Text': 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or disclosure.',
    'privacyPage.7': 'Cookies',
    'privacyPage.7Text': 'This site does not use tracking or advertising cookies. Only cookies strictly necessary for the operation of the site may be used.',
    'privacyPage.8': 'Contact',
    'privacyPage.8Text': 'For any questions regarding this privacy policy or your personal data, you can contact us via the Contact page of this site.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.process': 'Méthode de travail',
    'nav.portfolio': 'Projets',
    'nav.contact': 'Contact',
    'nav.cta': 'Demander un diagnostic',

    // Hero
    'hero.tagline': 'Services informatiques pour PME — Tanger',
    'hero.title': 'Votre informatique, organisée et fiable.',
    'hero.subtitle': 'EZ-ZAHRAOUI IT SERVICES accompagne les PME de Tanger dans l\'installation, la configuration, la sécurisation et la maintenance de leurs postes, réseaux et outils informatiques.',
    'hero.cta': 'Demander un diagnostic',
    'hero.secondary': 'Découvrir nos services',

    // Challenges
    'challenges.title': 'Vos défis informatiques',
    'challenges.subtitle': 'Des situations courantes chez les petites entreprises, qui perturbent le travail quotidien.',
    'challenges.1.title': 'Ordinateurs lents ou mal configurés',
    'challenges.1.desc': 'Des postes qui ralentissent, redémarrent ou ne fonctionnent pas de manière fiable au quotidien.',
    'challenges.2.title': 'Problèmes de réseau et d\'imprimantes',
    'challenges.2.desc': 'Connexions instables, imprimantes inaccessibles ou fichiers difficiles à partager entre collaborateurs.',
    'challenges.3.title': 'Comptes utilisateurs non organisés',
    'challenges.3.desc': 'Des accès mal définis, des comptes partagés ou des permissions peu claires pour votre équipe.',
    'challenges.4.title': 'Absence de documentation informatique',
    'challenges.4.desc': 'Aucun inventaire de votre parc, aucune trace des configurations réalisées ou des équipements en place.',
    'challenges.5.title': 'Sauvegarde et sécurité insuffisantes',
    'challenges.5.desc': 'Pas de sauvegardes automatiques ou des mesures de sécurité minimales pour protéger vos données.',

    // Services
    'services.title': 'Nos services',
    'services.subtitle': 'Des interventions concrètes pour organiser, sécuriser et maintenir votre environnement informatique.',
    'services.1.title': 'Installation et configuration de postes',
    'services.1.desc': 'Mise en service de nouveaux ordinateurs, installation des logiciels nécessaires et configuration de l\'environnement de travail.',
    'services.2.title': 'Réseaux, imprimantes et connectivité',
    'services.2.desc': 'Configuration et dépannage de votre réseau local, Wi-Fi, imprimantes partagées et partage de fichiers.',
    'services.3.title': 'Gestion des utilisateurs et Active Directory',
    'services.3.desc': 'Organisation des comptes utilisateurs, des permissions et des accès aux ressources de l\'entreprise.',
    'services.4.title': 'Audit informatique et documentation',
    'services.4.desc': 'Inventaire de votre parc informatique, identification des points faibles et recommandations d\'amélioration.',
    'services.5.title': 'Support et maintenance informatique',
    'services.5.desc': 'Assistance technique régulière, maintenance préventive et résolution des incidents pour votre parc informatique.',
    'services.viewAll': 'Voir tous les services',

    // Process
    'process.title': 'Comment nous intervenons',
    'process.subtitle': 'Une méthode pratique et documentée, adaptée à votre situation.',
    'process.1.title': 'Analyse de vos besoins',
    'process.1.desc': 'Nous échangeons sur votre situation, vos équipements actuels et vos objectifs pour comprendre précisément vos besoins.',
    'process.2.title': 'Diagnostic et recommandations',
    'process.2.desc': 'Nous examinons votre environnement informatique et identifions les points d\'amélioration prioritaires.',
    'process.3.title': 'Intervention et configuration',
    'process.3.desc': 'Nous réalisons les installations et configurations nécessaires, avec votre accord et en minimisant l\'impact sur votre activité.',
    'process.4.title': 'Suivi et support',
    'process.4.desc': 'Nous restons disponibles pour les questions, la maintenance et l\'accompagnement dans la durée.',
    'process.viewAll': 'Voir la méthode détaillée',

    // Why Choose Us
    'why.title': 'Pourquoi nous choisir',
    'why.subtitle': 'Un accompagnement technique, transparent et adapté aux petites entreprises.',
    'why.1.title': 'Intervention adaptée',
    'why.1.desc': 'Des solutions adaptées à la taille et aux besoins réels de votre entreprise, sans sur-dimensionnement.',
    'why.2.title': 'Communication claire',
    'why.2.desc': 'Des explications compréhensibles, sans jargon technique inutile. Vous savez ce que nous faisons et pourquoi.',
    'why.3.title': 'Documentation',
    'why.3.desc': 'Chaque intervention est documentée : inventaire, configurations, recommandations. Vous gardez la trace de ce qui a été fait.',
    'why.4.title': 'Support local',
    'why.4.desc': 'Interventions sur site à Tanger et assistance à distance selon vos besoins. Un interlocuteur proche et disponible.',
    'why.5.title': 'Approche progressive',
    'why.5.desc': 'Nous avançons étape par étape, sans solutions inutiles ou coûteuses. Chaque recommandation a un objectif concret.',

    // Project Highlight
    'project.title': 'Projet technique',
    'project.subtitle': 'Un projet personnel qui illustre notre approche de l\'organisation informatique.',
    'project.viewAll': 'Voir les projets',

    // Final CTA
    'cta.title': 'Besoin d\'organiser ou de fiabiliser votre informatique ?',
    'cta.subtitle': 'Contactez EZ-ZAHRAOUI IT SERVICES pour échanger sur votre environnement informatique et identifier les premières actions utiles.',
    'cta.button': 'Prendre contact',

    // Footer
    'footer.description': 'EZ-ZAHRAOUI IT SERVICES accompagne les PME de Tanger dans l\'installation, l\'organisation et la maintenance de leur environnement informatique.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',

    // Services Page
    'servicesPage.title': 'Nos services',
    'servicesPage.subtitle': 'Des interventions concrètes pour organiser, sécuriser et maintenir votre environnement informatique. Chaque service est adapté à votre situation.',
    'servicesPage.included': 'Ce qui est inclus',
    'servicesPage.notIncluded': 'Ce qui n\'est pas inclus',
    'servicesPage.useCase': 'Cas d\'usage typique',
    'servicesPage.pricing': 'À propos des tarifs',
    'servicesPage.pricingText': 'Les achats de matériel informatique et les licences logicielles sont facturés séparément des services techniques. Chaque devis est détaillé et transparent : vous savez exactement ce qui est inclus et ce qui ne l\'est pas.',
    'servicesPage.cta': 'Demander un devis',
    'servicesPage.customTitle': 'Besoin d\'un service sur mesure ?',
    'servicesPage.customText': 'Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques et recevoir une proposition adaptée.',

    // About Page
    'aboutPage.title': 'À propos',
    'aboutPage.subtitle': 'Un professionnel IT au service des petites entreprises à Tanger.',
    'aboutPage.founder': 'Salaheddine Ez-Zahraoui',
    'aboutPage.role': 'Fondateur — EZ-ZAHRAOUI IT SERVICES',
    'aboutPage.p1': 'Salaheddine Ez-Zahraoui est un professionnel de l\'infrastructure IT basé à Tanger, au Maroc. Il accompagne les petites et moyennes entreprises dans l\'installation, la configuration et la maintenance de leur environnement informatique.',
    'aboutPage.p2': 'Son approche est pragmatique : comprendre les besoins réels de chaque entreprise, proposer des solutions adaptées et documentées, et rester disponible pour le support au quotidien.',
    'aboutPage.p3': 'EZ-ZAHRAOUI IT SERVICES est un projet en développement, avec l\'ambition de devenir un partenaire IT de confiance pour les PME de la région de Tanger.',
    'aboutPage.approach': 'Notre approche',
    'aboutPage.approachText': 'Les principes qui guident chacune de nos interventions.',
    'aboutPage.1.title': 'Approche pratique',
    'aboutPage.1.desc': 'Nous nous concentrons sur des solutions concrètes et adaptées à votre réalité, sans jargon inutile ni sur-dimensionnement.',
    'aboutPage.2.title': 'Documentation',
    'aboutPage.2.desc': 'Chaque intervention est documentée : inventaire des équipements, configurations réalisées, recommandations. Vous gardez la trace de ce qui a été fait.',
    'aboutPage.3.title': 'Sécurité intégrée',
    'aboutPage.3.desc': 'La sécurité et la sauvegarde de vos données sont prises en compte dès la conception, pas ajoutées après coup.',
    'aboutPage.4.title': 'Communication claire',
    'aboutPage.4.desc': 'Nous vous expliquons ce que nous faisons et pourquoi, en langage compréhensible. Vous savez toujours ce qui est fait et pourquoi.',
    'aboutPage.5.title': 'Pragmatisme',
    'aboutPage.5.desc': 'Nous privilégions les solutions stables et éprouvées, adaptées à votre budget et à votre réalité. Pas de solutions inutiles ou coûteuses.',
    'aboutPage.cta': 'Travaillons ensemble',
    'aboutPage.ctaText': 'Contactez-nous pour discuter de vos besoins IT. Nous serons ravis de vous accompagner.',

    // Process Page
    'processPage.title': 'Méthode de travail',
    'processPage.subtitle': 'Une méthode claire et structurée, de la première discussion au support continu.',
    'processPage.1.title': 'Premier échange',
    'processPage.1.desc': 'Nous discutons de votre situation, de vos besoins et de vos contraintes. Cet échange peut se faire par téléphone, e-mail ou sur site.',
    'processPage.2.title': 'Compréhension de l\'environnement',
    'processPage.2.desc': 'Nous examinons votre parc informatique, votre réseau et vos outils pour comprendre votre environnement technique.',
    'processPage.3.title': 'Proposition claire',
    'processPage.3.desc': 'Nous vous présentons un plan d\'action détaillé avec un devis transparent. Vous savez exactement ce qui est inclus et ce qui ne l\'est pas.',
    'processPage.4.title': 'Intervention planifiée',
    'processPage.4.desc': 'Nous réalisons les travaux convenus, en minimisant l\'impact sur votre activité et en vous informant de l\'avancement.',
    'processPage.5.title': 'Vérification et documentation',
    'processPage.5.desc': 'Nous testons chaque élément mis en place et documentons l\'ensemble de votre environnement pour votre référence.',
    'processPage.6.title': 'Support continu',
    'processPage.6.desc': 'Nous restons disponibles pour la maintenance, les questions et l\'accompagnement dans la durée, si vous le souhaitez.',
    'processPage.confidentiality': 'Confidentialité et respect des données',
    'processPage.confidentialityText': 'Nous accordons une importance particulière à la confidentialité de vos données et de votre environnement informatique. Les informations que vous nous communiquez sont utilisées uniquement dans le cadre de notre intervention. Nous respectons vos données et votre vie privée à chaque étape de notre collaboration.',
    'processPage.cta': 'Démarrer votre projet',
    'processPage.ctaText': 'Contactez-nous pour une première discussion sur vos besoins. C\'est sans engagement.',

    // Portfolio Page
    'portfolioPage.title': 'Projets',
    'portfolioPage.subtitle': 'Des projets techniques et personnels qui illustrent notre approche de l\'organisation informatique.',
    'portfolioPage.note': 'Note importante',
    'portfolioPage.noteText': 'Les projets présentés sur cette page sont des projets personnels, des labs techniques ou des projets en développement. Ils ne représentent pas des réalisations commerciales pour des clients. Ils sont partagés à titre illustratif de nos compétences techniques.',
    'portfolioPage.cta': 'Un projet en tête ?',
    'portfolioPage.ctaText': 'Parlons de votre projet IT. Nous vous aiderons à trouver la meilleure approche.',

    // Contact Page
    'contactPage.title': 'Contact',
    'contactPage.subtitle': 'Une question, un projet, un besoin de diagnostic ? Contactez-nous via le formulaire ci-dessous ou directement par téléphone, e-mail ou WhatsApp.',
    'contactPage.responseTime': 'Réponse sous 1 à 2 jours ouvrés',
    'contactPage.phone': 'Téléphone',
    'contactPage.email': 'E-mail',
    'contactPage.whatsapp': 'WhatsApp',
    'contactPage.whatsappText': 'Envoyer un message',
    'contactPage.linkedin': 'LinkedIn',
    'contactPage.linkedinText': 'Profil professionnel',
    'contactPage.serviceArea': 'Zone d\'intervention',
    'contactPage.serviceAreaText': 'Tanger, Maroc — interventions sur site et assistance à distance.',
    'contactPage.formTitle': 'Demande de diagnostic ou de contact',
    'contactPage.formSubtitle': 'Remplissez ce formulaire et nous vous recontacterons rapidement.',
    'contactPage.fullName': 'Nom complet',
    'contactPage.fullNamePlaceholder': 'Votre nom complet',
    'contactPage.company': 'Entreprise',
    'contactPage.companyPlaceholder': 'Nom de votre entreprise',
    'contactPage.emailLabel': 'Adresse e-mail',
    'contactPage.emailPlaceholder': 'vous@entreprise.ma',
    'contactPage.phoneLabel': 'Téléphone',
    'contactPage.phonePlaceholder': '+212 6 XX XX XX XX',
    'contactPage.service': 'Service souhaité',
    'contactPage.servicePlaceholder': 'Sélectionnez un service',
    'contactPage.computers': 'Nombre d\'ordinateurs',
    'contactPage.computersPlaceholder': 'Sélectionnez',
    'contactPage.message': 'Votre message',
    'contactPage.messagePlaceholder': 'Décrivez votre besoin, votre situation, vos questions...',
    'contactPage.consent': 'J\'accepte que mes données soient traitées conformément à la',
    'contactPage.consentLink': 'politique de confidentialité',
    'contactPage.consentEnd': 'pour répondre à ma demande.',
    'contactPage.privacy': 'Vos informations sont utilisées uniquement pour répondre à votre demande.',
    'contactPage.send': 'Envoyer le message',
    'contactPage.sending': 'Envoi en cours...',
    'contactPage.successTitle': 'Message envoyé !',
    'contactPage.successText': 'Merci pour votre message. Nous vous répondrons dans les meilleurs délais. Vous pouvez aussi nous contacter directement par téléphone ou WhatsApp.',
    'contactPage.sendAnother': 'Envoyer un autre message',
    'contactPage.error.fullName': 'Veuillez indiquer votre nom complet.',
    'contactPage.error.email': 'Veuillez indiquer une adresse e-mail valide.',
    'contactPage.error.phone': 'Veuillez indiquer un numéro de téléphone valide.',
    'contactPage.error.service': 'Veuillez sélectionner un service.',
    'contactPage.error.message': 'Votre message est trop court (10 caractères minimum).',
    'contactPage.error.consent': 'Vous devez accepter la politique de confidentialité.',

    // Privacy Page
    'privacyPage.title': 'Politique de confidentialité',
    'privacyPage.updated': 'Dernière mise à jour : octobre 2026',
    'privacyPage.1': 'Responsable du traitement',
    'privacyPage.1Text': 'EZ-ZAHRAOUI IT SERVICES, représenté par Salaheddine Ez-Zahraoui, est responsable du traitement des données personnelles collectées sur ce site.',
    'privacyPage.2': 'Données collectées',
    'privacyPage.2Text': 'Via le formulaire de contact, nous collectons les informations suivantes :',
    'privacyPage.2List': 'Nom complet, Nom de l\'entreprise (optionnel), Adresse e-mail, Numéro de téléphone, Service demandé, Nombre d\'ordinateurs (optionnel), Message',
    'privacyPage.3': 'Utilisation des données',
    'privacyPage.3Text': 'Les données collectées sont utilisées uniquement pour répondre à votre demande de contact ou de diagnostic. Elles ne sont ni vendues, ni partagées avec des tiers à des fins commerciales.',
    'privacyPage.4': 'Conservation des données',
    'privacyPage.4Text': 'Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées. Aucune donnée n\'est conservée indéfiniment.',
    'privacyPage.5': 'Vos droits',
    'privacyPage.5Text': 'Conformément à la réglementation applicable, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à l\'adresse indiquée sur ce site.',
    'privacyPage.6': 'Sécurité',
    'privacyPage.6Text': 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute perte ou toute divulgation.',
    'privacyPage.7': 'Cookies',
    'privacyPage.7Text': 'Ce site n\'utilise pas de cookies de suivi ou de cookies publicitaires. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.',
    'privacyPage.8': 'Contact',
    'privacyPage.8Text': 'Pour toute question relative à cette politique de confidentialité ou à vos données personnelles, vous pouvez nous contacter via la page Contact de ce site.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
