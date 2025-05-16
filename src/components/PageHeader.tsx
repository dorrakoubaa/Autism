
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gradient-to-r from-autism-blue to-autism-blue-dark text-white py-12 px-4 text-center relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in delay-100">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white"></div>
      </div>
    </header>
  );
};

export default PageHeader;
