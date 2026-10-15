/**
 * Conteúdo das abas Acadêmico, Profissional, Projetos Pessoais, Conhecimento e Sobre mim.
 *
 * O TCC fica em ./tcc.ts.
 *
 * Textos bilíngues usam { pt, en }. Itens marcados com `pending: true` são rascunhos:
 * aparecem destacados em `npm run dev` para você preencher e são OCULTOS no build de
 * produção. Depois de preencher, remova o `pending: true`.
 */

import capaCodigoLimpo from "../assets/books/codigo-limpo.webp";
import capaArquiteturaLimpa from "../assets/books/arquitetura-limpa.webp";
import capaTestes from "../assets/books/testes-automatizados.webp";
import capaStartupEnxuta from "../assets/books/a-startup-enxuta.webp";
import capaLeanInception from "../assets/books/lean-inception.webp";
import capaSteveJobs from "../assets/books/steve-jobs.webp";

export type L = { pt: string; en: string };

export type Pendable = { pending?: boolean };

/* ------------------------------------------------------------------ */
/* Área Acadêmica                                                       */
/* ------------------------------------------------------------------ */

export const university = {
  name: "UNIVALI — Universidade do Vale do Itajaí",
  course: {
    pt: "Bacharelado em Ciência da Computação",
    en: "B.Sc. in Computer Science",
  },
  campus: "Itajaí, SC",
  start: 2023,
  expectedEnd: 2027,
  url: "https://www.univali.br",
};

export type AcademicWork = Pendable & {
  title: string;
  subject: L;
  year: string;
  desc: L;
  tech: string[];
  repo?: string;
};

export const academicWorks: AcademicWork[] = [
  {
    title: "M2Compiladores",
    subject: { pt: "Compiladores", en: "Compilers" },
    year: "2026",
    desc: {
      pt: "Implementação das etapas de um compilador — análise léxica, sintática e geração de código — em Java.",
      en: "Implementation of compiler stages — lexical analysis, parsing, and code generation — in Java.",
    },
    tech: ["Java"],
    repo: "https://github.com/MathMoura18/M2Compiladores-MatheusMoura",
  },
  {
    title: "AWSUnivali",
    subject: { pt: "Computação em Nuvem", en: "Cloud Computing" },
    year: "2026",
    desc: {
      pt: "Configuração e deploy de um portal acadêmico com serviços da AWS, com foco em infraestrutura escalável.",
      en: "Configuration and deployment of an academic portal on AWS, focused on scalable infrastructure.",
    },
    tech: ["AWS", "TypeScript"],
    repo: "https://github.com/MathMoura18/AWSUnivali",
  },
  {
    title: "txt-OS",
    subject: { pt: "Sistemas Operacionais", en: "Operating Systems" },
    year: "2025",
    desc: {
      pt: "Projeto em C explorando conceitos fundamentais de sistemas operacionais, como manipulação de memória.",
      en: "C project exploring core operating systems concepts such as memory manipulation.",
    },
    tech: ["C"],
    repo: "https://github.com/MathMoura18/txt-OS",
  },
  {
    title: "NOPReorder",
    subject: { pt: "Arquitetura de Computadores", en: "Computer Architecture" },
    year: "2024",
    desc: {
      pt: "Ferramenta que reordena e insere instruções NOP em código Assembly RISC-V para otimizar a execução e corrigir problemas de alinhamento.",
      en: "Tool that reorders and inserts NOP instructions into RISC-V Assembly to optimize execution and fix alignment issues.",
    },
    tech: ["C++", "Assembly", "RISC-V"],
    repo: "https://github.com/MathMoura18/NOPReorder",
  },
  {
    title: "CatPetunia",
    subject: { pt: "Desenvolvimento Web", en: "Web Development" },
    year: "2023",
    desc: {
      pt: "Site completo para uma ONG de adoção de gatos, desenvolvido como trabalho do curso.",
      en: "Full website for a cat adoption NGO, built as a course assignment.",
    },
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/MathMoura18/CatPetunia",
  },
];

/* ------------------------------------------------------------------ */
/* Área Profissional                                                    */
/* ------------------------------------------------------------------ */

/** Início na área — usado para calcular o tempo de experiência automaticamente. */
export const CAREER_START = new Date(2024, 4, 1); // maio/2024

export type ToolGroup = { title: L; items: string[] };

export const masteredTools: ToolGroup[] = [
  {
    title: { pt: "Linguagens", en: "Languages" },
    items: ["C#", "TypeScript", "JavaScript", "SQL / PL-SQL", "Python", "Java"],
  },
  {
    title: { pt: "Back-end", en: "Back-end" },
    items: [
      ".NET (Core 2.1 → 10)",
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      "Hangfire",
      "FastAPI",
      "Node.js",
    ],
  },
  {
    title: { pt: "Front-end & Mobile", en: "Front-end & Mobile" },
    items: [
      "React",
      "React Native",
      "Razor + jQuery",
      "AdminLTE",
      "Tailwind CSS",
      "FastReport",
    ],
  },
  {
    title: { pt: "Bancos de dados", en: "Databases" },
    items: ["Oracle", "SQL Server", "PostgreSQL / Supabase", "SQLite"],
  },
  {
    title: { pt: "Infra & DevOps", en: "Infra & DevOps" },
    items: [
      "Git + GitLab CI/CD",
      "IIS",
      "Docker / Podman",
      "OpenShift",
      "AWS S3",
      "Swagger / OpenAPI",
    ],
  },
];

export type Interaction = { title: L; desc: L };

export const serverSide: Interaction[] = [
  {
    title: { pt: "APIs REST versionadas", en: "Versioned REST APIs" },
    desc: {
      pt: "APIs em ASP.NET Core (do .NET Core 2.1 ao .NET 10) com Swagger, versionamento e regras de negócio centralizadas — no controle de acesso, é a API que decide quem passa, independentemente do aparelho.",
      en: "ASP.NET Core APIs (from .NET Core 2.1 to .NET 10) with Swagger, versioning, and centralized business rules — in access control, the API decides who gets in, regardless of the device.",
    },
  },
  {
    title: { pt: "Integração com hardware", en: "Hardware integration" },
    desc: {
      pt: "Comunicação com leitores faciais e catracas (Control iD, TopData) via webhooks, WebSocket e sincronização de ações, com tratamento de falhas e logs de acesso.",
      en: "Communication with facial readers and turnstiles (Control iD, TopData) via webhooks, WebSocket, and action sync, with failure handling and access logs.",
    },
  },
  {
    title: {
      pt: "Dados e rotinas em segundo plano",
      en: "Data & background jobs",
    },
    desc: {
      pt: "Consultas e procedures em Oracle e SQL Server, migrations entregues ao DBA, jobs agendados com Hangfire e backup de documentos para Amazon S3.",
      en: "Queries and procedures on Oracle and SQL Server, migrations handed to the DBA, Hangfire scheduled jobs, and document backups to Amazon S3.",
    },
  },
  {
    title: { pt: "Relatórios e financeiro", en: "Reports & finance" },
    desc: {
      pt: "Relatórios em FastReport e rotinas de conciliação bancária (conciliar/desconciliar) usadas pelo operacional.",
      en: "FastReport reports and bank reconciliation routines (reconcile/unreconcile) used by operations.",
    },
  },
];

export const clientSide: Interaction[] = [
  {
    title: { pt: "Front-ends MVC com BFF", en: "MVC front-ends with a BFF" },
    desc: {
      pt: "Telas em Razor, jQuery e AdminLTE em que o navegador nunca chama a API direto: o back-end do próprio site faz a ponte (padrão Backend-for-Frontend), protegendo tokens e regras.",
      en: "Razor, jQuery, and AdminLTE screens where the browser never calls the API directly: the site's own back-end bridges it (Backend-for-Frontend), protecting tokens and rules.",
    },
  },
  {
    title: { pt: "App mobile offline-first", en: "Offline-first mobile app" },
    desc: {
      pt: "App em React Native para o pátio: leitura de QR Code, fotos, formulários validados e banco SQLite local, sincronizando com as APIs quando a rede volta.",
      en: "React Native app for the yard: QR code scanning, photos, validated forms, and a local SQLite database that syncs with the APIs once the network is back.",
    },
  },
  {
    title: {
      pt: "Experiência e identidade visual",
      en: "UX & visual identity",
    },
    desc: {
      pt: "Refatoração de layouts, telas de login configuráveis, redefinição de senha e padronização visual entre os sistemas do ecossistema.",
      en: "Layout refactors, configurable login screens, password reset, and visual consistency across the ecosystem's systems.",
    },
  },
];

export type ProfessionalProject = Pendable & {
  title: L;
  context: L;
  desc: L;
  contributions: L[];
  tech: string[];
  period: string;
};

export const professionalProjects: ProfessionalProject[] = [
  {
    title: {
      pt: "Modall Hawk — controle de acesso facial",
      en: "Modall Hawk — facial access control",
    },
    context: {
      pt: "Recintos alfandegados e portos",
      en: "Bonded warehouses and ports",
    },
    period: "2026",
    desc: {
      pt: "Sistema de controle de acesso físico com leitores de reconhecimento facial. A arquitetura é multi-fabricante: os aparelhos apenas capturam o rosto, e a decisão de liberar a catraca é tomada pela API.",
      en: "Physical access control system using facial recognition readers. The architecture is multi-vendor: devices only capture the face, and the decision to open the turnstile is made by the API.",
    },
    contributions: [
      {
        pt: "Módulo Operacional e cadastro de Vias",
        en: "Operations module and access lanes",
      },
      {
        pt: "Novas validações da catraca e registro de webhook no aparelho",
        en: "New turnstile validations and on-device webhook registration",
      },
      {
        pt: "Versionamento da API e tratamento de erros na sincronização",
        en: "API versioning and sync error handling",
      },
      { pt: "Refatoração completa do layout", en: "Full layout refactor" },
    ],
    tech: [
      ".NET 10",
      "ASP.NET Core",
      "Oracle",
      "WebSocket",
      "Control iD",
      "TopData",
    ],
  },
  {
    title: {
      pt: "App SCA — operações de carga",
      en: "SCA app — cargo operations",
    },
    context: {
      pt: "Aplicativo mobile para o pátio",
      en: "Mobile app for the yard",
    },
    period: "2025 — 2026",
    desc: {
      pt: "Aplicativo Android usado pelos operadores para registrar unitização e desunitização de cargas, entrada e saída de carga solta, reposição e serviços adicionais — com QR Code, fotos e funcionamento offline.",
      en: "Android app used by operators to record cargo unitization and de-unitization, loose cargo in/out, restocking, and additional services — with QR codes, photos, and offline support.",
    },
    contributions: [
      {
        pt: "Fluxos de entrada de carga solta e finalização de desunitização",
        en: "Loose cargo entry and de-unitization completion flows",
      },
      {
        pt: "Novos tipos de QR Code e revisão de ícones",
        en: "New QR code types and icon overhaul",
      },
      {
        pt: "Controle de permissões, versão do app e integração das APIs",
        en: "Permissions, app versioning, and API integration",
      },
    ],
    tech: ["React Native", "TypeScript", "SQLite", "Axios", "React Hook Form"],
  },
  {
    title: {
      pt: "ModallDoc — gestão documental",
      en: "ModallDoc — document management",
    },
    context: {
      pt: "Web + API · projeto com mais contribuições",
      en: "Web + API · my most active project",
    },
    period: "2026",
    desc: {
      pt: "Aplicação que centraliza BLs, invoices, manifestos, cadastros e relatórios. Atuo tanto no front-end MVC quanto na API, com mais de 90 commits.",
      en: "Application that centralizes bills of lading, invoices, manifests, records, and reports. I work on both the MVC front-end and the API, with 90+ commits.",
    },
    contributions: [
      {
        pt: "Conciliação bancária: conciliar, desconciliar e consulta de datas",
        en: "Bank reconciliation: reconcile, unreconcile, and date lookup",
      },
      {
        pt: "Senhas web e redefinição de senha pelo usuário",
        en: "Web passwords and self-service password reset",
      },
      {
        pt: "Relatórios em FastReport e ajustes de layout",
        en: "FastReport reports and layout tweaks",
      },
    ],
    tech: [".NET 5", "ASP.NET Core MVC", "Web API", "SQL Server", "FastReport"],
  },
  {
    title: {
      pt: "GED — gestão eletrônica de documentos",
      en: "GED — electronic document management",
    },
    context: { pt: "Novo front-end + API", en: "New front-end + API" },
    period: "2026",
    desc: {
      pt: "Plataforma de upload, consulta e manutenção de documentos e processos, com backup agendado para a nuvem. Criei o novo front-end do zero e ajustei a API.",
      en: "Platform for uploading, searching, and maintaining documents and processes, with scheduled cloud backups. I built the new front-end from scratch and refined the API.",
    },
    contributions: [
      {
        pt: "Novo front-end web, telas de logs e páginas de erro detalhadas",
        en: "New web front-end, log screens, and detailed error pages",
      },
      {
        pt: "Controle de acesso e limpeza de métodos sem uso na API",
        en: "Access control and removal of unused API methods",
      },
      { pt: "Deploy automatizado", en: "Automated deployment" },
    ],
    tech: [".NET 10", ".NET Core 2.1", "Oracle", "Hangfire", "AWS S3"],
  },
  {
    title: { pt: "Pipelines de CI/CD", en: "CI/CD pipelines" },
    context: { pt: "Novos sistemas web", en: "New web systems" },
    period: "2026",
    desc: {
      pt: "Configuração de pipelines no GitLab que validam o build e publicam automaticamente os novos sistemas a cada merge, eliminando o deploy manual.",
      en: "GitLab pipelines that validate the build and automatically publish new systems on every merge, removing manual deploys.",
    },
    contributions: [
      {
        pt: "Pipeline com deploy automático",
        en: "Pipeline with automatic deploy",
      },
      {
        pt: "Validação do publish antes de subir",
        en: "Publish validation before release",
      },
    ],
    tech: ["GitLab CI/CD", ".NET 10", "IIS"],
  },
];

/* ------------------------------------------------------------------ */
/* Projetos pessoais (produtos)                                         */
/* ------------------------------------------------------------------ */

export type PersonalProduct = Pendable & {
  name: string;
  tagline: L;
  desc: L;
  features: L[];
  tech: string[];
  status: L;
  live?: boolean;
  featured?: boolean;
  link?: string;
  repo?: string;
};

export const personalProducts: PersonalProduct[] = [
  {
    name: "SmartClips",
    featured: true,
    live: true,
    link: "https://smartclips.app",
    tagline: {
      pt: "Cortes virais de vídeos longos, gerados por IA e publicados direto no TikTok.",
      en: "Viral clips from long videos, generated by AI and published straight to TikTok.",
    },
    desc: {
      pt: "Você cola o link de um vídeo do YouTube e o SmartClips encontra os melhores momentos, transforma em vídeos verticais com legenda e publica na sua conta. Começou como um app desktop em Python e virou uma plataforma web multiusuário, paga e em produção.",
      en: "Paste a YouTube link and SmartClips finds the best moments, turns them into captioned vertical videos, and publishes them to your account. It started as a Python desktop app and became a paid, multi-user web platform in production.",
    },
    features: [
      {
        pt: "IA escolhe os trechos: transcrição com Whisper + LLM, usando também os momentos mais vistos do vídeo",
        en: "AI picks the moments: Whisper transcription + an LLM, also using the video's most-replayed parts",
      },
      {
        pt: "Editor de corte com linha do tempo e legendas estilo karaokê totalmente personalizáveis",
        en: "Clip editor with a timeline and fully customizable karaoke-style captions",
      },
      {
        pt: "Reenquadramento vertical que segue o rosto e destaque de webcam/placar",
        en: "Vertical reframing that follows faces, plus webcam/scoreboard highlighting",
      },
      {
        pt: "Publicação no TikTok com múltiplas contas (OAuth) e cobrança por créditos",
        en: "TikTok publishing with multiple accounts (OAuth) and credit-based billing",
      },
      {
        pt: "Fila de jobs resiliente: retoma de onde parou após falhas ou deploys",
        en: "Resilient job queue: resumes where it stopped after failures or deploys",
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "ffmpeg",
      "OpenAI",
      "Whisper (GPU)",
      "Stripe",
      "Railway",
      "Vercel",
    ],
    status: { pt: "No ar", en: "Live" },
  },
  {
    name: "VibeBoard",
    tagline: {
      pt: "Um Kanban de vibe coding integrado ao Claude Code da sua máquina.",
      en: "A vibe coding Kanban integrated with Claude Code on your machine.",
    },
    desc: {
      pt: "Cada card é um prompt: você envia com um clique, acompanha a IA trabalhando em tempo real, valida arquivo por arquivo o que mudou e recebe sugestões de próximos passos que viram novos cards.",
      en: "Each card is a prompt: send it in one click, watch the AI work in real time, review every changed file, and get next-step suggestions that become new cards.",
    },
    features: [
      {
        pt: "Transcrição da execução em streaming via Supabase Realtime",
        en: "Live run transcript streamed through Supabase Realtime",
      },
      {
        pt: 'Diff por arquivo com aprovar, reverter e reaplicar (repositório git "sombra")',
        en: 'Per-file diff with approve, revert, and reapply ("shadow" git repo)',
      },
      {
        pt: "Agente local em Node que executa o Claude Code com segurança",
        en: "Local Node agent that runs Claude Code safely",
      },
      {
        pt: "Contas com RLS em todas as tabelas e política de senha forte",
        en: "Accounts with RLS on every table and a strong password policy",
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Supabase",
      "Node.js",
      "dnd-kit",
      "Zustand",
      "Motion",
    ],
    status: { pt: "Em desenvolvimento", en: "In development" },
  },
  {
    name: "Boutique Marina Moura",
    tagline: {
      pt: "Loja online completa para uma boutique de moda casual e fitness.",
      en: "Full online store for a casual and fitness fashion boutique.",
    },
    desc: {
      pt: "E-commerce com catálogo por seções e coleções, sacola, favoritos, cupons de clube e um painel administrativo para gerenciar produtos, estoque e fotos.",
      en: "E-commerce with a catalog by sections and collections, bag, favorites, club coupons, and an admin panel to manage products, stock, and photos.",
    },
    features: [
      {
        pt: "Catálogo com fotos no Supabase Storage",
        en: "Catalog with photos on Supabase Storage",
      },
      {
        pt: "Painel administrativo com controle de estoque",
        en: "Admin panel with stock control",
      },
      {
        pt: "Cadastro, cupons de clube e dados protegidos por RLS",
        en: "Sign-up, club coupons, and data protected by RLS",
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Supabase",
      "TanStack Query",
      "Zustand",
    ],
    status: { pt: "Em desenvolvimento", en: "In development" },
    repo: "https://github.com/MathMoura18/Boutique-MarinaMoura",
  },
];

/* ------------------------------------------------------------------ */
/* Conhecimento                                                         */
/* ------------------------------------------------------------------ */

export type Course = Pendable & {
  name: string;
  provider: "Red Hat" | "Code With Mosh" | "Rocketseat" | "DIO" | string;
  issued: L;
  expires?: L;
  credentialId?: string;
  credentialUrl?: string;
  projectUrl?: string;
  note?: L;
  skills: string[];
};

/** Ordem: mais recente primeiro. */
export const courses: Course[] = [
  {
    name: "Red Hat OpenShift Administration I: Operating a Production Cluster (DO180)",
    provider: "Red Hat",
    issued: { pt: "set. 2026", en: "Sep 2026" },
    expires: { pt: "dez. 2036", en: "Dec 2036" },
    credentialId: "d70f0a3c-978f-49e2-a430-73663dfd57d1",
    credentialUrl:
      "https://www.credly.com/badges/d70f0a3c-978f-49e2-a430-73663dfd57d1",
    note: {
      pt: "Certificado de participação · versão 4.18",
      en: "Certificate of attendance · version 4.18",
    },
    skills: ["Kubernetes", "OpenShift", "Sistemas distribuídos"],
  },
  {
    name: "Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188)",
    provider: "Red Hat",
    issued: { pt: "set. 2026", en: "Sep 2026" },
    expires: { pt: "dez. 2036", en: "Dec 2036" },
    credentialId: "e0910b95-6346-42c3-b658-74584cd6b78d",
    credentialUrl:
      "https://www.credly.com/badges/e0910b95-6346-42c3-b658-74584cd6b78d",
    note: {
      pt: "Certificado de participação · versão 4.18",
      en: "Certificate of attendance · version 4.18",
    },
    skills: ["Podman", "Containers", "DevOps", "Sistemas distribuídos"],
  },
  {
    name: "The Ultimate React Native Series: Advanced Concepts",
    provider: "Code With Mosh",
    issued: { pt: "nov. 2025", en: "Nov 2025" },
    credentialId: "cert_v98v7f2j",
    credentialUrl:
      "https://drive.google.com/file/d/1llsPVFh4dGQyEmqt4tvg7VSFthWzDYai/view",
    skills: ["React Native", "TypeScript"],
  },
  {
    name: "The Ultimate React Native Series: Fundamentals",
    provider: "Code With Mosh",
    issued: { pt: "nov. 2025", en: "Nov 2025" },
    credentialId: "cert_zdf0s1g1",
    credentialUrl:
      "https://drive.google.com/file/d/1e0HN9WebvhFUWnJ7fSDMeIXmK1esqfy-/view",
    skills: ["React Native", "TypeScript"],
  },
  {
    name: "Trilha Java Básico",
    provider: "DIO",
    issued: { pt: "2024", en: "2024" },
    projectUrl: "https://github.com/MathMoura18/trilha-java-basico",
    skills: ["Java", "POO"],
  },
  {
    name: "Contribuindo em um Projeto Open Source no GitHub",
    provider: "DIO",
    issued: { pt: "2024", en: "2024" },
    projectUrl: "https://github.com/MathMoura18/dio-lab-open-source",
    skills: ["Git", "GitHub", "Open Source"],
  },
  {
    name: "Curso de Java",
    provider: "Rocketseat",
    issued: { pt: "out. 2023", en: "Oct 2023" },
    credentialId: "34ea4994-f8c4-4aa5-bd9b-a5b68052ea3f",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/34ea4994-f8c4-4aa5-bd9b-a5b68052ea3f",
    skills: ["Java"],
  },
  {
    name: "Discover",
    provider: "Rocketseat",
    issued: { pt: "out. 2023", en: "Oct 2023" },
    credentialId: "755e81e9-6808-4f1a-b191-b30a2985e7f7",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/755e81e9-6808-4f1a-b191-b30a2985e7f7",
    projectUrl: "https://github.com/MathMoura18/AulasRocketSeat",
    skills: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];

export type Book = Pendable & {
  title: L;
  original?: string;
  author: string;
  year: number;
  category: L;
  takeaway: L;
  status: "read" | "reading";
  /** Imagem da capa (src/assets/books). Sem ela, uma capa é gerada automaticamente. */
  cover?: string;
};

export const books: Book[] = [
  {
    title: { pt: "Código Limpo", en: "Clean Code" },
    cover: capaCodigoLimpo,
    original: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    category: { pt: "Engenharia de software", en: "Software engineering" },
    takeaway: {
      pt: "Código é lido muito mais vezes do que escrito: nomes que revelam a intenção, funções pequenas que fazem uma coisa só e testes como rede de segurança.",
      en: "Code is read far more than it is written: intention-revealing names, small functions that do one thing, and tests as a safety net.",
    },
    status: "read",
  },
  {
    title: { pt: "Arquitetura Limpa", en: "Clean Architecture" },
    cover: capaArquiteturaLimpa,
    original: "Clean Architecture",
    author: "Robert C. Martin",
    year: 2017,
    category: { pt: "Arquitetura", en: "Architecture" },
    takeaway: {
      pt: "A Regra da Dependência: regras de negócio no centro, frameworks, banco e interface nas bordas — e sempre dependendo para dentro.",
      en: "The Dependency Rule: business rules at the core, frameworks, database, and UI at the edges — always depending inward.",
    },
    status: "read",
  },
  {
    title: {
      pt: "Testes Automatizados de Software: Um guia prático",
      en: "Automated Software Testing: A Practical Guide",
    },
    cover: capaTestes,
    original: "Testes Automatizados de Software: Um guia prático",
    author: "Maurício Aniche · Casa do Código (Alura)",
    year: 2015,
    category: { pt: "Qualidade", en: "Quality" },
    takeaway: {
      pt: "Testes de unidade, integração e sistema na prática, e como escrever código mais fácil de testar desde o começo.",
      en: "Unit, integration, and system tests in practice, and how to write code that is easier to test from the start.",
    },
    status: "read",
  },
  {
    title: { pt: "A Startup Enxuta", en: "The Lean Startup" },
    cover: capaStartupEnxuta,
    original: "The Lean Startup",
    author: "Eric Ries",
    year: 2011,
    category: { pt: "Produto", en: "Product" },
    takeaway: {
      pt: "O ciclo construir–medir–aprender: lançar um MVP cedo, validar hipóteses com dados e pivotar sem medo.",
      en: "The build–measure–learn loop: ship an MVP early, validate hypotheses with data, and pivot without fear.",
    },
    status: "read",
  },
  {
    title: { pt: "Lean Inception", en: "Lean Inception" },
    cover: capaLeanInception,
    author: "Paulo Caroli",
    year: 2018,
    category: { pt: "Produto", en: "Product" },
    takeaway: {
      pt: "Um workshop de uma semana para alinhar time e negócio e sair com o MVP definido: visão, personas, jornadas e funcionalidades priorizadas.",
      en: "A one-week workshop to align team and business and leave with a defined MVP: vision, personas, journeys, and prioritized features.",
    },
    status: "read",
  },
  {
    title: { pt: "Steve Jobs", en: "Steve Jobs" },
    cover: capaSteveJobs,
    author: "Walter Isaacson",
    year: 2011,
    category: { pt: "Biografia", en: "Biography" },
    takeaway: {
      pt: "Foco obsessivo no produto e na simplicidade: dizer não a mil coisas para fazer poucas extraordinariamente bem.",
      en: "Obsessive focus on product and simplicity: saying no to a thousand things to do a few extraordinarily well.",
    },
    status: "read",
  },
];

export type Subject = { name: string; grade?: number };
export type Semester = Pendable & {
  period: number;
  year: string;
  current?: boolean;
  subjects: Subject[];
};

/** Grade curricular com a média final de cada disciplina (0–10). */
export const curriculum: Semester[] = [
  {
    period: 1,
    year: "2023/1",
    subjects: [{ name: "Algoritmos e Programação", grade: 6.6 }],
  },
  {
    period: 2,
    year: "2023/1 – 2024/2",
    subjects: [
      { name: "Cálculo I", grade: 7.0 },
      { name: "Circuitos Digitais", grade: 7.0 },
    ],
  },
  {
    period: 3,
    year: "2024/1 – 2024/2",
    subjects: [
      { name: "Cálculo II", grade: 6.0 },
      { name: "Programação Orientada a Objetos", grade: 6.5 },
      { name: "Estruturas de Dados", grade: 7.0 },
      { name: "Paradigmas de Programação", grade: 8.0 },
    ],
  },
  {
    period: 4,
    year: "2023/2 – 2024/2",
    subjects: [
      { name: "Banco de Dados", grade: 6.9 },
      { name: "Programação Web", grade: 8.7 },
      { name: "Organização de Computadores", grade: 7.0 },
      { name: "Engenharia de Software I", grade: 7.5 },
    ],
  },
  {
    period: 5,
    year: "2025/1",
    subjects: [
      { name: "Sistemas Operacionais", grade: 6.5 },
      { name: "Estatística", grade: 7.0 },
      { name: "Banco de Dados II", grade: 7.5 },
      { name: "Engenharia de Software II", grade: 9.0 },
      { name: "Programação para Dispositivos Móveis", grade: 7.0 },
    ],
  },
  {
    period: 6,
    year: "2025/2 – 2026/2",
    subjects: [
      { name: "Redes de Computadores", grade: 7.0 },
      { name: "Informática na Educação", grade: 10.0 },
      { name: "Informática e Sociedade", grade: 7.0 },
      { name: "Interação Humano-Computador", grade: 8.0 },
      { name: "Processamento de Imagens", grade: 8.5 },
      { name: "Linguagens Formais e Autômatos", grade: 6.5 },
    ],
  },
  {
    period: 7,
    year: "2026/1",
    subjects: [
      { name: "Grafos", grade: 7.5 },
      { name: "Computação Gráfica", grade: 6.5 },
      { name: "Inteligência Artificial", grade: 8.0 },
      { name: "Redes de Computadores II", grade: 8.0 },
      { name: "Compiladores", grade: 10.0 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Sobre mim                                                            */
/* ------------------------------------------------------------------ */

export type Hobby = Pendable & { icon: string; title: L; desc: L };

export const hobbies: Hobby[] = [
  {
    icon: "code",
    title: { pt: "Projetos paralelos", en: "Side projects" },
    desc: {
      pt: "Transformar ideias em projetos no GitHub — de ferramentas com IA a sites para causas como adoção de animais.",
      en: "Turning ideas into GitHub projects — from AI tools to websites for causes like animal adoption.",
    },
  },
  {
    icon: "papernews",
    title: { pt: "Hobby", en: "Hobby" },
    desc: {
      pt: "Me antenar sobre notícias recentes sobre mercado, economia, política e entre outros.",
      en: "To stay informed about recent news regarding the market, economy, politics, and other topics.",
    },
  },
  {
    icon: "music",
    title: { pt: "Criatividade", en: "Creativity" },
    desc: {
      pt: "Aflorar a criatividade muitas vezes na academia, ouvindo música, caminhando, etc, são algumas das maneiras que gosto de imaginar.",
      en: "Unleashing creativity often happens in the gym, while listening to music, walking, etc.—these are some of the ways I like to imagine it.",
    },
  },
];

export type Fact = Pendable & { value: string; label: L };

export const facts: Fact[] = [
  {
    value: "Itajaí",
    label: {
      pt: "Cidade onde moro e trabalho, em SC",
      en: "City where I live and work, in SC",
    },
  },
  {
    value: "2023",
    label: {
      pt: "Ano em que entrei na Ciência da Computação",
      en: "Year I started Computer Science",
    },
  },
  {
    value: "C → React",
    label: {
      pt: "Do baixo nível à interface: gosto das duas pontas",
      en: "From low-level to UI: I enjoy both ends",
    },
  },
  {
    value: "🔎",
    label: {
      pt: "Muito curioso e criativo, principalmente na computação",
      en: "Very curious and creative, especially in computing.",
    },
  },
];
