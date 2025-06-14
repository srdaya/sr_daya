
import React from 'react';

interface HeroSectionProps {
  name: string;
  tagline: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, tagline, imageUrl }) => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-700 py-16 sm:py-24 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-2xl mx-auto mt-8 mb-6 border-4 border-cyan-500 shadow-lg max-w-xs sm:max-w-sm md:max-w-md"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-cyan-300 max-w-2xl mx-auto">
          {tagline}
        </p>
      </div>
    </header>
  );
};

export default HeroSection;