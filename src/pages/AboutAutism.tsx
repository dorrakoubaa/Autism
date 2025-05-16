
import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutAutism: React.FC = () => {
  return (
    <div>
      <PageHeader title="ما هو التوحد؟" />
      
      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-md">
          {/* العمود الأيمن */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-autism-blue">تعريف التوحد:</h2>
            <p className="text-lg mb-6">
              التوحد هو اضطراب في النمو العصبي يؤثر على طريقة تفاعل الشخص مع الآخرين، وكذلك على طريقة تواصله وسلوكه. يظهر عادةً خلال السنوات الثلاث الأولى من حياة الطفل، وقد تختلف شدته من حالة لأخرى.
            </p>

            <div className="flex justify-center mb-6">
              <img 
                src="/src/Image/autisme.jpg" 
                alt="طفل مصاب بالتوحد" 
                className="w-64 h-64 rounded-2xl shadow-md object-cover" 
              />
            </div>

            <div className="bg-autism-blue-light border-r-4 border-autism-blue p-4 rounded-lg my-6 font-bold">
              التوحد ليس مرضًا بل حالة تستمر مدى الحياة، يمكن من خلالها أن يحقق الشخص استقلالًا وتقدمًا كبيرًا بدعم مناسب.
            </div>

            <h2 className="text-2xl font-bold mb-4 text-autism-blue">🔍 أسباب اضطراب طيف التوحد</h2>
            
            <p className="mb-4">اضطراب طيف التوحد لا يُعرف له سبب واحد محدد، بل هو نتيجة لتفاعل عدة عوامل، منها:</p>
            
            <p className="font-bold mb-1">🧬 عوامل وراثية:</p>
            <p className="mb-4">وجود تاريخ عائلي للتوحد. / تغيرات في بعض الجينات التي تؤثر على تطور الدماغ.</p>
            
            <p className="font-bold mb-1">🧠 عوامل بيولوجية:</p>
            <p className="mb-4">اختلافات في تركيب أو وظائف الدماغ. / مشاكل في التواصل بين خلايا الدماغ.</p>
            
            <p className="font-bold mb-1">🌿 عوامل بيئية:</p>
            <p className="mb-4">تعرض الأم أثناء الحمل لبعض المواد الضارة أو الالتهابات. / مضاعفات أثناء الولادة مثل نقص الأكسجين.</p>
            
            <p className="font-bold mb-1">🤰 عوامل أثناء الحمل:</p>
            <p className="mb-4">استخدام بعض الأدوية الخطيرة أثناء الحمل. / نقص التغذية، مثل حمض الفوليك. / التقدم في عمر الوالدين.</p>
            
            <p className="font-bold mb-2">❗ معلومة مهمة:</p>
            <p>اللقاحات لا تسبب التوحد، وهذا مثبت علميًا.</p>
          </div>

          {/* العمود الأيسر */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-autism-blue">السمات الشائعة:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 border-r-4 border-autism-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-autism-blue">🗣️ صعوبات في التواصل</h3>
                <p>سواءً في اللغة المنطوقة أو الإيماءات غير اللفظية مثل تعابير الوجه أو الإشارة.</p>
              </div>
              <div className="bg-blue-50 border-r-4 border-autism-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-autism-blue">🤝 ضعف في التفاعل الاجتماعي</h3>
                <p>صعوبة في فهم مشاعر الآخرين وتكوين علاقات مع الأقران أو البالغين.</p>
              </div>
              <div className="bg-blue-50 border-r-4 border-autism-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-autism-blue">🔁 سلوكيات متكررة</h3>
                <p>مثل تكرار نفس الحركات أو التركيز على اهتمامات ضيقة بشكل مفرط.</p>
              </div>
              <div className="bg-blue-50 border-r-4 border-autism-blue p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-autism-blue">🎧 استجابات حسية غير معتادة</h3>
                <p>فرط أو نقص في الاستجابة للأصوات، الضوء، اللمس أو الروائح.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/Image/autisme 4.jpg" 
                  alt="التوحد 1" 
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/Image/autisme 1.jpg" 
                  alt="التوحد 2" 
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/Image/autisme 2.jpg" 
                  alt="التوحد 3" 
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/Image/autisme 3.jpg" 
                  alt="التوحد 4" 
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAutism;
