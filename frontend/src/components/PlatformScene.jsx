import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";
import { useLang } from "./LanguageContext";

const SKYLINE =
  "https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?crop=entropy&cs=srgb&fm=jpg&q=70&w=1600";

export function TrainSVG({ stripe = "#B3352B", id = "train" }) {
  const win = (x) => (
    <rect key={`w${x}`} x={x} y={104} width={36} height={44} rx={3} fill="#26221C" />
  );
  const door = (x) => (
    <g key={`d${x}`}>
      <rect x={x} y={110} width={44} height={126} rx={2} fill="#E6DECA" stroke="#26221C" strokeWidth="2" />
      <line x1={x + 22} y1={110} x2={x + 22} y2={236} stroke="#26221C" strokeWidth="1.5" />
      <rect x={x + 16} y={160} width={12} height={5} fill="#B3352B" />
    </g>
  );
  const label = (x, cid) => (
    <text key={`t${cid}`} x={x} y={216} textAnchor="middle" className="font-board" fontSize="13" fill="#26221C" opacity="0.75" letterSpacing="3">
      PRATHAM EXPRESS · {cid}
    </text>
  );
  const bogie = (x) => <rect key={`b${x}`} x={x} y={252} width={130} height={22} rx={6} fill="#14110B" />;

  return (
    <svg viewBox="0 0 960 286" className="w-full" role="img" aria-label="The Pratham Express local standing at the platform">
      <rect x="10" y="72" width="940" height="16" rx="6" fill="#26221C" />
      <path d="M470 72 l24 -26 l24 26 z" fill="#26221C" opacity="0.9" />
      <path d="M494 46 v-14 M494 32 h-20 M494 32 h20" stroke="#26221C" strokeWidth="3" fill="none" />
      <rect x="10" y="84" width="940" height="152" fill="#F2ECDD" stroke="#26221C" strokeWidth="2" />
      <rect x="10" y="170" width="940" height="22" fill={stripe} />
      <rect x="348" y="84" width="8" height="152" fill="#D9D0BC" />
      <rect x="652" y="84" width="8" height="152" fill="#D9D0BC" />
      <rect x="22" y="98" width="54" height="42" rx="4" fill="#26221C" />
      <rect x="20" y="146" width="58" height="22" rx="2" fill="#26221C" />
      <text x="49" y="161" textAnchor="middle" className="font-board" fontSize="9" fill="#FFB000" letterSpacing="1">
        PRATHAM
      </text>
      <circle cx="30" cy="226" r="5" fill="#F5B31B" />
      <circle cx="64" cy="226" r="5" fill="#F5B31B" />
      {door(88)}
      {[148, 196, 244, 292].map(win)}
      {label(300, "C1")}
      {door(640)}
      {[160, 208, 256, 304].map(win)}
      {label(600, "C2")}
      {door(742)}
      {[810, 858, 906].map(win)}
      {label(850, "C3")}
      <rect x="10" y="236" width="940" height="24" fill="#26221C" />
      {[30, 180, 400, 620, 840].map(bogie)}
    </svg>
  );
}

export default function PlatformScene() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [aunty, setAunty] = useState(false);
  const [trainArrived, setTrainArrived] = useState(false);
  const { scrollY } = useScroll();
  const ySky = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <div data-testid="platform-scene" className="relative overflow-hidden">
      <motion.img
        src={SKYLINE}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y: reduce ? 0 : ySky }}
        className="absolute inset-x-0 top-0 h-44 w-full object-cover opacity-10 grayscale"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#F4F1EA] via-[#F4F1EA]/40 to-transparent" />

      <div className="relative z-20 flex justify-center pt-6 md:justify-start md:pl-10">
        <div className="relative">
          <div className="flex h-4 justify-center gap-16">
            <span className="w-px bg-[#3A3427]" />
            <span className="w-px bg-[#3A3427]" />
          </div>
          <div className="rounded-sm border-2 border-[#1A1A1A] bg-[#F5B31B] px-6 py-1.5 font-display text-lg font-semibold tracking-wide text-[#1A1A1A] shadow-[5px_5px_0_rgba(26,26,26,0.25)] md:text-xl">
            प्रथम सेंट्रल <span className="mx-2 opacity-40">|</span> PRATHAM CENTRAL
          </div>
        </div>
      </div>

      <motion.div
        data-testid="train-arrival"
        initial={reduce ? { opacity: 0 } : { x: "108%" }}
        animate={reduce ? { opacity: 1 } : { x: 0 }}
        onAnimationComplete={() => setTrainArrived(true)}
        transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="relative z-10 mt-5 md:mt-7"
      >
        <motion.div
          animate={reduce || !trainArrived ? undefined : { x: [0, 12, 0, -12, 0], y: [0, -1.5, 0, 0.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrainSVG />
        </motion.div>
      </motion.div>

      <div className="relative z-20">
        <div className="h-2.5 w-full bg-[#E8B931]" />
        <div className="relative flex h-14 items-end justify-between bg-[#DCD5C4] px-4 md:px-10">
          <span className="font-display text-sm font-semibold tracking-[0.25em] text-[#1A1A1A]/45">
            {t.hero.platform} · प्लेटफ़ॉर्म 1
          </span>
          <span className="hidden text-xs italic text-[#1A1A1A]/40 md:block">{t.eggs.auntyHint}</span>

          <div className="absolute -top-36 left-[12%] md:-top-40 md:left-[22%]">
            <AnimatePresence>
              {aunty && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute bottom-full left-1/2 mb-3 w-64 -translate-x-1/2 rounded-lg border-2 border-[#1A1A1A] bg-[#FDFBF7] p-3 shadow-[6px_6px_0_rgba(26,26,26,0.2)]"
                  data-testid="aunty-speech-bubble"
                >
                  <p className="text-sm leading-snug text-[#1A1A1A]">“{t.eggs.auntyLabel}”</p>
                  <span className="mt-2 block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50">Aunty · Platform 1</span>
                  <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#1A1A1A] bg-[#FDFBF7]" />
                </motion.div>
              )}
            </AnimatePresence>
            <button
              data-testid="easter-egg-aunty"
              onClick={() => setAunty((v) => !v)}
              aria-label="An aunty waiting on the platform — tap to read her question"
              className="block transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src="/figures/aunty.png"
                alt="An aunty with her jute bag and umbrella, waiting for the train"
                className="h-36 w-auto object-contain drop-shadow-[0_5px_5px_rgba(38,34,28,0.22)] md:h-40"
              />
            </button>
          </div>

          <button
            data-testid="easter-egg-chaiwala"
            onClick={() => toast.success(t.eggs.chaiToast)}
            aria-label="The chaiwala — tap for chai"
            title={t.eggs.chaiHint}
            className="absolute -top-28 right-[6%] transition-transform duration-200 hover:-translate-y-1 md:-top-36 md:right-[10%]"
          >
            <img
              src="/figures/chaiwala.png"
              alt="Illustration of a chaiwala carrying tea"
              className="h-28 w-auto object-contain drop-shadow-[0_5px_5px_rgba(38,34,28,0.22)] md:h-36"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
