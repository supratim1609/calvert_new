import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Layout, Smartphone, Globe, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_digital_architectural_structure_in_indigo_and_terracotta.png";
import aboutImage from "@assets/generated_images/minimalist_abstract_geometric_shapes_with_glass_effect.png";

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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Based in Kolkata, Serving the Globe
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Craftsmanship</span> <br />
              from the City of Joy.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We blend traditional attention to detail with cutting-edge technology to build websites and apps that stand the test of time.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base hover:bg-secondary/10 hover:text-secondary hover:border-secondary/50 transition-colors">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] blur-3xl -z-10" />
            <img 
              src={heroImage} 
              alt="Abstract Digital Architecture" 
              className="rounded-[2rem] shadow-2xl border border-white/20 w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-lg">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Bento Grid) */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              We don't just write code; we architect digital solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Large */}
            <Card className="md:col-span-2 md:row-span-2 bg-background border-border/50 shadow-sm hover:shadow-md transition-all group overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10" />
                
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Layout className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Web Development</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    High-performance websites built with React, Next.js, and modern tools. We focus on speed, SEO, and accessibility to ensure your site reaches everyone effectively.
                  </p>
                  <ul className="space-y-2">
                    {["Custom CMS Solutions", "E-commerce Platforms", "Progressive Web Apps"].map((item) => (
                      <li key={item} className="flex items-center text-sm font-medium text-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-background border-border/50 shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">App Design</h3>
                <p className="text-muted-foreground text-sm">
                  Intuitive mobile experiences for iOS and Android that users love to engage with.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-background border-border/50 shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Branding</h3>
                <p className="text-muted-foreground text-sm">
                  Visual identity design that tells your story and connects with your audience.
                </p>
              </CardContent>
            </Card>
            
            {/* Card 4 */}
            <Card className="md:col-span-3 bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Need a Custom Solution?</h3>
                  <p className="text-primary-foreground/80 max-w-xl">
                    We specialize in complex problem solving. Tell us your challenge, and we'll engineer the solution.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="whitespace-nowrap rounded-full">
                  Book a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 border-2 border-secondary/20 rounded-[2rem] -z-10 transform -rotate-2" />
              <img 
                src={aboutImage} 
                alt="Abstract Geometric Art" 
                className="rounded-[1.5rem] shadow-lg w-full object-cover aspect-square"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Rooted in Tradition, <br />
                Building the <span className="text-secondary">Future</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kolkata is known for its art, literature, and deep intellectual heritage. We bring that same spirit of craftsmanship to the digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of developers and designers are not just technicians; they are digital artisans. We believe that every line of code and every pixel should serve a purpose.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="font-display text-4xl font-bold text-primary">50+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-primary">10+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-primary">24/7</h4>
                  <p className="text-sm text-muted-foreground mt-1">Support</p>
                </div>
                <div>
                  <h4 className="font-display text-4xl font-bold text-primary">100%</h4>
                  <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
