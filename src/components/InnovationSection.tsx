
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Robot, FileText, Handshake, Rocket } from "lucide-react";

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
      icon: <Robot className="text-[#00bfff] w-8 h-8" />,
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
      {/* Blueprint/Grid background */}
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Innovation in Action" 
          subtitle="Transforming business operations through strategic innovation and technology implementation."
          accent="purple"
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Impact metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Hours Saved */}
            <motion.div 
              className="bg-gradient-to-br from-[#185a9d]/10 to-[#43cea2]/10 p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={hoursSavedRef} className="counter">0</span><span>+</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold">Hours Saved Monthly</h4>
              <p className="text-gray-300 mt-2">Through AI automation across departments</p>
            </motion.div>
            
            {/* Productivity Increase */}
            <motion.div 
              className="bg-gradient-to-br from-[#185a9d]/10 to-[#43cea2]/10 p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={productivityIncreaseRef} className="counter">0</span><span>%</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold">Productivity Increase</h4>
              <p className="text-gray-300 mt-2">In BPO team through SOP optimization</p>
            </motion.div>
            
            {/* Departments Scaled */}
            <motion.div 
              className="bg-gradient-to-br from-[#00bfff]/10 to-[#0a192f]/10 p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-poppins font-bold mb-3">
                <span ref={departmentsScaledRef} className="counter">0</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold">Departments Scaled</h4>
              <p className="text-gray-300 mt-2">Through digital restructuring initiatives</p>
            </motion.div>
          </div>
          
          {/* Impact stories */}
          <div className="space-y-8">
            {impacts.map((impact, index) => (
              <motion.div 
                key={index}
                className="bg-[#0a192f] bg-opacity-70 p-6 rounded-xl border border-gray-800"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center items-center">
                    <div className="w-20 h-20 rounded-full bg-[#00bfff] bg-opacity-20 flex items-center justify-center">
                      {impact.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xl font-poppins font-semibold mb-3">{impact.title}</h4>
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
