import {
  ArrowRight,
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  User,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Background from "../components/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../assets/me.jpg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import {
  projects as allProjects,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL,
} from "../data/projects";

const skillGroups = [
  {
    key: "skills.backend",
    items: ["C#", ".NET", "ASP.NET Core", "Node.js"],
  },
  {
    key: "skills.frontend",
    items: ["React", "React Native", "TypeScript", "Tailwind"],
  },
  { key: "skills.data", items: ["SQL Server", "Oracle", "SQL"] },
  { key: "skills.other", items: ["Java", "Python", "C", "C++", "Assembly"] },
];

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
  useEffect(() => {
    if (!scrollTo) return;
    // Aguarda o layout final (imagens/fontes) antes de rolar, senão a posição é calculada errada.
    const timer = setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView();
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollTo]);

  const featured = allProjects.filter((project) => project.featured);

  const stats = [
    { value: "2+", label: t("stats.experience") },
    { value: `${allProjects.length}`, label: t("stats.projects") },
    { value: "10+", label: t("stats.stack") },
    { value: "Modallport", label: t("stats.production") },
  ];

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Background theme="dark" />
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-24">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img
              src={MyImage}
              alt="Matheus Moura"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t("available")}
          </div>

          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-400/80 mb-4">
            {t("hero_kicker")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Matheus Moura
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-400 transition-colors"
            >
              {t("cta.contact")}
              <ArrowRight size={16} />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-200 text-sm font-semibold hover:border-blue-500/50 hover:text-blue-400 transition-all"
            >
              {t("cta.view_projects")}
              <Code2 size={16} />
            </Link>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-mail"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors"
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Sobre */}
        <section id="about" className="scroll-mt-28 mb-32">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-8">
            <User className="text-blue-400" size={24} /> {t("about.title")}
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-4 text-slate-400 leading-relaxed">
              <p>{t("about.text_1")}</p>
              <p>{t("about.text_2")}</p>
            </div>
            <div className="md:col-span-2 bg-slate-900/40 border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-5">
                {t("about.skills_title")}
              </h3>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.key}>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                      {t(group.key)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] px-2 py-1 rounded bg-slate-950/50 text-blue-400/80 border border-blue-500/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiência e Educação */}
        <section id="experience" className="scroll-mt-28 grid md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Briefcase className="text-blue-400" size={24} />{" "}
              {t("experience.title")}
            </h2>
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Software Developer
                  </h3>
                  <p className="text-blue-400">Modallport Sistemas</p>
                </div>
                <span className="text-xs text-slate-500">
                  {t("experience.date")}
                </span>
              </div>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• {t("experience.job_desc.1")}</li>
                <li>• {t("experience.job_desc.2")}</li>
                <li>• {t("experience.job_desc.3")}</li>
              </ul>
              <Link
                to="/experience"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t("nav.experience")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <GraduationCap className="text-blue-400" size={24} />{" "}
              {t("education.title")}
            </h2>
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white">
                {t("education.course")}
              </h3>
              <p className="text-blue-400">UNIVALI</p>
              <p className="text-sm text-slate-500 mt-2">
                {t("education.date")}
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {[".NET", "Java", "Python", "React", "Assembly"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="scroll-mt-28 pb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-2">
                <Code2 className="text-blue-400" size={24} />{" "}
                {t("projects.section_title")}
              </h2>
              <p className="text-sm text-slate-500 max-w-xl">
                {t("projects.section_subtitle")}
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all whitespace-nowrap"
            >
              {t("cta.view_all_projects")}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <a
                key={project.id}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/30 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/40 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-slate-600 group-hover:text-blue-400"
                  />
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {t(project.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techName) => (
                    <span
                      key={techName}
                      className="text-xs font-mono text-blue-500/80 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
