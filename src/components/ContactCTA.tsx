import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { EMAIL, LINKEDIN_URL } from "../data/projects";
import { Reveal } from "./Reveal";

export const ContactCTA = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <Reveal>
        <div className="relative overflow-clip rounded-[2rem] border border-white/10 bg-ink-900/60 px-6 py-16 text-center md:px-16 md:py-24">
          {/* Brilhos decorativos */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

          <div className="relative">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("available")}
            </p>

            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              {t("contact.title_1")}{" "}
              <span className="text-gradient">{t("contact.title_2")}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
              {t("contact.text")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                <Mail size={16} />
                {t("contact.email_button")}
                <ArrowUpRight size={16} />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 font-mono text-xs text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white cursor-pointer"
                aria-live="polite"
              >
                {copied ? (
                  <Check size={14} className="shrink-0 text-emerald-400" />
                ) : (
                  <Copy size={14} className="shrink-0" />
                )}
                <span className="truncate">
                  {copied ? t("contact.copied") : EMAIL}
                </span>
              </button>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
