import {
  ArrowLeftRight,
  Briefcase,
  ExternalLink,
  MonitorSmartphone,
  Rocket,
  Server,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SubHeading } from "../components/SubHeading";
import { Reveal } from "../components/Reveal";
import { ContactCTA } from "../components/ContactCTA";
import { DraftBadge } from "../components/DraftBadge";
import { trackSpotlight } from "../utils/spotlight";
import { pendingClass, useLocalize, visible } from "../utils/localize";
import {
  CAREER_START,
  clientSide,
  masteredTools,
  professionalProjects,
  serverSide,
  type Interaction,
} from "../data/content";
import LogoModallport from "../assets/modallport-logo-1.png";

/** Anos e meses completos desde o início na área. */
const timeInField = () => {
  const now = new Date();
  let months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  if (now.getDate() < CAREER_START.getDate()) months -= 1;
  return { years: Math.floor(months / 12), months: months % 12 };
};

const InteractionColumn = ({
  icon: Icon,
  title,
  subtitle,
  items,
  accent,
}: {
  icon: typeof Server;
  title: string;
  subtitle: string;
  items: Interaction[];
  accent: "indigo" | "cyan";
}) => {
  const l = useLocalize();
  const color = accent === "indigo" ? "text-indigo-300" : "text-cyan-300";
  const dot = accent === "indigo" ? "bg-indigo-400" : "bg-cyan-400";

  return (
    <div className="h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7">
      <div className="mb-6 flex items-center gap-3">
        <Icon size={22} className={color} />
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          <p className="font-mono text-[11px] text-slate-500">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.title.en} className="flex gap-3">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <div>
              <p className="text-sm font-semibold text-slate-100">{l(item.title)}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{l(item.desc)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Professional = () => {
  const { t } = useTranslation();
  const l = useLocalize();
  const { years, months } = timeInField();
  const projects = visible(professionalProjects);
  const toolCount = masteredTools.reduce((sum, group) => sum + group.items.length, 0);

  const yearLabel = l(years === 1 ? { pt: "ano", en: "year" } : { pt: "anos", en: "years" });
  const monthLabel = l(months === 1 ? { pt: "mês", en: "month" } : { pt: "meses", en: "months" });

  const stats = [
    { value: `${years}`, unit: yearLabel, extra: months > 0 ? `+ ${months} ${monthLabel}` : "", label: l({ pt: "na área profissional", en: "in the industry" }) },
    { value: `${toolCount}`, unit: "", extra: "", label: l({ pt: "ferramentas dominadas", en: "tools mastered" }) },
    { value: "Full", unit: "stack", extra: "", label: l({ pt: "do banco de dados ao mobile", en: "from database to mobile" }) },
    { value: "Web", unit: "+ mobile", extra: "", label: l({ pt: "plataformas que entrego", en: "platforms I ship to" }) },
  ];

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-36">
        <PageHeader
          kicker={l({ pt: "Carreira", en: "Career" })}
          title={l({ pt: "Profissional", en: "Professional" })}
          subtitle={l({
            pt: "Como atuo no dia a dia: as ferramentas que domino, o que faço no server-side e no client-side e os projetos que mais me orgulho.",
            en: "How I work day to day: the tools I master, what I do server-side and client-side, and the projects I'm proudest of.",
          })}
        />

        {/* Tempo na área e números */}
        <Reveal className="mb-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink-950/85 p-6 md:p-8">
                <p className="font-display text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                  {stat.unit && <span className="ml-1.5 text-lg text-indigo-200">{stat.unit}</span>}
                </p>
                {stat.extra && <p className="font-mono text-xs text-cyan-300">{stat.extra}</p>}
                <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Experiência atual */}
        <section className="mb-20">
          <SubHeading icon={Briefcase} title={l({ pt: "Experiência atual", en: "Current role" })} />
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:grid-cols-[1.4fr_1fr] md:p-10">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-500">{t("experience_page.current_period")}</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    {t("journey.current")}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Software Developer</h3>
                <p className="mt-1 text-indigo-300">Modallport Sistemas · Itajaí, SC</p>
                <p className="mt-6 leading-relaxed text-slate-300">{t("modallport.my_role.text")}</p>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <div className="space-y-4">
                  <div className="inline-flex rounded-xl bg-white p-2.5 shadow-lg">
                    <img src={LogoModallport} alt="Modallport" className="h-9 w-auto object-contain" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">{t("modallport.company.text")}</p>
                </div>
                <a
                  href={t("modallport.website_link")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-semibold text-white"
                >
                  {t("modallport.visit_button")}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Ferramentas dominadas */}
        <section className="mb-20">
          <SubHeading
            icon={Wrench}
            title={l({ pt: "Ferramentas dominadas", en: "Tools I master" })}
            subtitle={l({ pt: "O que uso em produção, todos os dias.", en: "What I use in production, every day." })}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {masteredTools.map((group, i) => (
              <Reveal key={group.title.en} delay={i * 80}>
                <div className="h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-300">
                    {l(group.title)}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className="h-1 w-1 rotate-45 bg-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Server-side x Client-side */}
        <section className="mb-20">
          <SubHeading
            icon={ArrowLeftRight}
            title={l({ pt: "Server-side & client-side", en: "Server-side & client-side" })}
            subtitle={l({
              pt: "Como as duas pontas se conversam nos sistemas em que trabalho.",
              en: "How both ends talk to each other in the systems I work on.",
            })}
          />
          <div className="relative grid gap-4 md:grid-cols-2 md:gap-16">
            <Reveal>
              <InteractionColumn
                icon={Server}
                title="Server-side"
                subtitle="ASP.NET Core · Oracle · SQL Server"
                items={serverSide}
                accent="indigo"
              />
            </Reveal>
            {/* Conector API entre as colunas */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center md:flex">
              <span className="h-px w-16 bg-linear-to-r from-indigo-400 to-cyan-300" />
              <span className="my-2 rounded-full border border-white/10 bg-ink-900 px-3 py-1 font-mono text-[11px] text-white shadow-lg shadow-indigo-500/20">
                REST API
              </span>
              <span className="h-px w-16 bg-linear-to-r from-indigo-400 to-cyan-300" />
            </div>
            <Reveal delay={120}>
              <InteractionColumn
                icon={MonitorSmartphone}
                title="Client-side"
                subtitle="Razor + jQuery · React Native · TypeScript"
                items={clientSide}
                accent="cyan"
              />
            </Reveal>
          </div>
        </section>

        {/* Projetos profissionais */}
        {projects.length > 0 && (
          <section className="mb-8">
            <SubHeading
              icon={Rocket}
              title={l({ pt: "Projetos mais interessantes", en: "Most interesting projects" })}
              subtitle={l({
                pt: "Sistemas em que mais contribuí na Modallport, em produção em recintos alfandegados e portos.",
                en: "Systems I've contributed to the most at Modallport, running in bonded warehouses and ports.",
              })}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal
                  key={project.title.en}
                  delay={(i % 2) * 120}
                  className={i === 0 ? "md:col-span-2" : ""}
                >
                  <div
                    onMouseMove={trackSpotlight}
                    className={`spotlight flex h-full flex-col rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:p-8 ${pendingClass(project)}`}
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-[11px] font-medium text-cyan-200">
                        {l(project.context)}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">{project.period}</span>
                      <DraftBadge item={project} />
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-semibold text-white">{l(project.title)}</h3>
                    <div className={i === 0 ? "grid gap-6 md:grid-cols-[1.2fr_1fr]" : ""}>
                      <p className="text-sm leading-relaxed text-slate-400">{l(project.desc)}</p>
                      <div className={i === 0 ? "" : "mt-5"}>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          {l({ pt: "Minhas contribuições", en: "My contributions" })}
                        </p>
                        <ul className="space-y-1.5">
                          {project.contributions.map((item) => (
                            <li key={item.en} className="flex gap-2.5 text-sm text-slate-300">
                              <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-indigo-400/70" />
                              {l(item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.tech.map((tech) => (
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
              ))}
            </div>
          </section>
        )}

        <ContactCTA />
      </main>
    </PageShell>
  );
};

export default Professional;
