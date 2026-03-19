import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Calendar, GitBranch } from "lucide-react";

const timeline = [
  {
    icon: Code,
    type: "Work",
    title: "Full Stack Project Development",
    org: "Project-Based Learning",
    period: "2024 — Present",
    description: "Built and deployed full-stack applications from scratch, handling everything from frontend interfaces to backend APIs, databases, and deployment.",
    highlights: ["10+ Projects Built", "Full Stack", "Deployed"],
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Tech — Computer Science",
    org: "Dhanalakshmi Srinivasan University",
    period: "2022 — 2026",
    description: "Pursuing a Bachelor's degree in  Artificial Intelligence and Data Science with focus on web technologies, data structures, and software engineering.",
    highlights: ["AI&DS Department", "4-Year Program"],
  },
  {
    icon: GitBranch,
    type: "Open Source",
    title: "Open Source Contributor",
    org: "GitHub",
    period: "2023 — Present",
    description: "Actively contributing to open source projects, collaborating with developers worldwide, and building tools for the community.",
    highlights: ["Active Contributor", "Community Builder"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Journey</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4 font-body text-sm">
            My academic foundation, self-learning journey, and notable achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 sm:pl-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.2, type: "spring" }}
                  className="absolute left-3.5 sm:left-5.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </motion.div>

                <div className="glass rounded-2xl p-7 gradient-border card-shine group hover:glow-primary transition-shadow duration-500">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={14} className="text-primary" />
                        <span className="text-xs font-mono text-primary">{item.type}</span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{item.org}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-body mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-primary/8 text-primary/80 border border-primary/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
