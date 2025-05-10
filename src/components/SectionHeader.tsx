
import React from 'react';
import { GradientText } from '@/components/ui/gradient-text';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accent?: 'blue' | 'purple' | 'cyan' | 'default';
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  accent = 'default',
  centered = true
}) => {
  const getGradientColors = () => {
    switch (accent) {
      case 'blue':
        return {
          from: "from-[#00c3ff]",
          to: "to-[#4f8efc]"
        };
      case 'purple':
        return {
          from: "from-[#c961de]",
          to: "to-[#9932cc]"
        };
      case 'cyan':
        return {
          from: "from-[#00c3ff]",
          to: "to-[#00bfff]"
        };
      default:
        return {
          from: "from-[#00c3ff]",
          to: "to-[#c961de]"
        };
    }
  };

  const { from, to } = getGradientColors();
  
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <GradientText from={from} to={to}>{title}</GradientText>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
