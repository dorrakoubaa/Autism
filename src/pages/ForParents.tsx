
import React from 'react';
import PageHeader from '../components/PageHeader';

const ForParents: React.FC = () => {
  return (
    <div>
      <PageHeader title="دليل لأولياء الأمور" />
      
      <div className="max-w-4xl mx-auto my-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-autism-blue text-center">✅ نصائح مهمة للتعامل مع الأطفال من طيف التوحد</h2>
          
          <ul className="space-y-4 text-lg mb-10">
            <li className="flex gap-3">
              <span className="text-2xl">📖</span>
              <span>وفّر بيئة منظمة وروتينًا يوميًا ثابتًا.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">👂</span>
              <span>استخدم تعليمات بسيطة وواضحة وتحدث ببطء.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🤗</span>
              <span>شجّع على التواصل البصري دون الضغط.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🔄</span>
              <span>تفهّم سلوكيات التكرار؛ فهي وسيلة للتعبير أو التنظيم الذاتي.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">👨‍👩‍👦</span>
              <span>شارك الطفل في أنشطة ممتعة لبناء الثقة والروابط.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🧠</span>
              <span>تعاون مع المدرسة والمعالجين لوضع خطة دعم مشتركة.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-autism-blue text-center">🔎 كيف تكتشف علامات التوحد؟</h2>
          
          <div className="space-y-6 mb-10">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold mb-2">
                <span className="text-xl ml-2">👶</span>
                الرُضّع (0-2 سنوات):
              </p>
              <p>قلة التواصل البصري، تأخر في الابتسام، عدم الاستجابة للاسم.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold mb-2">
                <span className="text-xl ml-2">👦</span>
                الأطفال (3-6 سنوات):
              </p>
              <p>ضعف التفاعل الاجتماعي، اللعب الانفرادي، تأخر الكلام أو عدمه.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold mb-2">
                <span className="text-xl ml-2">👦‍♂️</span>
                المراهقون (7 سنوات فأكثر):
              </p>
              <p>صعوبة في فهم المشاعر، اهتمامات محدودة، قلق اجتماعي أو عجز عن تكوين صداقات.</p>
            </div>
          </div>

          {/* قسم الفيديو */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-autism-blue text-center">🎥 فيديو توعوي لأولياء الأمور</h2>
            <div className="aspect-video w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
              <p className="text-gray-600">فيديو توعوي للأهل</p>
            </div>
          </div>

          {/* قسم التحميلات */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-autism-blue text-center">📂 تحميلات مهمة</h2>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <a 
                href="http://prescolaire.tn/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%8A%D8%A7%D8%A1-%D9%84%D8%AF%D9%85%D8%AC-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D8%B0%D9%88%D9%8A-%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8/?lang=ar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-autism-blue text-xl font-bold hover:underline inline-flex items-center"
              >
                <span className="ml-2">📄</span>
                <span>دليل الأولياء</span>
              </a>
            </div>
          </div>

          {/* قسم أهل الاختصاص */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-autism-blue text-center">🏥 أهل الإختصاص (للتواصل و الإستفسار)</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">🧠 طب نفس أطفال</p>
                <p>الدكتور غانم مطيبع – 26366866</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">👶 طب أطفال</p>
                <p>الدكتور عبد اللطيف قرقوري – 74244422</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">🧬 طب الأعصاب والمخ</p>
                <p>الدكتور أشرف بن صالح – 26222933</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">💬 تقويم النطق والكلام</p>
                <p>الأستاذة ولاء عبيدة – 50536836</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">🥗 أخصائي تغذية</p>
                <p>الأستاذة زينب المصمودي – 29711811</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-bold text-lg mb-1">🧘 علم نفس</p>
                <p>الأستاذة سلوى خليف – 95344592</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow md:col-span-2">
                <p className="font-bold text-lg mb-1">📚 تربية مختصة</p>
                <p>السيد رشيد المنيف – 74225219</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForParents;
