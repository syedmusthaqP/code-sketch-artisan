
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ConnectorLine } from "./ConnectorLine";
import { SkillCard } from "./SkillCard";

export interface SkillItem {
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
  bgColor: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
  connectorAnimationDuration?: string;
}

export function SkillCategory({ title, skills, connectorAnimationDuration = "15s" }: SkillCategoryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h4 className="text-2xl font-poppins font-semibold mb-6 border-l-4 border-[#00bfff] pl-4 text-white">
        {title}
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
        {/* Wavy dotted line connector */}
        <ConnectorLine animationDuration={connectorAnimationDuration} />
        
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            title={skill.title}
            description={skill.description}
            color={skill.color}
            bgColor={skill.bgColor}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
