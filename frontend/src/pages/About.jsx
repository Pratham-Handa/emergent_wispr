import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, FileText } from "lucide-react";
import { useLang } from "@/components/LanguageContext";
import { ABOUT, PROFILE_LINKS } from "@/data/content";

export default function About() {
  const { t } = useLang();

  return (
    <main data-testid="about-page" className="min-h-[100svh] bg-[#F4F1EA] px-6 pb-24 pt-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-board text-[11px] tracking-[0.3em] text-[#B3352B]">
            CENTRAL INTERCHANGE · परिचय
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            {t.nav.about === "About" ? "Hi, I'm Pratham Handa." : t.nav.about}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">{ABOUT.intro}</p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">{ABOUT.intro2}</p>
        </motion.div>

        <section className="mt-12" aria-labelledby="about-value-heading">
          <p className="font-board text-[11px] tracking-[0.28em] text-[#B3352B]">HOW I CAN HELP</p>
          <h2 id="about-value-heading" className="mt-2 font-display text-3xl font-semibold text-[#1A1A1A]">Useful from first question to working system.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ABOUT.strengths.map((strength, i) => (
              <article key={strength.title} className="rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FDFBF7] p-5">
                <span className="font-board text-xs font-bold tracking-widest text-[#B3352B]">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#1A1A1A]">{strength.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/80">{strength.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-2xl font-semibold tracking-wide text-[#1A1A1A]">
              Education <span className="text-[#B3352B]">·</span> शिक्षा
            </h2>
            <div className="mt-5 space-y-4">
              {ABOUT.education.map((e) => (
                <div key={e.degree} className="rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FDFBF7] p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">{e.degree}</h3>
                    <span className="font-board text-xs text-[#1A1A1A]/55">{e.years}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#1A1A1A]/65">{e.school}</p>
                  <p className="mt-2 font-board text-sm font-semibold text-[#166534]">{e.score}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h2 className="font-display text-2xl font-semibold tracking-wide text-[#1A1A1A]">
              Achievements <span className="text-[#B3352B]">·</span> उपलब्धियाँ
            </h2>
            <ul className="mt-5 space-y-3">
              {ABOUT.achievements.map((a, i) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FDFBF7] p-4 text-sm leading-relaxed text-[#1A1A1A]/80"
                >
                  <span className="font-board text-xs font-bold text-[#B3352B]">{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-14 flex flex-wrap gap-4"
        >
          <a
            data-testid="about-github"
            href={ABOUT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 font-display text-base font-semibold tracking-wide text-[#F4F1EA] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            data-testid="about-linkedin"
            href={PROFILE_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-[#1A1A1A]/30 px-6 py-3 text-base font-semibold text-[#1A1A1A]/80 transition-colors hover:border-[#166534] hover:text-[#166534]"
          >
            <ExternalLink size={18} /> LinkedIn
          </a>
          <a
            data-testid="about-email"
            href={`mailto:${PROFILE_LINKS.email}`}
            className="flex items-center gap-2 rounded-full border-2 border-[#1A1A1A]/30 px-6 py-3 text-base font-semibold text-[#1A1A1A]/80 transition-colors hover:border-[#166534] hover:text-[#166534]"
          >
            <Mail size={18} /> Email
          </a>
          <a data-testid="about-resume" href={PROFILE_LINKS.resume} download className="flex items-center gap-2 rounded-full border-2 border-[#1A1A1A]/30 px-6 py-3 text-base font-semibold text-[#1A1A1A]/80 transition-colors hover:border-[#166534] hover:text-[#166534]">
            <FileText size={18} /> Résumé · PDF
          </a>
        </motion.div>
      </div>
    </main>
  );
}
