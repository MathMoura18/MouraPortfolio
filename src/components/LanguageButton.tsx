import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const languageDisplay =
    i18n.language === "pt"
      ? { flag: "🇧🇷", label: "PT" }
      : { flag: "🇺🇸", label: "EN" };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group shadow-lg cursor-pointer"
      title={i18n.language === "pt" ? "Português" : "English"}
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
  );
};
