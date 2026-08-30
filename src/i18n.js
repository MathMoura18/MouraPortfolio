import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      available: "Disponível para novos desafios",
      hero_kicker: "Desenvolvedor de Software",
      hero_subtitle:
        "Transformo problemas reais em software confiável. Atuo no desenvolvimento de sistemas críticos com .NET e React, e construo projetos próprios em IA, compiladores e aplicações web full-stack.",
      cta: {
        contact: "Fale comigo",
        view_projects: "Ver projetos",
        view_all_projects: "Ver todos os projetos",
        view_github: "Ver perfil no GitHub",
      },
      stats: {
        experience: "Anos de experiência",
        projects: "Projetos no GitHub",
        stack: "Tecnologias no dia a dia",
        production: "Sistema em produção",
      },
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
      },
      about: {
        title: "Sobre mim",
        text_1:
          "Sou desenvolvedor de software na Modallport Sistemas, onde construo e mantenho ecossistemas críticos para a logística portuária brasileira com ASP.NET Core, React e React Native. Em paralelo, curso Ciência da Computação na UNIVALI, o que me mantém próximo de fundamentos como compiladores, estruturas de dados e sistemas de baixo nível.",
        text_2:
          "Gosto de projetos que unem as duas pontas: da lógica de baixo nível em Assembly e C até interfaces web modernas em React. Nas horas livres, coloco essas ideias em prática em projetos pessoais publicados no GitHub — de ferramentas com IA a sites completos para causas que acredito, como adoção de animais.",
        skills_title: "Stack e ferramentas",
      },
      skills: {
        backend: "Backend",
        frontend: "Frontend & Mobile",
        data: "Dados",
        other: "Linguagens & Fundamentos",
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
        section_subtitle:
          "Uma amostra dos meus projetos pessoais no GitHub — veja todos na página de Projetos.",
        portfolio: {
          desc: "Este portfólio: site pessoal em React, TypeScript e Tailwind, com suporte a múltiplos idiomas e animação de partículas personalizada.",
        },
        m2compiladores: {
          desc: "Trabalho da disciplina de Compiladores, implementando análise léxica, sintática e geração de código em Java.",
        },
        awsunivali: {
          desc: "Configuração e deploy de um portal acadêmico utilizando serviços de nuvem da AWS, com foco em infraestrutura escalável.",
        },
        animalcare: {
          desc: "Aplicação web em React/TypeScript para gestão e cuidado de animais, com interface pensada para organizar informações de forma simples.",
        },
        openai: {
          desc: "Interface de chat com IA para extração de informações de documentos carregados, usando a API da OpenAI.",
        },
        txtos: {
          desc: "Projeto de baixo nível em C explorando conceitos fundamentais de sistemas operacionais, como manipulação de memória.",
        },
        cat: {
          desc: "Site completo e funcional para uma ONG de adoção de gatos, com interface intuitiva para adoção e gestão de informações.",
        },
        desafiofluxo: {
          desc: "Projeto para praticar Java e consolidar os pilares da Orientação a Objetos em um código modular e reutilizável.",
        },
        rocketseat: {
          desc: "Projetos e exercícios de front-end (HTML, CSS e JavaScript) desenvolvidos durante trilhas de estudo da RocketSeat.",
        },
        nop: {
          desc: "Ferramenta para reordenar e inserir instruções NOP em código Assembly RISC-V, otimizando execução e alinhamento.",
        },
      },
      projects_page: {
        title: "Projetos",
        subtitle:
          "Uma coleção de experimentos, trabalhos acadêmicos e soluções reais desenvolvidas durante minha jornada em Ciência da Computação — todos disponíveis no meu GitHub.",
        filter_by: "Filtrar por:",
        all: "Todos",
        no_results: "Nenhum projeto encontrado nesta categoria.",
        view_repo: "Ver repositório",
      },
      experience_page: {
        subtitle:
          "Minha trajetória profissional e acadêmica no desenvolvimento de software.",
        current_period: "Maio 2024 — Presente",
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
      hero_kicker: "Software Developer",
      hero_subtitle:
        "I turn real problems into reliable software. I work on critical systems with .NET and React, and build my own projects in AI, compilers, and full-stack web apps.",
      cta: {
        contact: "Get in touch",
        view_projects: "View projects",
        view_all_projects: "View all projects",
        view_github: "View GitHub profile",
      },
      stats: {
        experience: "Years of experience",
        projects: "Projects on GitHub",
        stack: "Technologies used daily",
        production: "System in production",
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
      },
      about: {
        title: "About me",
        text_1:
          "I'm a software developer at Modallport Sistemas, where I build and maintain critical ecosystems for Brazilian port logistics using ASP.NET Core, React, and React Native. Alongside that, I'm studying Computer Science at UNIVALI, which keeps me close to fundamentals like compilers, data structures, and low-level systems.",
        text_2:
          "I enjoy projects that connect both ends of the stack: from low-level logic in Assembly and C to modern web interfaces in React. In my free time, I put those ideas into practice through personal projects published on GitHub — from AI-powered tools to full websites for causes I care about, like animal adoption.",
        skills_title: "Stack & tools",
      },
      skills: {
        backend: "Backend",
        frontend: "Frontend & Mobile",
        data: "Data",
        other: "Languages & Fundamentals",
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
        section_subtitle:
          "A sample of my personal GitHub projects — see them all on the Projects page.",
        portfolio: {
          desc: "This portfolio: a personal site built with React, TypeScript and Tailwind, with multi-language support and a custom particle animation.",
        },
        m2compiladores: {
          desc: "Coursework for the Compilers class, implementing lexical analysis, parsing, and code generation in Java.",
        },
        awsunivali: {
          desc: "Configuration and deployment of an academic portal using AWS cloud services, focused on scalable infrastructure.",
        },
        animalcare: {
          desc: "React/TypeScript web app for animal care management, with an interface designed to keep information simple and accessible.",
        },
        openai: {
          desc: "AI chat interface for extracting information from uploaded documents, powered by the OpenAI API.",
        },
        txtos: {
          desc: "Low-level C project exploring fundamental operating systems concepts, such as memory manipulation.",
        },
        cat: {
          desc: "Full, functional website for a cat adoption NGO, with an intuitive interface for adoption and information management.",
        },
        desafiofluxo: {
          desc: "Project to practice Java and consolidate core Object-Oriented Programming pillars into a modular, reusable codebase.",
        },
        rocketseat: {
          desc: "Front-end projects and exercises (HTML, CSS and JavaScript) built during RocketSeat study tracks.",
        },
        nop: {
          desc: "Tool that reorders and inserts NOP instructions into RISC-V Assembly code, optimizing execution and alignment.",
        },
      },
      projects_page: {
        title: "Projects",
        subtitle:
          "A collection of experiments, academic work, and real-world solutions built during my Computer Science journey — all available on my GitHub.",
        filter_by: "Filter by:",
        all: "All",
        no_results: "No projects found in this category.",
        view_repo: "View repository",
      },
      experience_page: {
        subtitle:
          "My professional and academic journey in software development.",
        current_period: "May 2024 — Present",
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
          link_text: "See Academic Repositories",
          github_link: "https://github.com/MathMoura18",
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
