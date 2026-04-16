import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      // Hero / Home
      welcome: "Desenvolvedor de Software",
      available: "Disponível para novos desafios",

      // Header Nav
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
      },

      // Página de Projetos
      projects_page: {
        title: "Projetos",
        subtitle:
          "Uma coleção de experimentos, trabalhos acadêmicos e soluções reais desenvolvidas durante minha jornada em Ciência da Computação.",
        filter_by: "Filtrar por:",
        all: "Todos",
      },
    },
  },
  en: {
    translation: {
      // Hero / Home
      welcome: "Software Developer",
      available: "Available for new challenges",

      // Header Nav
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
      },

      // Página de Projetos
      projects_page: {
        title: "Projects",
        subtitle:
          "A collection of experiments, academic work, and real solutions developed during my Computer Science journey.",
        filter_by: "Filter by:",
        all: "All",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador automaticamente
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt", // Idioma padrão caso a detecção falhe
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
