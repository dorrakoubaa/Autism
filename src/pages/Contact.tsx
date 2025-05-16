
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !message) {
      toast.error('الرجاء تعبئة جميع الحقول');
      return;
    }
    
    // Send email logic would go here in a real application
    toast.success('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً');
    
    // Reset form
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div>
      <PageHeader 
        title="اتصل بنا" 
        subtitle="يسعدنا تواصلك معنا ونسعد باستقبال اقتراحاتك واستفساراتك"
      />
      
      <div className="max-w-4xl mx-auto my-10 px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-autism-blue text-center">نموذج التواصل</h2>
          
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* نموذج الاتصال */}
            <div className="w-full md:w-2/3 bg-blue-50 p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">الاسم الكامل:</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block font-bold mb-2">رقم الهاتف:</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border rounded-lg" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold mb-2">رسالتك:</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border rounded-lg min-h-[150px]" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg w-full font-bold transition-colors"
                >
                  إرسال
                </button>
              </form>
            </div>
            
            {/* معلومات الاتصال */}
            <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-autism-blue">معلومات الاتصال</h3>
              
              <p className="mb-4">
                <strong className="block mb-1">الهاتف:</strong>
                <span className="inline-block" dir="ltr">+21625278149</span>
                <span> / </span>
                <span className="inline-block" dir="ltr">+21623524866</span>
              </p>
              
              <p>
                <strong className="block mb-1">البريد الإلكتروني:</strong>
                <span className="block mb-1">inesmasmoudi711@gmail.com</span>
                <span>nouhaghattassi262@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
