import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

type CountUpProps = {
  /** Ex.: "2+", "10", "100%". Valores não numéricos são exibidos como estão. */
  value: string;
  duration?: number;
};

export const CountUp = ({ value, duration = 1600 }: CountUpProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {match ? `${current}${suffix}` : value}
    </span>
  );
};
