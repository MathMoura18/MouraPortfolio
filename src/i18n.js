import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      available: "Disponível para novos desafios",
      hero_subtitle:
        "Desenvolvedor de Software e Acadêmico de Ciência da Computação focado em criar soluções eficientes e inovadoras.",
      experience: {
        title: "Experiência Atual",
        date: "05/2024 — Hoje",
        job_desc: {
          1: "Desenvolvimento de sistemas com ASP.NET MVC.",
          2: "Manutenção de sistemas e escrita de código limpo.",
          3: "Diagnóstico e solução de problemas de programação.",
        },
      },
      education: {
        title: "Educação",
        course: "Ciência da Computação",
        date: "2023 — 2027 (Previsão)",
      },
      projects: {
        section_title: "Projetos Selecionados",
        openai: {
          desc: "Interface de chat com IA para extração de informações de documentos carregados.",
        },
        nop: {
          desc: "Ferramenta para otimização de execução em código Assembly RISC-V.",
        },
        cat: {
          desc: "Site completo e funcional para uma ONG de adoção de gatos.",
        },
        beat: {
          desc: "Minigame de adivinhação de palavras utilizando a API da OpenAI.",
        },
        aws: {
          desc: "Configuração e deploy de portal acadêmico utilizando serviços AWS.",
        },
      },
      projects_page: {
        title: "Projetos",
        subtitle:
          "Uma coleção de experimentos, trabalhos acadêmicos e soluções reais desenvolvidas durante minha jornada em Ciência da Computação.",
        filter_by: "Filtrar por:",
        all: "Todos",
        no_results: "Nenhum projeto encontrado nesta categoria.",
      },
    },
  },
  en: {
    translation: {
      available: "Available for new challenges",
      hero_subtitle:
        "Software Developer and Computer Science Student focused on creating efficient and innovative solutions.",
      experience: {
        title: "Current Experience",
        date: "05/2024 — Present",
        job_desc: {
          1: "System development with ASP.NET MVC.",
          2: "System maintenance and clean code writing.",
          3: "Diagnosis and resolution of programming issues.",
        },
      },
      education: {
        title: "Education",
        course: "Computer Science",
        date: "2023 — 2027 (Expected)",
      },
      projects: {
        section_title: "Selected Projects",
        openai: {
          desc: "AI chat interface for extracting information from uploaded documents.",
        },
        nop: {
          desc: "Tool for execution optimization in RISC-V Assembly code.",
        },
        cat: { desc: "Full-stack functional website for a cat adoption NGO." },
        beat: { desc: "Word guessing minigame using the OpenAI API." },
        aws: {
          desc: "Configuration and deployment of an academic portal using AWS services.",
        },
      },
      projects_page: {
        title: "Projects",
        subtitle:
          "A collection of experiments, academic work, and real-world solutions developed during my Computer Science journey.",
        filter_by: "Filter by:",
        all: "All",
        no_results: "No projects found in this category.",
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
