import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Layers, Layout, Smartphone, Globe, Zap, Cpu, Network } from "lucide-react";
import heroImage from "@assets/generated_images/futuristic_3d_kolkata_city_abstraction.png";
import aboutImage from "@assets/generated_images/3d_glass_abstract_shape_with_bengali_typography_influence.png";
import teamAvatar from "@assets/generated_images/team_member_avatar_placeholder_abstract_3d.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const teamMembers = [
    { name: "Arjun Roy", role: "Lead Architect", image: teamAvatar },
    { name: "Priya Das", role: "UX Visionary", image: teamAvatar },
    { name: "Rahul Sen", role: "Full Stack Dev", image: teamAvatar },
    { name: "Ananya Bose", role: "3D Artist", image: teamAvatar },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-bengali tracking-wider">ভবিষ্যৎ এখানে শুরু</span> {/* Future starts here */}
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
              CALVERTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">DIGITAL</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              Forging the next generation of digital experiences from the cultural heart of India. We blend Bengali artistry with global tech standards.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="group relative overflow-hidden rounded-none border border-primary bg-primary/10 text-primary hover:text-black h-14 px-8 text-base transition-all duration-300">
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Start Project <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button variant="ghost" size="lg" className="group rounded-none border-b border-white/20 hover:border-white h-14 px-8 text-base hover:bg-transparent">
                Explore Works
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* 3D Element Container */}
            <div className="relative w-full h-full perspective-1000">
               <motion.img 
                 src={heroImage} 
                 alt="Futuristic Kolkata"
                 className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,255,255,0.3)]"
                 animate={{ 
                   y: [0, -20, 0],
                   rotateZ: [0, 2, 0],
                   scale: [1, 1.02, 1]
                 }}
                 transition={{
                   duration: 6,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               />
               
               {/* Floating Glass Cards */}
               <motion.div 
                 className="absolute top-20 left-0 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-2xl"
                 animate={{ y: [0, 30, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
               >
                 <div className="bg-primary/20 p-2 rounded-lg">
                   <Cpu className="text-primary h-6 w-6" />
                 </div>
                 <div>
                   <div className="text-xs text-muted-foreground">System Status</div>
                   <div className="text-sm font-bold font-mono text-primary">OPTIMAL</div>
                 </div>
               </motion.div>

               <motion.div 
                 className="absolute bottom-40 right-10 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-2xl"
                 animate={{ y: [0, -40, 0] }}
                 transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
               >
                 <div className="bg-secondary/20 p-2 rounded-lg">
                   <Network className="text-secondary h-6 w-6" />
                 </div>
                 <div>
                   <div className="text-xs text-muted-foreground">Active Users</div>
                   <div className="text-sm font-bold font-mono text-secondary">24.5K</div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
                OUR <span className="text-outline-primary text-transparent bg-clip-text stroke-white">CRAFT</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-md">
                Engineering digital excellence with a touch of Bengali soul.
              </p>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent mx-8 mb-4 hidden md:block" />
            <div className="font-bengali text-2xl text-primary/60 font-bold">সেবা সমূহ</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Web Architecture", desc: "Scalable, high-performance web applications built on the modern stack." },
              { icon: Smartphone, title: "Mobile Ecosystems", desc: "Native and cross-platform apps that feel fluid and natural." },
              { icon: Layers, title: "Digital Transformation", desc: "Modernizing legacy systems for the AI-driven future." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <service.icon className="h-12 w-12 text-white/40 group-hover:text-primary transition-colors mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-black/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">The Architects</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold">Meet the <span className="text-secondary">Squad</span></h2>
            <p className="font-bengali text-xl mt-4 text-white/60">আমাদের দল, আমাদের শক্তি</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-white/5 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-mono">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Bengali Touch */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl -z-10" />
              <img 
                src={aboutImage} 
                alt="Abstract Art" 
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Innovation in <br />
                <span className="text-primary">Every Pixel</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At <strong className="text-white">Calverts Digital</strong>, we don't just build websites; we build digital legacies. Inspired by the intellectual depth of Kolkata ("The City of Joy"), we bring a thoughtful, artistic approach to technology.
                </p>
                <p className="font-bengali text-2xl text-white/80 italic border-l-4 border-secondary pl-6 py-2">
                  "যেখানে স্বপ্নের শুরু, সেখানেই আমাদের কাজ।"
                </p>
                <p>
                  From Salt Lake Sector V to Silicon Valley, our code travels the world, but our heart remains in Kolkata.
                </p>
              </div>
              <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black h-12 px-8 mt-4">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
