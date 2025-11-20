import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Layout, Smartphone, Layers, Cpu, Network, Globe, Zap, Database, Cloud, Lock, Send } from "lucide-react";
import { useRef } from "react";
import heroImage from "@assets/generated_images/futuristic_3d_kolkata_city_abstraction.png";
import aboutImage from "@assets/generated_images/3d_glass_abstract_shape_with_bengali_typography_influence.png";
import teamAvatar from "@assets/generated_images/team_member_avatar_placeholder_abstract_3d.png";
import workFintech from "@assets/generated_images/futuristic_fintech_dashboard_interface_in_dark_mode.png";
import workAI from "@assets/generated_images/ai_data_visualization_with_neural_network_nodes.png";
import workMap from "@assets/generated_images/cyberpunk_city_navigation_map_holographic_ui.png";
import workEcommerce from "@assets/generated_images/sleek_e-commerce_mobile_app_interface_floating_screens.png";

// --- Icons ---

const ReactIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-1.32 0-2.5.36-3.48.97-1.88 1.17-2.9 3.36-2.9 6.23 0 1.1.15 2.14.43 3.08C3.13 9.2 1.03 8.27.18 9.7c-.86 1.44.06 3.28 2.22 4.63-.05.37-.08.74-.08 1.12 0 2.87 1.02 5.06 2.9 6.23.98.61 2.16.97 3.48.97 1.32 0 2.5-.36 3.48-.97 1.88-1.17 2.9-3.36 2.9-6.23 0-1.1-.15-2.14-.43-3.08 2.92 1.08 5.02 2.01 5.87.58.86-1.44-.06-3.28-2.22-4.63.05-.37.08-.74.08-1.12 0-2.87-1.02-5.06-2.9-6.23-.98-.61-2.16-.97-3.48-.97zm0 10.7c.72 0 1.3.58 1.3 1.3s-.58 1.3-1.3 1.3-1.3-.58-1.3-1.3.58-1.3 1.3-1.3z" />
  </svg>
);

const NextIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.8 17.6l-7.6-9.6v9.6H7.6V6.4h1.6l7.6 9.6V6.4h1.6v11.2h-1.6z" />
  </svg>
);

const NodeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.2 14.6c-2.1 1.2-4.3 2.4-6.5 3.6l-4.8-2.7v-5.4l4.8-2.7 4.8 2.7v1.9h-1.8v-.8l-3-1.7-3 1.7v3.4l3 1.7 4.8-2.7v1z" />
  </svg>
);

const PythonIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-3.3 0-6 2.7-6 6v3h3V6h6v6h-3v3h6c1.7 0 3-1.3 3-3V6c0-3.3-2.7-6-6-6zm-6 9c-1.7 0-3 1.3-3 3v6c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6v-3h-3v3h-6v-6h3v-3H6z" />
  </svg>
);

const AwsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.6 14.8c-1.1.5-2.6.8-4.1.8-2.3 0-4-1.3-4-3.6 0-2.5 1.9-3.7 4.2-3.7 1.4 0 2.5.4 3.4 1.1v5.4zM12.8 6c-3.9 0-6.7 2.5-6.7 6.2 0 3.6 2.6 6.1 6.4 6.1 1.7 0 3.1-.5 4.2-1.2v.9c0 1.8-1.4 2.6-3.5 2.6-1.8 0-3.1-.5-4.2-1.2l-.8 1.8c1.3.9 3.1 1.6 5.3 1.6 3.7 0 5.7-1.9 5.7-5.1V9.1c0-2.2.2-3-.4-3.6-.5-.5-1.5-.8-2.6-.8-1.1 0-2.3.4-3.4 1.3zM22 18.4c-1.6 1.3-4.5 2.6-8.8 2.6-2.9 0-5.2-.5-6.7-1.2l.8-1.7c1.3.6 3.3 1.1 5.8 1.1 3.6 0 5.9-1 7.2-1.9l1.7 1.1z" />
  </svg>
);

const DockerIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 11.5h2.1v2.6H1.5v-2.6zm2.8 0h2.1v2.6H4.3v-2.6zm2.8 0h2.1v2.6H7.1v-2.6zm2.8 0h2.1v2.6H9.9v-2.6zm2.8 0h2.1v2.6h-2.1v-2.6zm-11.2 3.2h2.1v2.6H1.5v-2.6zm2.8 0h2.1v2.6H4.3v-2.6zm2.8 0h2.1v2.6H7.1v-2.6zm2.8 0h2.1v2.6H9.9v-2.6zm2.8 0h2.1v2.6h-2.1v-2.6zm2.8 0h2.1v2.6h-2.1v-2.6zm2.8-6.4h2.1v2.6h-2.1V8.3zm0 3.2h2.1v2.6h-2.1v-2.6zm2.8 0h2.1v2.6h-2.1v-2.6zM24 14.5c-.1-2.1-1.4-2.9-2.9-3.2v-.5c0-1.4-1.1-2.6-2.6-2.6h-6.3v8.9h.5c.5 0 1 .1 1.4.3.6-1.2 1.8-2 3.2-2 2 0 3.6 1.6 3.6 3.6 0 .5-.1 1-.3 1.4H24v-5.9z" />
  </svg>
);

const TypeScriptIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2.4 0h19.2C22.9 0 24 1.1 24 2.4v19.2c0 1.3-1.1 2.4-2.4 2.4H2.4C1.1 24 0 22.9 0 21.6V2.4C0 1.1 1.1 0 2.4 0zm9.6 18v-9.6h-2.4v-2.4h7.2v2.4h-2.4v9.6h-2.4zm6-8.4c0-1.3.9-2.4 2.4-2.4s2.4 1.1 2.4 2.4v1.2h-2.4v-1.2c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v1.2l3.6 1.8v3.6c0 1.3-.9 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-1.2h2.4v1.2c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-1.2l-3.6-1.8v-3.6z" />
  </svg>
);

const TailwindIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.8 6c-1.3-1.3-3.1-1.9-5.3-1.9-2.2 0-4 .6-5.3 1.9C.9 7.3.3 9.1.3 11.3c0 2.2.6 4 1.9 5.3 1.3 1.3 3.1 1.9 5.3 1.9 2.2 0 4-.6 5.3-1.9 1.3-1.3 1.9-3.1 1.9-5.3 0-2.2-.6-4-1.9-5.3zm-3.2 8.4c-.8.8-1.9 1.2-3.2 1.2s-2.4-.4-3.2-1.2c-.8-.8-1.2-1.9-1.2-3.2s.4-2.4 1.2-3.2c.8-.8 1.9-1.2 3.2-1.2s2.4.4 3.2 1.2c.8.8 1.2 1.9 1.2 3.2s-.4 2.4-1.2 3.2zm11.2-8.4c-1.3-1.3-3.1-1.9-5.3-1.9-2.2 0-4 .6-5.3 1.9-1.3 1.3-1.9 3.1-1.9 5.3 0 2.2.6 4 1.9 5.3 1.3 1.3 3.1 1.9 5.3 1.9 2.2 0 4-.6 5.3-1.9 1.3-1.3 1.9-3.1 1.9-5.3 0-2.2-.6-4-1.9-5.3zm-3.2 8.4c-.8.8-1.9 1.2-3.2 1.2s-2.4-.4-3.2-1.2c-.8-.8-1.2-1.9-1.2-3.2s.4-2.4 1.2-3.2c.8-.8 1.9-1.2 3.2-1.2s2.4.4 3.2 1.2c.8.8 1.2 1.9 1.2 3.2s-.4 2.4-1.2 3.2z" />
  </svg>
);

const PostgreSqlIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.4c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6zm-1.2 4.8c-2.6 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8-2.2-4.8-4.8-4.8z"/>
    </svg>
);


// --- Components ---

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="flex whitespace-nowrap gap-8 text-6xl md:text-8xl font-display font-black text-white/5 uppercase tracking-tighter"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => <span key={i}>{children}</span>)}
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

  const services = [
    { icon: Layout, title: "Web Architecture", desc: "Scalable, high-performance web ecosystems." },
    { icon: Smartphone, title: "Mobile Ecosystems", desc: "Fluid, native-feeling experiences for every device." },
    { icon: Layers, title: "Digital Transformation", desc: "Modernizing legacy systems for the future." },
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS & Azure certified scalable serverless solutions." },
    { icon: Database, title: "AI Integration", desc: "LLM implementation and custom neural networks." },
    { icon: Lock, title: "Cybersecurity", desc: "Enterprise-grade protection for digital assets." }
  ];

  const projects = [
    { title: "NeoFin Dashboard", category: "FINTECH", image: workFintech, year: "2024" },
    { title: "Cortex AI", category: "DATA VISUALIZATION", image: workAI, year: "2024" },
    { title: "Metro Pulse", category: "CIVIC TECH", image: workMap, year: "2025" },
    { title: "LuxeCart", category: "ECOMMERCE", image: workEcommerce, year: "2023" }
  ];

  const teamMembers = [
    { name: "Arjun Roy", role: "LEAD ARCHITECT", image: teamAvatar },
    { name: "Priya Das", role: "UX VISIONARY", image: teamAvatar },
    { name: "Rahul Sen", role: "FULL STACK", image: teamAvatar },
    { name: "Ananya Bose", role: "3D ARTIST", image: teamAvatar },
  ];

  const techStack = [
    { name: "REACT", icon: ReactIcon },
    { name: "NEXT.JS", icon: NextIcon },
    { name: "NODE", icon: NodeIcon },
    { name: "PYTHON", icon: PythonIcon },
    { name: "AWS", icon: AwsIcon },
    { name: "DOCKER", icon: DockerIcon },
    { name: "TYPESCRIPT", icon: TypeScriptIcon },
    { name: "TAILWIND", icon: TailwindIcon },
    { name: "POSTGRESQL", icon: PostgreSqlIcon },
  ];

  return (
    <div ref={targetRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 cursor-none">
      <Preloader />
      <CustomCursor />
      <div className="bg-noise" />
      <Navbar />
      
      {/* Parallax Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div style={{ y: textY, opacity }} className="space-y-8 z-20">
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
              <Button size="lg" className="group relative overflow-hidden rounded-none border border-primary bg-primary/10 text-primary hover:text-black h-14 px-10 text-sm uppercase tracking-widest transition-all duration-500 cursor-none">
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Initiate <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>

          <motion.div style={{ y: heroY }} className="relative hidden lg:block h-full w-full pointer-events-none select-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
               <img src={heroImage} alt="Futuristic Structure" className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(0,255,255,0.2)] opacity-80 mix-blend-screen" />
            </div>
          </motion.div>
        </div>
        
        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
        <ParallaxText>Innovation • Strategy • Design • Development • </ParallaxText>
      </div>

      {/* Tech Stack Section - NEW */}
      <section className="py-20 bg-white/[0.02] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Powering Next-Gen Solutions With</div>
             <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {techStack.map((tech, i) => (
                   <div key={i} className="flex items-center gap-3 group hover:scale-110 transition-transform duration-300">
                      <tech.icon className="h-8 w-8 group-hover:text-primary transition-colors" />
                      <span className="font-display font-bold text-lg">{tech.name}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Expanded Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="font-display text-6xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
                OUR CRAFT
              </h2>
              <div className="h-1 w-24 bg-primary mt-6" />
            </div>
            <p className="text-muted-foreground max-w-md text-lg text-right">
              Comprehensive digital solutions engineered for the modern enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {services.map((service, i) => (
              <SpotlightCard key={i} className="p-12 min-h-[300px] flex flex-col justify-between bg-black/40 backdrop-blur-sm hover:bg-white/5 transition-colors duration-500 border-white/5">
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

      {/* Process / How We Work - NEW */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="mb-24 text-center">
               <h2 className="font-display text-5xl font-bold mb-6">THE <span className="text-primary">ALGORITHM</span></h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">Our proven methodology for delivering excellence, from initialization to deployment.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
               
               {[
                  { step: "01", title: "DISCOVERY", desc: "We decode your vision and map the requirements." },
                  { step: "02", title: "DESIGN", desc: "Visualizing the architecture with high-fidelity prototypes." },
                  { step: "03", title: "BUILD", desc: "Writing clean, scalable code in our secure dev environment." },
                  { step: "04", title: "DEPLOY", desc: "Launching your digital asset to the global network." }
               ].map((phase, i) => (
                  <div key={i} className="relative z-10 group">
                     <div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-2xl font-mono font-bold text-white/30 group-hover:text-primary group-hover:border-primary transition-all duration-500 mb-8 mx-auto shadow-[0_0_30px_-10px_rgba(0,0,0,1)]">
                        {phase.step}
                     </div>
                     <div className="text-center px-4">
                        <h3 className="text-xl font-bold font-display mb-3">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground">{phase.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Work / Projects Section */}
      <section id="projects" className="py-32 bg-black relative">
         <div className="container mx-auto px-4">
            <div className="mb-20">
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">SELECTED <span className="text-secondary">WORKS</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
               {projects.map((project, i) => (
                 <div key={i} className={`group relative ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                    <div className="relative overflow-hidden aspect-video border border-white/10 bg-white/5 mb-6 cursor-none">
                       <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 group-hover:border-primary transition-colors duration-500">
                       <div>
                          <div className="text-xs font-mono text-primary mb-1">{project.category}</div>
                          <h3 className="text-3xl font-display font-bold uppercase">{project.title}</h3>
                       </div>
                       <div className="text-white/30 font-mono">{project.year}</div>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-24 text-center">
               <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black h-14 px-12 uppercase tracking-widest cursor-none">
                  View All Projects
               </Button>
            </div>
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
              <div key={i} className="group relative cursor-none grayscale hover:grayscale-0 transition-all duration-500 ease-out">
                <div className="relative overflow-hidden aspect-[3/4] bg-white/5 mb-4">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                 <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    INITIATE <br /> <span className="text-primary">PROTOCOL</span>
                 </h2>
                 <p className="text-xl text-muted-foreground mb-12 max-w-md">
                    Ready to disrupt the market? Transmit your requirements. We'll handle the engineering.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-lg">
                       <div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                          <Layout className="h-5 w-5" />
                       </div>
                       <div>
                          <div className="text-xs text-white/40 uppercase tracking-wider">Headquarters</div>
                          <div>Salt Lake Sector V, Kolkata</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                       <div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                          <Send className="h-5 w-5" />
                       </div>
                       <div>
                          <div className="text-xs text-white/40 uppercase tracking-wider">Direct Line</div>
                          <div>hello@calverts.digital</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />
                 
                 <form className="space-y-6 relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-white/50">Identity</label>
                          <Input className="bg-white/5 border-white/10 rounded-none h-12 focus-visible:ring-primary/50 cursor-none" placeholder="NAME" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-white/50">Contact</label>
                          <Input className="bg-white/5 border-white/10 rounded-none h-12 focus-visible:ring-primary/50 cursor-none" placeholder="EMAIL" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-mono uppercase text-white/50">Directives</label>
                       <Textarea className="bg-white/5 border-white/10 rounded-none min-h-[150px] focus-visible:ring-primary/50 resize-none cursor-none" placeholder="PROJECT DETAILS..." />
                    </div>
                    <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest font-bold cursor-none">
                       Transmit Data
                    </Button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
