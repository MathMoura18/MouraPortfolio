import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export const SectionHeading = ({
  index,
  kicker,
  title,
  subtitle,
  action,
}: SectionHeadingProps) => {
  return (
    <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-indigo-300">
          <span className="text-cyan-300">{index}</span>
          <span className="h-px w-10 bg-linear-to-r from-indigo-400 to-transparent" />
          {kicker}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-slate-400">{subtitle}</p>
        )}
      </div>
      {action}
    </Reveal>
  );
};
