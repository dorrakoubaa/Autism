
import React from 'react';
import { Mail, MessageSquare, Heart, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-autism-blue">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="bg-gradient-to-r from-autism-blue to-autism-blue-dark text-white pt-10 pb-6 px-4 relative z-10">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-end gap-2">
                <Heart size={20} className="fill-white" />
                من نحن
              </h3>
              <p className="mb-4 opacity-90 text-sm">
                مشروع أكاديمي يهدف إلى تعزيز الدمج المدرسي للأطفال ذوي طيف التوحد من خلال تقديم محتوى علمي وموارد تربوية.
              </p>
            </div>

            {/* Second Column */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <a href="#" className="bg-white text-autism-blue-dark p-2 rounded-full hover:bg-opacity-90 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white text-autism-blue-dark p-2 rounded-full hover:bg-opacity-90 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-white text-autism-blue-dark p-2 rounded-full hover:bg-opacity-90 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Third Column */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <MessageSquare size={20} />
                معلومات الاتصال
              </h3>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} className="opacity-80" />
                <span className="opacity-90">autismintegration@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="h-px bg-white/20 my-6"></div>

          <div className="text-center">
            <p className="text-sm opacity-80">&copy; {currentYear} - مشروع معًا لدمجٍ أفضل. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
