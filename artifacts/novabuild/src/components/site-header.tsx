import headerBrandUrl from "@assets/image_1776542233324.png";

export default function SiteHeader() {
  return (
    <header
      className="pointer-events-none fixed left-0 top-0 z-[55] flex items-center gap-2.5 pl-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:pl-4"
      role="banner"
    >
      <div className="pointer-events-auto flex items-center gap-2.5 rounded-lg border border-white/10 bg-background/45 px-2 py-1.5 shadow-sm backdrop-blur-md sm:gap-3 sm:px-2.5 sm:py-2">
        <img
          src={headerBrandUrl}
          alt="NOVABUILD"
          width={40}
          height={40}
          className="h-8 w-8 shrink-0 rounded-md object-cover shadow-[0_0_18px_rgba(0,240,255,0.2)] sm:h-10 sm:w-10"
          decoding="async"
        />
        <span className="max-w-[calc(100vw-8.5rem)] truncate font-mono text-[0.65rem] font-semibold tracking-[0.22em] text-foreground/95 sm:max-w-none sm:text-xs sm:tracking-[0.32em]">
          NOVABUILD
        </span>
      </div>
    </header>
  );
}
