
import { ReactNode } from "react";

interface ConnectorLineProps {
  animationDuration?: string;
  children?: ReactNode;
}

export function ConnectorLine({ animationDuration = "15s", children }: ConnectorLineProps) {
  return (
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
            dur={animationDuration}
            repeatCount="indefinite"
            values="
              M0,15 C200,5 400,25 600,15 C800,5 1000,25 1200,15;
              M0,15 C200,25 400,5 600,15 C800,25 1000,5 1200,15;
              M0,15 C200,5 400,25 600,15 C800,5 1000,25 1200,15
            "
          />
        </path>
      </svg>
      {children}
    </div>
  );
}
