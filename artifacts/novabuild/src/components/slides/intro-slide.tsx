import NovaCore from "@/components/3d-logo";
import { Button } from "@/components/ui/button";

export default function IntroSlide({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="flex-1 space-y-5 md:space-y-7 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Next-Generation Tech
        </div>

        <div className="font-mono text-sm md:text-base tracking-[0.75em] text-primary uppercase drop-shadow-[0_0_18px_rgba(0,240,255,0.75)]">
          NOVABUILD
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          Build The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Future.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light">
          Building real business solutions with technology. Web, mobile, desktop, and AI-powered applications crafted with uncompromising precision and futuristic design.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide h-14 px-8 rounded-none border border-primary/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">Explore Our Work</span>
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center relative">
        <NovaCore active={isVisible} />
      </div>
    </div>
  );
}
