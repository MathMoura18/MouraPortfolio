import { useTranslation } from "react-i18next";
import type { L, Pendable } from "../data/content";

/** Retorna uma função que escolhe o texto no idioma atual. */
export const useLocalize = () => {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "en" ? "en" : "pt";
  return (text: L | string) => (typeof text === "string" ? text : text[lang]);
};

/** Itens `pending` só aparecem em desenvolvimento; no build de produção ficam ocultos. */
export const visible = <T extends Pendable>(items: T[]) =>
  import.meta.env.DEV ? items : items.filter((item) => !item.pending);

export const isVisible = (item: Pendable) => import.meta.env.DEV || !item.pending;

/** Classe extra para destacar rascunhos durante o desenvolvimento. */
export const pendingClass = (item: Pendable) =>
  item.pending ? "outline-2 outline-dashed outline-amber-400/60 outline-offset-4" : "";
