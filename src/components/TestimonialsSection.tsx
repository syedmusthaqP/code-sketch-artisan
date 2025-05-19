
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sophia Chen",
      role: "CTO",
      company: "TechVista Solutions",
      content: "Working with this professional transformed our approach to operational management. Their strategic insights and leadership skills brought a new level of efficiency to our processes.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Innovation",
      company: "NextGen Mobility",
      content: "Their expertise in automotive technology and mechanical design was instrumental in our product development. A true innovator with an exceptional understanding of industry challenges.",
      avatar: "https://i.pravatar.cc/150?img=59",
    },
    {
      name: "Emily Johnson",
      role: "HR Director",
      company: "Global Industries",
      content: "The human resource strategies implemented have significantly improved our talent acquisition and retention. Their mentorship approach has created a more collaborative workplace culture.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#051630] relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a1929] to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Client Testimonials"
          subtitle="Insights from professionals who have experienced the impact of my work."
          accent="purple"
        />
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#0a192f]/60 to-[#051630]/60 border border-gray-800 hover:border-[#00bfff] p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <Quote size={80} className="text-[#00bfff]" />
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="mb-6 text-gray-300">
                      "{testimonial.content}"
                    </div>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-[#00bfff]/30">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
