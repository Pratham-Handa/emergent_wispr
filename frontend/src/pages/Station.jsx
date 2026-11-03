import { useLang } from "@/components/LanguageContext";
import DigitalBoard from "@/components/DigitalBoard";
import PlatformScene from "@/components/PlatformScene";
import TicketCounter from "@/components/TicketCounter";
import AllStations from "@/components/AllStations";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function Station() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 36]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
    else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const line = {
    hidden: { y: "115%" },
    show: (d) => ({ y: "0%", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: d } }),
  };

  return (
    <main data-testid="station-home">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#F4F1EA] pt-24">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[3%] z-0 bg-cover bg-center opacity-[0.62] will-change-transform"
          style={{
            backgroundImage: "url('/illustrations/station-atmosphere.png')",
            y: reduce ? 0 : backgroundY,
          }}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={
            reduce
              ? { opacity: 0.62, scale: 1.025 }
              : { opacity: 0.62, scale: [1.025, 1.04, 1.025], x: ["0%", "-0.8%", "0%"] }
          }
          transition={
            reduce
              ? { duration: 0.8 }
              : {
                  opacity: { duration: 1.1 },
                  scale: { duration: 36, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 36, repeat: Infinity, ease: "easeInOut" },
                }
          }
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-board text-[11px] tracking-[0.3em] text-[#B3352B]"
          >
            {t.hero.eyebrow}
          </motion.p>

          <div className="mt-3">
            <motion.h1
              custom={0.2}
              variants={line}
              initial={reduce ? { opacity: 0 } : "hidden"}
              animate={reduce ? { opacity: 1 } : "show"}
              className="font-display text-5xl font-semibold leading-[1.15] tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-7xl"
              data-testid="hero-question"
            >
              {t.question}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 max-w-xl text-lg text-[#1A1A1A]/70"
          >
            {t.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-2 max-w-xl text-sm uppercase tracking-[0.18em] text-[#1A1A1A]/50"
          >
            {t.support}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="mt-3 max-w-2xl text-base font-medium text-[#1A1A1A]/80 sm:text-lg"
          >
            {t.hero.portfolioIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-7"
          >
            <button
              data-testid="book-ticket-cta"
              onClick={() => scrollTo("booking")}
              className="rounded-full bg-[#1A1A1A] px-7 py-3 font-display text-base font-semibold tracking-wide text-[#F4F1EA] shadow-[5px_5px_0_rgba(179,53,43,0.9)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.hero.bookJourney}
            </button>
            <p className="mt-3 max-w-lg text-sm text-[#1A1A1A]/65">{t.hero.journeyHint}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 max-w-2xl pb-10 md:pb-14"
          >
            <DigitalBoard />
          </motion.div>
        </div>

        <div className="relative z-10 mt-auto">
          <PlatformScene />
        </div>
      </section>

      <section id="portfolio-overview" data-testid="portfolio-overview" className="bg-[#F4F1EA] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-board text-[11px] tracking-[0.28em] text-[#B3352B]">{t.overview.eyebrow}</p>
          <div className="mt-3 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="font-display text-4xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl">{t.overview.title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70">{t.overview.intro}</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {t.overview.areas.map((area, index) => (
              <article key={area.title} className="rounded-xl border border-[#1A1A1A]/15 bg-[#FDFBF7]/80 p-6 shadow-[4px_4px_0_rgba(26,26,26,0.08)]">
                <span className="font-board text-xs tracking-widest text-[#B3352B]">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#1A1A1A]">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/65">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TicketCounter />
      <AllStations />
    </main>
  );
}
