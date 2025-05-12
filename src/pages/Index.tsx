
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#052037] to-[#0a1929]"
    >
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  );
};

export default Index;
