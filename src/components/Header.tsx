import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  // Define qual bandeira e sigla mostrar com base no idioma OPOSTO ao atual
  const languageDisplay =
    i18n.language === "pt"
      ? { flag: "🇺🇸", label: "EN" }
      : { flag: "🇧🇷", label: "PT" };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/20 border-b border-white/5">
      {/* Logo */}
      <Link to="/" className="z-50">
        <span className="font-mono text-blue-400 font-bold tracking-tighter text-xl hover:text-blue-300 transition-colors">
          MM.
        </span>
      </Link>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Links de Navegação - Escondidos no Mobile, visíveis no MD (Medium) em diante */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            {t("nav.about", "Sobre")}
          </a>
          <a
            href="#experience"
            className="hover:text-blue-400 transition-colors"
          >
            {t("nav.experience", "Experiência")}
          </a>
          <Link
            to="/projects"
            className="hover:text-blue-400 transition-colors"
          >
            {t("nav.projects", "Projetos")}
          </Link>
        </div>

        {/* Botão de Idioma com Bandeira */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group shadow-lg cursor-pointer"
          title={i18n.language === "pt" ? "English" : "Português"}
        >
          <Languages
            size={14}
            className="text-blue-400 group-hover:rotate-12 transition-transform"
          />
          <div className="flex items-center gap-1.5">
            <span className="text-sm leading-none">{languageDisplay.flag}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
              {languageDisplay.label}
            </span>
          </div>
        </button>

        {/* Botão Hamburger (Mobile) */}
        <button
          className="md:hidden z-[110] p-2 text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div
        className={`
        fixed inset-0 min-h-screen w-full bg-slate-950/98 backdrop-blur-2xl transition-all duration-300 md:hidden
        flex flex-col items-center justify-center gap-10
        z-[100] {/* Aumentamos o z-index para garantir que fique no topo */}
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Links com fonte maior e mais espaçamento */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          Home
        </Link>
        <a
          href="#about"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          {t("nav.about", "Sobre")}
        </a>
        <a
          href="#experience"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          {t("nav.experience", "Experiência")}
        </a>
        <Link
          to="/projects"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          {t("nav.projects", "Projetos")}
        </Link>

        <div className="mt-10 h-px w-20 bg-blue-500/20"></div>
        <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">
          Matheus Moura
        </p>
      </div>
    </nav>
  );
};
