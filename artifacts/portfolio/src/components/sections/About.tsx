import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              رحلتي في عالم <br/>
              <span className="text-primary">التطوير والتصميم</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              بدأت رحلتي مع البرمجة من شغف عميق ببناء أشياء يمكن للناس التفاعل معها. لم يكن الأمر مجرد كتابة كود، بل كان يتعلق بفهم كيف يمكن للتصميم الجيد والأداء السريع أن يغيرا نظرة المستخدم للمنتج بالكامل.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              على مدار السنوات الخمس الماضية، عملت مع شركات ناشئة ومؤسسات كبيرة لبناء تطبيقات ويب معقدة وواجهات مستخدم مذهلة. أؤمن بأن أفضل المنتجات هي تلك التي تجمع بين الجمال الفني والهندسة البرمجية المتينة.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-4">
              <div className="glass px-6 py-4 rounded-xl border border-border flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-black text-primary mb-1">50+</div>
                <div className="text-sm font-medium text-muted-foreground">مشروع مكتمل</div>
              </div>
              <div className="glass px-6 py-4 rounded-xl border border-border flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-black text-primary mb-1">30+</div>
                <div className="text-sm font-medium text-muted-foreground">عميل سعيد</div>
              </div>
              <div className="glass px-6 py-4 rounded-xl border border-border flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-black text-primary mb-1">99%</div>
                <div className="text-sm font-medium text-muted-foreground">دقة في التسليم</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-border bg-secondary p-8 relative z-10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="مساحة العمل" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Abstract decorative shapes */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
