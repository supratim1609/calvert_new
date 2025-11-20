import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20 items-center">
          <div className="md:col-span-6">
             <div className="font-display text-xl font-bold tracking-tighter">
              CALVERTS<span className="text-primary">.DIGITAL</span>
            </div>
            <p className="text-white/50 mt-4 max-w-sm">
               Forging the future of digital interaction from the heart of India.
            </p>
          </div>
          
          <div className="md:col-span-6 flex flex-col justify-end">
             <div className="flex flex-col sm:flex-row gap-0 border border-white/10 p-1">
               <Input 
                 placeholder="EMAIL ADDRESS" 
                 className="bg-transparent border-none text-white placeholder:text-white/30 h-14 rounded-none focus-visible:ring-0 font-mono text-sm"
               />
               <Button size="lg" className="h-14 px-10 bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-wider">
                 Subscribe
               </Button>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <div className="text-xs text-white/40 mt-1">Kolkata • India</div>
          </div>
          
          <div className="flex gap-8 text-xs text-white/60 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>

          <div className="text-xs text-white/30 font-mono">
            © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
