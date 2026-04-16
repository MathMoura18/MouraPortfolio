import React, { useState } from 'react';
import { ExternalLink, Code2, Search, Filter } from 'lucide-react';
import Background from '../components/Background';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Projects = () => {
  const [filter, setFilter] = useState('Todos');

  const allProjects = [
    {
      title: "OpenAIReader",
      desc: "Interface de chat com IA para extração de informações de documentos carregados.",
      tech: ["Python", "OpenAI"],
      category: "IA",
      link: "https://github.com/MathMoura18/OpenAIReader"
    },
    {
      title: "NOPReorder",
      desc: "Ferramenta para otimização de execução em código Assembly RISC-V.",
      tech: ["Assembly", "C"],
      category: "Compiladores",
      link: "https://github.com/MathMoura18/NOPReorder"
    },
    {
      title: "CatPetunia",
      desc: "Site completo e funcional para uma ONG de adoção de gatos.",
      tech: ["React", "Node.js", "Tailwind"],
      category: "Web",
      link: "https://github.com/MathMoura18/CatPetunia"
    },
    {
      title: "TryToBeatChatGPT",
      desc: "Minigame de adivinhação de palavras utilizando a API da OpenAI.",
      tech: ["JavaScript", "OpenAI"],
      category: "IA",
      link: "https://github.com/MathMoura18/TryToBeatChatGPT"
    },
    {
      title: "AWS Univali Portal",
      desc: "Configuração e deploy de portal acadêmico utilizando serviços AWS.",
      tech: ["Cloud", "AWS", "Vite"],
      category: "Infra",
      link: "#"
    }
  ];

  // Filtros criativos: Mistura de Categorias e Techs principais
  const filterOptions = ["Todos", "IA", "Web", "Compiladores", "React", "Python"];

  const filteredProjects = allProjects.filter(project => {
    if (filter === "Todos") return true;
    return (
      project.category === filter || 
      project.tech.some(t => t === filter)
    );
  });

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Background theme="dark" />
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Projetos<span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Uma coleção de experimentos, trabalhos acadêmicos e soluções reais desenvolvidas durante minha jornada em Ciência da Computação.
          </p>
        </header>

        {/* Barra de Filtros */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Filter size={16} className="text-blue-500" />
            <span>Filtrar por:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                  filter === option
                    ? "bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/20 cursor-pointer"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col bg-slate-900/30 border border-white/5 p-6 rounded-3xl hover:bg-slate-800/40 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 group-hover:scale-110 transition-transform duration-500">
                  <Code2 size={24} className="text-blue-400" />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-slate-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-slate-950/50 text-blue-400/80 border border-blue-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feedback caso não encontre projetos no filtro */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Projects;