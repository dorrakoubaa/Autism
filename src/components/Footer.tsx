
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-autism-blue to-autism-blue-dark text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <MessageSquare size={18} className="opacity-80" />
            <p className="text-sm md:text-base">جميع الحقوق محفوظة &copy; {currentYear} - مشروع معًا لدمجٍ أفضل</p>
          </div>
          
          <div className="flex items-center space-x-2 space-x-reverse">
            <Mail size={18} className="opacity-80" />
            <p className="text-sm md:text-base">autismintegration@gmail.com</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full border-4 border-white"></div>
      </div>
    </footer>
  );
};

export default Footer;
