import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      available: "Disponível para novos desafios",
      hero_subtitle:
        "Desenvolvedor de Software e Acadêmico de Ciência da Computação focado em criar soluções eficientes e inovadoras.",
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
      },
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
      experience_page: {
        subtitle:
          "Minha trajetória profissional e acadêmica no desenvolvimento de software.",
        current_period: "Abril 2023 - Presente",
      },
      modallport: {
        my_role: {
          title: "Minhas Responsabilidades",
          text: "Atuo como Programador Full-stack no desenvolvimento de ecossistemas críticos para a logística portuária utilizando ASP.NET Core e bancos de dados Oracle/SQL Server. Além disso, desenvolvo aplicativos mobile com React Native e sistemas web com React, como a criação de um Kanban Board interno para a gestão de fluxo de trabalho da própria equipe da Modallport Sistemas.",
        },
        company: {
          title: "Sobre a Modallport",
          text: "Sediada em Itajaí (SC), a Modallport é referência em software para comércio exterior e gestão portuária, transformando normas aduaneiras complexas em sistemas ágeis para recintos alfandegados e operadores logísticos globais.",
        },
        website_link: "https://www.modallport.com.br",
        visit_button: "Visitar Website",
      },
      univali_info: {
        my_studies: {
          title: "Estudos e Projetos",
          text: "Como acadêmico de Ciência da Computação, desenvolvo projetos práticos que abrangem desde fundamentos de algoritmos em C e Assembly até sistemas modernos. Destacam-se a implementação de um compilador para otimização de código RISC-V e o desenvolvimento de um portal acadêmico utilizando infraestrutura AWS Cloud.",
          link_text: "Ver Repositórios Acadêmicos",
          github_link: "https://github.com/MathMoura18",
        },
        institution: {
          title: "Sobre a UNIVALI",
          text: "A Universidade do Vale do Itajaí é uma das maiores instituições de ensino superior de Santa Catarina. Com forte foco em inovação e tecnologia, proporciona um ambiente de aprendizado prático que integra ensino, pesquisa e extensão em parceria com o setor produtivo regional.",
        },
        website_link: "https://www.univali.br",
        visit_button: "Conhecer Instituição",
      },
    },
  },
  en: {
    translation: {
      available: "Available for new challenges",
      hero_subtitle:
        "Software Developer and Computer Science Student focused on creating efficient and innovative solutions.",
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
      },
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
      experience_page: {
        subtitle:
          "My professional and academic journey in software development.",
        current_period: "April 2023 - Present",
      },
      modallport: {
        my_role: {
          title: "My Responsibilities",
          text: "I work as a Full-stack Developer building critical ecosystems for port logistics using ASP.NET Core with Oracle and SQL Server. Additionally, I develop mobile applications with React Native and web systems with React, including a custom Kanban Board project for Modallport's internal team workflow management.",
        },
        company: {
          title: "About Modallport",
          text: "Based in Itajaí, Brazil, Modallport is a leader in foreign trade and port management software, turning complex customs regulations into agile systems for bonded warehouses and global logistics operators.",
        },
        website_link: "https://www.modallport.com.br",
        visit_button: "Visit Website",
      },
      univali_info: {
        my_studies: {
          title: "Studies and Projects",
          text: "As a Computer Science student, I develop practical projects ranging from C and Assembly algorithm fundamentals to modern systems. Highlights include the implementation of a compiler for RISC-V code optimization and the development of an academic portal using AWS Cloud infrastructure.",
        },
        institution: {
          title: "About UNIVALI",
          text: "The University of the Valley of Itajaí is one of the largest higher education institutions in Santa Catarina, Brazil. With a strong focus on innovation and technology, it provides a practical learning environment that integrates teaching, research, and extension in partnership with the regional productive sector.",
        },
        website_link: "https://www.univali.br",
        visit_button: "Meet Institution",
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
