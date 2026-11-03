import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import { LINES, STATIONS } from "../data/content";

export default function AllStations() {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <section id="stations" className="scroll-mt-16 bg-[#F4F1EA] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[#1A1A1A] md:text-5xl">
            {t.stations.title}
          </h2>
          <p className="mt-2 text-[#1A1A1A]/60">{t.stations.sub}</p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {LINES.map((line, li) => (
            <motion.div
              key={line.id}
              data-testid={`station-map-${line.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: li * 0.08 }}
              className="rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FDFBF7] p-5 md:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  data-testid={`station-line-go-${line.id}`}
                  onClick={() => navigate(line.path)}
                  className="group flex items-center gap-3"
                  aria-label={`Open the ${line.line} journey`}
                >
                  <span className="h-4 w-10 rounded-full" style={{ background: line.color }} />
                  <span className="font-display text-xl font-semibold tracking-wide text-[#1A1A1A] group-hover:underline">
                    {line.line}
                  </span>
                </button>
                <span className="font-board text-xs tracking-[0.2em] text-[#1A1A1A]/50">
                  {line.destination}
                </span>
              </div>

              <div className="mt-6 flex items-center" role="list">
                {STATIONS[line.id].map((s, i) => (
                  <div key={s} className="flex flex-1 items-center last:flex-none" role="listitem">
                    <button
                      data-testid={`station-node-${line.id}-${i}`}
                      onClick={() => navigate(line.path)}
                      aria-label={s}
                      title={s}
                      className="group relative flex flex-col items-center"
                    >
                      {i === 0 ? (
                        <span className="relative flex h-4 w-4">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B3352B] opacity-60" />
                          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#FDFBF7] bg-[#B3352B]" />
                        </span>
                      ) : (
                        <span
                          className="inline-block h-3.5 w-3.5 rounded-full border-2 border-[#FDFBF7] transition-transform duration-200 group-hover:scale-125"
                          style={{ background: i === STATIONS[line.id].length - 1 ? line.color : "#DCD5C4" }}
                        />
                      )}
                      <span
                        className={`pointer-events-none absolute left-1/2 top-5 whitespace-nowrap font-board text-[9px] tracking-widest text-[#1A1A1A]/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:opacity-100 ${
                          i === STATIONS[line.id].length - 1 ? "-translate-x-full" : "-translate-x-1/2"
                        }`}
                      >
                        {i === 0 ? t.stations.youAreHere : s}
                      </span>
                    </button>
                    {i < STATIONS[line.id].length - 1 && (
                      <span className="mx-1 h-1 flex-1 rounded-full md:mx-2" style={{ background: line.color, opacity: 0.35 }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
