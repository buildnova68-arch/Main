import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/locale-context";

export default function NovaCore({ active }: { active: boolean }) {
  const { t } = useLocale();
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (!active) return;

    const timer = window.setInterval(() => {
      setPulse((value) => (value + 1) % 4);
    }, 1400);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] flex items-center justify-center mx-auto shrink-0">
      <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-[80px] animate-pulse-glow" />
      <div className="absolute inset-10 rounded-full bg-purple-500/10 blur-[70px]" />

      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className={`absolute rounded-full border ${
            ring === pulse
              ? "border-cyan-200/70 shadow-[0_0_40px_rgba(0,240,255,0.55)]"
              : "border-cyan-300/20"
          }`}
          style={{
            inset: `${ring * 9 + 6}%`,
            animation: `spin ${18 + ring * 9}s linear infinite`,
            animationDirection: ring % 2 === 0 ? "normal" : "reverse",
          }}
        />
      ))}

      <div className="absolute w-[115%] h-[1px] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent rotate-[-24deg] blur-[1px]" />
      <div className="absolute w-[105%] h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent rotate-[31deg] blur-[1px]" />

      <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),rgba(14,165,233,0.08)_38%,rgba(2,6,23,0.04)_68%,transparent_70%)] shadow-[inset_0_0_40px_rgba(0,240,255,0.22),0_0_80px_rgba(0,240,255,0.32)]" />

      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full flex items-center justify-center overflow-hidden border border-white/10 bg-slate-950/45 backdrop-blur-md shadow-[0_0_55px_rgba(0,240,255,0.45)]">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(34,211,238,0.5),transparent,rgba(168,85,247,0.35),transparent)] animate-spin opacity-70" />
        <div className="absolute inset-4 rounded-full bg-slate-950/80 border border-cyan-200/20" />
        <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-xl animate-pulse" />
        <div className="relative text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.14em] pr-2 sm:pr-3 text-white drop-shadow-[0_0_22px_rgba(0,240,255,0.95)]">
            NB
          </div>
          <div className="mt-3 font-mono text-[0.55rem] md:text-xs tracking-[0.5em] text-cyan-100/80 uppercase">
            {t.novaCoreSubtitle}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 sm:bottom-8 md:bottom-10 max-w-[92%] px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-cyan-200/20 bg-black/30 backdrop-blur text-[0.55rem] sm:text-[0.65rem] md:text-xs font-mono tracking-[0.2em] sm:tracking-[0.32em] uppercase text-cyan-100/80 shadow-[0_0_28px_rgba(0,240,255,0.18)] text-center leading-tight">
        {t.novaCoreBadge}
      </div>
    </div>
  );
}
