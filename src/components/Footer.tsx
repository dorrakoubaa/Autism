
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-autism-blue-dark text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm mb-2">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - مشروع معًا لدمجٍ أفضل</p>
        <p className="text-sm">autismintegration@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
