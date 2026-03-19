import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Showcase —  Project Sharing Platform",
    subtitle: "Full-stack web application (personal project)",
    description: "Created a platform where developers can share their projects, explore others’ work, and interact through likes, ratings, and comments. Includes secure authentication and dynamic user-generated content management.",
    challenge: "Designing a system to handle user-generated content, maintain data consistency for likes and comments, and ensure secure user authentication.",
    learned: "Implemented Firebase Authentication for secure user validation, managed real-time-like interactions, and structured scalable data handling for dynamic content.",
    features: ["User Authentication & Profiles", "Project Posting & Management", "Like & Rating System", "Comment System", "Dynamic Content Updates", "Responsive Design"],
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com/sivabalan-27/Blog-Frontend",
    live: "https://peer-project-hub-one.vercel.app",
    number: "01",
  },
  {
    title: "InboxFlow — Email Automation",
    subtitle: "Backend-driven email automation system (personal project)",
    description: "Developed a system that enables sending bulk emails by uploading Excel files containing multiple recipient addresses. The application processes spreadsheet data and automates email delivery efficiently using server-side logic.",
    challenge: "Handling structured Excel data, validating large lists of email addresses, and ensuring reliable bulk email delivery without failures or performance issues.",
    learned: "Parsed Excel files into JSON using xlsx, implemented automated email workflows with Nodemailer, and managed asynchronous operations for sending emails to multiple recipients efficiently.",
    features: ["Excel File Upload & Processing","Bulk Email Sending","Email Address Validation","Automated Email Workflow","Error Handling & Logging","Responsive Interface"],
    tech: ["React", "Nodemailer", "Express", "MongoDB", "xlsx", "Tailwind CSS"],
    github: "https://github.com/sivabalan-27/bulkmail-frontend",
    live: "https://bulkmail-frontend-gold.vercel.app",
    number: "02",
  },
  {
    title: "MovieDeck — Interactive Movie Browsing Interface",
    subtitle: "Modern movie browsing platform (personal project)",
    description: "Built a Netflix-inspired movie application that allows users to explore trending, top-rated, and upcoming movies using real-time API data. Focused on creating a visually rich UI with smooth animations, efficient data fetching, and an engaging user experience. Includes search functionality, movie details, and dynamic category browsing.",
    challenge: "Designing a scalable UI for large datasets while maintaining smooth performance, implementing efficient API handling, and creating seamless animations without affecting user experience.",
    learned: "Improved skills in API integration, asynchronous data handling, and optimizing React performance. Gained experience in building reusable UI components, managing global state, and implementing smooth animations using Framer Motion.",
    features: ["Advanced Search with Debounce", "Detailed Movie Modal", "Dynamic Category Rows", "Trending & Top Rated Movies", "Watchlist", "Responsive Movie Grid Layout"],
    tech: ["React.js", "JavaScript", "Vercel", "Axios", "CSS", "TMDB API"],
    github: "https://github.com/sivabalan-27/Movie-App",
    live: "https://movie-app-ashy-two.vercel.app",
    number: "03",
  },
  {
    title: "TaskForge — Project Management",
    subtitle: "Kanban-style task manager (personal project)",
    description: "Built a Trello/Linear inspired project management tool to practice drag-and-drop interactions, complex state management, and data visualization. Features Kanban boards, assignments, priority labels, and an analytics dashboard.",
    challenge: "Implementing smooth drag-and-drop with persistent state and making the UI feel as polished as commercial tools.",
    learned: "Gained experience with complex React state patterns, optimistic updates, chart libraries, and building accessible drag interactions.",
    features: ["Drag & Drop Boards", "Priority Labels", "Due Date Tracking", "Analytics Charts", "Responsive Layout", "Dark Mode"],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Framer Motion", "Chart.js"],
    github: "#",
    live: "#",
    number: "04",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4 font-body text-sm">
            Personal and academic projects I've built to learn, practice, and demonstrate my skills. Each project taught me something new.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden gradient-border card-shine group"
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-muted/40 leading-none select-none shrink-0 hidden lg:block">
                    {project.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body mt-0.5">{project.subtitle}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      >
                        <ArrowUpRight size={18} className="text-primary" />
                      </motion.div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mt-5">
                      <div className="p-4 rounded-xl bg-secondary/40 border border-border/30">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-wider">🎯 Challenge</span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-body">{project.challenge}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/40 border border-border/30">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-wider">💡 What I Learned</span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-body">{project.learned}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Key Features</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                        {project.features.map((f, Index) => (
                          <div key={f + Index} className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                            <CheckCircle2 size={12} className="text-primary shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-primary/8 text-primary/90 border border-primary/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 shrink-0">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                        >
                          <Github size={14} /> Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/15 transition-colors font-medium"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
