
import React from 'react';
import { motion } from "framer-motion";
import { GradientText } from '@/components/ui/gradient-text';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accent?: "blue" | "purple" | "cyan" | "teal" | "default";
  centered?: boolean;
}

const gradientMap = {
  blue: "from-blue-500 via-[#00bfff] to-blue-400",
  purple: "from-purple-500 via-violet-500 to-purple-400",
  cyan: "from-cyan-500 via-blue-400 to-cyan-300",
  teal: "from-teal-500 via-cyan-400 to-teal-300",
  default: "from-[#00c3ff] to-[#c961de]",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = "center",
  accent = "default",
  centered = true
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const gradient = gradientMap[accent];
  
  return (
    <div className={`mb-16 max-w-2xl ${alignmentClasses[align]} ${centered ? 'mx-auto' : ''}`}>
      <div className="relative inline-block">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Visual dot accent */}
          <motion.div 
            className={`absolute -left-5 top-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${gradient}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Title with gradient */}
          <span className={`relative bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
            {title}
          </span>
          
          {/* Animated underline */}
          <motion.div 
            className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Glowing background effect */}
          <motion.div 
            className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-full opacity-0 blur-xl -z-10`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.07 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </div>
      
      {subtitle && (
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
