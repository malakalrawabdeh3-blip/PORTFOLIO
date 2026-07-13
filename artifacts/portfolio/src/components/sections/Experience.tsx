import { motion } from "framer-motion";

const experiences = [
  {
    role: "مهندس واجهات أمامية أول",
    company: "شركة التقنية المتقدمة",
    date: "2021 - الحاضر",
    description: "قيادة فريق تطوير الواجهات لبناء تطبيقات ويب معقدة باستخدام React و Next.js. تحسين أداء التطبيقات بنسبة 40% وتطبيق معايير إمكانية الوصول.",
  },
  {
    role: "مطور واجهات أمامية",
    company: "وكالة الإبداع الرقمي",
    date: "2018 - 2021",
    description: "تصميم وتطوير واجهات مستخدم تفاعلية لعملاء في قطاعات التجارة الإلكترونية والتعليم. تحويل تصاميم Figma إلى كود نظيف وقابل لإعادة الاستخدام.",
  },
  {
    role: "مطور ويب مستقل",
    company: "العمل الحر",
    date: "2016 - 2018",
    description: "بناء مواقع تعريفية ومتاجر إلكترونية للشركات الصغيرة والمتوسطة. التعامل المباشر مع العملاء لفهم متطلباتهم وتحويلها إلى منتجات رقمية.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            المسار <span className="text-primary">المهني</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute right-4 md:right-1/2 top-0 bottom-0 w-1 bg-border transform md:translate-x-0.5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-primary"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Dot */}
                <div className="absolute right-4 md:right-1/2 transform translate-x-1.5 md:translate-x-2.5 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 pr-12 md:px-12 ${index % 2 === 0 ? "text-right" : "md:text-left text-right"}`}
                >
                  <div className="glass p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground font-medium mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
