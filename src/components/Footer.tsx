import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../data/projects";

const links = [
  { href: GITHUB_URL, icon: faGithub, label: "GitHub" },
  { href: LINKEDIN_URL, icon: faLinkedin, label: "LinkedIn" },
  { href: `mailto:${EMAIL}`, icon: faEnvelope, label: "E-mail" },
];

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} Matheus Moura — React, TypeScript & Vite.</p>

        <div className="flex gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="p-2 rounded-full border border-white/5 hover:border-blue-500/40 hover:text-blue-400 transition-all"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={12} /> Itajaí, SC — Brasil
        </div>
      </div>
    </footer>
  );
};
