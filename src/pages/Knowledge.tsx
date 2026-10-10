import type { CSSProperties } from "react";
import { Award, BadgeCheck, BookOpen, ExternalLink, Library } from "lucide-react";
import { trackSpotlight } from "../utils/spotlight";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SubHeading } from "../components/SubHeading";
import { Reveal } from "../components/Reveal";
import { ContactCTA } from "../components/ContactCTA";
import { DraftBadge } from "../components/DraftBadge";
import { pendingClass, useLocalize, visible } from "../utils/localize";
import { books, courses, curriculum, type Subject } from "../data/content";

const providerBrand: Record<string, { color: string; short: string }> = {
  "Red Hat": { color: "from-red-600 to-red-800", short: "RH" },
  "Code With Mosh": { color: "from-sky-500 to-blue-700", short: "CM" },
  Rocketseat: { color: "from-violet-500 to-purple-800", short: "R" },
  DIO: { color: "from-pink-500 to-fuchsia-700", short: "DIO" },
};

const coverColors = [
  "from-indigo-600 to-indigo-900",
  "from-cyan-600 to-sky-900",
  "from-emerald-600 to-teal-900",
  "from-amber-500 to-orange-800",
  "from-rose-600 to-rose-900",
  "from-slate-600 to-slate-900",
];

const average = (subjects: Subject[]) => {
  const graded = subjects.filter((s) => s.grade !== undefined);
  if (graded.length === 0) return null;
  return graded.reduce((sum, s) => sum + (s.grade ?? 0), 0) / graded.length;
};

const gradeColor = (grade: number) =>
  grade >= 9 ? "from-emerald-400 to-cyan-300" : grade >= 7.5 ? "from-indigo-400 to-cyan-300" : "from-indigo-500 to-indigo-300";

const Knowledge = () => {
  const l = useLocalize();
  const semesters = visible(curriculum);
  const courseList = visible(courses);
  const bookList = visible(books);
  const allSubjects = semesters.flatMap((s) => s.subjects);
  const overall = average(allSubjects);

  const stats = [
    { value: `${allSubjects.length}`, label: l({ pt: "disciplinas cursadas", en: "courses taken" }) },
    { value: overall !== null ? overall.toFixed(1) : "—", label: l({ pt: "média geral", en: "overall average" }) },
    { value: `${courseList.length}`, label: l({ pt: "cursos e certificações", en: "courses & certifications" }) },
    { value: `${bookList.length}`, label: l({ pt: "livros", en: "books" }) },
  ].filter((stat) => stat.value !== "0" && stat.value !== "—"); // esconde contadores ainda vazios

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-36">
        <PageHeader
          kicker={l({ pt: "Aprendizado contínuo", en: "Lifelong learning" })}
          title={l({ pt: "Conhecimento", en: "Knowledge" })}
          subtitle={l({
            pt: "Tudo o que venho estudando: a grade de Ciência da Computação com minhas notas, cursos complementares e os livros que moldaram como penso software.",
            en: "Everything I've been studying: the Computer Science curriculum with my grades, extra courses, and the books that shaped how I think about software.",
          })}
        />

        <Reveal className="mb-20">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
            style={{ "--cols": stats.length } as CSSProperties}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink-950/85 p-6 text-center md:p-8">
                <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Grade curricular */}
        {semesters.length > 0 && (
          <section id="curriculum" className="mb-20 scroll-mt-28">
            <SubHeading
              icon={Library}
              title={l({ pt: "Grade de Ciência da Computação — UNIVALI", en: "Computer Science curriculum — UNIVALI" })}
              subtitle={l({ pt: "Disciplinas por período, com as notas finais (0–10).", en: "Courses by semester, with final grades (0–10)." })}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {semesters.map((semester, i) => {
                const avg = average(semester.subjects);
                return (
                  <Reveal key={semester.period} delay={(i % 2) * 100}>
                    <div className={`h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 ${pendingClass(semester)}`}>
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 font-display font-bold text-white">
                            {semester.period}º
                          </span>
                          <div>
                            <p className="font-display font-semibold text-white">
                              {semester.period}º {l({ pt: "período", en: "semester" })}
                            </p>
                            <p className="font-mono text-[11px] text-slate-500">{semester.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DraftBadge item={semester} />
                          {semester.current && (
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                              {l({ pt: "Atual", en: "Current" })}
                            </span>
                          )}
                          {avg !== null && (
                            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-300">
                              {l({ pt: "média", en: "avg" })} <span className="text-white">{avg.toFixed(1)}</span>
                            </span>
                          )}
                        </div>
                      </div>
                      {semester.subjects.length === 0 && (
                        <div className="flex h-[calc(100%-4rem)] min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 text-center">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          </span>
                          <p className="text-sm text-slate-400">
                            {l({ pt: "Período em andamento — notas em breve.", en: "Semester in progress — grades coming soon." })}
                          </p>
                        </div>
                      )}
                      <ul className="space-y-3">
                        {semester.subjects.map((subject) => (
                          <li key={subject.name}>
                            <div className="mb-1.5 flex items-baseline justify-between gap-4 text-sm">
                              <span className="text-slate-300">{subject.name}</span>
                              <span className="font-mono text-xs text-white">
                                {subject.grade !== undefined
                                  ? subject.grade.toFixed(1)
                                  : l({ pt: "cursando", en: "in progress" })}
                              </span>
                            </div>
                            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                              {subject.grade !== undefined && (
                                <div
                                  className={`h-full rounded-full bg-linear-to-r ${gradeColor(subject.grade)}`}
                                  style={{ width: `${subject.grade * 10}%` }}
                                />
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* Cursos */}
        {courseList.length > 0 && (
          <section className="mb-20">
            <SubHeading
              icon={Award}
              title={l({ pt: "Cursos e certificações", en: "Courses & certifications" })}
              subtitle={l({ pt: "Formação complementar fora da universidade.", en: "Additional training outside university." })}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {courseList.map((course, i) => {
                const brand = providerBrand[course.provider] ?? { color: "from-slate-600 to-slate-700", short: course.provider.slice(0, 2) };
                return (
                  <Reveal key={course.name} delay={(i % 2) * 80}>
                    <div
                      onMouseMove={trackSpotlight}
                      className={`spotlight flex h-full flex-col rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 ${pendingClass(course)}`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${brand.color} font-display text-sm font-bold text-white shadow-lg`}
                          aria-hidden="true"
                        >
                          {brand.short}
                        </span>
                        <div className="min-w-0">
                          <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-slate-500">
                            <span className="text-cyan-300">{course.provider}</span>
                            <span>· {l({ pt: "emitido em", en: "issued" })} {l(course.issued)}</span>
                            {course.expires && (
                              <span>· {l({ pt: "expira em", en: "expires" })} {l(course.expires)}</span>
                            )}
                            <DraftBadge item={course} />
                          </div>
                          <h3 className="font-display text-base font-semibold leading-snug text-white md:text-lg">
                            {course.name}
                          </h3>
                          {course.note && <p className="mt-1 text-xs text-slate-400">{l(course.note)}</p>}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <span key={skill} className="rounded-md bg-indigo-400/[0.08] px-2 py-0.5 font-mono text-[11px] text-indigo-200/90">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                        {course.credentialUrl && (
                          <a
                            href={course.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-indigo-400/50 hover:text-white"
                          >
                            <BadgeCheck size={14} className="text-emerald-300" />
                            {l({ pt: "Exibir credencial", en: "Show credential" })}
                          </a>
                        )}
                        {course.projectUrl && (
                          <a
                            href={course.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
                          >
                            {l({ pt: "Ver projeto", en: "View project" })}
                            <ExternalLink size={12} />
                          </a>
                        )}
                        {course.credentialId && (
                          <span className="ml-auto truncate font-mono text-[10px] text-slate-600" title={course.credentialId}>
                            ID {course.credentialId.length > 13 ? `${course.credentialId.slice(0, 13)}…` : course.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* Livros */}
        {bookList.length > 0 && (
          <section className="mb-8">
            <SubHeading
              icon={BookOpen}
              title={l({ pt: "Livros", en: "Books" })}
              subtitle={l({ pt: "Leituras que mudaram como eu escrevo código e penso produto.", en: "Reads that changed how I write code and think about product." })}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bookList.map((book, i) => (
                <Reveal key={book.title} delay={(i % 3) * 100}>
                  <div className={`group flex h-full gap-5 rounded-3xl border border-white/[0.08] bg-ink-900/50 p-5 ${pendingClass(book)}`}>
                    {book.cover ? (
                      <img
                        src={book.cover}
                        alt={`Capa do livro ${book.title}`}
                        loading="lazy"
                        className="h-auto w-24 shrink-0 self-start rounded-l-sm rounded-r-md shadow-xl shadow-black/40 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3"
                      />
                    ) : (
                      /* Capa gerada quando não há imagem */
                      <div
                        className={`relative flex h-36 w-24 shrink-0 flex-col justify-between overflow-hidden rounded-l-sm rounded-r-lg bg-linear-to-br ${coverColors[i % coverColors.length]} p-2.5 shadow-xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3`}
                      >
                        <span className="absolute inset-y-0 left-1.5 w-px bg-white/25" />
                        <p className="pl-1.5 font-display text-[11px] font-bold leading-tight text-white">{book.title}</p>
                        <p className="pl-1.5 text-[8px] uppercase tracking-wider text-white/70">{book.author.split(" \u00b7 ")[0]}</p>
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-slate-300">
                          {l(book.category)}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                            book.status === "read" ? "bg-emerald-400/10 text-emerald-300" : "bg-amber-300/10 text-amber-200"
                          }`}
                        >
                          {book.status === "read" ? l({ pt: "Lido", en: "Read" }) : l({ pt: "Lendo", en: "Reading" })}
                        </span>
                        <DraftBadge item={book} />
                      </div>
                      <h3 className="font-display font-semibold leading-snug text-white">{book.title}</h3>
                      <p className="text-xs text-slate-500">
                        {book.author} · {book.year}
                        {book.original && <span className="italic"> · {book.original}</span>}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{l(book.takeaway)}</p>
                    </div>
                  </div>
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

export default Knowledge;
