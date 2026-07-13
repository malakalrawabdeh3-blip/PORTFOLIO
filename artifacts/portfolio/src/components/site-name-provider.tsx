import React, { createContext, useContext, useState } from "react";

const DEFAULT_NAME = "هاشم الروابدة";
const STORAGE_KEY = "portfolio-visitor-name";

interface SiteNameContextType {
  name: string;
  setName: (name: string) => void;
}

const SiteNameContext = createContext<SiteNameContextType>({
  name: DEFAULT_NAME,
  setName: () => {},
});

export function SiteNameProvider({ children }: { children: React.ReactNode }) {
  const [name, setNameState] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_NAME;
  });

  const setName = (value: string) => {
    const trimmed = value.trim();
    const finalName = trimmed.length > 0 ? trimmed : DEFAULT_NAME;
    setNameState(finalName);
    localStorage.setItem(STORAGE_KEY, finalName);
  };

  return (
    <SiteNameContext.Provider value={{ name, setName }}>
      {children}
    </SiteNameContext.Provider>
  );
}

export const useSiteName = () => useContext(SiteNameContext);
