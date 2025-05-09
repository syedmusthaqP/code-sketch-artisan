
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Cpu, LineChart, ArrowDown, Download, Handshake, ChevronRight } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedTextRef.current) return;
    
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "Strategic Management",
        "Human Resource",
        "Industrial Relations",
        "Electric Vehicles",
        "Aerodynamics"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Advanced dynamic background elements
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100, // %
    y: Math.random() * 100, // %
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1
  }));

  // Circuit lines for tech-themed background
  const circuitLines = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    length: Math.random() * 15 + 5,
    angle: Math.random() * 360,
    thickness: Math.random() * 1 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 20 + 15,
  }));

  // Floating tech elements
  const techElements = [
    { id: 1, icon: "cpu", x: 15, y: 20, size: 24, rotation: 15, delay: 0 },
    { id: 2, icon: "activity", x: 85, y: 30, size: 20, rotation: -10, delay: 1 },
    { id: 3, icon: "box", x: 75, y: 75, size: 22, rotation: 5, delay: 2 },
    { id: 4, icon: "code", x: 25, y: 65, size: 18, rotation: -5, delay: 1.5 },
    { id: 5, icon: "globe", x: 50, y: 15, size: 26, rotation: 8, delay: 0.5 },
    { id: 6, icon: "server", x: 10, y: 85, size: 20, rotation: -12, delay: 2.5 }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Canvas-based animated background */}
      <BackgroundAnimation />
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#051630] overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00bfff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 30%)',
              'radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0) 40%)',
              'radial-gradient(circle at 70% 20%, rgba(0, 191, 255, 0.4) 0%, rgba(0, 0, 0, 0) 35%)',
              'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 30%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Dynamic circuit lines */}
        {circuitLines.map((line) => (
          <motion.div
            key={`line-${line.id}`}
            className="absolute bg-[#00bfff] opacity-30"
            style={{
              height: `${line.thickness}px`,
              width: `${line.length}vw`,
              left: `${line.startX}%`,
              top: `${line.startY}%`,
              transformOrigin: 'left center',
              transform: `rotate(${line.angle}deg)`
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: [`${line.length}vw`, `${line.length * 0.8}vw`, `${line.length}vw`],
              opacity: [0.15, 0.3, 0.15],
              boxShadow: [
                '0 0 0px rgba(0, 191, 255, 0)',
                '0 0 8px rgba(0, 191, 255, 0.6)',
                '0 0 0px rgba(0, 191, 255, 0)'
              ]
            }}
            transition={{ 
              delay: line.delay, 
              duration: line.duration,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
        
        {/* Particles animation with improved styling */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute rounded-full bg-[#00bfff]"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                boxShadow: `0 0 ${particle.size * 2}px rgba(0, 191, 255, 0.6)`,
              }}
              animate={{
                y: [0, -30 * (Math.random() + 0.5), 0],
                x: [0, 15 * (Math.random() - 0.5), 0],
                opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                scale: [1, 1.2, 1],
                boxShadow: [
                  `0 0 ${particle.size * 2}px rgba(0, 191, 255, 0.3)`,
                  `0 0 ${particle.size * 3}px rgba(0, 191, 255, 0.6)`,
                  `0 0 ${particle.size * 2}px rgba(0, 191, 255, 0.3)`
                ]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Animation circles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4 px-5 py-2 rounded-lg bg-[#051630] border border-[#00bfff] bg-opacity-50 max-w-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-[#00bfff] font-medium text-sm leading-relaxed inline-block">
                Architect of Innovation | AI Trailblazer | Vision-Driven Entrepreneur Engineering Tomorrow's World
              </span>
            </motion.div>
            
            <motion.div 
              className="mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-1">
                <motion.span
                  className="text-xs text-blue-300 font-mono mr-2 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  &lt;/&gt;
                </motion.span>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-semibold text-xl">
                  Hello, I'm
                </h3>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 inline-block tracking-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">John</span>
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl z-0"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [0.95, 1, 0.95]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </span>{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-[#00bfff] to-purple-500 z-10 relative">
                    Smith
                  </span>
                  <motion.span
                    className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-[#00bfff] to-purple-500 rounded-full z-10"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  ></motion.span>
                  <motion.div 
                    className="absolute -bottom-0.5 left-0 w-full h-1 bg-white blur-sm opacity-50 z-0"
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      width: ["60%", "100%", "60%"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </span>
              </motion.h1>
            </div>
            
            <motion.h2 
              className="text-xl md:text-2xl font-medium mb-6 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                  Business Mentor & Innovation Specialist
                </span>
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur z-0"
                  animate={{ 
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </motion.h2>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-transparent to-purple-500 opacity-70"></div>
              <div className="text-gray-400 max-w-xl mb-6 leading-relaxed pl-3 border-l-2 border-blue-500/30">
                <span className="text-gray-300 font-medium">Transforming businesses</span> through strategic innovation and technology integration. 
                Specialized in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">operational excellence</span> and 
                <span className="relative inline-block mx-1">
                  <span className="relative z-10">sustainable business development</span>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full z-0"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  />
                </span>.
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-8 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="py-3 px-4 bg-gradient-to-r from-[#051630] to-[#0a192f]/50 rounded-lg border border-blue-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <motion.span 
                    className="text-gray-200 font-medium mr-3 flex items-center"
                    animate={{ color: ["#f0f0f0", "#00bfff", "#f0f0f0"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="bg-blue-500/20 p-1 rounded mr-2 inline-flex">
                      <Cpu className="w-4 h-4 text-blue-400" />
                    </span>
                    Expert in:
                  </motion.span>
                  <div className="h-5">
                    <span ref={typedTextRef} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold"></span>
                  </div>
                  
                  {/* Animated cursor */}
                  <motion.span 
                    className="w-0.5 h-5 bg-blue-400 ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Achievement badges */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {/* Background glow effect */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl z-0"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {[
                { 
                  icon: <Award className="w-4 h-4" />, 
                  text: "10+ Years Experience",
                  color: "from-blue-600 to-cyan-400"
                },
                { 
                  icon: <Cpu className="w-4 h-4" />, 
                  text: "AI Implementation",
                  color: "from-purple-600 to-blue-400"
                },
                { 
                  icon: <LineChart className="w-4 h-4" />, 
                  text: "Business Growth",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="relative group z-10"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className={`absolute -inset-0.5 bg-gradient-to-r ${badge.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{
                      boxShadow: ["0 0 0px rgba(0, 191, 255, 0)", "0 0 8px rgba(0, 191, 255, 0.5)", "0 0 0px rgba(0, 191, 255, 0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                  
                  <div className="px-4 py-2 bg-gradient-to-br from-[#051630] to-[#0a192f] border border-gray-700 group-hover:border-blue-400 rounded-full flex items-center gap-2 relative z-10 transition-all duration-300">
                    <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center mr-1">
                      {badge.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors duration-300">{badge.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {/* Primary button with enhanced design */}
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              {/* Secondary button with glass effect */}
              <Button 
                variant="outline" 
                className="border-2 border-[#00bfff] bg-[#051630]/50 backdrop-blur-sm text-[#00bfff] hover:bg-[#051630] hover:text-white transition-all duration-300"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right column - can contain image or additional content */}
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl z-0"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <div className="relative z-10 rounded-xl overflow-hidden border border-blue-500/20 bg-[#051630]/70 backdrop-blur-sm p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Innovation Specialist
                </h3>
                
                <div className="text-gray-300 text-center mb-6">
                  Transform your business with cutting-edge innovation strategies and AI-powered solutions
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Strategic Planning", 
                    "AI Integration",
                    "Business Growth", 
                    "Digital Innovation"
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-2 rounded-lg bg-blue-500/10"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-blue-400 flex flex-col items-center"
        >
          <span className="text-xs text-gray-400 mb-1">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
