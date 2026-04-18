import NovaCore from "@/components/3d-logo";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/locale-context";

type IntroSlideProps = {
  isVisible: boolean;
  onExploreWork: () => void;
};

export default function IntroSlide({
  isVisible,
  onExploreWork,
}: IntroSlideProps) {
  const { t } = useLocale();

  return (
    <div
      className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex-1 w-full min-w-0 space-y-4 sm:space-y-5 md:space-y-7 z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[0.65rem] sm:text-xs font-mono tracking-widest uppercase mb-2 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
          {t.introBadge}
        </div>

        <div className="font-mono text-xs sm:text-sm md:text-base tracking-[0.35em] sm:tracking-[0.75em] text-primary uppercase drop-shadow-[0_0_18px_rgba(0,240,255,0.75)]">
          NOVABUILD
        </div>

        <h1 className="text-4xl leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          {t.introHeadline1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            {t.introHeadline2}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 font-light leading-relaxed px-1 sm:px-0">
          {t.introBody}
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Button
            type="button"
            size="lg"
            onClick={onExploreWork}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide h-12 sm:h-14 px-6 sm:px-8 rounded-none border border-primary/50 relative overflow-hidden group touch-manipulation"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">{t.introCta}</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative w-full min-w-0 shrink-0 py-2 md:py-0">
        <NovaCore active={isVisible} />
      </div>
    </div>
  );
}
