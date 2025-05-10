
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Lightbulb, 
  BarChart, 
  Rocket, 
  Award, 
  Users, 
  Code, 
  Cpu,
  ArrowRight
} from "lucide-react";
import SectionHeader from "./SectionHeader";

// Define the type for skill icons to prevent type errors
type SkillIconsType = {
  [key: string]: JSX.Element;
};

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2016–2019",
      title: "Soha Technologies Pvt. Ltd.",
      subtitle: "City Ambassador",
      description: "Worked as a City Ambassador during my B.Tech Mechanical Engineering at Soha Technologies Pvt. Ltd. Engaged in promoting and supporting the company's initiatives, building connections, and representing the brand across Pune.",
      tags: ["Marketing", "Brand Ambassador", "Networking"],
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: "from-teal-500 to-green-400",
      textColor: "text-teal-400",
      bgColor: "bg-teal-500"
    },
    {
      year: "2018–2019",
      title: "AMZ Automotive",
      subtitle: "Technical and Marketing Executive, Technical Trainer",
      description: "Joined AMZ Automotive as a Technical and Marketing Executive while pursuing my B.Tech. Provided training to teams on various technical aspects, especially related to automotive technology and marketing strategies.",
      tags: ["Technical Training", "Marketing", "Automotive"],
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      color: "from-amber-500 to-orange-400",
      textColor: "text-amber-400",
      bgColor: "bg-amber-500"
    },
    {
      year: "2019",
      title: "B.Tech Graduation",
      subtitle: "Mechanical Engineering",
      description: "Graduated with a B.Tech in Mechanical Engineering and transitioned into the professional world with a focus on innovation, technology, and entrepreneurship.",
      tags: ["Engineering", "Education", "Career Transition"],
      icon: <Award className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-400",
      textColor: "text-blue-400",
      bgColor: "bg-blue-500"
    },
    {
      year: "2019–2024",
      title: "ClienteClarify.AI Pvt. Ltd.",
      subtitle: "Co-Founder & Director",
      description: "Co-founded ClienteClarify.AI Pvt. Ltd., an AI-driven company focused on software development and business solutions. Led the company for 5 years, building a strong foundation in AI, business process optimization, and software development, working on projects that reshaped industries.",
      tags: ["AI Solutions", "Leadership", "Business Optimization"],
      icon: <BarChart className="w-8 h-8 text-white" />,
      color: "from-purple-600 to-indigo-500",
      textColor: "text-purple-400",
      bgColor: "bg-purple-600",
      achievements: [
        "Led AI-driven software development projects",
        "Built and led teams across departments",
        "Optimized business processes for multiple industries"
      ]
    },
    {
      year: "2024–Present",
      title: "Synopsyne Dynamics Pvt. Ltd.",
      subtitle: "Founder & Director",
      description: "Launched my own venture, Synopsyne Dynamics Pvt. Ltd., on October 2nd, 2024. Focusing on AI solutions, strategic management, and business consulting, with a vision to drive future-ready businesses and innovative technologies.",
      tags: ["Founder", "AI Solutions", "Strategic Vision"],
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "from-indigo-600 to-blue-400",
      textColor: "text-indigo-400",
      bgColor: "bg-indigo-600",
      achievements: [
        "Established new AI-focused venture",
        "Developing cutting-edge technology solutions",
        "Creating strategic partnerships across industries"
      ]
    }
  ];

  // Icons for achievements and details
  const achievementIcon = <Award className="w-4 h-4 text-[#00bfff]" />;
  
  // Create skill icons object with proper typing
  const skillIcons: SkillIconsType = {
    "Marketing": <Users className="w-4 h-4" />,
    "Brand Ambassador": <Award className="w-4 h-4" />,
    "Networking": <Users className="w-4 h-4" />,
    "Technical Training": <Lightbulb className="w-4 h-4" />,
    "Automotive": <Briefcase className="w-4 h-4" />,
    "Engineering": <Code className="w-4 h-4" />,
    "Education": <Award className="w-4 h-4" />,
    "Career Transition": <Rocket className="w-4 h-4" />,
    "AI Solutions": <Cpu className="w-4 h-4" />,
    "Leadership": <Users className="w-4 h-4" />,
    "Business Optimization": <BarChart className="w-4 h-4" />,
    "Founder": <Briefcase className="w-4 h-4" />,
    "Strategic Vision": <Lightbulb className="w-4 h-4" />
  };

  return (
    <section id="timeline" className="py-20 bg-[#0a192f] bg-opacity-50 relative overflow-hidden">
      {/* Background elements */}
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
          title="Career Timeline"
          subtitle="Exploring the key milestones and achievements throughout my professional journey."
          accent="teal"
        />
        
        {/* Desktop Timeline - NEW CARD DESIGN */}
        <div className="hidden md:block max-w-6xl mx-auto">
          {/* Cards in a row with connector lines */}
          <div className="relative pb-12 flex flex-col">
            {/* Main timeline row */}
            <div className="relative flex justify-center mb-10">
              <div className="flex space-x-6 md:space-x-16 lg:space-x-24 items-center">
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Card */}
                    <motion.div 
                      className={`relative w-60 rounded-lg shadow-lg bg-[#0a192f] border border-gray-800 overflow-hidden transform transition-all duration-300`}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                        borderColor: "#00bfff"
                      }}
                    >
                      {/* Card header */}
                      <div className={`px-5 py-3 bg-gradient-to-r ${event.color}`}>
                        <h4 className="text-xl font-poppins font-bold text-white mb-0 leading-tight tracking-wider">
                          {event.year}
                        </h4>
                      </div>
                      
                      {/* Card content */}
                      <div className="p-5">
                        {/* Icon circle - Positioned slightly above, overlapping the header */}
                        <div className="absolute -top-5 right-5 w-12 h-12 rounded-full border-4 border-[#0a192f] bg-gradient-to-br from-[#051630] to-[#0a192f] flex items-center justify-center shadow-lg transform -translate-y-1/3">
                          <div className={`w-full h-full rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                            {event.icon}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-poppins font-bold mb-1 mt-1">{event.title}</h4>
                        <p className={`${event.textColor} text-sm mb-4`}>{event.subtitle}</p>
                        
                        {/* Enhanced visual connector dots between cards */}
                        {index < timelineEvents.length - 1 && (
                          <div className="absolute -right-12 md:-right-20 lg:-right-28 top-1/2 transform -translate-y-1/2 flex space-x-2">
                            {/* Animated connector dots with different sizes and effects */}
                            <motion.div 
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.color} relative`}
                              animate={{ 
                                boxShadow: ["0 0 0px rgba(0, 191, 255, 0.2)", "0 0 8px rgba(0, 191, 255, 0.8)", "0 0 0px rgba(0, 191, 255, 0.2)"],
                                scale: [1, 1.3, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                            >
                              {/* Inner dot */}
                              <motion.div 
                                className="absolute inset-1 rounded-full bg-white" 
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                              />
                            </motion.div>
                            
                            {/* Larger center dot */}
                            <motion.div 
                              className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color} relative`}
                              animate={{ 
                                boxShadow: ["0 0 0px rgba(0, 191, 255, 0.2)", "0 0 10px rgba(0, 191, 255, 0.8)", "0 0 0px rgba(0, 191, 255, 0.2)"],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            >
                              {/* Inner dot */}
                              <motion.div 
                                className="absolute inset-1 rounded-full bg-white" 
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                              />
                            </motion.div>
                            
                            <motion.div 
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.color} relative`}
                              animate={{ 
                                boxShadow: ["0 0 0px rgba(0, 191, 255, 0.2)", "0 0 8px rgba(0, 191, 255, 0.8)", "0 0 0px rgba(0, 191, 255, 0.2)"],
                                scale: [1, 1.3, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            >
                              {/* Inner dot */}
                              <motion.div 
                                className="absolute inset-1 rounded-full bg-white" 
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                              />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Enhanced wave connector line under cards - SVG wave pattern with animated dots */}
            <div className="absolute top-[45%] left-0 w-full transform -translate-y-1/2 z-0">
              {/* Main wave path */}
              <svg 
                width="100%" 
                height="50" 
                className="stroke-[#00bfff] fill-none stroke-2 opacity-60" 
                viewBox="0 0 1200 50" 
                preserveAspectRatio="none"
              >
                {/* Glowing filter */}
                <defs>
                  <filter id="timeline-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Background glow effect */}
                <path 
                  d="M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25" 
                  stroke="#00bfff"
                  strokeWidth="4"
                  strokeOpacity="0.2"
                  filter="url(#timeline-glow)"
                >
                  <animate 
                    attributeName="d" 
                    dur="15s"
                    repeatCount="indefinite"
                    values="
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25;
                      M0,25 C250,0 350,50 600,25 C850,0 950,50 1200,25;
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25
                    "
                  />
                </path>
                
                {/* Dotted line */}
                <path 
                  d="M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25" 
                  strokeDasharray="6,12" 
                  strokeLinecap="round"
                  strokeWidth="2.5"
                >
                  <animate 
                    attributeName="d" 
                    dur="15s"
                    repeatCount="indefinite"
                    values="
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25;
                      M0,25 C250,0 350,50 600,25 C850,0 950,50 1200,25;
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25
                    "
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="36"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                
                {/* Animated dots along the path */}
                <g>
                  {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((position, idx) => (
                    <circle 
                      key={idx}
                      r="4" 
                      fill="#00bfff" 
                      opacity="0.8"
                      filter="url(#timeline-glow)"
                    >
                      <animateMotion
                        path="M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25"
                        dur={`${8 + (idx % 3)}s`}
                        begin={`${idx * 0.5}s`}
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath xlinkHref="#motion-path" />
                      </animateMotion>
                      <animate
                        attributeName="r"
                        values="3;5;3"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.3}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.3}s`}
                      />
                    </circle>
                  ))}
                </g>
                
                {/* Path for motion animation */}
                <path 
                  id="motion-path"
                  d="M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25" 
                  stroke="none"
                  fill="none"
                >
                  <animate 
                    attributeName="d" 
                    dur="15s"
                    repeatCount="indefinite"
                    values="
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25;
                      M0,25 C250,0 350,50 600,25 C850,0 950,50 1200,25;
                      M0,25 C250,50 350,0 600,25 C850,50 950,0 1200,25
                    "
                  />
                </path>
              </svg>
            </div>
          </div>
          
          {/* Detailed event cards */}
          <div className="space-y-16 mt-24">
            {[timelineEvents[0], timelineEvents[4]].map((event, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Large feature card with visual elements */}
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a192f] to-[#051630] shadow-2xl border border-gray-800 group transition-all duration-500`}>
                  {/* Background glow effect */}
                  <div className={`absolute -inset-1 opacity-20 blur-xl bg-gradient-to-r ${event.color} group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Main content area */}
                  <div className="relative p-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left column */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        {/* Timeline node */}
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${event.color} flex-shrink-0 flex items-center justify-center shadow-lg`}>
                          <div className="absolute inset-0 rounded-2xl bg-[#0a192f] opacity-80"></div>
                          <div className={`relative text-5xl font-bold ${event.textColor}`}>
                            {index === 0 ? '01' : '05'}
                          </div>
                          
                          {/* Corner icon */}
                          <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-[#0a192f] border-2 border-[#00bfff] flex items-center justify-center shadow-lg">
                            {event.icon}
                          </div>
                        </div>
                        
                        <div>
                          <div className={`text-2xl font-poppins font-bold ${event.textColor} mb-1`}>{event.year}</div>
                          <h4 className="text-2xl font-poppins font-semibold">{event.title}</h4>
                          <p className="text-gray-300">{event.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Tags with glassmorphism */}
                      {event.tags && (
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="px-4 py-2 rounded-full backdrop-blur-sm bg-[#0a192f] bg-opacity-50 border border-gray-800 text-sm flex items-center gap-2 transition-all group-hover:translate-y-0 translate-y-0 shadow-lg"
                              style={{ transitionDelay: `${tagIndex * 100}ms` }}
                            >
                              <span className={`w-6 h-6 rounded-full ${event.bgColor} bg-opacity-20 flex items-center justify-center`}>
                                {skillIcons[tag]}
                              </span>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Visual connector - vertical dotted line */}
                      <div className="hidden md:block h-full w-1 absolute right-0 top-0 border-r-2 border-dashed border-opacity-30 border-gray-400"></div>
                    </div>
                    
                    {/* Right column */}
                    <div className="md:col-span-3 space-y-8">
                      {/* Description with styled paragraph */}
                      <div>
                        <p className="text-gray-300 leading-relaxed relative">
                          <span className={`absolute -left-4 top-0 w-1 h-full ${event.bgColor} rounded-full opacity-70`}></span>
                          {event.description}
                        </p>
                      </div>
                      
                      {/* Achievements section */}
                      {event.achievements && (
                        <div className="bg-[#051630] bg-opacity-50 p-6 rounded-xl border border-gray-800">
                          <h5 className="text-lg font-poppins font-semibold mb-4 text-white flex items-center gap-2">
                            <Award className={`w-5 h-5 ${event.textColor}`} /> 
                            <span className={`${event.textColor}`}>Key Achievements</span>
                          </h5>
                          
                          <div className="grid grid-cols-1 gap-4">
                            {event.achievements.map((achievement, achIndex) => (
                              <motion.div 
                                key={achIndex}
                                className="flex items-start gap-3 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + (achIndex * 0.2) }}
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${event.color} bg-opacity-10 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-gray-200">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Enhanced vertical timeline line with animation effects */}
            <div className="absolute left-4 top-0 h-full z-0">
              {/* Main vertical track */}
              <div className="h-full w-0.5 bg-[#051630]">
                {/* Animated glowing line */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 2px rgba(0, 191, 255, 0.3)", 
                      "0 0 8px rgba(0, 191, 255, 0.7)", 
                      "0 0 2px rgba(0, 191, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Animated gradient dots */}
                <div className="h-full w-full overflow-hidden relative">
                  <div className="absolute h-full w-full flex flex-col items-center">
                    {Array(15).fill(0).map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="h-4 w-1 rounded-full bg-gradient-to-b from-[#00bfff] to-transparent mb-3"
                        style={{ 
                          marginTop: i === 0 ? 0 : '3px',
                          opacity: 1 - (i * 0.045)
                        }}
                        animate={{
                          opacity: [
                            1 - (i * 0.045), 
                            1 - (i * 0.02), 
                            1 - (i * 0.045)
                          ],
                          height: ['12px', '18px', '12px'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.15
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Animated traveling dot */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#00bfff]"
                  animate={{
                    y: [0, 300, 600, 900, 0],
                    opacity: [0, 1, 1, 1, 0],
                    boxShadow: [
                      "0 0 0px rgba(0, 191, 255, 0)",
                      "0 0 10px rgba(0, 191, 255, 0.8)",
                      "0 0 15px rgba(0, 191, 255, 0.6)",
                      "0 0 10px rgba(0, 191, 255, 0.8)",
                      "0 0 0px rgba(0, 191, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1]
                  }}
                />
              </div>
            </div>
            
            {/* Timeline events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Enhanced timeline node with glowing effects */}
                  <div className="absolute left-0 top-4 transform -translate-x-1/2 z-10">
                    {/* Outer glow ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      animate={{ 
                        boxShadow: [
                          "0 0 0px rgba(0, 191, 255, 0.2)", 
                          "0 0 15px rgba(0, 191, 255, 0.7)", 
                          "0 0 0px rgba(0, 191, 255, 0.2)"
                        ],
                        scale: [0.9, 1.1, 0.9]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                    
                    {/* Main node */}
                    <motion.div 
                      className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-4 border-[#0a192f] overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background animated particle effect */}
                      <div className="absolute inset-0 bg-[#0a192f] bg-opacity-50"></div>
                      
                      {/* Animated scan line */}
                      <motion.div 
                        className="absolute h-1 w-full bg-[#00bfff] opacity-60 blur-[1px]"
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      />
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {event.icon}
                      </div>
                      
                      {/* Animated ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-[#00bfff] border-opacity-0"
                        animate={{ 
                          borderOpacity: [0, 0.7, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Event content */}
                  <motion.div 
                    className="bg-gradient-to-br from-[#0a192f] to-[#051630] p-5 rounded-xl border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#00bfff] transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <div className={`text-lg font-poppins font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-2`}>
                        {event.year}
                      </div>
                      <h4 className="text-lg font-poppins font-semibold mb-2">{event.title}</h4>
                      <p className="text-gray-300 text-sm">{event.subtitle}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile detailed cards */}
          <div className="mt-16 space-y-12">
            {[timelineEvents[0], timelineEvents[4]].map((event, index) => (
              <motion.div 
                key={index}
                className={`relative rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-gradient-to-br from-[#0a192f] to-[#051630]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ borderColor: "#00bfff" }}
              >
                {/* Card header */}
                <div className={`p-4 bg-gradient-to-r ${event.color}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  <p className="text-white text-opacity-80 text-sm mt-1">{event.year} - {event.subtitle}</p>
                </div>
                
                <div className="p-5">
                  {/* Tags with icons */}
                  {event.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-[#00bfff] bg-opacity-10 rounded-full text-sm flex items-center gap-1">
                          {skillIcons[tag]}
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-gray-300 mb-6 text-sm">{event.description}</p>
                  
                  {/* Achievements with icons */}
                  {event.achievements && (
                    <div className="border-t border-gray-800 pt-4">
                      <h5 className="text-base font-poppins font-semibold mb-3 text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#00bfff]" /> Key Achievements
                      </h5>
                      <div className="space-y-2">
                        {event.achievements.map((achievement, achIndex) => (
                          <motion.div 
                            key={achIndex}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + (achIndex * 0.1) }}
                          >
                            <div className="w-5 h-5 rounded-full bg-[#00bfff] bg-opacity-20 flex-shrink-0 flex items-center justify-center mt-0.5">
                              {achievementIcon}
                            </div>
                            <p className="text-gray-200 text-sm">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
