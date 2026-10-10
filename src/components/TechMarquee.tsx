const techs = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "React",
  "React Native",
  "TypeScript",
  "SQL Server",
  "Oracle",
  "Node.js",
  "Tailwind",
  "Java",
  "Python",
  "C / C++",
  "Assembly RISC-V",
  "AWS",
  "Git",
];

export const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-5 mask-fade-x">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            aria-hidden={i >= techs.length}
            className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-medium text-slate-500 transition-colors hover:text-slate-200 md:text-xl"
          >
            {tech}
            <span className="h-1.5 w-1.5 rotate-45 bg-indigo-400/60" />
          </span>
        ))}
      </div>
    </div>
  );
};
