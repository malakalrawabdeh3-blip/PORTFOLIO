import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiFigma, SiFramer, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB", level: 95 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF", level: 90 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 98 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80 },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF", level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 75 },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            الترسانة <span className="text-primary">التقنية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            مجموعة الأدوات والتقنيات التي أعتمد عليها لتحويل الأفكار المعقدة إلى منتجات رقمية سلسة وقابلة للتطوير.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              ></div>
              
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center bg-background shadow-sm border border-border group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  <skill.icon className="text-3xl dark:hidden" style={{ color: skill.color }} />
                  <skill.icon className="text-3xl hidden dark:block" style={{ color: skill.darkColor || skill.color }} />
                </div>
                <span className="text-2xl font-black text-muted-foreground/30 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">مستوى الإتقان</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
