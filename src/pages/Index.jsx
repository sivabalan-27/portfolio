import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Navbar />
          <HeroSection />
          <StatsSection />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <TechStack />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
