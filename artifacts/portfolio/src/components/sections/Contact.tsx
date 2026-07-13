import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                لنتحدث عن <span className="text-primary">مشروعك القادم</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                سواء كان لديك فكرة مشروع واضحة أو مجرد استفسار، أنا دائماً مرحب بالتواصل ومناقشة التحديات التقنية الجديدة.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-medium">البريد الإلكتروني</h4>
                  <a href="mailto:hello@example.com" className="text-lg font-bold hover:text-primary transition-colors">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-medium">الهاتف</h4>
                  <a href="tel:+966500000000" className="text-lg font-bold hover:text-primary transition-colors" dir="ltr">+966 50 000 0000</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-medium">الموقع</h4>
                  <p className="text-lg font-bold">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-10 rounded-[2rem] shadow-xl relative"
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-card rounded-[2rem] flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="text-4xl" />
                </div>
                <h3 className="text-3xl font-bold mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-muted-foreground">شكراً لتواصلك، سأقوم بالرد عليك في أقرب وقت ممكن.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold">الاسم الكريم</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="أحمد محمد"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold">الموضوع</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="عنوان رسالتك"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold">الرسالة</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="كيف يمكنني مساعدتك؟"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                ) : (
                  <>
                    إرسال الرسالة
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
