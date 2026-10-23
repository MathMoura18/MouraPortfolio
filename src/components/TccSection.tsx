import { useState } from "react";
import {
  AlertTriangle,
  BrainCircuit,
  Check,
  ChevronRight,
  Info,
  Layers,
  ScanText,
  Scale,
  ShieldCheck,
  UserCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useInView } from "../hooks/useInView";
import { useLocalize } from "../utils/localize";
import { tcc, type Layered, type PipelineStep } from "../data/tcc";

const stepIcons: Record<PipelineStep["id"], LucideIcon> = {
  ai: ScanText,
  rules: ShieldCheck,
  reconcile: Layers,
  human: UserCheck,
};

/** Bloco técnico que abre/fecha suavemente (grid-rows anima a altura real). */
const TechNote = ({ show, children }: { show: boolean; children: string }) => (
  <div
    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
      show ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
    }`}
    aria-hidden={!show}
  >
    <div className="overflow-hidden">
      <p className="mt-3 border-l-2 border-cyan-400/60 pl-3 font-mono text-[12px] leading-relaxed text-cyan-100/80">
        {children}
      </p>
    </div>
  </div>
);

const LayeredText = ({ text, tech, className = "" }: { text: Layered; tech: boolean; className?: string }) => {
  const l = useLocalize();
  return (
    <div className={className}>
      <p className="leading-relaxed text-slate-300">{l(text.lay)}</p>
      <TechNote show={tech}>{l(text.tech)}</TechNote>
    </div>
  );
};

const Label = ({ children }: { children: string }) => (
  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">{children}</p>
);

/** Exemplo ilustrativo: peso da balança × VGM declarado, com tolerância estourada. */
const AlertDemo = ({ tech }: { tech: boolean }) => {
  const l = useLocalize();
  const { ref, inView } = useInView<HTMLDivElement>();
  const bars = [
    { label: l({ pt: "Balança", en: "Scale" }), value: 28.4, color: "from-rose-500 to-orange-400" },
    { label: "VGM", value: 24.0, color: "from-emerald-400 to-cyan-300" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
        <AlertTriangle size={16} className="shrink-0" />
        {l({ pt: "Divergência acima da tolerância", en: "Divergence above tolerance" })}
      </div>
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <Scale size={13} className="text-slate-500" />
              {bar.label}
            </span>
            <span className="font-mono text-white">{bar.value.toFixed(1).replace(".", l({ pt: ",", en: "." }))} t</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className={`h-full rounded-full bg-linear-to-r ${bar.color} transition-[width] duration-[1400ms] ease-out`}
              style={{ width: inView ? `${(bar.value / 30) * 100}%` : "0%" }}
            />
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200">
          <Check size={13} /> {l({ pt: "Confirmar", en: "Confirm" })}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
          <X size={13} /> {l({ pt: "Rejeitar", en: "Reject" })}
        </span>
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ${
          tech ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-white/10 bg-ink-950/80 p-3 font-mono text-[11px] leading-relaxed text-cyan-100/80">
{`balanca  = 28.4 t
vgm      = 24.0 t
delta    = 4.4 t  > tolerancia
alerta   → aguarda decisao humana`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const TccSection = () => {
  const l = useLocalize();
  const [tech, setTech] = useState(false);

  return (
    <div className="relative overflow-clip rounded-[2rem] border border-indigo-400/20 bg-linear-to-br from-indigo-600/15 via-ink-900/70 to-cyan-600/10 p-6 md:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative">
        {/* Cabeçalho + chave de detalhes técnicos */}
        <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
              {l(tcc.status)}
            </span>
            <h3 className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
              {tcc.name}
            </h3>
            <p className="mt-2 max-w-3xl text-lg text-slate-300">{l(tcc.title)}</p>
            <p className="mt-3 font-mono text-[11px] text-slate-500">
              {l(tcc.modality)} · {l({ pt: "Orientador", en: "Advisor" })}: {tcc.advisor}
            </p>
          </div>

          <button
            role="switch"
            aria-checked={tech}
            onClick={() => setTech(!tech)}
            className={`group inline-flex shrink-0 items-center gap-3 self-start rounded-full border px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
              tech
                ? "border-cyan-300/50 bg-cyan-400/10 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white"
            }`}
          >
            <span
              className={`relative h-5 w-9 rounded-full transition-colors ${tech ? "bg-cyan-400" : "bg-white/15"}`}
              aria-hidden="true"
            >
              <span
                className={`absolute left-0 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
                  tech ? "translate-x-[18px]" : "translate-x-0.5"
                }`}
              />
            </span>
            {l({ pt: "Detalhes técnicos", en: "Technical details" })}
          </button>
        </div>

        <LayeredText text={tcc.summary} tech={tech} className="max-w-3xl text-base md:text-lg" />

        {/* Ciclo da carga */}
        <p className="mb-4 mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
          {l({ pt: "O ciclo da carga", en: "The cargo cycle" })}
        </p>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tcc.cycle.map((stage, i) => (
            <li key={i} className="min-w-0">
              <Reveal delay={i * 70} className="h-full">
                <div className="h-full rounded-2xl border border-white/[0.08] bg-ink-950/50 p-4">
                  <span className="font-mono text-[10px] text-slate-500">0{i + 1}</span>
                  <p className="font-display text-sm font-semibold text-white">{l(stage.title)}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{l(stage.does)}</p>
                  <p className="mt-2 font-mono text-[11px] text-cyan-200/70">
                    {l({ pt: "Gera", en: "Generates" })}: {l(stage.generates)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Problemas */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.2em] text-rose-200/70">
            {l({ pt: "Problemas", en: "Problems" })}
          </span>
          {tcc.problems.map((problem, i) => (
            <span key={i} className="rounded-md bg-rose-400/10 px-2.5 py-1 text-xs text-rose-100/90">
              {l(problem)}
            </span>
          ))}
        </div>

        {/* Fluxo híbrido */}
        <p className="mb-4 mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
          {l({ pt: "Como funciona a abordagem híbrida", en: "How the hybrid approach works" })}
        </p>
        <ol className="grid gap-3 lg:grid-cols-[repeat(4,minmax(0,1fr))]">
          {tcc.pipeline.map((step, i) => {
            const Icon = stepIcons[step.id];
            return (
              <li key={step.id} className="relative min-w-0">
                <Reveal delay={i * 90} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-ink-950/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-cyan-500 text-white">
                        <Icon size={15} />
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">0{i + 1}</span>
                    </div>
                    <p className="font-display text-sm font-semibold text-white">{l(step.title)}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{l(step.lay)}</p>
                    <TechNote show={tech}>{l(step.tech)}</TechNote>
                  </div>
                </Reveal>
                {i < tcc.pipeline.length - 1 && (
                  <ChevronRight
                    size={16}
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-300 lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>

        {/* Exemplo de alerta + por que importa */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6">
            <Label>{l({ pt: "Um alerta na prática", en: "An alert in practice" })}</Label>
            <AlertDemo tech={tech} />
            <LayeredText text={tcc.alertExample} tech={tech} className="mt-5 text-sm" />
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6">
            <Label>{l({ pt: "Por que importa", en: "Why it matters" })}</Label>
            <LayeredText text={tcc.whyItMatters} tech={tech} className="text-sm" />
            <div className="mt-6 rounded-xl border border-indigo-300/20 bg-indigo-400/[0.06] p-4">
              <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                <BrainCircuit size={14} /> {l({ pt: "Pergunta de pesquisa", en: "Research question" })}
              </p>
              <p className="text-sm leading-relaxed text-slate-200">{l(tcc.researchQuestion)}</p>
            </div>
          </div>
        </div>

        {/* Detalhes técnicos: abordagens, escopo, objetivos e avaliação */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ${
            tech ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!tech}
        >
          <div className="overflow-hidden">
            <div className="mt-5 space-y-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.04] p-6">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  {l({ pt: "Por que híbrida", en: "Why hybrid" })}
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {tcc.approaches.map((a, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-ink-950/60 p-4 text-xs">
                      <p className="font-display text-sm font-semibold text-white">{l(a.name)}</p>
                      <p className="mt-2 text-emerald-200/80">+ {l(a.strength)}</p>
                      <p className="mt-1 text-slate-400">– {l(a.limit)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                    {l({ pt: "Dentro do MVP", en: "Inside the MVP" })}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {tcc.scope.inside.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <Check size={14} className="mt-1 shrink-0 text-emerald-300" />
                        {l(item)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                    {l({ pt: "Fora do MVP", en: "Outside the MVP" })}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-400">
                    {tcc.scope.outside.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <X size={14} className="mt-1 shrink-0 text-slate-500" />
                        {l(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  {l({ pt: "Objetivos", en: "Objectives" })}
                </p>
                <p className="mb-3 text-sm text-slate-300">{l(tcc.objectives.general)}</p>
                <ol className="list-inside list-decimal space-y-1 text-sm text-slate-400">
                  {tcc.objectives.specific.map((item, i) => (
                    <li key={i}>{l(item)}</li>
                  ))}
                </ol>
              </div>

              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                  {l({ pt: "Avaliação", en: "Evaluation" })}
                </p>
                <p className="text-sm text-slate-300">{l(tcc.evaluation)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {tcc.keywords.map((keyword) => (
              <span key={keyword} className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                {keyword}
              </span>
            ))}
          </div>
          <p className="flex items-start gap-2 text-xs text-slate-500 md:max-w-sm">
            <Info size={14} className="mt-0.5 shrink-0" />
            {l(tcc.disclaimer)}
          </p>
        </div>
      </div>
    </div>
  );
};
