import React, { createContext, useContext, useEffect, useState } from "react";

export type AccentColor = "purple" | "blue" | "emerald" | "rose" | "amber";

interface AccentColorContextType {
  color: AccentColor;
  setColor: (color: AccentColor) => void;
}

const AccentColorContext = createContext<AccentColorContextType>({
  color: "purple",
  setColor: () => {},
});

export function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<AccentColor>(() => {
    return (localStorage.getItem("portfolio-accent") as AccentColor) || "purple";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove all theme classes
    root.classList.remove(
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-rose",
      "theme-amber"
    );
    // Add current theme class
    root.classList.add(`theme-${color}`);
    localStorage.setItem("portfolio-accent", color);
  }, [color]);

  return (
    <AccentColorContext.Provider value={{ color, setColor }}>
      {children}
    </AccentColorContext.Provider>
  );
}

export const useAccentColor = () => useContext(AccentColorContext);
