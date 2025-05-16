
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { toast } from 'sonner';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '../hooks/use-mobile';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const isMobile = useIsMobile();

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader 
        title="اتصل بنا" 
        subtitle="يسعدنا تواصلك معنا ونسعد باستقبال اقتراحاتك واستفساراتك"
      />
      
      <div className="max-w-6xl mx-auto my-6 md:my-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Contact Form Section */}
            <div className="w-full md:w-2/3 p-5 md:p-8 lg:p-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-autism-blue text-center relative">
                نموذج التواصل
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-1 bg-autism-blue mt-2"></div>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-autism-blue focus:ring-2 focus:ring-autism-blue/20 transition-all pr-10 md:pr-12"
                    placeholder="الاسم الكامل"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-autism-blue">
                    <MessageSquare size={isMobile ? 16 : 20} />
                  </div>
                </div>
                
                <div className="relative">
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-autism-blue focus:ring-2 focus:ring-autism-blue/20 transition-all pr-10 md:pr-12"
                    placeholder="رقم الهاتف"
                    required
                    dir="ltr"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-autism-blue">
                    <Phone size={isMobile ? 16 : 20} />
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 md:p-4 min-h-[120px] md:min-h-[180px] border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-autism-blue focus:outline-none focus:ring-2 focus:ring-autism-blue/20 transition-all pr-10 md:pr-12 resize-none"
                    placeholder="رسالتك..."
                    required
                  />
                  <div className="absolute right-3 top-6 text-autism-blue">
                    <Mail size={isMobile ? 16 : 20} />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 px-4 md:px-8 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={isMobile ? 16 : 18} />
                  إرسال
                </Button>
              </form>
            </div>
            
            {/* Contact Information Section */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-autism-blue to-autism-blue-dark text-white p-5 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                  <Mail className="ml-2" size={isMobile ? 20 : 24} />
                  معلومات الاتصال
                </h3>
                
                <Separator className="mb-4 md:mb-6 bg-white/20" />
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4 space-x-reverse">
                    <Phone className="flex-shrink-0 mt-1" size={isMobile ? 18 : 20} />
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-sm md:text-base">الهاتف:</p>
                      <p className="opacity-80 text-base md:text-lg" dir="ltr">+216 25 278 149</p>
                      <p className="opacity-80 text-base md:text-lg" dir="ltr">+216 23 524 866</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 space-x-reverse">
                    <Mail className="flex-shrink-0 mt-1" size={isMobile ? 18 : 20} />
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-sm md:text-base">البريد الإلكتروني:</p>
                      <p className="opacity-80 mb-1 break-all text-xs md:text-sm">inesmasmoudi711@gmail.com</p>
                      <p className="opacity-80 break-all text-xs md:text-sm">nouhaghattassi262@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17.9975 20C17.9992 19.8358 18 19.6709 18 19.5C18 16.4624 15.5376 14 12.5 14C9.46243 14 7 16.4624 7 19.5C7 19.6709 7.00078 19.8358 7.00253 20" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
