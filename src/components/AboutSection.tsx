
import { motion } from "framer-motion";
import { Lightbulb, Code, Puzzle, Network, LineChart, Zap, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  // Interactive elements for About section
  const interactiveElements = [
    { 
      icon: <Award className="w-10 h-10 text-[#00bfff]" />, 
      title: "Experience", 
      description: "10+ years of industry expertise",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      icon: <Puzzle className="w-10 h-10 text-[#00bfff]" />, 
      title: "Strategy", 
      description: "Innovative business solutions",
      color: "from-purple-500 to-fuchsia-600"
    },
    { 
      icon: <Code className="w-10 h-10 text-[#00bfff]" />, 
      title: "Tech Vision", 
      description: "AI & automation integration",
      color: "from-teal-500 to-cyan-600"
    },
    { 
      icon: <LineChart className="w-10 h-10 text-[#00bfff]" />, 
      title: "Growth", 
      description: "Business scaling expertise",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Blueprint background */}
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

      <div className="container mx-auto container-padding relative z-10">
        <SectionHeader 
          title="From Vision to Impact"
          subtitle="A passionate entrepreneur with experience in technology implementation and business development."
          accent="blue"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left side - Interactive widgets */}
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {interactiveElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${element.color} rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-300`}></div>
                    <div className="relative bg-[#051630] rounded-lg p-4 h-full flex flex-col items-center text-center border border-gray-800 group-hover:border-[#00bfff] transition-colors duration-300">
                      <div className="mb-3">
                        {element.icon}
                      </div>
                      <h4 className="text-white font-medium mb-1">{element.title}</h4>
                      <p className="text-gray-400 text-sm">{element.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote/Testimonial section */}
              <motion.div
                className="mt-6 bg-[#051630] border border-gray-800 rounded-lg p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="absolute -top-4 -left-4 text-[80px] text-[#00bfff] opacity-20 font-serif">"</div>
                <p className="text-gray-300 italic">
                  My vision is to build businesses that seamlessly integrate technology with strategy, creating sustainable solutions for tomorrow's challenges.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-px flex-grow bg-gradient-to-r from-gray-800 to-transparent"></div>
                  <div className="px-3 text-[#00bfff] font-medium">Syed Musthaq</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Biography */}
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 rounded-full"></div>
                
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-[#00bfff]" />
                    <h4 className="text-2xl font-poppins font-semibold text-white">Professional Journey</h4>
                  </div>
                  
                  <div className="space-y-5 font-space text-gray-300 leading-relaxed">
                    <p>With a foundation in <span className="text-[#00bfff] font-medium">B.Tech (Mechanical) + MBA</span>, I've built my career at the intersection of technology and business strategy.</p>
                    
                    <p>My 5-year journey as <span className="text-[#00bfff] font-medium">Co-Founder at ClientoClarify.AI (2019–2024)</span> has been focused on transforming traditional business processes through AI automation and strategic innovation.</p>
                    
                    <p>In October 2024, I founded <span className="text-[#00bfff] font-medium">Synopsyne Dynamics Pvt Ltd</span> to further my vision of integrating deep-tech solutions into industrial productivity layers.</p>
                    
                    <p>My expertise centers on <span className="text-[#00bfff] font-medium">strategic business innovation, automation systems, and industry productivity</span> - creating frameworks that drive organizational growth while optimizing resource utilization.</p>
                  </div>
                </div>
                
                {/* Core values */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-[#00bfff]" />
                    <h4 className="text-xl font-poppins font-semibold text-white">Core Values</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Innovation-Driven", 
                      "Sustainable Growth", 
                      "Ethical Leadership", 
                      "Continuous Learning"
                    ].map((value, index) => (
                      <motion.div 
                        key={index}
                        className="bg-[#0a192f] p-3 rounded-lg border border-gray-800 flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#00bfff] mr-2"></div>
                        <span className="text-gray-300 text-sm">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Skills quick view */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="w-6 h-6 text-[#00bfff]" />
                    <h4 className="text-xl font-poppins font-semibold text-white">Skill Highlights</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Innovation", "Leadership", "AI Strategy", "Operations", "Business Development", "Market Research", "Team Building"].map((skill, index) => (
                      <motion.span 
                        key={index} 
                        className="px-4 py-2 bg-[#0a192f] border border-gray-800 rounded-full text-sm text-gray-300 hover:border-[#00bfff] hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.9 + (index * 0.07) }}
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
