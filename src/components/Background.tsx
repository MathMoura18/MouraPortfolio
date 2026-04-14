import React, { useRef, useEffect } from "react";

interface BackgroundProps {
  theme?: "light" | "dark";
}

const Background: React.FC<BackgroundProps> = ({ theme = "dark" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Configurações
    const particleCount = 100;
    const isDark = theme === "dark";
    const color = isDark ? "255, 255, 255" : "0, 0, 0";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        // Vetor: Direita (positivo) e Cima (negativo)
        this.speedX = Math.random() * 0.6 + 0.1;
        this.speedY = (Math.random() * 0.6 + 0.1) * -1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Loop infinito (se sair da tela, volta pelo lado oposto)
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;

        // Interação com Mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          // Empurra as partículas suavemente
          this.x -= directionX * force * 3;
          this.y -= directionY * force * 3;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", // Permite clicar em elementos abaixo do canvas
        backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
        transition: "background-color 0.5s ease",
      }}
    />
  );
};

export default Background;