
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GradientText } from "@/components/ui/gradient-text";

const Vision = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#052037] to-[#0a1929]"
    >
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <Button 
          variant="ghost" 
          className="mb-8 text-[#00c3ff] hover:bg-[#00c3ff]/10" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-[2px] rounded-lg mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#c961de] opacity-70 rounded-lg"></div>
            <div className="relative p-8 bg-[rgba(7,25,45,0.7)] rounded-lg backdrop-blur-md z-10 border border-[rgba(255,255,255,0.15)]">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>From Vision to Impact</GradientText>
              </h1>
              
              <p className="text-[#94a3b8] mb-6">
                This journey represents the transformation from conceptualization to real-world implementation. It's about turning innovative ideas into tangible solutions that create meaningful impact across industries and communities.
              </p>
              
              <div className="space-y-8 mt-10">
                <div className="relative">
                  <div className="absolute -left-10 -top-6 w-20 h-20 bg-[#00c3ff]/20 rounded-full blur-xl"></div>
                  <h2 className="text-2xl font-bold text-white mb-4">The Vision</h2>
                  <p className="text-[#94a3b8]">
                    At the core of every transformative innovation lies a compelling vision. My approach focuses on identifying opportunities that align technological advancements with human needs, creating solutions that are both cutting-edge and purpose-driven.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -right-10 -top-6 w-20 h-20 bg-[#c961de]/20 rounded-full blur-xl"></div>
                  <h2 className="text-2xl font-bold text-white mb-4">The Process</h2>
                  <p className="text-[#94a3b8]">
                    Translating vision into reality involves a systematic process of research, design thinking, prototyping, and iteration. By combining analytical rigor with creative exploration, I develop solutions that are technically sound and user-centric.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 -top-6 w-20 h-20 bg-[#00c3ff]/20 rounded-full blur-xl"></div>
                  <h2 className="text-2xl font-bold text-white mb-4">The Impact</h2>
                  <p className="text-[#94a3b8]">
                    Success is measured by the tangible impact created. Whether it's optimizing operations, enhancing user experiences, or addressing societal challenges, my work aims to deliver meaningful outcomes that drive positive change and create lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <GradientText className="text-xl font-semibold">
              "Innovation is not about what we create, but about the difference we make."
            </GradientText>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-vision" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="0" stroke="#1e4976" strokeWidth="0.3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#1e4976" strokeWidth="0.3" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="#1e4976" strokeWidth="0.3" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#1e4976" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-vision)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Vision;
