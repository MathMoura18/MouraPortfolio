import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
