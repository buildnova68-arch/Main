import { useEffect, useRef, useState } from "react";
import logoImg from "@assets/image_1776542233324.png";

export default function Logo3D({ active }: { active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = -(mouseY / rect.height) * 30; // Max 15deg
      const rotateY = (mouseX / rect.width) * 30;
      
      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [active]);

  return (
    <div 
      ref={containerRef}
      className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center transform-style-3d transition-transform duration-200 ease-out"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] animate-pulse-glow" />
      <div className="relative w-full h-full animate-float flex items-center justify-center transform-style-3d">
        <div
          className="absolute w-[91%] h-[91%] border border-cyan-300/20 bg-cyan-950/20 shadow-[0_0_45px_rgba(0,240,255,0.35)]"
          style={{ transform: "translateZ(-70px) rotateY(-8deg) rotateX(4deg)" }}
        />
        <div
          className="absolute w-[88%] h-[88%] border border-cyan-200/25 bg-cyan-400/5"
          style={{ transform: "translateZ(-38px) rotateY(-5deg) rotateX(3deg)" }}
        />
        <img 
          src={logoImg} 
          alt="NOVABUILD Logo" 
          className="absolute w-[80%] h-[80%] object-contain opacity-35 blur-md saturate-150"
          style={{ transform: "translateZ(-40px)" }}
        />
        <img 
          src={logoImg} 
          alt="NOVABUILD Logo" 
          className="absolute w-[90%] h-[90%] object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] saturate-125 contrast-125"
          style={{ transform: "translateZ(28px)" }}
        />
        <img 
          src={logoImg} 
          alt="NOVABUILD Logo" 
          className="absolute w-[90%] h-[90%] object-contain mix-blend-screen opacity-50"
          style={{ transform: "translateZ(56px)" }}
        />
        <div
          className="absolute h-[2px] w-[115%] bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80 blur-[1px]"
          style={{ transform: "translateZ(78px) rotate(-33deg)" }}
        />
      </div>
    </div>
  );
}
