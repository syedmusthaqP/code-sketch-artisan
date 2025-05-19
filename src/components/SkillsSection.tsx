
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { SkillCategory } from "./skills/SkillCategory";
import { strategicSkills, techSkills } from "./skills/skillsData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#0a192f] bg-opacity-70 relative overflow-hidden">
      {/* Background grid pattern for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="h-full border-r border-[#00bfff]"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="w-full border-b border-[#00bfff]"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Skills & Specializations"
          subtitle="A comprehensive showcase of my expertise across business strategy and technical domains."
          accent="cyan"
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Strategic & Business Skills */}
          <div className="mb-20 relative">
            <SkillCategory 
              title="Strategic & Business" 
              skills={strategicSkills}
              connectorAnimationDuration="15s" 
            />
          </div>
          
          {/* Tech & Engineering Skills */}
          <div className="relative">
            <SkillCategory 
              title="Tech & Engineering" 
              skills={techSkills}
              connectorAnimationDuration="20s" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
