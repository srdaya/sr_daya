
import React from 'react';

interface PillProps {
  text: string;
  icon?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ text, icon }) => {
  return (
    <span className="inline-flex items-center bg-cyan-700/50 hover:bg-cyan-600/70 text-cyan-100 text-sm font-medium px-4 py-2 rounded-full shadow-md transition-colors duration-200">
      {icon}
      {text}
    </span>
  );
};

export default Pill;
