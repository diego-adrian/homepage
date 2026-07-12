/**
 * Single source of truth for the site's content.
 * Sourced from Diego's public profiles (GitHub @diego-adrian, LinkedIn,
 * EDteam, USIP) — edit here to update any section.
 */

export const profile = {
  name: "Diego Adrian Barra Paredes",
  short: "Diego Barra",
  handle: "add_code",
  role: "Fullstack Developer",
  location: "La Paz, Bolivia",
  tagline: "Construimos soluciones digitales",
  taglineAccent: "de principio a fin.",
  intro:
    `Desarrollador fullstack senior con más de 13 años de experiencia
construyendo y desplegando software en diversos stacks
tecnológicos, impulsado por el aprendizaje continuo. Docente de
postgrado en la Universidad Católica Boliviana "San Pablo" (UCB) y
la Universidad Simón I. Patiño (USIP), e instructor digital en
EDTeam y en Coursera`,
  email: "adry.dabp@gmail.com",
};

export const links = {
  github: "https://github.com/diego-adrian",
  linkedin: "https://www.linkedin.com/in/diego-adrian-barra-paredes/",
  twitter: "https://twitter.com/_addcode_",
  youtube: "https://www.youtube.com/@add_code",
  medium: "https://medium.com/@adry.dabp",
  portfolio: "https://diegoadrian.com/",
  email: "mailto:adry.dabp@gmail.com",
};

export const stats = [
  { value: "106+", label: "Repositorios públicos" },
  { value: "10+", label: "Años en producción" },
  { value: "∞", label: "Café por deploy" },
];

export const stack = [
  "TypeScript",
  "Node.js",
  "React",
  "Vue",
  "Svelte",
  "Nest.js",
  "TypeORM",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "New Relic",
  "Coralogix",
  "Flutter",
  "Terraform",
  "UX/UI"
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  place: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Acid Labs",
    role: "FullStack Developer",
    period: "Actualidad",
    place: "Chile · Remoto",
    description:
      "Desarrollo de productos digitales para clientes de la región con stack Node.js + TypeScript en el backend y frameworks modernos en el frontend",
  },
  {
    company: "Agetic",
    role: "FullStack en Agencia de gobierno electrónico y tecnologías de información y comunicación",
    period: "Anterior",
    place: "Bolivia",
    description:
      "Entidad pública encargada de generar soluciones tecnológicas open source para la sociedad Boliviana",
  },
  {
    company: "Processmaker",
    role: "Ingeniero de Procesos de Negocio II",
    period: "Anterior",
    place: "Clientes extranjeros",
    description:
      "Desarrollo de soluciones basado en el estandar BPMN para clientes de todo el mundo",
  },
  {
    company: "Zenlabs",
    role: "Técnico en Desarrollo Frontend",
    period: "Anterior",
    place: "Bolivia",
    description:
      "Desarrollo y personalización de productos digitales",
  },
];

export type Project = {
  name: string;
  blurb: string;
  tech: string;
  badge: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "datos-abiertos-frontend",
    blurb:
      "Frontend para la visualización y consumo de datos abiertos, construido con Vue.",
    tech: "Vue · JavaScript",
    badge: "Open data",
    href: "https://github.com/diego-adrian",
  },
  {
    name: "ecommerce-vanillajs",
    blurb:
      "Tienda online sin frameworks — JavaScript y CSS puro para entender el motor por dentro.",
    tech: "JavaScript · CSS",
    badge: "eCommerce",
    href: "https://github.com/diego-adrian",
  },
  {
    name: "Solicitudes",
    blurb:
      "Sistema de gestión de solicitudes y flujos de aprobación para equipos.",
    tech: "Fullstack",
    badge: "Gestión",
    href: "https://github.com/diego-adrian",
  },
];

export const teaching = {
  title: "Enseño lo que construyo",
  body: "Instructor de postgrado y profesor digital en EDteam y Coursera. También comparto cosas relacionadas con React, TypeScript, Flutter, AWS, Nestjs entro otros como @add_code en YouTube para la comunidad.",
  points: [
    "Docente de postgrado en Fullstack Development",
    "Profesor digital en EDteam & Coursera",
    "Creador de contenido técnico — @add_code",
  ],
};

export const education = [
  {
    title: "Máster en Dirección Estratégica en TI",
    place: "Universidad Europea del Atlántico",
  },
  {
    title: "Ingeniería / Licenciatura en Informática",
    place: "Universidad Mayor de San Andrés (UMSA)",
  },
  {
    title: "Diplomados en Python y GNU/Linux",
    place: 'Universidad Católica Boliviana "San Pablo"',
  },
  {
    title: "Certificaciones a lo largo de mi trayectoria",
    place: '',
  },
];
