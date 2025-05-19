
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
import { SkillItem } from "./SkillCategory";

// Strategic skills data
export const strategicSkills: SkillItem[] = [
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
export const techSkills: SkillItem[] = [
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
