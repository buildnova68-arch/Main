import React from "react";
import { Monitor, Smartphone, Cpu, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSlide({ isVisible }: { isVisible: boolean }) {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Web Applications",
      desc: "Scalable, high-performance web platforms built with cutting-edge modern frameworks."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile Experiences",
      desc: "Native-feeling iOS and Android applications designed for ultimate user engagement."
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Desktop Software",
      desc: "Robust, cross-platform desktop solutions for intensive business workflows."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-pink-400" />,
      title: "AI Integration",
      desc: "Intelligent systems and LLM integrations that automate and elevate your business."
    }
  ];

  return (
    <div className={`w-full max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}>
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight">Capabilities.</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto md:mx-0" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((svc, i) => (
          <Card 
            key={i} 
            className="bg-card/40 border-white/5 backdrop-blur-xl hover:border-primary/50 transition-colors duration-500 overflow-hidden relative group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-wide">{svc.title}</h3>
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
