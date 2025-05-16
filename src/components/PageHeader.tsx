
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-autism-blue-dark text-white py-8 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
