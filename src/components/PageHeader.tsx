
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-gradient-to-r from-autism-blue to-autism-blue-dark text-white py-10 md:py-16 px-4 text-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute w-40 md:w-96 h-40 md:h-96 rounded-full border-8 border-white top-[-60px] md:top-[-120px] right-[-30px] md:right-[-60px] opacity-20"></div>
        <div className="absolute w-32 md:w-72 h-32 md:h-72 rounded-full border-4 border-white bottom-[-20px] md:bottom-[-40px] left-[5%] md:left-[10%] opacity-30"></div>
        <div className="absolute w-28 md:w-64 h-28 md:h-64 rounded-full bg-white/10 top-[20%] right-[20%] md:right-[30%] blur-xl"></div>
        <div className="absolute w-full h-10 md:h-20 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rotate-45 top-1/3 -right-full animate-[shimmer_8s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 text-shadow-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed px-2 md:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
