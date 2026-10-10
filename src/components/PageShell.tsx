import type { ReactNode } from "react";
import Background from "./Background";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PageShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-300">
      <Background />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
