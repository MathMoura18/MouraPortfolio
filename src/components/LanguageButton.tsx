import { useTranslation } from "react-i18next";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const isPt = i18n.resolvedLanguage === "pt";

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="relative flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 font-mono text-[11px] font-medium"
    >
      {/* Indicador deslizante */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 shadow-md shadow-indigo-500/30 transition-transform duration-300 ${
          isPt ? "translate-x-0" : "translate-x-full"
        }`}
      />
      {(["pt", "en"] as const).map((lng) => {
        const active = i18n.resolvedLanguage === lng;
        return (
          <button
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            title={lng === "pt" ? "Português" : "English"}
            className={`relative z-10 w-9 rounded-full py-1 uppercase tracking-wider transition-colors cursor-pointer ${
              active ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {lng}
          </button>
        );
      })}
    </div>
  );
};
