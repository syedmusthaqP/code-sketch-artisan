
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: ReactNode;
  index: number;
}

export function SkillCard({ title, description, color, bgColor, icon, index }: SkillCardProps) {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="relative"
      variants={skillVariants}
    >
      {/* Connector dots between cards (only between cards, not after the last) */}
      {index % 3 !== 2 && (
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex space-x-1 z-10">
          <div className={`w-1.5 h-1.5 rounded-full ${bgColor} animate-pulse`}></div>
          <div className={`w-1.5 h-1.5 rounded-full ${bgColor} animate-pulse delay-75`}></div>
          <div className={`w-1.5 h-1.5 rounded-full ${bgColor} animate-pulse delay-150`}></div>
        </div>
      )}
      
      <div className="group bg-gradient-to-br from-[#0a192f] to-[#051630] rounded-lg border border-gray-800 hover:border-[#00bfff] p-6 h-full transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative flex flex-col h-full">
          {/* Skill icon with gradient circle */}
          <div className="mb-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
              {icon}
            </div>
          </div>
          
          {/* Title with accent line */}
          <h5 className="text-xl font-poppins font-semibold mb-2 relative inline-block">
            {title}
            <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${color} group-hover:w-full transition-all duration-500`}></div>
          </h5>
          
          {/* Description */}
          <p className="text-gray-400 group-hover:text-white transition-all duration-300 mt-auto">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
