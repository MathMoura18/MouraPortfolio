import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ao trocar de rota: rola até o #hash (ex.: /knowledge#curriculum) ou volta ao topo.
 * Navegações com state.scrollTo são tratadas pela própria Home.
 */
export const ScrollManager = () => {
  const { pathname, hash, state } = useLocation();
  const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;

  useEffect(() => {
    if (scrollTo) return;
    if (hash) {
      // Aguarda a página montar antes de procurar o elemento.
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, scrollTo]);

  return null;
};
