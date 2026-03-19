import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Zap, Palette, Users, Globe } from "lucide-react";

const cards = [
    {
      icon: Code2,
      title: "Clean Code Practices",
      description: "Trained myself to write clean, maintainable, and scalable code, with a strong focus on readability, structure, and performance.",
      number: "01",
    },
    {
      icon: Rocket,
      title: "Self-Driven Learner",
      description: "Taught myself the MERN stack through online courses, docs, and building projects. Completed 5+ courses.",
      number: "02",
    },
    {
      icon: Zap,
      title: "Project-Based Approach",
      description: "I learn best by building. Every technology I know was learned through building real, functional projects — not just tutorials.",
      number: "03",
    },
    {
      icon: Palette,
      title: "Component-Driven Development",
      description: "Focused on developing reusable, modular components that enable scalable UI architecture, improve maintainability, and ensure consistency across applications.",
      number: "04",
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description: "Led a team of 4 in my final year project. Experienced with Git workflows, code reviews, and agile methodology from college projects.",
      number: "05",
    },
    {
      icon: Globe,
      title: "Full Stack Capable",
      description: "Comfortable building end-to-end — from responsive React frontends to Express APIs, MongoDB schemas, and deploying on Vercel/Render.",
      number: "06",
    },
  ];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">About Me</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Passionate about building
            <br />for the <span className="gradient-text">modern web</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed font-body">
          I’m a 2026 Artificial Intelligence and Data Science graduate passionate about building modern, scalable web applications. Since discovering development in my second year of college, I’ve been actively sharpening my MERN stack skills by developing 10+ end-to-end projects. I bring strong fundamentals, a builder’s mindset, and a commitment to writing clean, efficient, and maintainable code.
          </p>
          <p className="max-w-2xl mx-auto pt-10 text-muted-foreground leading-relaxed font-body">
          While I’m at the start of my professional career, I bring more than just theoretical knowledge — I bring hands-on experience in designing scalable architectures, crafting intuitive user interfaces, and delivering complete, production-ready applications. I’m highly driven, quick to adapt, and focused on writing clean, maintainable code that solves real-world problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-7 gradient-border card-shine group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:glow-primary transition-all duration-500">
                  <card.icon className="text-primary" size={20} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/30 tracking-wider">{card.number}</span>
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-tight">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
