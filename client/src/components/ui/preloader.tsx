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
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center flex-col"
        >
          <div className="w-64 space-y-4">
            <div className="flex justify-between text-xs font-mono text-primary uppercase tracking-widest">
              <span>System Boot</span>
              <span>{Math.min(100, Math.floor(progress))}%</span>
            </div>
            <div className="h-1 w-full bg-white/10 overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-white/40">Loading assets...</div>
              <div className="text-[10px] font-mono text-white/40">Initializing neural core...</div>
              <div className="text-[10px] font-mono text-white/40">Connecting to mainframe...</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
