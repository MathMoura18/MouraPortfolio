import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUp, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../data/projects";

const socials = [
  { href: GITHUB_URL, icon: faGithub, label: "GitHub" },
  { href: LINKEDIN_URL, icon: faLinkedin, label: "LinkedIn" },
  { href: `mailto:${EMAIL}`, icon: faEnvelope, label: "E-mail" },
];

export const Footer = () => {
  const { t } = useTranslation();

  const pages = [
    { to: "/", label: t("nav.home") },
    { to: "/academic", label: t("nav.academic") },
    { to: "/professional", label: t("nav.professional") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/knowledge", label: t("nav.knowledge") },
    { to: "/about", label: t("nav.about_me") },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 font-display text-sm font-bold text-white">
                MM
              </span>
              <span className="font-display font-semibold text-white">
                Matheus Moura
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {t("footer.tagline")}
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <MapPin size={12} className="text-indigo-300" /> Itajaí, SC —
              Brasil
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {t("footer.navigate")}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {pages.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {t("footer.social")}
            </p>
            <div className="flex gap-2">
              {socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} Matheus Moura · {t("footer.built")}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="group inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-white cursor-pointer"
          >
            {t("footer.back_to_top")}
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
