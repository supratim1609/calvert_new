import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="font-display text-2xl font-bold tracking-tighter text-foreground group relative">
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">CALVERTS</span>
            <span className="text-primary font-light">.DIGITAL</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative overflow-hidden group px-2 py-1"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          <Button className="rounded-none border border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_-5px_var(--color-primary)]">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-display font-bold text-white/80 hover:text-primary hover:pl-4 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full rounded-none bg-primary text-background font-bold mt-4 h-12">
                Start Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
