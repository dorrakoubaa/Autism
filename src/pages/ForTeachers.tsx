
import React from 'react';
import PageHeader from '../components/PageHeader';

const ForTeachers: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="للمعلمين" 
        subtitle="ممارسات تربوية فعالة لإدماج الأطفال ذوي طيف التوحد في الوسط المدرسي"
      />
      
      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-autism-blue text-center">استراتيجيات تربوية لدمج الأطفال ذوي طيف التوحد</h2>
          <p className="text-lg mb-8">فيما يلي بعض الممارسات التربوية المُوصى بها لتيسير إدماج الأطفال ذوي طيف التوحد في الفصول الدراسية:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* التوصية الأولى */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="text-3xl text-autism-blue">🏠</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-autism-blue">تهيئة بيئة تربوية دامجة</h3>
                <ul className="list-disc pr-6">
                  <li className="mb-2">توفير جدول زمني مرئي يتضمّن صورًا ورموزًا.</li>
                  <li className="mb-2">تقسيم فضاء القسم لأركان واضحة.</li>
                  <li>تقليل المحفزات الحسية المفرطة.</li>
                </ul>
              </div>
            </div>

            {/* التوصية الثانية */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="text-3xl text-autism-blue">💬</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-autism-blue">اعتماد التواصل التربوي الفعّال</h3>
                <ul className="list-disc pr-6">
                  <li className="mb-2">استعمال لغة بسيطة مدعّمة بصور أو إشارات.</li>
                  <li className="mb-2">اللجوء إلى وسائل AAC عند الحاجة.</li>
                  <li>التفاعل الإيجابي مع تعبيرات الطفل.</li>
                </ul>
              </div>
            </div>

            {/* التوصية الثالثة */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="text-3xl text-autism-blue">👥</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-autism-blue">تنمية التفاعل الاجتماعي</h3>
                <ul className="list-disc pr-6">
                  <li className="mb-2">تنظيم أنشطة جماعية تعاونية.</li>
                  <li className="mb-2">تهيئة الأقران وتوعيتهم بمفهوم الاختلاف.</li>
                  <li>تعزيز ثقة الطفل بنفسه عبر التشجيع.</li>
                </ul>
              </div>
            </div>

            {/* التوصية الرابعة */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="text-3xl text-autism-blue">🤝</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-autism-blue">شراكة مستمرة مع الأسرة</h3>
                <ul className="list-disc pr-6">
                  <li className="mb-2">التواصل المنتظم مع الأسرة لتتبع تقدم الطفل.</li>
                  <li className="mb-2">تشجيع مشاركة الأسرة في الأنشطة الصفية.</li>
                  <li>تنظيم ورش عمل مشتركة بين المعلمين والأسر.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* قسم الفيديو */}
          <div className="mb-10">
            <div className="aspect-video w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <video 
      controls 
      style={{ maxWidth: '100%', height: 'auto' }} 
      aria-label="فيديو توعوي لأولياء الأمور " 
    >
      <source src="/src/Image/video.mp4" type="video/mp4" />
      فيديو توعوي لأولياء الأمور.
    </video>            </div>
          </div>

          {/* قسم الموارد */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-autism-blue text-center">موارد مفيدة للمعلمين</h3>
            <ul className="pr-6 space-y-3">
              <li>
                <a 
                  href="http://www.femmes.gov.tn/wp-content/uploads/2023/04/Guide-autisme-.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-autism-blue font-semibold hover:underline flex items-center gap-2"
                >
                  <span>📄</span>
                  <span>تحميل دليل المعلمين التونسي لدمج التلاميذ ذوي طيف التوحد (PDF)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.autismtech.com/apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-autism-blue font-semibold hover:underline flex items-center gap-2"
                >
                  <span>📱</span>
                  <span>أفضل التطبيقات الرقمية لدعم التعلم لدى أطفال التوحد</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/watch?v=ZxA5w9aK1N8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-autism-blue font-semibold hover:underline flex items-center gap-2"
                >
                  <span>🎬</span>
                  <span>فيديو تربوي: ممارسات صفّية فعالة مع تلاميذ طيف التوحد</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForTeachers;
