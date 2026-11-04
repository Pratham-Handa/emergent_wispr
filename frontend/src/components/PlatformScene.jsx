import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";
import { useLang } from "./LanguageContext";

const SKYLINE =
  "https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?crop=entropy&cs=srgb&fm=jpg&q=70&w=1600";

export function TrainSVG({ id = "train" }) {
  const windows = [108, 158, 262, 312, 404, 454, 558, 608, 692, 742, 846, 896];
  const doors = [208, 508, 796];
  return (
    <svg viewBox="0 100 960 145" className="w-full" role="img" aria-label="Mumbai Central Railway suburban local coaches, facing right">
      <defs>
        <linearGradient id={`${id}-coach`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBF9F3" />
          <stop offset="1" stopColor="#D9D9D5" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7F7F1" />
          <stop offset="1" stopColor="#CBD1D1" />
        </linearGradient>
      </defs>

      {/* Three connected Mumbai local coaches, kept on a transparent canvas. */}
      <path d="M79 110h297v107H79z" fill={`url(#${id}-coach)`} stroke="#72777B" strokeWidth="3" />
      <path d="M376 110h288v107H376zM664 110h257q10 0 14 7l26 46v54H664z" fill={`url(#${id}-coach)`} stroke="#72777B" strokeWidth="3" />
      <path d="M82 185h868v21H82z" fill="#A52279" />
      <path d="M82 206h868v5H82z" fill="#6C1A5E" opacity="0.7" />
      <path d="M377 111v106m287-106v106" stroke="#777B7D" strokeWidth="3" />

      {windows.map((x, i) => (
        <g key={`window-${i}`}>
          <rect x={x} y="125" width="42" height="38" rx="5" fill="#62686B" stroke="#73777A" strokeWidth="2" />
          <rect x={x + 4} y="129" width="34" height="30" rx="3" fill={`url(#${id}-glass)`} stroke="#383E42" strokeWidth="1.5" />
          <path d={`M${x + 21} 130v28`} stroke="#747B7E" strokeWidth="1.5" />
        </g>
      ))}
      {doors.map((x, i) => (
        <g key={`door-${i}`}>
          <rect x={x - 5} y="119" width="53" height="88" fill="#39A9D3" />
          <rect x={x} y="126" width="43" height="78" fill="#5C6063" stroke="#292D30" strokeWidth="2" />
          <rect x={x + 5} y="132" width="13" height="29" fill="#B9E7F3" stroke="#353A3D" strokeWidth="1.5" />
          <rect x={x + 25} y="132" width="13" height="29" fill="#B9E7F3" stroke="#353A3D" strokeWidth="1.5" />
          <path d={`M${x + 21} 126v78M${x - 5} 168h53`} stroke="#34393C" strokeWidth="2" />
          <path d={`M${x - 7} 204h57`} stroke="#AEB2B0" strokeWidth="3" />
        </g>
      ))}
      {[350, 644].map((x) => <text key={`cr-${x}`} x={x} y="202" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="700" fill="#FFFFFF">CR</text>)}
      <rect x="79" y="216" width="874" height="8" fill="#45484A" />

      {/* Coach underframes and wheels. */}
      {[118, 180, 318, 394, 456, 594, 684, 746, 884, 946].map((x, i) => (
        <g key={`wheel-${i}`}>
          <rect x={x - 15} y="217" width="31" height="9" rx="3" fill="#393C3D" />
          <circle cx={x} cy="230" r="8" fill="#35383A" stroke="#1F2325" strokeWidth="2" />
        </g>
      ))}
      <rect x="72" y="238" width="888" height="4" fill="#343738" />
      <path d="M72 238h888" stroke="#909493" strokeWidth="1" />
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
        initial={reduce ? { opacity: 0 } : { x: "-108%" }}
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
                  className="absolute bottom-full left-1/2 mb-3 hidden w-64 -translate-x-1/2 rounded-lg border-2 border-[#1A1A1A] bg-[#FDFBF7] p-3 shadow-[6px_6px_0_rgba(26,26,26,0.2)] md:block"
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
              onClick={() => {
                if (window.matchMedia("(max-width: 767px)").matches) {
                  toast.message(t.eggs.auntyLabel);
                  return;
                }
                setAunty((v) => !v);
              }}
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
