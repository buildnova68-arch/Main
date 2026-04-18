import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export default function Particles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let resizeFrame = 0;
    let animationFrameId = 0;
    let lastFrame = 0;

    const particles: Particle[] = [];

    const particleCount = () => {
      const baseCount = Math.floor((width * height) / 22000);
      return Math.min(70, Math.max(34, baseCount));
    };

    const createParticles = () => {
      particles.length = 0;
      const count = particleCount();

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.7 + 0.45,
          speedX: (Math.random() - 0.5) * 0.22,
          speedY: (Math.random() - 0.5) * 0.22,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const animate = (timestamp: number) => {
      if (timestamp - lastFrame < 33) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      lastFrame = timestamp;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgb(0, 240, 255)";
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (animationFrameId) return;
      lastFrame = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (!animationFrameId) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleResize = () => {
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resizeCanvas);
    };

    resizeCanvas();
    start();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      stop();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
