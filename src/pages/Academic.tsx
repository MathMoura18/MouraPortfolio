import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SubHeading } from "../components/SubHeading";
import { Reveal } from "../components/Reveal";
import { ContactCTA } from "../components/ContactCTA";
import { trackSpotlight } from "../utils/spotlight";
import { pendingClass, useLocalize, visible } from "../utils/localize";
import { academicWorks, curriculum, university } from "../data/content";
import { TccSection } from "../components/TccSection";
import LogoUnivali from "../assets/Univali.jpg";

/** Fração do curso concluída, considerando início em fevereiro e fim em dezembro. */
const courseProgress = () => {
  const start = new Date(university.start, 1, 1).getTime();
  const end = new Date(university.expectedEnd, 11, 31).getTime();
  return Math.min(1, Math.max(0, (Date.now() - start) / (end - start)));
};

const Academic = () => {
  const l = useLocalize();
  const progress = courseProgress();
  const works = visible(academicWorks);

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-36">
        <PageHeader
          kicker="UNIVALI"
          title={l({ pt: "Acadêmico", en: "Academic" })}
          subtitle={l({
            pt: "Minha formação em Ciência da Computação: o trabalho de conclusão de curso e os projetos desenvolvidos nas disciplinas.",
            en: "My Computer Science education: the undergraduate thesis and the projects built across the courses.",
          })}
        />

        {/* Visão geral do curso */}
        <Reveal className="mb-20">
          <div className="grid gap-6 rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <div className="inline-flex self-start rounded-2xl bg-white p-3 shadow-lg">
              <img src={LogoUnivali} alt="UNIVALI" className="h-14 w-auto object-contain" />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {university.name}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {l(university.course)}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-indigo-300" />
                {university.campus} · {university.start} — {university.expectedEnd}{" "}
                {l({ pt: "(previsão)", en: "(expected)" })}
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between font-mono text-[11px] text-slate-500">
                  <span>{university.start}</span>
                  <span className="text-indigo-200">
                    {Math.round(progress * 100)}% {l({ pt: "concluído", en: "completed" })}
                  </span>
                  <span>{university.expectedEnd}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-indigo-500 to-cyan-400"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {visible(curriculum).length > 0 && (
                <Link
                  to="/knowledge#curriculum"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {l({ pt: "Ver grade e notas", en: "See curriculum & grades" })}
                  <ArrowRight size={14} />
                </Link>
                )}
                <a
                  href={university.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-indigo-400/50 hover:text-white"
                >
                  {l({ pt: "Site da UNIVALI", en: "UNIVALI website" })}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TCC */}
        <section className="mb-20">
          <SubHeading
            icon={GraduationCap}
            title={l({ pt: "Trabalho de Conclusão de Curso", en: "Undergraduate Thesis" })}
          />
          <Reveal>
            <TccSection />
          </Reveal>
        </section>

        {/* Trabalhos acadêmicos */}
        {works.length > 0 && (
          <section className="mb-8">
            <SubHeading
              icon={BookMarked}
              title={l({ pt: "Trabalhos na UNIVALI", en: "Work at UNIVALI" })}
              subtitle={l({
                pt: "Projetos desenvolvidos em disciplinas do curso, todos públicos no GitHub.",
                en: "Projects built for courses in the program, all public on GitHub.",
              })}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.title} delay={(i % 3) * 100}>
                  <a
                    href={work.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={trackSpotlight}
                    className={`spotlight group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 transition-transform duration-500 hover:-translate-y-1 ${pendingClass(work)}`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-[11px] font-medium text-cyan-200">
                        {l(work.subject)}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">{work.year}</span>
                    </div>
                    <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-indigo-200">
                      {work.title}
                      <ArrowUpRight
                        size={16}
                        className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-200"
                      />
                    </h3>
                    <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">{l(work.desc)}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-indigo-400/[0.08] px-2.5 py-1 font-mono text-[11px] text-indigo-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <ContactCTA />
      </main>
    </PageShell>
  );
};

export default Academic;
