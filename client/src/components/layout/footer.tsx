import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to build <br />
              something <span className="text-secondary">timeless</span>?
            </h2>
            <p className="text-background/60 max-w-md text-lg">
              From the heart of Kolkata to the global digital stage. Let's create your digital legacy.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
             <div className="flex gap-2">
               <Input 
                 placeholder="Enter your email" 
                 className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-12 rounded-lg"
               />
               <Button size="lg" variant="secondary" className="h-12 px-8">
                 Subscribe
               </Button>
             </div>
             <p className="text-sm text-background/40">
               Join our newsletter for tech insights from the East.
             </p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-bold">
            KOLKATA<span className="text-secondary">.IT</span>
          </div>
          
          <div className="flex gap-8 text-sm text-background/60">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
          </div>

          <div className="text-sm text-background/40">
            © 2025 Kolkata IT Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
