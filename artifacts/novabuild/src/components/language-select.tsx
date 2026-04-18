import { useId } from "react";
import { useLocale } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

export default function LanguageSelect({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const id = useId();
  const inputId = `novabuild-lang-${id}`;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-[60] pt-[max(0rem,env(safe-area-inset-top))] pr-[max(0rem,env(safe-area-inset-right))]",
        className,
      )}
    >
      {/* peer must precede the label for Tailwind peer-checked:* on the label */}
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        className="language-toggle-input peer sr-only"
        aria-checked={locale === "fr"}
        aria-label={t.languageAria}
        checked={locale === "fr"}
        onChange={(e) => setLocale(e.target.checked ? "fr" : "en")}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "language-toggle-switch",
          "peer-checked:[&_.language-toggle-knob]:translate-x-10",
          "peer-checked:[&_.lang-en]:opacity-35",
          "peer-checked:[&_.lang-fr]:text-neutral-900",
          "peer-checked:[&_.lang-fr]:opacity-100",
        )}
      >
        <span className="lang-en pointer-events-none absolute left-2 top-1/2 z-[3] -translate-y-1/2 font-mono text-[10px] font-bold tracking-tight text-neutral-800 opacity-100 transition-opacity duration-300 [text-shadow:0_0_1px_rgba(255,255,255,0.9)]">
          EN
        </span>
        <span className="lang-fr pointer-events-none absolute right-2 top-1/2 z-[3] -translate-y-1/2 font-mono text-[10px] font-bold tracking-tight text-neutral-500 opacity-40 transition-opacity duration-300 [text-shadow:0_0_1px_rgba(255,255,255,0.9)]">
          FR
        </span>
        <span
          className="language-toggle-knob pointer-events-none absolute left-0 top-0 z-[2] h-10 w-10 rounded-full shadow-[5px_2px_7px_rgba(8,8,8,0.308)] transition-transform duration-300 ease-out"
          aria-hidden
        />
      </label>
    </div>
  );
}
