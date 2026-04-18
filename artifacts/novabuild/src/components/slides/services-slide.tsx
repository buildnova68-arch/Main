import React, { useMemo } from "react";
import { Monitor, Smartphone, Cpu, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/contexts/locale-context";

export default function ServicesSlide({ isVisible }: { isVisible: boolean }) {
  const { t } = useLocale();

  const services = useMemo(
    () => [
      {
        icon: <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
        title: t.serviceWebTitle,
        desc: t.serviceWebDesc,
      },
      {
        icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />,
        title: t.serviceMobileTitle,
        desc: t.serviceMobileDesc,
      },
      {
        icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />,
        title: t.serviceDesktopTitle,
        desc: t.serviceDesktopDesc,
      },
      {
        icon: <BrainCircuit className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400" />,
        title: t.serviceAiTitle,
        desc: t.serviceAiDesc,
      },
    ],
    [t],
  );

  return (
    <div className={`w-full max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}>
      <div className="mb-10 sm:mb-16 md:mb-24 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 font-sans tracking-tight px-1">
          {t.servicesTitle}
        </h2>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto md:mx-0" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {services.map((svc, i) => (
          <Card 
            key={i} 
            className="bg-card/40 border-white/5 backdrop-blur-xl hover:border-primary/50 transition-colors duration-500 overflow-hidden relative group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-5 sm:p-8 relative z-10">
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-white/5 inline-block border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {svc.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">{svc.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {svc.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
