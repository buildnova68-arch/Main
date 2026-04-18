import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSlide({ isVisible }: { isVisible: boolean }) {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transmission Received",
      description: "We'll be in contact shortly.",
    });
  };

  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight">Initiate.</h2>
          <p className="text-xl text-muted-foreground font-light">
            Ready to build the future? Connect with our engineering team to discuss your next breakthrough project.
          </p>
        </div>
        
        <div className="space-y-4 font-mono text-sm">
          <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
            <span className="w-8 h-px bg-primary/50" />
            SYSTEM.HQ@NOVABUILD.DEV
          </div>
          <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
            <span className="w-8 h-px bg-primary/50" />
            +1 (555) 019-9923
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-card/20 p-8 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Identity</Label>
            <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 h-12 rounded-none focus-visible:ring-primary/50 focus-visible:border-primary" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Commlink (Email)</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 h-12 rounded-none focus-visible:ring-primary/50 focus-visible:border-primary" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Directives</Label>
            <Textarea id="message" placeholder="Project parameters..." className="bg-black/50 border-white/10 min-h-[120px] rounded-none focus-visible:ring-primary/50 focus-visible:border-primary resize-none" required />
          </div>
          
          <Button type="submit" className="w-full bg-white text-black hover:bg-primary hover:text-primary-foreground h-14 rounded-none font-mono uppercase tracking-widest transition-colors duration-300">
            Transmit Signal
          </Button>
        </form>
      </div>
    </div>
  );
}
