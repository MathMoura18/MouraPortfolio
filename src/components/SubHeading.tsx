import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type SubHeadingProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
};

/** Título de bloco dentro das páginas internas. */
export const SubHeading = ({ icon: Icon, title, subtitle }: SubHeadingProps) => (
  <Reveal className="mb-8 flex items-start gap-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-indigo-400/20 bg-linear-to-br from-indigo-500/15 to-cyan-500/5 text-indigo-300">
      <Icon size={20} />
    </span>
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
    </div>
  </Reveal>
);
