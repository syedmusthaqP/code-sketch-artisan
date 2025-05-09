
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#051630]"
    >
      <HeroSection />
    </motion.div>
  );
};

export default Index;
