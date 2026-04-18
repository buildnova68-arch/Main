export default function NovaCore({ active }: { active: boolean }) {
  const animationState = active ? "running" : "paused";

  return (
    <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-[72px] animate-pulse-glow" style={{ animationPlayState: animationState }} />
      <div className="absolute inset-10 rounded-full bg-purple-500/10 blur-[70px]" />

      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="nova-core-ring absolute rounded-full border border-cyan-300/25"
          style={{
            inset: `${ring * 9 + 6}%`,
            animation: `spin ${18 + ring * 9}s linear infinite`,
            animationDirection: ring % 2 === 0 ? "normal" : "reverse",
            animationDelay: `${ring * -1.4}s`,
            animationPlayState: animationState,
          }}
        />
      ))}

      <div className="absolute w-[115%] h-[1px] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent rotate-[-24deg] blur-[1px]" />
      <div className="absolute w-[105%] h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent rotate-[31deg] blur-[1px]" />

      <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),rgba(14,165,233,0.08)_38%,rgba(2,6,23,0.04)_68%,transparent_70%)] shadow-[inset_0_0_40px_rgba(0,240,255,0.22),0_0_80px_rgba(0,240,255,0.32)]" />

      <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full flex items-center justify-center overflow-hidden border border-white/10 bg-slate-950/45 backdrop-blur-md shadow-[0_0_55px_rgba(0,240,255,0.45)]">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(34,211,238,0.5),transparent,rgba(168,85,247,0.35),transparent)] animate-spin opacity-70" style={{ animationPlayState: animationState }} />
        <div className="absolute inset-4 rounded-full bg-slate-950/80 border border-cyan-200/20" />
        <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-xl animate-pulse" style={{ animationPlayState: animationState }} />
        <div className="relative text-center">
          <div className="text-5xl md:text-7xl font-bold tracking-[-0.14em] pr-3 text-white drop-shadow-[0_0_22px_rgba(0,240,255,0.95)]">
            NB
          </div>
          <div className="mt-3 font-mono text-[0.55rem] md:text-xs tracking-[0.5em] text-cyan-100/80 uppercase">
            Nova Core
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-10 px-4 py-2 rounded-full border border-cyan-200/20 bg-black/30 backdrop-blur text-[0.65rem] md:text-xs font-mono tracking-[0.32em] uppercase text-cyan-100/80 shadow-[0_0_28px_rgba(0,240,255,0.18)]">
        Business Systems Online
      </div>
    </div>
  );
}
