import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageButton } from "./LanguageButton";

const HOME_SECTIONS = ["about", "experience", "projects", "contact"];

type NavItem =
  | { kind: "section"; id: string; label: string }
  | { kind: "route"; to: string; label: string; activeId: string };

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // Estado do scroll + barra de progresso (atualizada direto no DOM para evitar re-render)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Destaca o link da seção visível na Home
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    HOME_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const goToSection = (id: string) => {
    closeMenu();
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.getElementById(id)?.scrollIntoView();
  };

  const navItems: NavItem[] = [
    { kind: "route", to: "/academic", label: t("nav.academic"), activeId: "" },
    {
      kind: "route",
      to: "/professional",
      label: t("nav.professional"),
      activeId: "experience",
    },
    {
      kind: "route",
      to: "/projects",
      label: t("nav.projects"),
      activeId: "projects",
    },
    { kind: "route", to: "/knowledge", label: t("nav.knowledge"), activeId: "" },
    { kind: "route", to: "/about", label: t("nav.about_me"), activeId: "about" },
  ];


  const isActive = (item: NavItem) => {
    if (item.kind === "route") {
      return (
        location.pathname === item.to ||
        (isHome && !!item.activeId && activeSection === item.activeId)
      );
    }
    return isHome && activeSection === item.id;
  };

  const linkClass = (active: boolean) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
      active
        ? "text-white bg-white/[0.08]"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra de progresso de leitura */}
      <div
        ref={progressRef}
        className="h-[2px] origin-left bg-linear-to-r from-indigo-500 via-indigo-400 to-cyan-300"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="relative z-[110] px-4">
        <nav
          className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full py-2 pl-4 pr-2 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              : "border border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group relative z-[110] flex items-center gap-3"
            aria-label="Matheus Moura — Home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 font-display text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
              MM
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block lg:hidden xl:block">
              Matheus Moura
            </span>
          </Link>

          {/* Links desktop */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) =>
              item.kind === "route" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className={linkClass(isActive(item))}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={linkClass(isActive(item))}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          <div className="relative z-[110] flex items-center gap-2">
            <LanguageButton />
            <button
              onClick={() => goToSection("contact")}
              className="btn-primary hidden rounded-full px-4 py-2 text-xs font-semibold text-white lg:inline-flex cursor-pointer"
            >
              {t("nav.contact")}
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-2xl transition-opacity duration-500 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {[
            { kind: "route", to: "/", label: t("nav.home"), activeId: "" } as NavItem,
            ...navItems,
            { kind: "section", id: "contact", label: t("nav.contact") } as NavItem,
          ].map(
            (item, i) => {
              const className = `group flex items-baseline gap-4 py-1.5 font-display text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${isActive(item) ? "text-white" : "text-slate-400 hover:text-white"}`;
              const content = (
                <>
                  <span className="font-mono text-xs font-normal text-indigo-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </>
              );
              const style = { transitionDelay: isOpen ? `${100 + i * 60}ms` : "0ms" };

              return item.kind === "route" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={className}
                  style={style}
                >
                  {content}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={`${className} text-left`}
                  style={style}
                >
                  {content}
                </button>
              );
            },
          )}
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-indigo-500/40 to-transparent" />
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          Matheus Moura · Software Developer
        </p>
      </div>
    </header>
  );
};
