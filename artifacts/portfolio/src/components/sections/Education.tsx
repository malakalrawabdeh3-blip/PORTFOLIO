import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";

const educations = [
  {
    degree: "بكالوريوس هندسة البرمجيات",
    university: "جامعة الملك سعود",
    date: "2012 - 2016",
    description: "تخرجت بمرتبة الشرف. درست أسس علوم الحاسب، هندسة البرمجيات، تصميم النظم، الخوارزميات، وهياكل البيانات.",
    icon: FiBookOpen
  },
  {
    degree: "شهادة مطور واجهات متقدم",
    university: "Udacity Nanodegree",
    date: "2017",
    description: "برنامج مكثف يركز على بناء تطبيقات ويب متجاوبة، الأداء العالي، وحالة التطبيق المتقدمة باستخدام أحدث تقنيات الويب.",
    icon: FiAward
  }
];

export function Education() {
  return (
    <section className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            الرحلة <span className="text-primary">الأكاديمية</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <edu.icon className="text-2xl" />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                <span className="text-sm font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {edu.date}
                </span>
              </div>
              
              <h4 className="text-primary font-medium mb-4">{edu.university}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
