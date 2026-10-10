import { lazy, Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ScrollManager } from "./components/ScrollManager";

// Páginas internas carregadas sob demanda para manter o bundle inicial leve.
const Academic = lazy(() => import("./pages/Academic"));
const Professional = lazy(() => import("./pages/Professional"));
const Projects = lazy(() => import("./pages/Projects"));
const Knowledge = lazy(() => import("./pages/Knowledge"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

function App() {
  return (
    <Router>
      <ScrollManager />
      <Suspense fallback={<div className="min-h-screen bg-ink-950" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/about" element={<AboutMe />} />
          {/* Rota antiga, mantida para links já compartilhados */}
          <Route path="/experience" element={<Navigate to="/professional" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
