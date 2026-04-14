import { MapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Matheus Moura. Desenvolvido com React & Vite.</p>
            <div className="flex justify-center gap-2 mt-2">
            <MapPin size={12} /> Itajaí, SC
            </div>
        </footer>
    );
}