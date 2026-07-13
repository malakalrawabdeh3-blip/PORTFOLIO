import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "الرئيسية", href: "#home" },
  { name: "عني", href: "#about" },
  { name: "المهارات", href: "#skills" },
  { name: "المشاريع", href: "#projects" },
  { name: "الخبرات", href: "#experience" },
  { name: "التواصل", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-black tracking-tighter text-foreground"
        >
          أحمد<span className="text-primary">.ديف</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-2 ${
                    activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-px h-6 bg-border mx-2"></div>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-border p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
