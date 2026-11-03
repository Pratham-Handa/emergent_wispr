import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LanguageContext";

export default function DigitalBoard() {
  const { t, lang } = useLang();
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
    const iv = setInterval(() => setI((v) => v + 1), 4500);
    return () => clearInterval(iv);
  }, [lang]);

  const msg = t.board[i % t.board.length];

  return (
    <button
      data-testid="digital-destination-board"
      onClick={() => setI((v) => v + 1)}
      title="Tap for announcements"
      aria-label="Station announcement board"
      className="block w-full cursor-pointer rounded-md border border-[#3A3427] bg-[#141109] px-5 py-4 text-left shadow-[inset_0_3px_14px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center justify-between font-board text-[10px] tracking-[0.3em] text-[#8A7A4A]">
        <span>{t.hero.boardLabel}</span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFB000]" />
          <span>PC · 01</span>
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={`${lang}-${msg}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          aria-live="polite"
          className="mt-2 font-board text-sm tracking-[0.08em] text-[#FFB000] [text-shadow:0_0_10px_rgba(255,176,0,0.45)] md:text-lg"
        >
          {msg}
        </motion.p>
      </AnimatePresence>
    </button>
  );
}
