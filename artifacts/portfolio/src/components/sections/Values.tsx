import { motion } from "framer-motion";
import { FiMessageCircle, FiUsers, FiClock, FiTrendingUp, FiTool, FiZap } from "react-icons/fi";

const values = [
  {
    title: "التواصل الفعال",
    description: "أؤمن بأن التواصل الواضح هو حجر الأساس لأي مشروع ناجح. أحرص على إبقاء الجميع في نفس الصورة.",
    icon: FiMessageCircle,
  },
  {
    title: "العمل الجماعي",
    description: "أزدهر في البيئات التعاونية، حيث تتلاقى الأفكار المختلفة لبناء شيء أعظم من مجموع أجزائه.",
    icon: FiUsers,
  },
  {
    title: "الالتزام بالمواعيد",
    description: "أحترم الوقت وأقدر المواعيد النهائية. التسليم في الوقت المحدد مع الحفاظ على الجودة هو معياري.",
    icon: FiClock,
  },
  {
    title: "التطوير المستمر",
    description: "التكنولوجيا تتطور بسرعة، وأنا كذلك. أستثمر باستمرار في تعلم أحدث التقنيات وأفضل الممارسات.",
    icon: FiTrendingUp,
  },
  {
    title: "حل المشكلات",
    description: "لا أرى المشاكل كعقبات، بل كتحديات ممتعة تنتظر الحلول الهندسية الإبداعية والفعالة.",
    icon: FiTool,
  },
  {
    title: "التفكير الإبداعي",
    description: "أتجاوز الحلول التقليدية وأبحث دائماً عن الزوايا المبتكرة التي تميز المنتج وتجعله استثنائياً.",
    icon: FiZap,
  },
];

export function Values() {
  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            قيم <span className="text-primary">العمل</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            المبادئ التي توجه طريقتي في العمل وتضمن تقديم نتائج تفوق التوقعات في كل مرة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <value.icon className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
