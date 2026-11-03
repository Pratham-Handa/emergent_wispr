import { createContext, useContext, useEffect, useState } from "react";
import { STRINGS } from "../data/content";

const LanguageContext = createContext(null);

const LANGS = [
  { id: "en", label: "EN" },
  { id: "hi", label: "हिंदी" },
  { id: "mr", label: "मराठी" },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("pc-lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("pc-lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

export function LanguageToggle({ idPrefix = "lang", className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full border-2 border-[#1A1A1A] bg-[#E8E3D8] p-1 ${className}`}
      data-testid={`${idPrefix}-toggle`}
    >
      {LANGS.map((l) => (
        <button
          key={l.id}
          data-testid={`${idPrefix}-${l.id}`}
          onClick={() => setLang(l.id)}
          aria-pressed={lang === l.id}
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 ${
            lang === l.id ? "bg-[#1A1A1A] text-[#F4F1EA]" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
