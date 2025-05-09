
import HeroSection from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#052037] to-[#0a1929]"
    >
      <HeroSection />
      <ContactSection />
    </motion.div>
  );
};

export default Index;
