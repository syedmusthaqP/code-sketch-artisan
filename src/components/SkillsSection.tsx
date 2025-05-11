
import { motion } from "framer-motion";
import {
  BarChart,
  Users,
  Handshake,
  BookOpen,
  Crown,
  TrendingUp,
  Brain,
  Settings,
  PenTool,
  Car,
  Wind,
  BatteryCharging
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function SkillsSection() {
  // Strategic skills data
  const strategicSkills = [
    {
      title: "Strategic Management",
      icon: <BarChart className="w-5 h-5 text-[#00bfff]" />,
      description: "Developing and implementing business strategies for sustainable growth.",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500"
    },
    {
      title: "HRM",
      icon: <Users className="w-5 h-5 text-[#00bfff]" />,
      description: "Human resource management with focus on talent optimization.",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-500"
    },
    {
      title: "Industrial Relations",
      icon: <Handshake className="w-5 h-5 text-[#00bfff]" />,
      description: "Building harmonious workplace relationships and conflict resolution.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500"
    },
    {
      title: "Mentorship",
      icon: <BookOpen className="w-5 h-5 text-[#00bfff]" />,
      description: "Guiding teams and individuals to achieve their potential.",
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-500"
    },
    {
      title: "Leadership",
      icon: <Crown className="w-5 h-5 text-[#00bfff]" />,
      description: "Visionary leadership driving transformational change.",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500"
    },
    {
      title: "Organizational Growth",
      icon: <TrendingUp className="w-5 h-5 text-[#00bfff]" />,
      description: "Strategies for scaling and expanding business operations.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500"
    }
  ];

  // Tech skills data
  const techSkills = [
    {
      title: "AI for Business",
      icon: <Brain className="w-5 h-5 text-[#00bfff]" />,
      description: "Implementing AI solutions to solve business challenges.",
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-500"
    },
    {
      title: "Automation Systems",
      icon: <Settings className="w-5 h-5 text-[#00bfff]" />,
      description: "Designing and deploying workflow automation solutions.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500"
    },
    {
      title: "Mechanical Design",
      icon: <PenTool className="w-5 h-5 text-[#00bfff]" />,
      description: "Engineering expertise in mechanical systems and components.",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-500"
    },
    {
      title: "Vehicle Dynamics",
      icon: <Car className="w-5 h-5 text-[#00bfff]" />,
      description: "Specialized knowledge in automotive performance systems.",
      color: "from-fuchsia-500 to-pink-600",
      bgColor: "bg-fuchsia-500"
    },
    {
      title: "Aerodynamics",
      icon: <Wind className="w-5 h-5 text-[#00bfff]" />,
      description: "Understanding of fluid dynamics and aerodynamic principles.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500"
    },
    {
      title: "EV Technologies",
      icon: <BatteryCharging className="w-5 h-5 text-[#00bfff]" />,
      description: "Electric vehicle systems and sustainable transportation.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h4 className="text-2xl font-poppins font-semibold mb-6 border-l-4 border-[#00bfff] pl-4">
                Strategic & Business
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                {/* Wavy dotted line connector for strategic skills */}
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block">
                  <svg 
                    width="100%" 
                    height="30" 
                    className="stroke-[#00bfff] fill-none stroke-2 opacity-50" 
                    viewBox="0 0 1200 30" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,15 C200,5 400,25 600,15 C800,5 1000,25 1200,15" 
                      strokeDasharray="6,6" 
                      strokeLinecap="round"
                    >
                      <animate 
                        attributeName="d" 
                        dur="15s"
                        repeatCount="indefinite"
                        values="
                          M0,15 C200,5 400,25 600,15 C800,5 1000,25 1200,15;
                          M0,15 C200,25 400,5 600,15 C800,25 1000,5 1200,15;
                          M0,15 C200,5 400,25 600,15 C800,5 1000,25 1200,15
                        "
                      />
                    </path>
                  </svg>
                </div>
                
                {strategicSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    variants={skillVariants}
                  >
                    {/* Connector dots between cards (only between cards, not after the last) */}
                    {index < strategicSkills.length - 1 && index % 3 !== 2 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex space-x-1 z-10">
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse delay-75`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse delay-150`}></div>
                      </div>
                    )}
                    
                    <div className="group bg-gradient-to-br from-[#0a192f] to-[#051630] rounded-lg border border-gray-800 hover:border-[#00bfff] p-6 h-full transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative flex flex-col h-full">
                        {/* Skill icon with gradient circle */}
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                            {skill.icon}
                          </div>
                        </div>
                        
                        {/* Title with accent line */}
                        <h5 className="text-xl font-poppins font-semibold mb-2 relative inline-block">
                          {skill.title}
                          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${skill.color} group-hover:w-full transition-all duration-500`}></div>
                        </h5>
                        
                        {/* Description */}
                        <p className="text-gray-400 group-hover:text-white transition-all duration-300 mt-auto">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Tech & Engineering Skills */}
          <div className="relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h4 className="text-2xl font-poppins font-semibold mb-6 border-l-4 border-[#00bfff] pl-4">
                Tech & Engineering
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                {/* Wavy dotted line connector for tech skills */}
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block">
                  <svg 
                    width="100%" 
                    height="40" 
                    className="stroke-[#00bfff] fill-none stroke-2 opacity-50" 
                    viewBox="0 0 1200 40" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,20 C200,35 400,5 600,20 C800,35 1000,5 1200,20" 
                      strokeDasharray="8,4" 
                      strokeLinecap="round"
                    >
                      <animate 
                        attributeName="d" 
                        dur="20s"
                        repeatCount="indefinite"
                        values="
                          M0,20 C200,35 400,5 600,20 C800,35 1000,5 1200,20;
                          M0,20 C200,5 400,35 600,20 C800,5 1000,35 1200,20;
                          M0,20 C200,35 400,5 600,20 C800,35 1000,5 1200,20
                        "
                      />
                    </path>
                  </svg>
                </div>
                
                {techSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    variants={skillVariants}
                  >
                    {/* Connector dots between cards (only between cards, not after the last) */}
                    {index < techSkills.length - 1 && index % 3 !== 2 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex space-x-1 z-10">
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse delay-75`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bgColor} animate-pulse delay-150`}></div>
                      </div>
                    )}
                    
                    <div className="group bg-gradient-to-br from-[#0a192f] to-[#051630] rounded-lg border border-gray-800 hover:border-[#00bfff] p-6 h-full transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative flex flex-col h-full">
                        {/* Skill icon with gradient circle */}
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                            {skill.icon}
                          </div>
                        </div>
                        
                        {/* Title with accent line */}
                        <h5 className="text-xl font-poppins font-semibold mb-2 relative inline-block">
                          {skill.title}
                          <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${skill.color} group-hover:w-full transition-all duration-500`}></div>
                        </h5>
                        
                        {/* Description */}
                        <p className="text-gray-400 group-hover:text-white transition-all duration-300 mt-auto">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
