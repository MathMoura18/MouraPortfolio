import { useEffect, useState } from "react";

type RoleRotatorProps = {
  roles: string[];
};

/** Efeito de máquina de escrever que alterna entre os papéis informados. */
// Remonte o componente (via `key`) quando a lista de papéis mudar, ex.: troca de idioma.
export const RoleRotator = ({ roles }: RoleRotatorProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const full = roles[index % roles.length] ?? "";
  const total = roles.length;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  useEffect(() => {

    if (reduceMotion) return;

    let delay = deleting ? 35 : 70;
    if (!deleting && text === full) delay = 2200;
    if (deleting && text === "") delay = 400;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % total);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, full, total, reduceMotion]);

  return (
    <span className="font-mono">
      <span className="text-cyan-300/80">&gt; </span>
      <span className="text-slate-200">{reduceMotion ? full : text}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-cyan-300 animate-blink" />
    </span>
  );
};
