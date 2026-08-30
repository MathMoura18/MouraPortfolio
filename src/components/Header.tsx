import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageButton } from "./LanguageButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const goToSection = (id: string) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView();
  };

  const sectionLinks = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-slate-950/70 border-b border-white/10"
          : "backdrop-blur-md bg-slate-950/20 border-b border-white/5"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="z-50" onClick={closeMenu}>
        <span className="font-mono text-blue-400 font-bold tracking-tighter text-xl hover:text-blue-300 transition-colors">
          MM.
        </span>
      </Link>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Links de Navegação - Escondidos no Mobile, visíveis no MD (Medium) em diante */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {sectionLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/projects"
            className="hover:text-blue-400 transition-colors"
          >
            {t("nav.projects")}
          </Link>
        </div>

        <LanguageButton />

        {/* Botão Hamburger (Mobile) */}
        <button
          className="md:hidden z-[110] p-2 text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div
        className={`
        fixed inset-0 min-h-screen w-full bg-slate-950/98 backdrop-blur-2xl transition-all duration-300 md:hidden
        flex flex-col items-center justify-center gap-10 z-[100]
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          Home
        </Link>
        {sectionLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => goToSection(link.id)}
            className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            {link.label}
          </button>
        ))}
        <Link
          to="/projects"
          onClick={closeMenu}
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          {t("nav.projects")}
        </Link>

        <div className="mt-10 h-px w-20 bg-blue-500/20"></div>
        <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">
          Matheus Moura
        </p>
      </div>
    </nav>
  );
};
