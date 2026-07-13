import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowDown, FiCamera } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const roles = [
  "مطور واجهات أمامية",
  "مصمم تجربة مستخدم",
  "مطور React محترف",
  "صانع تجارب رقمية",
  "شغوف بالتقنية"
];

export function Hero() {
  const [profileImage, setProfileImage] = useState<string>("/hero-portrait.jpg");
  const [roleIndex, setRoleIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("portfolio-profile-image");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        try {
          localStorage.setItem("portfolio-profile-image", base64String);
        } catch (error) {
          console.warn("الصورة كبيرة جداً للحفظ في التخزين المحلي، سيتم استخدامها في الجلسة الحالية فقط.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="home" className="min-h-[100dvh] relative flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background transition-colors duration-500"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent/30 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none transition-colors duration-500"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Content */}
        <div className="flex-1 text-center md:text-right z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">متاح لفرص عمل جديدة</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            أصمم وأطور تجارب <br className="hidden md:block" />
            <span className="text-gradient">رقمية استثنائية</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            أنا هاشم، أدمج بين الكود النظيف والتصميم المذهل لبناء منتجات تترك انطباعاً لا يُنسى. دعنا نصنع المستقبل معاً.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--color-primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <FiMail className="text-xl" />
              لنعمل معاً
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              download
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold text-lg hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 border border-border"
            >
              <FaCode className="text-xl" />
              تحميل السيرة الذاتية
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center md:justify-start gap-6"
          >
            <span className="text-sm text-muted-foreground font-medium">تابعني على:</span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image & Typewriter Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 w-full max-w-md md:max-w-none relative z-10 flex flex-col items-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src={profileImage} 
              alt="صورة شخصية" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover overlay for changing image */}
            <div 
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-16 h-16 rounded-full bg-primary/80 text-white flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FiCamera size={28} />
              </div>
              <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                تغيير الصورة
              </span>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
              <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
                <div className="text-4xl font-black text-primary">5+</div>
                <div className="text-sm font-medium leading-tight">سنوات من<br/>الخبرة</div>
              </div>
            </div>
          </div>

          {/* Animated Skills Text */}
          <div className="mt-8 h-10 overflow-hidden relative w-full flex items-center justify-center max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-primary absolute text-center"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Decorative elements around image */}
          <div className="absolute top-10 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl -z-10"></div>
          <div className="absolute bottom-20 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl -z-10"></div>
        </motion.div>
        
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors hover:bg-primary/5"
        aria-label="التمرير للأسفل"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
