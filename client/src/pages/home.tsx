import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Layout, Smartphone, Layers, Cpu, Network, Globe, Zap } from "lucide-react";
import { useRef } from "react";
import heroImage from "@assets/generated_images/futuristic_3d_kolkata_city_abstraction.png";
import aboutImage from "@assets/generated_images/3d_glass_abstract_shape_with_bengali_typography_influence.png";
import teamAvatar from "@assets/generated_images/team_member_avatar_placeholder_abstract_3d.png";

// --- Components ---

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${v}%`); // Using standard transform instead of wrap for simplicity

  // Simple infinite marquee logic would go here, but for this prototype we'll use a simple CSS animation
  // or a simpler motion implementation
  
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="flex whitespace-nowrap gap-8 text-6xl md:text-8xl font-display font-black text-white/5 uppercase tracking-tighter"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Main Page ---

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const teamMembers = [
    { name: "Arjun Roy", role: "LEAD ARCHITECT", image: teamAvatar },
    { name: "Priya Das", role: "UX VISIONARY", image: teamAvatar },
    { name: "Rahul Sen", role: "FULL STACK", image: teamAvatar },
    { name: "Ananya Bose", role: "3D ARTIST", image: teamAvatar },
  ];

  return (
    <div ref={targetRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 cursor-default">
      <div className="bg-noise" />
      <Navbar />
      
      {/* Parallax Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div 
            style={{ y: textY, opacity }}
            className="space-y-8 z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-xs font-mono tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Online
            </div>
            
            <h1 className="font-display text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mix-blend-difference">
              CALVERTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">DIGITAL</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md font-light leading-relaxed">
              We architect digital realities. A fusion of technical mastery and aesthetic intelligence.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="group relative overflow-hidden rounded-none border border-primary bg-primary/10 text-primary hover:text-black h-14 px-10 text-sm uppercase tracking-widest transition-all duration-500">
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Initiate <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Parallax Image Layer */}
          <motion.div 
            style={{ y: heroY }}
            className="relative hidden lg:block h-full w-full pointer-events-none select-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
               <img 
                 src={heroImage} 
                 alt="Futuristic Structure"
                 className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(0,255,255,0.2)] opacity-80 mix-blend-screen"
               />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
        <ParallaxText>Innovation • Strategy • Design • Development • </ParallaxText>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="font-display text-6xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
              OUR CRAFT
            </h2>
            <div className="h-1 w-24 bg-primary mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { icon: Layout, title: "Architecture", desc: "Scalable web ecosystems built for performance." },
              { icon: Smartphone, title: "Mobile", desc: "Fluid, native-feeling experiences for every device." },
              { icon: Layers, title: "Transformation", desc: "Modernizing legacy systems for the future." }
            ].map((service, i) => (
              <SpotlightCard key={i} className="p-12 min-h-[300px] flex flex-col justify-between bg-black/40 backdrop-blur-sm hover:bg-white/5 transition-colors duration-500">
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-display uppercase tracking-wide">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
            "Design is intelligence <br /> made <span className="text-secondary italic">visible</span>."
          </h2>
          <Button variant="outline" className="rounded-full border-white/30 hover:bg-white hover:text-black px-10 h-12 uppercase tracking-widest text-xs">
            About The Agency
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-20">
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">THE <span className="text-primary">SQUAD</span></h2>
             <div className="hidden md:block text-right">
               <div className="text-sm font-mono text-muted-foreground">CALVERTS DIGITAL</div>
               <div className="text-sm font-mono text-muted-foreground">EST. 2025</div>
             </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 ease-out">
                <div className="relative overflow-hidden aspect-[3/4] bg-white/5 mb-4">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1 border-l-2 border-transparent group-hover:border-primary pl-4 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wide">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
