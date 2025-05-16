
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-autism-blue text-white' : '';
  };

  return (
    <nav className="bg-gray-100 shadow-md py-3 border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <Link to="/" className={`nav-link ${isActive('/')}`}>
          الرئيسية
        </Link>
        <Link to="/about-autism" className={`nav-link ${isActive('/about-autism')}`}>
          ما هو التوحد؟
        </Link>
        <Link to="/for-teachers" className={`nav-link ${isActive('/for-teachers')}`}>
          للمعلمين
        </Link>
        <Link to="/for-parents" className={`nav-link ${isActive('/for-parents')}`}>
          لأولياء الأمور
        </Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
          اتصل بنا
        </Link>
        <Link to="/questionnaire" className={`nav-link ${isActive('/questionnaire')}`}>
          استبيان
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
