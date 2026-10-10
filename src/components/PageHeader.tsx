import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export const PageHeader = ({ kicker, title, subtitle, children }: PageHeaderProps) => {
  return (
    <header className="mb-16">
      <p className="mb-5 flex animate-rise-in items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-indigo-300">
        <span className="h-px w-10 bg-linear-to-r from-indigo-400 to-transparent" />
        {kicker}
      </p>
      <h1
        className="animate-rise-in font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {title}
        <span className="text-gradient">.</span>
      </h1>
      <div
        className="mt-6 flex animate-rise-in flex-col gap-6 md:flex-row md:items-end md:justify-between"
        style={{ animationDelay: "160ms" }}
      >
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
        {children}
      </div>
    </header>
  );
};
