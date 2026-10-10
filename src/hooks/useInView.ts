import { useEffect, useRef, useState } from "react";

/** Retorna true assim que o elemento entra na viewport (dispara uma única vez). */
export const useInView = <T extends Element>(
  options: IntersectionObserverInit = { threshold: 0, rootMargin: "0px 0px -8% 0px" },
) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return { ref, inView };
};
