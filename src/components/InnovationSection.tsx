
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Bot, FileText, Handshake, Rocket } from "lucide-react";

export default function InnovationSection() {
  // Set up counter animation refs and logic
  const hoursSavedRef = useRef<HTMLSpanElement>(null);
  const productivityIncreaseRef = useRef<HTMLSpanElement>(null);
  const departmentsScaledRef = useRef<HTMLSpanElement>(null);
  
  const isInView = useInView(hoursSavedRef, { once: true, margin: "-100px 0px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    const animateCounter = (ref: React.RefObject<HTMLSpanElement>, target: number, duration: number = 2000) => {
      if (!ref.current) return;
      
      const start = 0;
      const increment = Math.ceil(target / (duration / 16));
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          ref.current!.textContent = target.toString();
          clearInterval(timer);
        } else {
          ref.current!.textContent = current.toString();
        }
      }, 16);
    };
    
    animateCounter(hoursSavedRef, 100);
    animateCounter(productivityIncreaseRef, 72);
    animateCounter(departmentsScaledRef, 3);
  }, [isInView]);

  const impacts = [
    {
      title: "AI-Driven Productivity",
      icon: <Bot className="text-[#00bfff] w-8 h-8" />,
      description: "Implemented AI automation solutions that cut over 100 hours per month of manual work across departments, allowing teams to focus on strategic initiatives rather than repetitive tasks."
    },
    {
      title: "SOP Optimization",
      icon: <FileText className="text-[#00bfff] w-8 h-8" />,
      description: "Built comprehensive Standard Operating Procedures that increased BPO team output by 72%, creating a framework for consistent quality and improved client satisfaction."
    },
    {
      title: "Zero-Conflict IR System",
      icon: <Handshake className="text-[#00bfff] w-8 h-8" />,
      description: "Established an innovative Industrial Relations framework during my tenure at ClientoClarify.AI that eliminated workplace conflicts while maintaining high employee satisfaction and retention."
    },
    {
      title: "Synopsyne Dynamics Vision",
      icon: <Rocket className="text-[#00bfff] w-8 h-8" />,
      description: "Founded Synopsyne Dynamics to integrate deep-tech solutions into industrial productivity layers, focusing on creating next-generation systems that bridge the gap between advanced technology and practical business applications."
    }
  ];

  return (
    <section id="innovation" className="py-20 relative overflow-hidden">
      {/* Enhanced Blueprint/Grid background with gradient lights */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <div className="absolute inset-0 opacity-10">
          {/* Grid pattern */}
          <div className="h-full w-full grid grid-cols-10 gap-px">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="border-r border-[#00bfff] h-full"></div>
            ))}
          </div>
          <div className="h-full w-full grid grid-rows-10 gap-px">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="border-b border-[#00bfff] w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Gradient light effects */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-400/20 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-400/15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Innovation in Action" 
          subtitle="Transforming business operations through strategic innovation and technology implementation."
          accent="purple"
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Impact metrics with enhanced gradients */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Hours Saved */}
            <motion.div 
              className="bg-gradient-to-br from-[#185a9d]/20 to-[#43cea2]/20 p-6 rounded-xl text-center border border-[#43cea2]/30 shadow-lg shadow-[#43cea2]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={hoursSavedRef} className="bg-gradient-to-r from-[#00c3ff] to-[#43cea2] bg-clip-text text-transparent">0</span>
                <span className="bg-gradient-to-r from-[#00c3ff] to-[#43cea2] bg-clip-text text-transparent">+</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hours Saved Monthly</h4>
              <p className="text-gray-300 mt-2">Through AI automation across departments</p>
            </motion.div>
            
            {/* Productivity Increase */}
            <motion.div 
              className="bg-gradient-to-br from-[#5f2c82]/20 to-[#49a09d]/20 p-6 rounded-xl text-center border border-[#5f2c82]/30 shadow-lg shadow-[#5f2c82]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={productivityIncreaseRef} className="bg-gradient-to-r from-[#5f2c82] to-[#49a09d] bg-clip-text text-transparent">0</span>
                <span className="bg-gradient-to-r from-[#5f2c82] to-[#49a09d] bg-clip-text text-transparent">%</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Productivity Increase</h4>
              <p className="text-gray-300 mt-2">In BPO team through SOP optimization</p>
            </motion.div>
            
            {/* Departments Scaled */}
            <motion.div 
              className="bg-gradient-to-br from-[#00bfff]/20 to-[#c961de]/20 p-6 rounded-xl text-center border border-[#c961de]/30 shadow-lg shadow-[#c961de]/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={departmentsScaledRef} className="bg-gradient-to-r from-[#00bfff] to-[#c961de] bg-clip-text text-transparent">0</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Departments Scaled</h4>
              <p className="text-gray-300 mt-2">Through digital restructuring initiatives</p>
            </motion.div>
          </div>
          
          {/* Impact stories with enhanced styling */}
          <div className="space-y-8">
            {impacts.map((impact, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-[#0a192f]/95 to-[#112240]/95 p-6 rounded-xl border border-gray-700 shadow-lg shadow-[#00bfff]/5"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00bfff]/30 to-[#c961de]/20 flex items-center justify-center border border-[#00bfff]/30 shadow-md shadow-[#00bfff]/10">
                      {impact.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xl font-poppins font-semibold mb-3 bg-gradient-to-r from-[#00c3ff] to-[#c961de] bg-clip-text text-transparent">{impact.title}</h4>
                    <p className="text-gray-300">{impact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
