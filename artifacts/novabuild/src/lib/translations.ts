export type Locale = "en" | "fr";

export const STORAGE_KEY = "novabuild-locale";

export interface Messages {
  documentTitle: string;
  introBadge: string;
  introHeadline1: string;
  introHeadline2: string;
  introBody: string;
  introCta: string;
  servicesTitle: string;
  serviceWebTitle: string;
  serviceWebDesc: string;
  serviceMobileTitle: string;
  serviceMobileDesc: string;
  serviceDesktopTitle: string;
  serviceDesktopDesc: string;
  serviceAiTitle: string;
  serviceAiDesc: string;
  contactTitle: string;
  contactLead: string;
  toastTitle: string;
  toastDescription: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  novaCoreSubtitle: string;
  novaCoreBadge: string;
  notFoundTitle: string;
  notFoundBody: string;
  navGoToSlide: string;
  languageAria: string;
}

export const messages: Record<Locale, Messages> = {
  en: {
    documentTitle: "NOVABUILD",
    introBadge: "Next-Generation Tech",
    introHeadline1: "Build The",
    introHeadline2: "Future.",
    introBody:
      "Building real business solutions with technology. Web, mobile, desktop, and AI-powered applications crafted with uncompromising precision and futuristic design.",
    introCta: "Explore Our Work",
    servicesTitle: "Capabilities.",
    serviceWebTitle: "Web Applications",
    serviceWebDesc:
      "Scalable, high-performance web platforms built with cutting-edge modern frameworks.",
    serviceMobileTitle: "Mobile Experiences",
    serviceMobileDesc:
      "Native-feeling iOS and Android applications designed for ultimate user engagement.",
    serviceDesktopTitle: "Desktop Software",
    serviceDesktopDesc:
      "Robust, cross-platform desktop solutions for intensive business workflows.",
    serviceAiTitle: "AI Integration",
    serviceAiDesc:
      "Intelligent systems and LLM integrations that automate and elevate your business.",
    contactTitle: "Initiate.",
    contactLead:
      "Ready to build the future? Connect with our engineering team to discuss your next breakthrough project.",
    toastTitle: "Transmission Received",
    toastDescription: "We'll be in contact shortly.",
    formNameLabel: "Identity",
    formNamePlaceholder: "John Doe",
    formEmailLabel: "Commlink (Email)",
    formEmailPlaceholder: "john@example.com",
    formMessageLabel: "Directives",
    formMessagePlaceholder: "Project parameters...",
    formSubmit: "Transmit Signal",
    novaCoreSubtitle: "Nova Core",
    novaCoreBadge: "Business Systems Online",
    notFoundTitle: "404 Page Not Found",
    notFoundBody: "Did you forget to add the page to the router?",
    navGoToSlide: "Go to slide {n}",
    languageAria: "Language",
  },
  fr: {
    documentTitle: "NOVABUILD",
    introBadge: "Technologie nouvelle génération",
    introHeadline1: "Construisez",
    introHeadline2: "l'avenir.",
    introBody:
      "Des solutions business concrètes grâce à la technologie. Applications web, mobiles, desktop et IA, avec une exigence de précision et un design résolument futuriste.",
    introCta: "Découvrir nos réalisations",
    servicesTitle: "Expertises.",
    serviceWebTitle: "Applications web",
    serviceWebDesc:
      "Plateformes web évolutives et performantes, bâties avec les frameworks modernes les plus avancés.",
    serviceMobileTitle: "Expériences mobiles",
    serviceMobileDesc:
      "Applications iOS et Android au rendu quasi natif, pensées pour l’engagement utilisateur.",
    serviceDesktopTitle: "Logiciels desktop",
    serviceDesktopDesc:
      "Solutions desktop multiplateformes et fiables pour les flux métiers les plus exigeants.",
    serviceAiTitle: "Intégration IA",
    serviceAiDesc:
      "Systèmes intelligents et intégrations LLM qui automatisent et renforcent votre activité.",
    contactTitle: "Initiez.",
    contactLead:
      "Prêt à construire l’avenir ? Échangez avec notre équipe d’ingénierie sur votre prochain projet d’envergure.",
    toastTitle: "Transmission reçue",
    toastDescription: "Nous vous recontacterons très prochainement.",
    formNameLabel: "Identité",
    formNamePlaceholder: "Jean Dupont",
    formEmailLabel: "Liaison (e-mail)",
    formEmailPlaceholder: "vous@exemple.com",
    formMessageLabel: "Votre message",
    formMessagePlaceholder: "Paramètres du projet, délais, contraintes…",
    formSubmit: "Envoyer le signal",
    novaCoreSubtitle: "Nova Core",
    novaCoreBadge: "Systèmes d’entreprise en ligne",
    notFoundTitle: "404 — Page introuvable",
    notFoundBody: "Cette page n’existe pas ou a été déplacée.",
    navGoToSlide: "Aller à la diapositive {n}",
    languageAria: "Langue",
  },
};

export function interpolateNavSlide(template: string, slideNumber: number) {
  return template.replace("{n}", String(slideNumber));
}
