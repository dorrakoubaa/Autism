
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div 
      className="hero-section h-80"
      style={imageUrl ? { 
        backgroundImage: `linear-gradient(rgba(0, 43, 92, 0.7), rgba(0, 43, 92, 0.7)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <h2 className="text-2xl font-bold mb-4 relative z-10">{title}</h2>
      <p className="max-w-2xl mx-auto relative z-10">{subtitle}</p>
    </div>
  );
};

export default HeroSection;
