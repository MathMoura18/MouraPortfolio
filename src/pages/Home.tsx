import { ExternalLink, Code2, GraduationCap, Briefcase } from "lucide-react";
import Background from "../components/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../assets/me.jpg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../components/LanguageButton";

const Home = () => {
  const { t } = useTranslation();

  // Projetos estruturados para buscar tradução dinamicamente
  const projects = [
    {
      title: "OpenAIReader",
      desc: t("projects.openai.desc"),
      tech: "Python / OpenAI",
      link: "https://github.com/MathMoura18/OpenAIReader",
    },
    {
      title: "NOPReorder",
      desc: t("projects.nop.desc"),
      tech: "Assembly / Compiladores",
      link: "https://github.com/MathMoura18/NOPReorder",
    },
    {
      title: "CatPetunia",
      desc: t("projects.cat.desc"),
      tech: "React / Full-stack",
      link: "https://github.com/MathMoura18/CatPetunia",
    },
    {
      title: "TryToBeatChatGPT",
      desc: t("projects.beat.desc"),
      tech: "JavaScript / IA",
      link: "https://github.com/MathMoura18/TryToBeatChatGPT",
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Background theme="dark" />
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-32">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img
              src={MyImage}
              alt="Matheus Moura"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </div>

          <div className="flex items-stretch gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t("available")}
            </div>
            <LanguageButton />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Matheus Moura
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-7xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="https://github.com/MathMoura18"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-moura21/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href="mailto:mathmo.ura242@gmail.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-all border border-white/10"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </section>

        {/* Experiência e Educação */}
        <section id="experience" className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Briefcase className="text-blue-400" size={24} />{" "}
              {t("experience.title")}
            </h2>
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Software Developer
                  </h3>
                  <p className="text-blue-400">Modallport Sistemas</p>
                </div>
                <span className="text-xs text-slate-500">
                  {t("experience.date")}
                </span>
              </div>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• {t("experience.job_desc.1")}</li>
                <li>• {t("experience.job_desc.2")}</li>
                <li>• {t("experience.job_desc.3")}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <GraduationCap className="text-blue-400" size={24} />{" "}
              {t("education.title")}
            </h2>
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white">
                {t("education.course")}
              </h3>
              <p className="text-blue-400">UNIVALI</p>
              <p className="text-sm text-slate-500 mt-2">
                {t("education.date")}
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {[".NET", "Java", "Python", "React", "Assembly"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="pb-32">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-10">
            <Code2 className="text-blue-400" size={24} />{" "}
            {t("projects.section_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/30 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/40 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-slate-600 group-hover:text-blue-400"
                  />
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <span className="text-xs font-mono text-blue-500/80 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                  {project.tech}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
