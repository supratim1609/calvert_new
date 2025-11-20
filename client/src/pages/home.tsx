import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  return (
    <div ref={targetRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 cursor-default">
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
              <Button size="lg" className="group relative overflow-hidden rounded-none border border-primary bg-primary/10 text-primary hover:text-black h-14 px-10 text-sm uppercase tracking-widest transition-all duration-500">
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

      {/* Work / Projects Section */}
      <section id="projects" className="py-32 bg-black relative">
         <div className="container mx-auto px-4">
            <div className="mb-20">
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">SELECTED <span className="text-secondary">WORKS</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
               {projects.map((project, i) => (
                 <div key={i} className={`group relative ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                    <div className="relative overflow-hidden aspect-video border border-white/10 bg-white/5 mb-6">
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
               <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black h-14 px-12 uppercase tracking-widest">
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
              <div key={i} className="group relative cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 ease-out">
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
                          <Input className="bg-white/5 border-white/10 rounded-none h-12 focus-visible:ring-primary/50" placeholder="NAME" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-white/50">Contact</label>
                          <Input className="bg-white/5 border-white/10 rounded-none h-12 focus-visible:ring-primary/50" placeholder="EMAIL" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-mono uppercase text-white/50">Directives</label>
                       <Textarea className="bg-white/5 border-white/10 rounded-none min-h-[150px] focus-visible:ring-primary/50 resize-none" placeholder="PROJECT DETAILS..." />
                    </div>
                    <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest font-bold">
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
