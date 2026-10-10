import type { MouseEvent } from "react";

/** Atualiza a posição do holofote (.spotlight) conforme o cursor se move sobre o card. */
export const trackSpotlight = (event: MouseEvent<HTMLElement>) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  target.style.setProperty("--my", `${event.clientY - rect.top}px`);
};
