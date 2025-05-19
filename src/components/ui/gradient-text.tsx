
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({ 
  children, 
  className,
  from = "from-[#00c3ff]", 
  to = "to-[#c961de]" 
}: GradientTextProps) {
  return (
    <span className={cn(
      `bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent inline-block`,
      className
    )}>
      {children}
    </span>
  );
}
