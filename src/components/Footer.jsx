import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="py-12 relative">
    <div className="section-divider mb-12" />
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-6 mb-8">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold gradient-text font-mono"
        >
          {"<Dev />"}
        </motion.a>
        <p className="text-sm text-muted-foreground font-body text-center max-w-md">
          Building modern web applications with the MERN stack. Always open to new opportunities and collaborations.
        </p>
        <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground/50">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#tech" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>

      <div className="section-divider mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground/60 font-body"
        >
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground/40 font-mono flex items-center gap-1.5"
        >
          Crafted with <Heart size={11} className="text-primary" /> using React, Tailwind & Framer Motion
        </motion.span>
      </div>
    </div>

    <motion.a
      href="#"
      whileHover={{ y: -3 }}
      className="fixed bottom-6 right-6 w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-40"
    >
      <ArrowUp size={16} />
    </motion.a>
  </footer>
);

export default Footer;
