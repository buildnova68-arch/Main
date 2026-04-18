import React, { useRef, useEffect, useState } from "react";
import IntroSlide from "@/components/slides/intro-slide";
import ServicesSlide from "@/components/slides/services-slide";
import ContactSlide from "@/components/slides/contact-slide";
import Particles from "@/components/ui/particles";
import { useLocale } from "@/contexts/locale-context";
import { interpolateNavSlide } from "@/lib/translations";

export default function Home() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = 3;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (e.deltaY > 50 || e.deltaX > 50) {
        isScrolling = true;
        setCurrentSlide((prev) => Math.min(prev + 1, slides - 1));
        setTimeout(() => (isScrolling = false), 800);
      } else if (e.deltaY < -50 || e.deltaX < -50) {
        isScrolling = true;
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        setTimeout(() => (isScrolling = false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  let startX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      setCurrentSlide((prev) => Math.min(prev + 1, slides - 1));
    } else if (diff < -50) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div 
      className="h-[100dvh] min-h-0 w-full bg-background text-foreground overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Particles className="absolute inset-0 pointer-events-none z-0" />
      
      {/* Ambient background glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0" />

      {/* Navigation Indicators */}
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 sm:gap-4 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={interpolateNavSlide(t.navGoToSlide, idx + 1)}
          />
        ))}
      </div>

      {/* Slide Container */}
      <div 
        ref={containerRef}
        className="flex h-full min-h-0 w-[300vw] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform z-10 relative"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <section className="min-h-full h-full w-screen shrink-0 relative flex items-start sm:items-center justify-center overflow-y-auto overscroll-y-contain px-4 pt-6 pb-28 sm:pb-24 sm:p-6 md:p-24 [scrollbar-gutter:stable]">
          <IntroSlide
            isVisible={currentSlide === 0}
            onExploreWork={() => setCurrentSlide(1)}
          />
        </section>
        
        <section className="min-h-full h-full w-screen shrink-0 relative flex items-start sm:items-center justify-center overflow-y-auto overscroll-y-contain px-4 pt-6 pb-28 sm:pb-24 sm:p-6 md:p-24 [scrollbar-gutter:stable]">
          <ServicesSlide isVisible={currentSlide === 1} />
        </section>
        
        <section className="min-h-full h-full w-screen shrink-0 relative flex items-start sm:items-center justify-center overflow-y-auto overscroll-y-contain px-4 pt-6 pb-28 sm:pb-24 sm:p-6 md:p-24 [scrollbar-gutter:stable]">
          <ContactSlide isVisible={currentSlide === 2} />
        </section>
      </div>
    </div>
  );
}
