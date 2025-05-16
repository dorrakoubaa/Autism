
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Brain } from 'lucide-react';

const HomePage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      <PageHeader 
        title="معًا لدمجٍ أفضل" 
        subtitle="مشروع أكاديمي يهدف إلى تعزيز الدمج المدرسي للأطفال ذوي طيف التوحد من خلال تقديم محتوى علمي، وموارد تربوية، وأدوات مساعدة موجهة للمعلمين وأولياء الأمور، في إطار من المسؤولية المجتمعية والاحترام للتنوع."
      />
      
      <HeroSection 
        title="رؤية المشروع"
        subtitle="يسعى هذا الموقع إلى تقديم أدوات معرفية وتربوية داعمة لدمج فعّال ومُستدام للأطفال ذوي طيف التوحد داخل المؤسسات التعليمية، وفق أحدث المقاربات والممارسات المعتمدة في مجال التربية الدامجة."
        imageUrl="/placeholder.svg"
      />

      <motion.div 
        className="section-container relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-2xl font-bold mb-8 text-autism-blue-dark text-center"
          variants={itemVariants}
        >
          أهداف المشروع
        </motion.h3>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-10"
          variants={containerVariants}
        >
          <motion.div 
            className="feature-card flex items-start gap-4 p-6 transition-all hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="bg-autism-blue rounded-full p-3 text-white">
              <Brain size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-autism-blue">رفع مستوى الوعي</h4>
              <p>رفع مستوى الوعي المجتمعي بطيف التوحد وخصائصه التعليمية.</p>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card flex items-start gap-4 p-6 transition-all hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="bg-autism-blue rounded-full p-3 text-white">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-autism-blue">تعزيز الدمج الشامل</h4>
              <p>تعزيز مفاهيم الدمج الشامل في البيئة المدرسية.</p>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card flex items-start gap-4 p-6 transition-all hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="bg-autism-blue rounded-full p-3 text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-autism-blue">دعم المعلمين</h4>
              <p>دعم المعلمين عبر موارد تدريبية مبنية على أسس علمية.</p>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card flex items-start gap-4 p-6 transition-all hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="bg-autism-blue rounded-full p-3 text-white">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-autism-blue">تمكين أولياء الأمور</h4>
              <p>تمكين أولياء الأمور من خلال نصائح وممارسات فعّالة للتعامل مع التحديات اليومية.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-autism-blue-light to-white p-8 rounded-2xl shadow-md my-12"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-4 text-autism-blue-dark text-center">كيف يمكننا المساعدة؟</h3>
          <p className="text-center max-w-3xl mx-auto mb-6">
            نقدم مجموعة متنوعة من الموارد والأدوات المصممة لمساعدة المعلمين وأولياء الأمور في تعزيز تجربة تعليمية شاملة للأطفال ذوي طيف التوحد.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-10"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link to="/about-autism" className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
              <span>تعرف على التوحد</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link to="/for-teachers" className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
              <span>دليل المعلمين</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link to="/for-parents" className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
              <span>دليل الأهل</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link to="/contact" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full inline-block transition-all hover:shadow-lg">
            تواصل معنا
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
