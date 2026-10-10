import { useState } from "react";
import { ArrowUpRight, Check, FolderGit2, Rocket, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { PageShell } from "../components/PageShell";
import { ContactCTA } from "../components/ContactCTA";
import { trackSpotlight } from "../utils/spotlight";
import { Reveal } from "../components/Reveal";
import { DraftBadge } from "../components/DraftBadge";
import { SubHeading } from "../components/SubHeading";
import { pendingClass, useLocalize, visible } from "../utils/localize";
import { personalProducts } from "../data/content";
import { projects as allProjects, GITHUB_URL } from "../data/projects";

const filterOptions = [
  "all",
  ...Array.from(
    new Set(allProjects.flatMap((project) => project.categories)),
  ).sort(),
];

const countFor = (option: string) =>
  option === "all"
    ? allProjects.length
    : allProjects.filter((project) => project.categories.includes(option))
        .length;

const repoPath = (url: string) => url.replace("https://github.com/", "");

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const l = useLocalize();
  const products = visible(personalProducts);

  const filteredProjects = allProjects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-36">
        <header className="mb-14">
          <p
            className="mb-5 flex animate-rise-in items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-indigo-300"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-10 bg-linear-to-r from-indigo-400 to-transparent" />
            {t("projects_page.count", { count: allProjects.length })}
          </p>
          <h1
            className="animate-rise-in font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {t("projects_page.title")}
            <span className="text-gradient">.</span>
          </h1>
          <div
            className="mt-6 flex animate-rise-in flex-col gap-6 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "160ms" }}
          >
            <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
              {t("projects_page.subtitle")}
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-indigo-400/50 hover:text-white md:self-auto"
            >
              <FontAwesomeIcon icon={faGithub} />
              {t("cta.view_github")}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </header>

        {/* Produtos pessoais em destaque */}
        {products.length > 0 && (
          <section className="mb-24">
            <SubHeading
              icon={Rocket}
              title={l({ pt: "Produtos próprios", en: "My own products" })}
              subtitle={l({
                pt: "Projetos pessoais que idealizo e construo de ponta a ponta.",
                en: "Personal projects I conceive and build end to end.",
              })}
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product, i) => (
                <Reveal
                  key={product.name}
                  delay={i * 120}
                  className={product.featured ? "lg:col-span-2" : ""}
                >
                  <article
                    onMouseMove={trackSpotlight}
                    className={`spotlight relative flex h-full flex-col overflow-clip rounded-[2rem] border border-white/[0.08] bg-ink-900/60 p-8 md:p-10 ${pendingClass(product)}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl ${
                        i % 2 === 0 ? "bg-indigo-500/25" : "bg-cyan-500/20"
                      }`}
                    />
                    <div className="relative flex flex-wrap items-center gap-2">
                      {product.live ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          {l(product.status)}
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300">
                          {l(product.status)}
                        </span>
                      )}
                      {product.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                          <Star size={10} fill="currentColor" />
                          {t("projects_page.featured")}
                        </span>
                      )}
                      <DraftBadge item={product} />
                    </div>
                    <h3 className={`relative mt-6 font-display font-bold tracking-tight text-white ${product.featured ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                      {product.name}
                    </h3>
                    <p className="relative mt-2 text-lg text-indigo-200">{l(product.tagline)}</p>
                    <p className={`relative mt-6 leading-relaxed text-slate-400 ${product.featured ? "max-w-3xl" : ""}`}>{l(product.desc)}</p>
                    <ul className={`relative mt-6 gap-x-8 gap-y-2 ${product.featured ? "grid md:grid-cols-2" : "space-y-2"}`}>
                      {product.features.map((feature) => (
                        <li key={feature.en} className="flex items-start gap-3 text-sm text-slate-300">
                          <Check size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                          {l(feature)}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-8 flex flex-wrap items-center gap-2 border-t border-white/5 pt-6">
                      {product.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-indigo-400/[0.08] px-2.5 py-1 font-mono text-[11px] text-indigo-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                      <div className="ml-auto flex gap-2">
                        {product.repo && (
                          <a
                            href={product.repo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${product.name} GitHub`}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        )}
                        {product.link && (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white"
                          >
                            {product.link.replace(/^https?:\/\//, "")}
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <SubHeading
          icon={FolderGit2}
          title={l({ pt: "Repositórios no GitHub", en: "GitHub repositories" })}
        />

        {/* Filtros */}
        <div
          className="sticky top-20 z-30 -mx-2 mb-10 animate-rise-in px-2 py-3"
          style={{ animationDelay: "240ms" }}
        >
          <div
            role="tablist"
            aria-label={t("projects_page.filter_by")}
            className="glass inline-flex max-w-full gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]"
          >
            {filterOptions.map((option) => {
              const active = filter === option;
              return (
                <button
                  key={option}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-linear-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {option === "all" ? t("projects_page.all") : option}
                  <span
                    className={`rounded-full px-1.5 font-mono text-[10px] ${
                      active ? "bg-white/20" : "bg-white/[0.06] text-slate-500"
                    }`}
                  >
                    {countFor(option)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade de projetos (re-montada a cada filtro para reanimar) */}
        <div
          key={filter}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onMouseMove={trackSpotlight}
              style={{ animationDelay: `${index * 60}ms` }}
              className="spotlight group flex animate-rise-in flex-col rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-indigo-400/20 bg-linear-to-br from-indigo-500/15 to-cyan-500/5 text-indigo-300 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <FolderGit2 size={22} />
                </span>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                      <Star size={10} fill="currentColor" />
                      {t("projects_page.featured")}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-slate-500">
                    {project.year}
                  </span>
                </div>
              </div>

              <h3 className="mb-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-indigo-200">
                {project.title}
              </h3>
              <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
                {t(project.descKey)}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((techName) => (
                  <span
                    key={techName}
                    className="rounded-md bg-indigo-400/[0.08] px-2.5 py-1 font-mono text-[11px] text-indigo-200/90"
                  >
                    {techName}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                <span className="truncate font-mono text-slate-500">
                  {repoPath(project.repo)}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 font-medium text-slate-300 transition-colors group-hover:text-white">
                  {t("projects_page.view_repo")}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500">{t("projects_page.no_results")}</p>
          </div>
        )}

        <ContactCTA />
      </main>
    </PageShell>
  );
};

export default Projects;
