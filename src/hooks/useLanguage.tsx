import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  isHindi: boolean;
  toggleLanguage: () => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'hi',
  isHindi: true,
  toggleLanguage: () => {},
  t: (_en, hi) => hi,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('wedding-lang');
      if (saved === 'en' || saved === 'hi') return saved;
    } catch {}
    return 'hi';
  });

  useEffect(() => {
    try {
      localStorage.setItem('wedding-lang', lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  }, []);

  const t = useCallback(
    (en: string, hi: string) => (lang === 'hi' ? hi : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, isHindi: lang === 'hi', toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

