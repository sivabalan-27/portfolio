import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ExternalLink, ChevronDown, MapPin, GraduationCap } from "lucide-react";

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <FloatingOrb className="top-[15%] left-[10%] w-[500px] h-[500px] bg-primary/8" delay={0} />
      <FloatingOrb className="bottom-[10%] right-[5%] w-[400px] h-[400px] bg-accent/8" delay={2} />
      <FloatingOrb className="top-[60%] left-[50%] w-[300px] h-[300px] bg-primary/5" delay={4} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            OPEN TO OPPORTUNITIES
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-mono text-muted-foreground">
            <MapPin size={11} /> Chennai
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-mono text-muted-foreground">
            <GraduationCap size={11} /> Fresh Graduate
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-[-0.03em] mb-6"
        >
          Hi, I'm <span className="gradient-text">SIVABALAN</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground mb-6 h-8 font-body"
        >
          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Developer",
              2500,
              "MERN Stack Enthusiast",
              2500,
              "Building Scalable Web Apps",
              2500,
              "Passionate Problem Solver",
              2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-12 leading-relaxed font-body text-sm sm:text-base"
        >
         Full Stack Developer passionate about building scalable web applications using React, Node.js, Express, and MongoDB. I have developed multiple projects and am eager to contribute to real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold flex items-center gap-2.5 magnetic-btn text-sm"
          >
            View Projects
            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="sivabalan-resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-2xl glass gradient-border font-semibold text-foreground transition-all duration-300 flex items-center gap-2.5 text-sm hover:glow-primary"
          >
            Download Resume
            <ArrowDown size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-6 text-xs font-mono text-muted-foreground/40"
        >
          <span>React</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>Node.js</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>MongoDB</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>Express</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
          <span>TypeScript</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
