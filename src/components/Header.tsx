export const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/20 border-b border-white/5">
            <span className="font-mono text-blue-400 font-bold tracking-tighter text-xl">MM.</span>
            <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experiência</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a>
            </div>
        </nav>
    );
}