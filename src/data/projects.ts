export type Project = {
  id: string;
  title: string;
  descKey: string;
  tech: string[];
  categories: string[];
  repo: string;
  demo?: string;
  year: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "mouraportfolio",
    title: "MouraPortfolio",
    descKey: "projects.portfolio.desc",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    categories: ["Web"],
    repo: "https://github.com/MathMoura18/MouraPortfolio",
    year: "2026",
  },
  {
    id: "m2compiladores",
    title: "M2Compiladores",
    descKey: "projects.m2compiladores.desc",
    tech: ["Java"],
    categories: ["Compiladores"],
    repo: "https://github.com/MathMoura18/M2Compiladores-MatheusMoura",
    year: "2026",
  },
  {
    id: "awsunivali",
    title: "AWSUnivali",
    descKey: "projects.awsunivali.desc",
    tech: ["AWS", "TypeScript", "Cloud"],
    categories: ["Infra"],
    repo: "https://github.com/MathMoura18/AWSUnivali",
    year: "2026",
    featured: true,
  },
  {
    id: "animalcare",
    title: "AnimalCare",
    descKey: "projects.animalcare.desc",
    tech: ["React", "TypeScript"],
    categories: ["Web"],
    repo: "https://github.com/MathMoura18/AnimalCare",
    year: "2025",
  },
  {
    id: "openaireader",
    title: "OpenAIReader",
    descKey: "projects.openai.desc",
    tech: ["JavaScript", "OpenAI"],
    categories: ["IA"],
    repo: "https://github.com/MathMoura18/OpenAIReader",
    year: "2025",
    featured: true,
  },
  {
    id: "txtos",
    title: "txt-OS",
    descKey: "projects.txtos.desc",
    tech: ["C"],
    categories: ["Sistemas"],
    repo: "https://github.com/MathMoura18/txt-OS",
    year: "2025",
  },
  {
    id: "catpetunia",
    title: "CatPetunia",
    descKey: "projects.cat.desc",
    tech: ["JavaScript", "HTML", "CSS"],
    categories: ["Web"],
    repo: "https://github.com/MathMoura18/CatPetunia",
    year: "2024",
    featured: true,
  },
  {
    id: "desafiocontrolefluxo",
    title: "DesafioControleFluxo",
    descKey: "projects.desafiofluxo.desc",
    tech: ["Java", "POO"],
    categories: ["Backend"],
    repo: "https://github.com/MathMoura18/DesafioControleFluxo",
    year: "2024",
  },
  {
    id: "aulasrocketseat",
    title: "AulasRocketSeat",
    descKey: "projects.rocketseat.desc",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    repo: "https://github.com/MathMoura18/AulasRocketSeat",
    year: "2024",
  },
  {
    id: "nopreorder",
    title: "NOPReorder",
    descKey: "projects.nop.desc",
    tech: ["C++", "Assembly", "RISC-V"],
    categories: ["Compiladores", "Sistemas"],
    repo: "https://github.com/MathMoura18/NOPReorder",
    year: "2024",
    featured: true,
  },
];

export const GITHUB_URL = "https://github.com/MathMoura18";
export const LINKEDIN_URL = "https://www.linkedin.com/in/matheus-moura21/";
export const EMAIL = "mathmo.ura242@gmail.com";
