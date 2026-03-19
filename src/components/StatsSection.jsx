import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Personal Projects" },
  { value: "15+", label: "Technologies Learned" },
  { value: "500+", label: "GitHub Contributions" },
  { value: "100%", label: "Clean Code Focus" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-6 rounded-2xl glass card-shine"
            >
              <motion.span
                className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.span>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
