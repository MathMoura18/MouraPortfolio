import type { Pendable } from "../data/content";

/** Selo exibido apenas em itens `pending` (que já ficam ocultos em produção). */
export const DraftBadge = ({ item }: { item: Pendable }) =>
  item.pending ? (
    <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
      rascunho · src/data/content.ts
    </span>
  ) : null;
