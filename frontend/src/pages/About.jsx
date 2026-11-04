import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, FileText } from "lucide-react";
import { useLang } from "@/components/LanguageContext";
import { ABOUT, PROFILE_LINKS } from "@/data/content";

const certificates = [
  {
    title: "Product Management with Generative & Agentic AI",
    issuer: "BITS School of Management · CEPD",
    detail: "Successfully completed · 30 Jul 2025 — 25 Jan 2026",
    image: "/certificates/bitsom-product-management.jpg",
    pdf: "/certificates/bitsom-product-management.pdf",
    alt: "BITSOM certificate for Product Management with Generative and Agentic AI",
  },
  {
    title: "Affective Computing",
    issuer: "NPTEL · IIT Madras",
    detail: "Elite + Silver · 85% · Jan–Apr 2026",
    image: "/certificates/nptel-affective-computing.jpg",
    pdf: "/certificates/nptel-affective-computing.pdf",
    alt: "NPTEL Elite certificate for Affective Computing with a consolidated score of 85 percent",
  },
];

export default function About() {
  const { t } = useLang();

  return (
    <main data-testid="about-page" className="relative min-h-[100svh] overflow-hidden bg-[#2C2337] px-6 pb-24 pt-28 text-[#F4F1EA] md:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full border-[56px] border-[#D2B8EE]/[0.06]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid items-center gap-6 md:grid-cols-[1.1fr_.9fr] md:gap-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-board text-[11px] tracking-[0.3em] text-[#D2B8EE]">
              CENTRAL INTERCHANGE · परिचय
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#F4F1EA] sm:text-5xl lg:text-6xl">
              {t.nav.about === "About" ? "Hi, I'm Pratham Handa." : t.nav.about}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F4F1EA]/85">{ABOUT.intro}</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#F4F1EA]/85">{ABOUT.intro2}</p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[390px] md:justify-self-end"
          >
            <div className="overflow-hidden border-2 border-[#1A1A1A] bg-[#E2D9EB] shadow-[9px_9px_0_#684481]">
              <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] px-4 py-3">
                <span className="font-board text-[10px] font-bold tracking-[0.18em] text-[#1A1A1A]">CENTRAL INTERCHANGE</span>
                <span className="font-board text-[9px] tracking-widest text-[#684481]">PROFILE · 01</span>
              </div>
              <div className="relative h-[370px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_38%,#FCFAFF_0%,#E2D9EB_72%)] sm:h-[430px]">
                <div aria-hidden="true" className="absolute bottom-8 left-5 top-8 flex flex-col items-center justify-between">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#684481] bg-[#F0ECF5]" />
                  <span className="h-full border-l border-dashed border-[#1A1A1A]/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#684481] ring-4 ring-[#684481]/15" />
                </div>
                <img
                  src="/mascot-pratham.png"
                  alt="Editorial portrait illustration of Pratham wearing rectangular glasses, a navy suit, and tie"
                  className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_10px_10px_rgba(26,26,26,0.12)]"
                  fetchPriority="high"
                />
                <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 border-b-2 border-dashed border-[#1A1A1A]/35" />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t-2 border-dashed border-[#1A1A1A]/35 bg-[#FCFAFF] px-4 py-3">
                <span className="font-board text-[9px] font-bold leading-relaxed tracking-[0.12em] text-[#1A1A1A]">ENGINEERING<br />PRODUCT · COMMUNITY</span>
                <span aria-hidden="true" className="h-8 border-l border-dashed border-[#1A1A1A]/35" />
                <span className="font-display text-2xl font-semibold tracking-wide text-[#684481]">PH<span className="ml-1 text-sm">01</span></span>
              </figcaption>
            </div>
          </motion.figure>
        </div>

        <section className="mt-12" aria-labelledby="about-value-heading">
          <p className="font-board text-[11px] tracking-[0.28em] text-[#D2B8EE]">HOW I CAN HELP</p>
          <h2 id="about-value-heading" className="mt-2 font-display text-3xl font-semibold text-[#F4F1EA]">Useful from first question to working system.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ABOUT.strengths.map((strength, i) => (
              <article key={strength.title} className="rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FCFAFF] p-5">
                <span className="font-board text-xs font-bold tracking-widest text-[#684481]">0{i + 1}</span>
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
            <h2 className="font-display text-2xl font-semibold tracking-wide text-[#F4F1EA]">
              Education <span className="text-[#684481]">·</span> शिक्षा
            </h2>
            <div className="mt-5 space-y-4">
              {ABOUT.education.map((e) => (
                <div key={e.degree} className="rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FCFAFF] p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">{e.degree}</h3>
                    <span className="font-board text-xs text-[#1A1A1A]/55">{e.years}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#1A1A1A]/65">{e.school}</p>
                  <p className="mt-2 font-board text-sm font-semibold text-[#684481]">{e.score}</p>
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
            <h2 className="font-display text-2xl font-semibold tracking-wide text-[#F4F1EA]">
              Achievements <span className="text-[#684481]">·</span> उपलब्धियाँ
            </h2>
            <ul className="mt-5 space-y-3">
              {ABOUT.achievements.map((a, i) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FCFAFF] p-4 text-sm leading-relaxed text-[#1A1A1A]/80"
                >
                  <span className="font-board text-xs font-bold text-[#684481]">{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <section className="mt-14" aria-labelledby="about-certificates-heading">
          <p className="font-board text-[11px] tracking-[0.28em] text-[#D2B8EE]">CERTIFICATES · VERIFIED WORK</p>
          <h2 id="about-certificates-heading" className="mt-2 font-display text-3xl font-semibold text-[#F4F1EA]">Learning with proof.</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {certificates.map((certificate) => (
              <a key={certificate.pdf} href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-lg border-2 border-[#1A1A1A]/12 bg-[#FCFAFF] transition-transform hover:-translate-y-1" aria-label={`Open original certificate PDF: ${certificate.title}`}>
                <div className="relative aspect-[1.4/1] overflow-hidden bg-white p-2 sm:p-3">
                  <img src={certificate.image} alt={certificate.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="border-t border-[#1A1A1A]/10 p-5">
                  <h3 className="font-display text-xl font-semibold text-[#1A1A1A]">{certificate.title}</h3>
                  <p className="mt-1 font-board text-[10px] tracking-wide text-[#523967]">{certificate.issuer}</p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/75">{certificate.detail}</p>
                    <span className="inline-flex shrink-0 items-center gap-1.5 font-board text-[9px] font-bold tracking-[0.12em] text-[#684481]">OPEN PDF <ExternalLink size={12} /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

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
            className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 font-display text-base font-semibold tracking-wide text-[#F0ECF5] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            data-testid="about-linkedin"
            href={PROFILE_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-[#F4F1EA]/35 px-6 py-3 text-base font-semibold text-[#F4F1EA]/85 transition-colors hover:border-[#D2B8EE] hover:text-[#D2B8EE]"
          >
            <ExternalLink size={18} /> LinkedIn
          </a>
          <a
            data-testid="about-email"
            href={`mailto:${PROFILE_LINKS.email}`}
            className="flex items-center gap-2 rounded-full border-2 border-[#F4F1EA]/35 px-6 py-3 text-base font-semibold text-[#F4F1EA]/85 transition-colors hover:border-[#D2B8EE] hover:text-[#D2B8EE]"
          >
            <Mail size={18} /> Email
          </a>
          <a data-testid="about-resume" href={PROFILE_LINKS.resume} download className="flex items-center gap-2 rounded-full border-2 border-[#F4F1EA]/35 px-6 py-3 text-base font-semibold text-[#F4F1EA]/85 transition-colors hover:border-[#D2B8EE] hover:text-[#D2B8EE]">
            <FileText size={18} /> Résumé · PDF
          </a>
        </motion.div>
      </div>
    </main>
  );
}
