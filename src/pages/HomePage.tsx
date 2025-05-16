
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="معًا لدمجٍ أفضل" 
        subtitle="مشروع أكاديمي يهدف إلى تعزيز الدمج المدرسي للأطفال ذوي طيف التوحد من خلال تقديم محتوى علمي، وموارد تربوية، وأدوات مساعدة موجهة للمعلمين وأولياء الأمور، في إطار من المسؤولية المجتمعية والاحترام للتنوع."
      />
      
      <HeroSection 
        title="رؤية المشروع"
        subtitle="يسعى هذا الموقع إلى تقديم أدوات معرفية وتربوية داعمة لدمج فعّال ومُستدام للأطفال ذوي طيف التوحد داخل المؤسسات التعليمية، وفق أحدث المقاربات والممارسات المعتمدة في مجال التربية الدامجة."
      />

      <div className="section-container">
        <h3 className="text-xl font-bold mb-4 text-autism-blue-dark">أهداف المشروع</h3>
        
        <ul className="pr-6 list-disc mb-6">
          <li className="mb-2">رفع مستوى الوعي المجتمعي بطيف التوحد وخصائصه التعليمية.</li>
          <li className="mb-2">تعزيز مفاهيم الدمج الشامل في البيئة المدرسية.</li>
          <li className="mb-2">دعم المعلمين عبر موارد تدريبية مبنية على أسس علمية.</li>
          <li className="mb-2">تمكين أولياء الأمور من خلال نصائح وممارسات فعّالة للتعامل مع التحديات اليومية.</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/about-autism" className="btn-primary">
            ابدأ الآن
          </Link>
          <a href="#resources" className="btn-primary">
            تحميل الموارد
          </a>
        </div>

        <div className="text-center mt-8">
          <a href="mailto:autismintegration@gmail.com" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md inline-block transition-colors">
            راسلنا
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
