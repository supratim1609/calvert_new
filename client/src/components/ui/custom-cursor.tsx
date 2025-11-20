import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24); // Center of 48px
      cursorY.set(e.clientY - 24);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-primary bg-primary/10 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center shadow-[0_0_30px_var(--color-primary)] backdrop-blur-[1px]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
      </motion.div>
    </>
  );
}
