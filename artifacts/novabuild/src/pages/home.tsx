import { type TouchEvent, useEffect, useRef, useState } from "react";
import IntroSlide from "@/components/slides/intro-slide";
import ServicesSlide from "@/components/slides/services-slide";
import ContactSlide from "@/components/slides/contact-slide";
import Particles from "@/components/ui/particles";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrollingRef = useRef(false);
  const touchStartXRef = useRef(0);

  const slides = 3;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;

      if (e.deltaY > 50 || e.deltaX > 50) {
        isScrollingRef.current = true;
        setCurrentSlide((prev) => Math.min(prev + 1, slides - 1));
        window.setTimeout(() => (isScrollingRef.current = false), 800);
      } else if (e.deltaY < -50 || e.deltaX < -50) {
        isScrollingRef.current = true;
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        window.setTimeout(() => (isScrollingRef.current = false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - endX;

    if (diff > 50) {
      setCurrentSlide((prev) => Math.min(prev + 1, slides - 1));
    } else if (diff < -50) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div 
      className="h-screen w-full bg-background text-foreground overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Particles className="absolute inset-0 pointer-events-none z-0" />
      
      {/* Ambient background glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0" />

      {/* Navigation Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Container */}
      <div 
        className="flex h-full w-[300vw] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform z-10 relative"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <section className="h-full w-screen shrink-0 relative flex items-center justify-center p-6 md:p-24" aria-hidden={currentSlide !== 0}>
          <IntroSlide isVisible={currentSlide === 0} />
        </section>
        
        <section className="h-full w-screen shrink-0 relative flex items-center justify-center p-6 md:p-24" aria-hidden={currentSlide !== 1}>
          <ServicesSlide isVisible={currentSlide === 1} />
        </section>
        
        <section className="h-full w-screen shrink-0 relative flex items-center justify-center p-6 md:p-24" aria-hidden={currentSlide !== 2}>
          <ContactSlide isVisible={currentSlide === 2} />
        </section>
      </div>
    </div>
  );
}
