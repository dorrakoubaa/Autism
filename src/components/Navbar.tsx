
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-autism-blue text-white scale-105' : '';
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-gray-50 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg text-autism-blue flex items-center gap-2">
          <div className="bg-autism-blue text-white w-8 h-8 flex items-center justify-center rounded-full">م</div>
          <span className="hidden md:inline">معًا لدمجٍ أفضل</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-1">
          <NavLink to="/" isActive={isActive('/')}>الرئيسية</NavLink>
          <NavLink to="/about-autism" isActive={isActive('/about-autism')}>ما هو التوحد؟</NavLink>
          <NavLink to="/for-teachers" isActive={isActive('/for-teachers')}>للمعلمين</NavLink>
          <NavLink to="/for-parents" isActive={isActive('/for-parents')}>لأولياء الأمور</NavLink>
          <NavLink to="/questionnaire" isActive={isActive('/questionnaire')}>استبيان</NavLink>
          <NavLink to="/contact" isActive={isActive('/contact')}>اتصل بنا</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-autism-blue"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4">
              <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</MobileNavLink>
              <MobileNavLink to="/about-autism" isActive={isActive('/about-autism')} onClick={() => setIsMobileMenuOpen(false)}>ما هو التوحد؟</MobileNavLink>
              <MobileNavLink to="/for-teachers" isActive={isActive('/for-teachers')} onClick={() => setIsMobileMenuOpen(false)}>للمعلمين</MobileNavLink>
              <MobileNavLink to="/for-parents" isActive={isActive('/for-parents')} onClick={() => setIsMobileMenuOpen(false)}>لأولياء الأمور</MobileNavLink>
              <MobileNavLink to="/questionnaire" isActive={isActive('/questionnaire')} onClick={() => setIsMobileMenuOpen(false)}>استبيان</MobileNavLink>
              <MobileNavLink to="/contact" isActive={isActive('/contact')} onClick={() => setIsMobileMenuOpen(false)}>اتصل بنا</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`nav-link transition-all hover:bg-autism-blue-light ${isActive}`}
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`py-3 px-4 border-b border-gray-100 last:border-0 ${
      isActive ? 'text-autism-blue font-bold' : 'text-gray-700'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
