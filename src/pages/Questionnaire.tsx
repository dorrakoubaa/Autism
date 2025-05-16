import React, { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import { toast } from 'sonner';
import { usePDF } from 'react-to-pdf';

interface Question {
  id: number;
  text: string;
  answer: string | null;
}

const Questionnaire: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: 'هل يستجيب الطفل لاسمه عندما تناديه؟',
      answer: null
    },
    {
      id: 2,
      text: 'هل ينظر الطفل في عينيك عند التحدث إليه أو اللعب معه؟',
      answer: null
    },
    {
      id: 3,
      text: 'هل يشارك الطفل في ألعاب تفاعلية مثل "باي باي" أو "الغميضة"؟',
      answer: null
    },
    {
      id: 4,
      text: 'هل يقلد الطفل تعابير وجهك أو حركاتك؟',
      answer: null
    },
    {
      id: 5,
      text: 'هل يقوم بحركات متكررة مثل رفرفة اليدين أو الدوران؟',
      answer: null
    },
    {
      id: 6,
      text: 'هل يستخدم الطفل كلمات للتعبير عن احتياجاته؟',
      answer: null
    },
    {
      id: 7,
      text: 'هل يستخدم الطفل الإشارة (بإصبعه) لطلب شيء أو الإشارة إليه؟',
      answer: null
    },
    {
      id: 8,
      text: 'هل يركز الطفل بشكل مفرط على أشياء معينة أو ألعاب بطريقة غير معتادة؟',
      answer: null
    },
    {
      id: 9,
      text: 'هل يُظهر الطفل تأخرًا في اللغة مقارنة بالأطفال في نفس العمر؟',
      answer: null
    },
    {
      id: 10,
      text: 'هل يجد الطفل صعوبة في تغيير الروتين أو الانتقال من نشاط إلى آخر؟',
      answer: null
    }
  ]);

  const [result, setResult] = useState<{
    percentage: number;
    diagnosis: string;
  } | null>(null);

  // PDF generation setup
  const { toPDF, targetRef } = usePDF({
    filename: 'تقرير_استبيان_التوحد.pdf',
    page: { margin: 20 }
  });

  const handleAnswerChange = (questionId: number, answer: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? {...q, answer} : q
    ));
  };

  const calculateResults = () => {
    const unansweredQuestions = questions.filter(q => q.answer === null);
    
    if (unansweredQuestions.length > 0) {
      toast.error('الرجاء الإجابة على جميع الأسئلة');
      return;
    }
    
    const positiveAnswers = questions.filter(q => q.answer === 'نعم').length;
    const percentage = (positiveAnswers / questions.length) * 100;
    
    const diagnosis = percentage >= 60
      ? 'نسبة عالية من مؤشرات التوحد. يُنصح بمراجعة مختص.'
      : 'نسبة منخفضة من مؤشرات التوحد.';
    
    setResult({
      percentage,
      diagnosis
    });

    setTimeout(() => {
      const resultElement = document.getElementById('result');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const generatePDF = () => {
    if (!result) {
      toast.error('الرجاء حساب النتيجة أولاً');
      return;
    }
    toast.success('جاري تحميل التقرير...');
    toPDF();
  };

  return (
    <div>
      <PageHeader title="استبيان تقييم التوحد" />
      
      <div className="max-w-3xl mx-auto my-10 px-4">
        <div ref={targetRef} className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <form>
            {questions.map((question, index) => (
              <div key={question.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                <label className="block font-bold mb-3 text-lg">
                  {index + 1}. {question.text}
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`q${question.id}`} 
                      value="نعم"
                      checked={question.answer === 'نعم'}
                      onChange={() => handleAnswerChange(question.id, 'نعم')}
                      className="w-5 h-5"
                    />
                    <span>نعم ✅</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`q${question.id}`} 
                      value="لا"
                      checked={question.answer === 'لا'}
                      onChange={() => handleAnswerChange(question.id, 'لا')}
                      className="w-5 h-5"
                    />
                    <span>لا ❌</span>
                  </label>
                </div>
              </div>
            ))}
            
            <div className="mt-8">
              <button 
                type="button" 
                onClick={calculateResults}
                className="bg-autism-blue hover:bg-autism-blue-dark text-white py-3 px-6 rounded-lg w-full font-bold transition-colors text-lg"
              >
                احصل على النتيجة وحمّل التقرير PDF
              </button>
            </div>
          </form>
          
          {result && (
            <div 
              id="result" 
              className="mt-8 bg-blue-50 p-6 rounded-lg border-r-4 border-autism-blue text-center"
            >
              <h3 className="text-2xl font-bold mb-3">النتيجة:</h3>
              <p className="text-xl mb-3">{result.percentage.toFixed(2)}%</p>
              <p className="text-xl font-bold">{result.diagnosis}</p>
              
              <button 
                onClick={generatePDF}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-bold transition-colors"
              >
                تحميل التقرير PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;