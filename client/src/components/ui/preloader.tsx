import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 2; // Slower, smoother loading
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />
          
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative z-10 w-80 space-y-8">
             {/* Central Hexagon/Logo Loader */}
             <div className="relative w-24 h-24 mx-auto">
                <motion.div 
                  className="absolute inset-0 border-2 border-primary/30 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-2 border-2 border-secondary/30 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-2xl font-bold font-display tracking-tighter text-white">{Math.floor(progress)}%</span>
                </div>
             </div>

             {/* Text Scramble / Status */}
            <div className="space-y-2 text-center">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-white to-secondary"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-primary/70 uppercase tracking-widest">
                <span>System Initialization</span>
                <span className="animate-pulse">Running...</span>
              </div>
            </div>
            
            {/* Decorative Code */}
            <div className="absolute top-full left-0 right-0 mt-8 text-[9px] font-mono text-white/20 text-center leading-relaxed">
               <div>LOADING_MODULE_CORE... OK</div>
               <div>ESTABLISHING_SECURE_UPLINK... OK</div>
               <div>RENDERING_VIEWPORT... PENDING</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
