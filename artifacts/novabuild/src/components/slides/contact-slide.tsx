import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "@/contexts/locale-context";

export default function ContactSlide({ isVisible }: { isVisible: boolean }) {
  const { toast } = useToast();
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.toastTitle,
      description: t.toastDescription,
    });
  };

  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="flex-1 space-y-6 sm:space-y-8 min-w-0 text-center md:text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 font-sans tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed px-1 sm:px-0">
            {t.contactLead}
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 break-all sm:break-normal justify-center md:justify-start">
            <span className="hidden sm:block w-8 h-px bg-primary/50 shrink-0" />
            <a
              href={`mailto:${t.contactEmail}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t.contactEmail}
            </a>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <span className="hidden sm:block w-8 h-px bg-primary/50 shrink-0" />
            <a
              href={`tel:${t.contactPhone.replace(/\s/g, "")}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t.contactPhone}
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex-1 min-w-0 bg-card/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.formNameLabel}</Label>
            <Input id="name" placeholder={t.formNamePlaceholder} className="bg-black/50 border-white/10 h-12 rounded-none focus-visible:ring-primary/50 focus-visible:border-primary" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.formEmailLabel}</Label>
            <Input id="email" type="email" placeholder={t.formEmailPlaceholder} className="bg-black/50 border-white/10 h-12 rounded-none focus-visible:ring-primary/50 focus-visible:border-primary" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.formMessageLabel}</Label>
            <Textarea id="message" placeholder={t.formMessagePlaceholder} className="bg-black/50 border-white/10 min-h-[120px] rounded-none focus-visible:ring-primary/50 focus-visible:border-primary resize-none" required />
          </div>
          
          <Button type="submit" className="w-full bg-white text-black hover:bg-primary hover:text-primary-foreground h-14 rounded-none font-mono uppercase tracking-widest transition-colors duration-300">
            {t.formSubmit}
          </Button>
        </form>
      </div>
    </div>
  );
}
