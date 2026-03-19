import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript (ES6+)", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Framer Motion", icon: "✨" },
      { name: "Redux Toolkit", icon: "🔄" },
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and server-side architectures",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Socket.io", icon: "📡" },
      { name: "JWT Auth", icon: "🔐" },
      { name: "Middleware", icon: "🧩" },
    ],
  },
  {
    title: "Database",
    description: "Data modeling, queries, and storage solutions",
    techs: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Mongoose ODM", icon: "📦" },
      { name: "Firebase", icon: "🔥" },
      { name: "SQL Basics", icon: "📊" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Deployment, version control, and developer tooling",
    techs: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "🌍" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Skills</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4 font-body text-sm">
            Technologies I work with daily to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-8 card-shine"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">{cat.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground font-body mb-6 ml-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: ci * 0.1 + ti * 0.04 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/80 border border-border/50 text-sm font-medium cursor-default hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                  >
                    <span className="text-base">{tech.icon}</span>
                    <span className="text-foreground/90">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
