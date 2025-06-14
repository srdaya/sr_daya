
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl ring-1 ring-slate-700 hover:ring-cyan-500 transition-all duration-300">
      <div className="flex items-center mb-6">
        {icon && <span className="mr-3">{icon}</span>}
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
      </div>
      <div className="text-slate-300 space-y-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
