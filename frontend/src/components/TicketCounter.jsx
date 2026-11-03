import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLang } from "./LanguageContext";
import { LINES } from "../data/content";
import { TrainSVG } from "./PlatformScene";

const PAPER_TEX =
  "https://images.unsplash.com/photo-1776278515671-fe179ba9cfd3?crop=entropy&cs=srgb&fm=jpg&q=60&w=1200";

function Barcode({ serial }) {
  const bars = useMemo(() => {
    let h = 7;
    for (const c of serial) h = ((h * 31 + c.charCodeAt(0)) >>> 0) % 2147483647;
    return Array.from({ length: 44 }, () => {
      h = (h * 48271) % 2147483647;
      return ((h >>> 16) % 3) + 1;
    });
  }, [serial]);
  return (
    <svg viewBox="0 0 176 40" className="h-9 w-auto" aria-hidden="true">
      {bars.map((w, i) => (
        <rect key={i} x={i * 4} y="0" width={w} height="40" fill="#1A1A1A" />
      ))}
    </svg>
  );
}

export default function TicketCounter() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [sel, setSel] = useState(null);
  const [punched, setPunched] = useState(false);
  const [boarding, setBoarding] = useState(false);
  const timers = useRef([]);
  const ticketRef = useRef(null);

  const serial = useMemo(() => {
    const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `PRTM-${new Date().getFullYear()}-${rand}`;
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const date = useMemo(
    () =>
      new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    [lang]
  );
  const time = useMemo(
    () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
    []
  );

  const punch = () => {
    setPunched(true);
    timers.current.push(setTimeout(() => setBoarding(true), 700));
    timers.current.push(setTimeout(() => navigate(sel.path), 2700));
  };

  return (
    <section id="booking" className="scroll-mt-16 bg-[#E8E3D8] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[#1A1A1A] md:text-5xl">
            {t.ticket.counter} <span className="text-[#B3352B]">·</span>{" "}
            <span className="font-board text-base tracking-[0.3em] text-[#1A1A1A]/75">UTS / प्रथम सेंट्रल</span>
          </h2>
          <p className="mt-2 text-[#1A1A1A]/85">{t.ticket.counterSub}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {LINES.map((l, idx) => (
            <motion.button
              key={l.id}
              data-testid={`line-select-${l.id}`}
              onClick={() => {
                setSel(l);
                setPunched(false);
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              aria-pressed={sel?.id === l.id}
              className={`group rounded-lg border-2 bg-[#FDFBF7] p-6 text-left transition-transform duration-200 hover:-translate-y-1 ${
                sel?.id === l.id ? "shadow-[6px_6px_0_rgba(26,26,26,0.85)]" : "border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
              }`}
              style={sel?.id === l.id ? { borderColor: l.color } : undefined}
            >
              <span className="block h-2.5 w-14 rounded-full transition-all duration-200 group-hover:w-20" style={{ background: l.color }} />
              <span className="mt-4 block font-display text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                {l.destination}
              </span>
              <span className="mt-1 block font-board text-[11px] tracking-[0.2em]" style={{ color: l.color }}>
                {l.line} · {l.coach}
              </span>
              <span className="mt-3 block text-sm leading-snug text-[#1A1A1A]/85">{l.category[lang]}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {!sel ? (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 text-center font-board text-sm tracking-[0.15em] text-[#1A1A1A]/70"
              data-testid="ticket-hint"
            >
              {t.ticket.choose} ↓
            </motion.p>
          ) : (
            <motion.div
              ref={ticketRef}
              key={sel.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, rotate: -1.5 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                const ticket = ticketRef.current;
                if (!ticket) return;
                const top = Math.max(0, ticket.getBoundingClientRect().top + window.scrollY - 96);
                if (window.__lenis) window.__lenis.scrollTo(top, { duration: reduce ? 0 : 0.7, immediate: reduce });
                else window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
              }}
              className="relative mx-auto mt-12 max-w-xl scroll-mt-24"
            >
              <div
                data-testid="ticket"
                className="relative overflow-hidden rounded-lg border-2 border-[#1A1A1A]/25 bg-[#FDFBF7] shadow-[10px_12px_28px_rgba(26,26,26,0.22)]"
              >
                <img src={PAPER_TEX} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply" />
                <div className="relative flex items-center justify-between px-5 py-3" style={{ background: sel.color }}>
                  <span className="font-display text-base font-semibold tracking-[0.14em] text-[#F4F1EA]">
                    PRATHAM CENTRAL RAILWAY
                  </span>
                  <span className="font-board text-[10px] tracking-[0.2em] text-[#F4F1EA]/85">ONE WAY</span>
                </div>

                <div className="relative px-5 py-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-board text-[10px] tracking-[0.25em] text-[#1A1A1A]/75">{t.ticket.from}</p>
                      <p className="truncate font-display text-lg font-semibold text-[#1A1A1A]">PRATHAM CENTRAL</p>
                    </div>
                    <span className="font-display text-2xl" style={{ color: sel.color }}>→</span>
                    <div className="min-w-0 text-right">
                      <p className="font-board text-[10px] tracking-[0.25em] text-[#1A1A1A]/75">{t.ticket.to}</p>
                      <p className="truncate font-display text-lg font-semibold" style={{ color: sel.color }}>
                        {sel.destination}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-4 border-t-2 border-dashed border-[#1A1A1A]/30 pt-4">
                    <span className="absolute -left-7 -top-3.5 h-7 w-7 rounded-full bg-[#E8E3D8]" />
                    <span className="absolute -right-7 -top-3.5 h-7 w-7 rounded-full bg-[#E8E3D8]" />
                  </div>

                  <dl className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3">
                    {[
                      [t.ticket.train, "PRATHAM EXPRESS"],
                      [t.ticket.klass, t.ticket.klassValue],
                      [t.ticket.fare, t.ticket.free],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-board text-[10px] tracking-[0.2em] text-[#1A1A1A]/75">{k}</dt>
                        <dd className="font-display text-sm font-semibold text-[#1A1A1A]" data-testid={k === t.ticket.fare ? "ticket-fare" : undefined}>{v}</dd>
                      </div>
                    ))}
                    {[
                      [t.ticket.serial, serial],
                      [t.ticket.date, date],
                      [t.ticket.time, time],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-board text-[10px] tracking-[0.2em] text-[#1A1A1A]/75">{k}</dt>
                        <dd className="font-board text-xs text-[#1A1A1A]" data-testid={k === t.ticket.serial ? "ticket-serial" : undefined}>{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <Barcode serial={serial} />
                    <p className="max-w-[220px] text-right text-[11px] italic leading-snug text-[#1A1A1A]/75">
                      {t.ticket.footnote}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {punched && (
                    <motion.div
                      data-testid="ticket-punch-stamp"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 2.4, rotate: 10 }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: -14 }}
                      transition={{ duration: 0.3, ease: "backOut" }}
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#B3352B] px-5 py-2 font-display text-xl font-bold tracking-[0.2em] text-[#B3352B]/90"
                    >
                      PUNCHED
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  data-testid="punch-board-button"
                  onClick={punch}
                  disabled={punched}
                  className="rounded-full px-8 py-3 font-display text-lg font-semibold tracking-wide text-[#F4F1EA] shadow-[5px_5px_0_rgba(26,26,26,0.85)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                  style={{ background: sel.color }}
                >
                  {t.ticket.punch} →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {boarding && (
        <motion.div
          data-testid="boarding-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#141109]"
        >
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-[600px] max-w-[92vw]"
          >
            <TrainSVG stripe={sel.color} id="boarding" />
          </motion.div>
          <p className="mt-8 font-board text-sm tracking-[0.4em] text-[#FFB000]" data-testid="boarding-label">
            {t.boarding.label} — {sel.destination}
          </p>
          <p className="mt-2 text-sm text-[#F4F1EA]/85">{t.boarding.note}</p>
          <motion.div
            className="mt-6 h-0.5 bg-[#FFB000]"
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      )}
    </section>
  );
}
