
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-autism-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link to="/" className="btn-primary">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
