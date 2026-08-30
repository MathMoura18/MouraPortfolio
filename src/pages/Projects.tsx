import { useState } from "react";
import { ExternalLink, Code2, Filter, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Background from "../components/Background";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { projects as allProjects, GITHUB_URL } from "../data/projects";

const filterOptions = [
  "all",
  ...Array.from(
    new Set(allProjects.flatMap((project) => project.categories)),
  ).sort(),
];

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filteredProjects = allProjects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Background theme="dark" />
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("projects_page.title")}
            <span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            {t("projects_page.subtitle")}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 text-xs font-bold text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
            {t("cta.view_github")}
          </a>
        </header>

        {/* Barra de Filtros */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Filter size={16} className="text-blue-500" />
            <span>{t("projects_page.filter_by")}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border cursor-pointer ${
                  filter === option
                    ? "bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/20"
                }`}
              >
                {option === "all" ? t("projects_page.all") : option}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos com Animação */}
        <div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 50}ms` }} // Efeito cascata
              className="animate-rise-in group relative flex flex-col bg-slate-900/30 border border-white/5 p-6 rounded-3xl hover:bg-slate-800/40 hover:border-blue-500/30 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 group-hover:scale-110 transition-transform duration-500">
                  <Code2 size={24} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <Star
                      size={16}
                      className="text-blue-400/70"
                      fill="currentColor"
                    />
                  )}
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.year}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {t(project.descKey)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techName) => (
                  <span
                    key={techName}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-slate-950/50 text-blue-400/80 border border-blue-500/10"
                  >
                    {techName}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-950/50 border border-white/5 text-xs font-bold text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-all"
              >
                {t("projects_page.view_repo")}
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">{t("projects_page.no_results")}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
