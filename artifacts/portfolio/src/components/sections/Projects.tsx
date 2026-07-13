import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "منصة التداول المالي",
    description: "لوحة تحكم مالية متقدمة تتيح للمستخدمين تتبع محافظهم الاستثمارية وتحليل بيانات السوق في الوقت الفعلي مع رسوم بيانية تفاعلية.",
    image: "/project-1.jpg",
    tags: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "متجر إلكتروني عصري",
    description: "تجربة تسوق سلسة مع تصميم بسيط وأنيق، يوفر تصفح سريع، فلاتر ذكية، وإدارة متكاملة لسلة المشتريات وعمليات الدفع.",
    image: "/project-2.jpg",
    tags: ["Next.js", "Zustand", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "محفظة العملات الرقمية",
    description: "منصة Web3 تتيح للمستخدمين إدارة أصولهم الرقمية بواجهة مستخدم زجاجية داكنة وجذابة، مع دعم لعدة شبكات بلوكتشين.",
    image: "/project-3.jpg",
    tags: ["React", "Web3.js", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "منصة العقارات الذكية",
    description: "موقع هبوط لشركة عقارات يتميز بخطوط عريضة وصور عالية الجودة لاستعراض أحدث العقارات المتاحة للبيع والإيجار.",
    image: "/project-4.jpg",
    tags: ["Next.js", "Radix UI", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            أحدث <span className="text-primary">المشاريع</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            نماذج من أعمالي السابقة التي تبرز مهاراتي في تحويل المفاهيم والأفكار إلى منتجات رقمية تعمل بكفاءة عالية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 z-10"></div>
                
                {/* Links overlays */}
                <div className="absolute bottom-6 left-6 z-20 flex gap-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.liveUrl} className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg" aria-label="رابط المشروع">
                    <FiExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-border" aria-label="كود المشروع">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col z-20 -mt-12 bg-card relative rounded-t-[2rem]">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
مشاهدة المزيد من الأعمال
            <FiGithub className="text-xl" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
