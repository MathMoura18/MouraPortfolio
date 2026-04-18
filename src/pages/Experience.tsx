import { useState, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  ChevronDown,
  ExternalLink,
  Code2,
} from "lucide-react";
import Background from "../components/Background";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import LogoModallport from "../assets/modallport-logo-1.png";
import LogoUnivali from "../assets/Univali.jpg";

const Experience = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      company: "Modallport Sistemas",
      role: "Software Developer",
      period: t("experience_page.current_period"),
      location: "Itajaí, SC",
      description: [
        t("experience.job_desc.1"),
        t("experience.job_desc.2"),
        t("experience.job_desc.3"),
      ],
      techs: [
        ".NET",
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "Oracle",
        "React Native",
        "React",
      ],
      type: "work",
    },
    {
      company: "UNIVALI",
      role: t("education.course"),
      period: t("education.date"),
      location: "Itajaí, SC",
      description: [
        t("experience_page.edu_desc.1"),
        t("experience_page.edu_desc.2"),
      ],
      techs: ["C", "Python", "Java", "Assembly", "Data Structures"],
      type: "edu",
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Background theme="dark" />
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("nav.experience")}
            <span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            {t("experience_page.subtitle")}
          </p>
        </header>

        <div
          className={`space-y-6 transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {experiences.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isModallportCard =
              index === 0 && item.company === "Modallport Sistemas";

            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative bg-slate-900/30 border border-white/5 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden
                  ${isExpanded ? "bg-slate-800/50 border-blue-500/40" : "hover:bg-slate-800/40 hover:border-white/20"}`}
                onClick={() => toggleExpand(index)}
              >
                {/* Header do Card */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <div
                      className={`p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 transition-all duration-500 ${isExpanded ? "scale-110 bg-blue-500/20 border-blue-500/30" : "group-hover:scale-110"}`}
                    >
                      {item.type === "work" ? (
                        <Briefcase size={24} />
                      ) : (
                        <GraduationCap size={24} />
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-lg md:text-xl font-bold transition-colors ${isExpanded ? "text-blue-400" : "text-white"}`}
                      >
                        {item.role}
                      </h3>
                      <p className="text-slate-400 font-medium text-sm md:text-base">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-xs text-slate-500 font-mono">
                      {item.period}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-slate-500 transition-transform duration-500 ${isExpanded ? "rotate-180 text-blue-400" : ""}`}
                    />
                  </div>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`transition-all duration-500 ease-in-out px-6 md:px-8 overflow-hidden ${isExpanded ? "max-h-[1000px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pt-6 border-t border-white/5">
                    {/* Grid de Duas Colunas no Dropdown */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8 items-stretch">
                      {/* LADO ESQUERDO: Suas Responsabilidades / Estudos */}
                      <div className="flex flex-col justify-between p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 group/side">
                        <div className="space-y-4 text-left">
                          <h4 className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                            {isModallportCard
                              ? t("modallport.my_role.title")
                              : t("univali_info.my_studies.title")}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed text-justify">
                            {isModallportCard
                              ? t("modallport.my_role.text")
                              : t("univali_info.my_studies.text")}
                          </p>
                        </div>

                        {/* Link para o seu GitHub ou Projetos */}
                        {isModallportCard ? null : (
                          <a
                            href={t("univali_info.my_studies.github_link")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/5 text-slate-300 text-xs font-bold hover:border-blue-500/40 hover:text-blue-400 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Code2 size={14} />
                            {isModallportCard
                              ? null
                              : t("univali_info.my_studies.link_text")}
                          </a>
                        )}
                      </div>

                      {/* LADO DIREITO: Empresa / Instituição (Mantendo a lógica anterior) */}
                      <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/5 border border-white/5 items-center text-center">
                        <div className="space-y-4">
                          <div className="p-2.5 rounded-2xl bg-white border border-white inline-block shadow-inner mb-2 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500">
                            <img
                              src={
                                isModallportCard ? LogoModallport : LogoUnivali
                              }
                              alt="Logo"
                              className="h-10 md:h-12 w-auto object-contain"
                            />
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                              {isModallportCard
                                ? t("modallport.company.title")
                                : t("univali_info.institution.title")}
                            </h4>
                            <p className="text-slate-400 text-[11px] leading-relaxed max-w-sm">
                              {isModallportCard
                                ? t("modallport.company.text")
                                : t("univali_info.institution.text")}
                            </p>
                          </div>
                        </div>

                        {/* Link para o site da Empresa/Universidade */}
                        <a
                          href={
                            isModallportCard
                              ? t("modallport.website_link")
                              : t("univali_info.website_link")
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {isModallportCard
                            ? t("modallport.visit_button")
                            : t("univali_info.visit_button")}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-slate-950/50 text-blue-400/80 border border-blue-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
