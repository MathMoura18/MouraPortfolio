import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Smile,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import MyImage from "../assets/me.jpg";
import { PageShell } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { RoleRotator } from "../components/RoleRotator";
import { TechMarquee } from "../components/TechMarquee";
import { CountUp } from "../components/CountUp";
import { SectionHeading } from "../components/SectionHeading";
import { ContactCTA } from "../components/ContactCTA";
import { trackSpotlight } from "../utils/spotlight";
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

const socials = [
  { href: GITHUB_URL, icon: faGithub, label: "GitHub" },
  { href: LINKEDIN_URL, icon: faLinkedin, label: "LinkedIn" },
  { href: `mailto:${EMAIL}`, icon: faEnvelope, label: "E-mail" },
];

const Home = () => {
  const { t, i18n } = useTranslation();
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

  const roles = useMemo(
    () => t("hero_roles", { returnObjects: true }) as string[],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.resolvedLanguage],
  );

  const featured = allProjects.filter((project) => project.featured);

  const stats = [
    { value: "2+", label: t("stats.experience") },
    { value: `${allProjects.length}`, label: t("stats.projects") },
    { value: "10+", label: t("stats.stack") },
    { value: "Modallport", label: t("stats.production") },
  ];

  const journey = [
    {
      icon: Briefcase,
      period: t("experience.date"),
      role: "Software Developer",
      org: "Modallport Sistemas",
      current: true,
      items: [
        t("experience.job_desc.1"),
        t("experience.job_desc.2"),
        t("experience.job_desc.3"),
      ],
      techs: [".NET", "ASP.NET Core", "React", "React Native", "SQL Server"],
    },
    {
      icon: GraduationCap,
      period: t("education.date"),
      role: t("education.course"),
      org: "UNIVALI",
      current: false,
      items: [t("experience_page.edu_desc.1"), t("experience_page.edu_desc.2")],
      techs: ["C", "Java", "Python", "Assembly", "AWS"],
    },
  ];

  const tabs = [
    {
      to: "/academic",
      icon: GraduationCap,
      title: t("nav.academic"),
      desc: t("explore.academic"),
    },
    {
      to: "/professional",
      icon: Briefcase,
      title: t("nav.professional"),
      desc: t("explore.professional"),
    },
    {
      to: "/projects",
      icon: FolderGit2,
      title: t("projects_page.title"),
      desc: t("explore.projects"),
    },
    {
      to: "/knowledge",
      icon: BookOpen,
      title: t("nav.knowledge"),
      desc: t("explore.knowledge"),
    },
    {
      to: "/about",
      icon: Smile,
      title: t("nav.about_me"),
      desc: t("explore.about"),
    },
  ];

  const heroDelay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <PageShell>
      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pb-20 pt-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div
                className="mb-8 inline-flex animate-rise-in items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
                style={heroDelay(0)}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t("available")}
              </div>

              <p
                className="mb-3 animate-rise-in font-mono text-sm text-indigo-300"
                style={heroDelay(80)}
              >
                {t("hero_greeting")}
              </p>
              <h1
                className="animate-rise-in font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-8xl"
                style={heroDelay(160)}
              >
                Matheus <span className="text-gradient">Moura</span>
              </h1>

              <p
                className="mt-6 h-8 animate-rise-in text-lg md:text-xl"
                style={heroDelay(240)}
              >
                <RoleRotator key={i18n.resolvedLanguage} roles={roles} />
              </p>

              <p
                className="mx-auto mt-6 max-w-xl animate-rise-in text-base leading-relaxed text-slate-400 md:text-lg lg:mx-0"
                style={heroDelay(320)}
              >
                {t("hero_subtitle")}
              </p>

              <div
                className="mt-10 flex animate-rise-in flex-wrap justify-center gap-3 lg:justify-start"
                style={heroDelay(400)}
              >
                <Link
                  to="/projects"
                  className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                >
                  {t("cta.view_projects")}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-indigo-400/50 hover:bg-white/[0.07] hover:text-white"
                >
                  {t("cta.contact")}
                </a>
              </div>

              <div
                className="mt-10 flex animate-rise-in items-center justify-center gap-5 lg:justify-start"
                style={heroDelay(480)}
              >
                <div className="flex gap-2">
                  {socials.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-indigo-400/50 hover:text-white"
                    >
                      <FontAwesomeIcon icon={link.icon} size="lg" />
                    </a>
                  ))}
                </div>
                <span className="h-6 w-px bg-white/10" />
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={14} className="text-indigo-300" />
                  Itajaí, SC
                </span>
              </div>
            </div>

            {/* Foto com anel animado */}
            <div
              className="order-1 flex animate-rise-in justify-center lg:order-2 lg:justify-end"
              style={heroDelay(200)}
            >
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-indigo-600/25 blur-3xl" />
                <div className="relative h-64 w-56 overflow-hidden rounded-[2.25rem] p-[2px] sm:h-80 sm:w-72 lg:h-[26rem] lg:w-[22rem]">
                  <div
                    className="absolute inset-[-50%] animate-spin-slow"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, #818cf8 70deg, #22d3ee 140deg, transparent 200deg, transparent 360deg)",
                    }}
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(2.25rem-2px)] bg-ink-900">
                    <img
                      src={MyImage}
                      alt="Matheus Moura"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Cartões flutuantes */}
                <div className="absolute -left-12 top-2 origin-top-left scale-75 border sm:-left-12 sm:top-8 sm:scale-100 border-white/10 bg-ink-900/85 backdrop-blur-xl animate-float rounded-2xl px-4 py-3 shadow-xl">
                  <p className="font-display text-2xl font-bold text-white">
                    2+
                  </p>
                  <p className="max-w-[7rem] text-[11px] leading-tight text-slate-400">
                    {t("hero_years")}
                  </p>
                </div>
                <div className="absolute -right-12 bottom-4 origin-bottom-right scale-75 border sm:-right-10 sm:bottom-10 sm:scale-100 border-white/10 bg-ink-900/85 backdrop-blur-xl flex animate-float-delayed items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 text-white">
                    <Terminal size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-medium text-white">
                      .NET · React
                    </p>
                    <p className="text-[11px] text-slate-400">Full-stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-slate-300 md:flex"
          >
            <span className="flex h-9 w-6 justify-center rounded-full border border-white/15 pt-2">
              <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-indigo-300" />
            </span>
            {t("hero_scroll")}
          </a>
        </section>

        <TechMarquee />

        <div className="mx-auto max-w-6xl px-6">
          {/* ---------- Números ---------- */}
          <Reveal className="py-20">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group bg-ink-950/85 p-6 text-center transition-colors hover:bg-ink-900/90 md:p-8"
                >
                  <p className="font-display text-3xl font-bold text-white transition-colors group-hover:text-indigo-200 md:text-4xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---------- Explorar abas ---------- */}
          <section className="pb-12">
            <SectionHeading
              index="00"
              kicker={t("explore.kicker")}
              title={t("explore.title")}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {tabs.map((tab, i) => {
                const Icon = tab.icon;
                return (
                  <Reveal key={tab.to} delay={i * 80}>
                    <Link
                      to={tab.to}
                      onMouseMove={trackSpotlight}
                      className="spotlight group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 transition-transform duration-500 hover:-translate-y-1"
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-indigo-400/20 bg-linear-to-br from-indigo-500/15 to-cyan-500/5 text-indigo-300 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                          <Icon size={20} />
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-slate-600 transition-all duration-500 group-hover:rotate-45 group-hover:text-indigo-200"
                        />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {tab.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {tab.desc}
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* ---------- Sobre ---------- */}
          <section id="about" className="scroll-mt-28 py-20">
            <SectionHeading
              index="01"
              kicker={t("sections.about")}
              title={t("about.title")}
              action={
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white md:self-auto"
                >
                  {t("explore.more_about")}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />

            <div className="grid gap-4 md:grid-cols-6">
              <Reveal className="md:col-span-4 md:row-span-2">
                <div className="h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-8 md:p-10">
                  <h3 className="mb-6 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
                    {t("about.heading")}
                  </h3>
                  <div className="space-y-4 leading-relaxed text-slate-400">
                    <p>{t("about.text_1")}</p>
                    <p>{t("about.text_2")}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal className="md:col-span-2" delay={100}>
                <div className="h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7">
                  <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {t("about.currently_title")}
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <Briefcase size={18} className="mt-0.5 shrink-0 text-indigo-300" />
                      <span className="text-slate-200">{t("about.currently_work")}</span>
                    </li>
                    <li className="flex gap-3">
                      <GraduationCap size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                      <span className="text-slate-200">{t("about.currently_study")}</span>
                    </li>
                    <li className="flex gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      <span className="text-slate-400">Itajaí, SC — Brasil</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal className="md:col-span-2" delay={200}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-indigo-400/20 bg-linear-to-br from-indigo-600/20 via-ink-900/60 to-cyan-600/10 p-7">
                  <Sparkles size={20} className="mb-4 text-indigo-300" />
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
                    {t("about.focus_title")}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-200">
                    {t("about.focus_text")}
                  </p>
                </div>
              </Reveal>

              <Reveal className="md:col-span-6" delay={100}>
                <div className="rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:p-8">
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {t("about.skills_title")}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {skillGroups.map((group) => (
                      <div key={group.key}>
                        <p className="mb-3 text-sm font-semibold text-white">
                          {t(group.key)}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------- Trajetória ---------- */}
          <section id="experience" className="scroll-mt-28 py-20">
            <SectionHeading
              index="02"
              kicker={t("sections.journey")}
              title={t("journey.title")}
              subtitle={t("journey.subtitle")}
              action={
                <Link
                  to="/professional"
                  className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white md:self-auto"
                >
                  {t("journey.see_more")}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />

            <div className="relative space-y-6 pl-10 md:pl-14">
              <div className="absolute bottom-4 left-[15px] top-4 w-px bg-linear-to-b from-indigo-400/70 via-white/10 to-transparent md:left-[23px]" />

              {journey.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.org} delay={i * 120} className="relative">
                    <span
                      className={`absolute -left-10 top-7 grid h-8 w-8 place-items-center rounded-full border md:-left-14 md:h-12 md:w-12 ${
                        item.current
                          ? "border-indigo-400/50 bg-indigo-500/20 text-indigo-200 shadow-[0_0_25px_rgba(99,102,241,0.45)]"
                          : "border-white/10 bg-ink-900 text-slate-400"
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <div
                      onMouseMove={trackSpotlight}
                      className="spotlight rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:p-8"
                    >
                      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-indigo-300">{item.org}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.current && (
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                              {t("journey.current")}
                            </span>
                          )}
                          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-slate-400">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <ul className="mb-6 space-y-2">
                        {item.items.map((line) => (
                          <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                            <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-indigo-400/60" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {item.techs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-indigo-400/[0.08] px-2.5 py-1 font-mono text-[11px] text-indigo-200/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* ---------- Projetos ---------- */}
          <section id="projects" className="scroll-mt-28 py-20">
            <SectionHeading
              index="03"
              kicker={t("sections.work")}
              title={t("projects.section_title")}
              subtitle={t("projects.section_subtitle")}
              action={
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white md:self-auto"
                >
                  {t("cta.view_all_projects")}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {featured.map((project, i) => (
                <Reveal key={project.id} delay={(i % 2) * 120}>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={trackSpotlight}
                    className="spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -top-10 font-display text-[9rem] font-bold leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-indigo-400/[0.06]"
                    >
                      0{i + 1}
                    </span>

                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-slate-400"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink-900 text-slate-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-indigo-400/50 group-hover:bg-indigo-500 group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <h3 className="mb-3 font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-8 flex-grow text-sm leading-relaxed text-slate-400">
                      {t(project.descKey)}
                    </p>

                    <div className="flex items-end justify-between gap-4 border-t border-white/5 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techName) => (
                          <span
                            key={techName}
                            className="font-mono text-[11px] text-indigo-200/80"
                          >
                            #{techName}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[11px] text-slate-500">
                        {project.year}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          <ContactCTA />
        </div>
      </main>
    </PageShell>
  );
};

export default Home;
