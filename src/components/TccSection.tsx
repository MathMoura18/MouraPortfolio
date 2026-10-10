import { useState } from "react";
import {
  BrainCircuit,
  ChevronRight,
  Database,
  Flame,
  Image,
  Info,
  ScanSearch,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useInView } from "../hooks/useInView";
import { useLocalize } from "../utils/localize";
import { tcc, type Layered, type PipelineStep } from "../data/tcc";

const stepIcons: Record<PipelineStep["id"], LucideIcon> = {
  input: Image,
  preprocess: SlidersHorizontal,
  vit: BrainCircuit,
  classify: ScanSearch,
  explain: Flame,
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

/** Intensidade (0–1) de uma "mamografia" sintética: tecido em gradiente com um ponto mais denso. */
const pixel = (x: number, y: number, size: number) => {
  const nx = x / (size - 1);
  const ny = y / (size - 1);
  const tissue = Math.max(0, 1 - Math.hypot(nx * 1.1, (ny - 0.5) * 1.4)) * 0.55;
  const spot = Math.exp(-((nx - 0.55) ** 2 + (ny - 0.4) ** 2) / 0.012) * 0.5;
  return Math.min(1, tissue + spot);
};

const PixelMatrix = ({ tech }: { tech: boolean }) => {
  const size = 8;
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[260px] grid-cols-8 overflow-hidden rounded-xl border border-white/10">
      {Array.from({ length: size * size }, (_, i) => {
        const x = i % size;
        const y = Math.floor(i / size);
        const v = pixel(x, y, size);
        return (
          <div
            key={i}
            className="relative grid place-items-center"
            style={{ backgroundColor: `rgb(${v * 255} ${v * 255} ${v * 255})` }}
          >
            <span
              className={`font-mono text-[8px] transition-opacity duration-300 ${tech ? "opacity-100" : "opacity-0"}`}
              style={{ color: v > 0.5 ? "#0a0e1a" : "#cbd5e1" }}
            >
              {v.toFixed(2)}
            </span>
          </div>
        );
      })}
      {/* Divisão em patches (4 × 4 → 2 × 2 patches visíveis aqui) */}
      <div
        className={`pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 transition-opacity duration-500 ${
          tech ? "opacity-100" : "opacity-0"
        }`}
      >
        {["P1", "P2", "P3", "P4"].map((p) => (
          <div key={p} className="border border-cyan-300/80">
            <span className="m-1 inline-block rounded bg-cyan-400 px-1 font-mono text-[9px] font-bold text-ink-950">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResultDemo = ({ tech }: { tech: boolean }) => {
  const l = useLocalize();
  const { ref, inView } = useInView<HTMLDivElement>();
  const scores = [
    { label: l({ pt: "Normal", en: "Normal" }), value: 12, color: "from-emerald-400 to-cyan-300" },
    { label: l({ pt: "Suspeito", en: "Suspicious" }), value: 88, color: "from-rose-500 to-orange-400" },
  ];

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
      {/* Mamografia sintética + mapa de calor */}
      <div className="relative mx-auto aspect-[4/5] w-40 overflow-hidden rounded-xl border border-white/10 bg-black">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 0% 50%, rgb(210 210 210 / 0.85), rgb(120 120 120 / 0.5) 45%, transparent 75%), radial-gradient(ellipse 30% 20% at 35% 60%, rgb(255 255 255 / 0.25), transparent)",
          }}
        />
        <div
          className={`absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: "58%",
            top: "40%",
            background: "radial-gradient(circle, rgb(255 60 60 / 0.95), rgb(255 140 0 / 0.55) 40%, transparent 70%)",
          }}
        />
        <div className="absolute left-[58%] top-[40%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-red-300/80" />
        <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-slate-300">
          {l({ pt: "exemplo", en: "example" })}
        </span>
      </div>

      <div className="min-w-0 space-y-4">
        {scores.map((score) => (
          <div key={score.label}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-slate-300">{score.label}</span>
              <span className="font-mono text-white">{score.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className={`h-full rounded-full bg-linear-to-r ${score.color} transition-[width] duration-[1400ms] ease-out`}
                style={{ width: inView ? `${score.value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
        <p className="text-sm text-slate-400">
          {l({ pt: "Região suspeita destacada no mapa de calor.", en: "Suspicious region highlighted on the heatmap." })}
        </p>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ${
            tech ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-white/10 bg-ink-950/80 p-3 font-mono text-[11px] leading-relaxed text-cyan-100/80">
{`softmax  → [0.12, 0.88]
argmax   → "suspeito"
heatmap  → attention rollout
peak     → x = 643, y = 381`}
            </pre>
          </div>
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
              {l(tcc.title)}
            </h3>
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

        {/* Fluxo */}
        <p className="mb-4 mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
          {l({ pt: "Como funciona", en: "How it works" })}
        </p>
        <ol className="grid gap-3 lg:grid-cols-[repeat(5,minmax(0,1fr))]">
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

        {/* Imagem como números + resultado */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
              {l({ pt: "A imagem vira números", en: "The image becomes numbers" })}
            </p>
            <PixelMatrix tech={tech} />
            <LayeredText text={tcc.imageAsNumbers} tech={tech} className="mt-5 text-sm" />
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-200/70">
              {l({ pt: "O resultado", en: "The result" })}
            </p>
            <ResultDemo tech={tech} />
            <LayeredText text={tcc.whyItMatters} tech={tech} className="mt-5 text-sm" />
          </div>
        </div>

        {/* Datasets (somente com detalhes técnicos) */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ${
            tech ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!tech}
        >
          <div className="overflow-hidden">
            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.04] p-6">
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                <Database size={14} /> Datasets
              </p>
              <p className="mb-4 text-sm text-slate-300">{l(tcc.datasetNote)}</p>
              <div className="flex flex-wrap gap-2">
                {tcc.datasets.map((dataset) => (
                  <span key={dataset.name} className="rounded-lg border border-white/10 bg-ink-950/60 px-3 py-1.5 text-xs">
                    <span className="font-mono font-semibold text-white">{dataset.name}</span>
                    <span className="text-slate-400"> · {l(dataset.note)}</span>
                  </span>
                ))}
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
