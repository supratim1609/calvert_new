import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Let's build the <br />
              <span className="text-secondary">future</span> together.
            </h2>
            <div className="font-bengali text-2xl text-muted-foreground">
              যোগাযোগ করুন
            </div>
          </div>
          
          <div className="md:col-span-6 flex flex-col justify-end">
             <div className="flex flex-col sm:flex-row gap-4">
               <Input 
                 placeholder="Enter your email" 
                 className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 rounded-none focus:border-primary transition-colors"
               />
               <Button size="lg" className="h-14 px-10 bg-primary text-black hover:bg-primary/90 rounded-none font-bold">
                 Subscribe
               </Button>
             </div>
             <p className="text-sm text-white/40 mt-4">
               Join our newsletter for tech insights from the East.
             </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <div className="font-display text-xl font-bold tracking-tighter">
              CALVERTS<span className="text-primary">.DIGITAL</span>
            </div>
            <div className="text-xs text-white/40 mt-1">Kolkata • India</div>
          </div>
          
          <div className="flex gap-8 text-sm text-white/60 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>

          <div className="text-sm text-white/40">
            © 2025 Calverts Digital Technologies.
          </div>
        </div>
      </div>
    </footer>
  );
}
