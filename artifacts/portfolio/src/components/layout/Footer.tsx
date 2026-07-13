import { FiGithub, FiTwitter, FiLinkedin, FiHeart } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-2xl font-black tracking-tighter text-foreground">
          هاشم<span className="text-primary">.الروابدة</span>
        </div>
        
        <p className="text-muted-foreground flex items-center gap-1 text-sm md:text-base text-center">
          صُنع بحب <FiHeart className="text-destructive fill-destructive" /> في {currentYear} © جميع الحقوق محفوظة.
        </p>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <FiGithub size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <FiLinkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <FiTwitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
