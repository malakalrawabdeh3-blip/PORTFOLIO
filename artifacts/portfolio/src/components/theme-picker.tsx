import { motion, AnimatePresence } from "framer-motion";
import { FiSettings, FiX } from "react-icons/fi";
import { useState } from "react";
import { useAccentColor, AccentColor } from "./accent-color-provider";

const colors: { id: AccentColor; label: string; hex: string }[] = [
  { id: "purple", label: "بنفسجي", hex: "#9333ea" },
  { id: "blue", label: "أزرق", hex: "#2563eb" },
  { id: "emerald", label: "زمردي", hex: "#059669" },
  { id: "rose", label: "وردي", hex: "#e11d48" },
  { id: "amber", label: "كهرماني", hex: "#d97706" },
];

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { color, setColor } = useAccentColor();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 p-4 glass rounded-2xl border border-border shadow-2xl flex flex-col gap-3"
          >
            <h4 className="text-sm font-bold text-center mb-1">لون السمة</h4>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`w-8 h-8 rounded-full transition-transform hover:scale-110 flex items-center justify-center border-2 border-transparent`}
                  style={{ 
                    backgroundColor: c.hex, 
                    borderColor: color === c.id ? "hsl(var(--foreground))" : "transparent" 
                  }}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="إعدادات المظهر"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {isOpen ? <FiX size={24} /> : <FiSettings size={24} />}
        </motion.div>
      </button>
    </div>
  );
}
