import { motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Braces, Cpu, GitBranch, Layers3, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/components/LanguageContext";

const projects = [
  {
    name: "SentinelSecure", kind: "AI / ML · CYBERSECURITY", mark: "01", icon: Cpu,
    image: "/projects/sentinel-secure.png", alt: "SentinelSecure network intrusion detection dashboard",
    summary: "An AI/ML network intrusion detection and triage system developed for RΞDACT 2025.",
    contribution: "I built the Streamlit dashboard and handled system and workflow integration. The wider team built the detection and explainability workflow.",
    stack: "Python · XGBoost · SHAP · Streamlit",
    outcome: "First Runner-Up nationally · ₹15,000 prize",
    href: "https://github.com/Pratham-Handa/sentinalsecure",
  },
  {
    name: "EcoStyle Agent", kind: "AI · COMPUTER VISION · SUSTAINABILITY", mark: "02", icon: GitBranch,
    image: "/projects/ecostyle.png", alt: "EcoStyle Agent sustainability verification experience",
    summary: "An AI-powered sustainability verification platform spanning a mobile app, backend services, and AI/ML workflows.",
    contribution: "I worked across most of the system and owned end-to-end integration between the app, backend, and AI/ML workflows.",
    stack: "React Native · FastAPI · Hugging Face · Google Cloud Vision · Firebase",
    href: "https://github.com/Pratham-Handa/PS4-BITSOM",
  },
  {
    name: "Wingtern", kind: "AI · FULL-STACK · ONGOING", mark: "03", icon: Layers3,
    image: "/projects/wingtern.png", alt: "Wingtern student growth companion interface",
    summary: "An AI-powered student growth companion for personalized guidance, learning, and planning.",
    contribution: "I built the full-stack MVP, including the application, Supabase authentication and data, OpenAI integration, dashboard, and onboarding.",
    stack: "Next.js · TypeScript · Supabase · OpenAI",
    outcome: "88 / 100 evaluation · OpenAI × Outskill AI Builders Hackathon",
    href: "https://github.com/Pratham-Handa/Wingtern-V1",
  },
];

export default function Engineering() {
  const { t } = useLang();

  return (
    <main data-testid="engineering-platform" className="relative min-h-screen overflow-hidden bg-[#101D3B] px-5 pb-24 pt-24 text-[#F4F1EA] md:px-12 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.13]" style={{ backgroundImage: "linear-gradient(rgba(207,220,255,.32) 1px, transparent 1px), linear-gradient(90deg, rgba(207,220,255,.32) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="relative mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 font-board text-xs tracking-[0.16em] text-[#F4F1EA]/90 transition-colors hover:text-white"><ArrowLeft size={15} /> {t.nav.station}</Link>

        <section className="relative mt-10 grid items-center gap-8 border-y border-[#F4F1EA]/20 py-10 md:min-h-[390px] md:grid-cols-[1.2fr_.8fr] md:py-14">
          <div className="relative z-10">
            <p className="font-board text-[11px] tracking-[0.32em] text-[#91B2FF]">ENGINEERING EXPRESS <span className="mx-2 text-[#F5B31B]">/</span> COACH C1</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Ideas into<br /><span className="text-[#91B2FF]">working systems.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F4F1EA]/90 md:text-lg">I build practical software, work across full-stack development, and explore where AI can make products more useful.</p>
            <a href="#engineering-work" className="mt-8 inline-flex items-center gap-3 rounded-sm border border-[#91B2FF]/70 px-5 py-3 font-board text-xs tracking-widest text-[#D9E4FF] transition-colors hover:bg-[#91B2FF]/10">EXPLORE THE WORK <ArrowDownRight size={16} /></a>
          </div>
          <div aria-hidden="true" className="relative mx-auto flex aspect-square w-full max-w-[330px] items-center justify-center">
            <div className="absolute inset-[12%] rotate-45 border border-[#91B2FF]/55" />
            <div className="absolute inset-[25%] rotate-45 border border-dashed border-[#F5B31B]/65" />
            <div className="absolute h-px w-full bg-[#91B2FF]/50" /><div className="absolute h-full w-px bg-[#91B2FF]/50" />
            <div className="relative grid h-24 w-24 place-items-center border border-[#F5B31B] bg-[#101D3B] text-[#F5B31B] shadow-[0_0_42px_rgba(145,178,255,.18)]"><Braces size={38} strokeWidth={1.4} /></div>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-board text-[9px] tracking-widest text-[#B8CCFF]">BUILD · TEST · REFINE</span>
            <span className="absolute bottom-0 right-0 font-board text-[9px] tracking-widest text-[#B8CCFF]">19°04′N 72°52′E</span>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#F4F1EA]/20 py-12 md:grid-cols-[.7fr_1.3fr] md:py-16">
          <div><p className="font-board text-[10px] tracking-[0.28em] text-[#91B2FF]">01 / PROFESSIONAL WORK</p><h2 className="mt-3 font-display text-3xl font-semibold">Engineering in practice</h2></div>
          <div className="border-l-2 border-[#F5B31B] pl-5 md:pl-7"><div className="flex flex-wrap items-center justify-between gap-3"><p className="font-board text-xs tracking-[0.22em] text-[#F5B31B]">INTELLIDEA · TECHNICAL CONSULTANT</p><span className="font-board text-xs tracking-widest text-[#F4F1EA]/90">APR 2025 — PRESENT</span></div><p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#F4F1EA]/90">Built and migrated production websites, then implemented an assessment and payment workflow that connects registration, Razorpay, access tokens, a 48-hour assessment, evaluation, reporting, and administration.</p><div className="mt-5 flex flex-wrap gap-2">{["Razorpay", "Token + redeem codes", "48-hour access", "Admin controls", "Audit logs", "Google Apps Script", "Google Workspace"].map((item) => <span key={item} className="border border-[#91B2FF]/40 px-2.5 py-1.5 font-board text-[10px] tracking-wide text-[#E8EEFF]">{item}</span>)}</div></div>
        </section>

        <section id="engineering-work" className="scroll-mt-24 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-board text-[11px] tracking-[0.28em] text-[#91B2FF]">02 / SELECTED BUILDS</p><h2 className="mt-3 font-display text-3xl font-semibold">Projects on the line</h2></div><div className="flex items-center gap-2 text-sm text-[#F4F1EA]/80"><Terminal size={15} /> BUILD LOG · PRATHAM CENTRAL</div></div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {projects.map(({ name, kind, mark, icon: Icon, image, alt, summary, contribution, stack: tech, outcome, href }) => (
              <motion.article key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="group overflow-hidden border border-[#F4F1EA]/20 bg-[#F4F1EA]/[0.035] transition-colors hover:border-[#91B2FF]/65 hover:bg-[#F4F1EA]/[0.07]">
                <div className="relative aspect-[16/8] overflow-hidden border-b border-[#F4F1EA]/15 bg-[#0A1329]"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover object-top opacity-85 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100" /><span className="absolute left-4 top-4 bg-[#101D3B]/90 px-2.5 py-1 font-board text-[9px] tracking-[0.18em] text-[#D9E4FF]">{kind}</span><span className="absolute right-4 top-4 font-board text-xs text-white">{mark}</span></div>
                <div className="p-5 md:p-6"><div className="flex items-center gap-3"><Icon className="shrink-0 text-[#F5B31B]" size={21} strokeWidth={1.6} /><h3 className="font-display text-2xl font-semibold">{name}</h3></div><p className="mt-3 text-base leading-relaxed text-[#F4F1EA]/90">{summary}</p><div className="mt-5 border-l-2 border-[#91B2FF]/70 pl-4"><p className="font-board text-[10px] tracking-[0.2em] text-[#B8CCFF]">MY CONTRIBUTION</p><p className="mt-2 text-base leading-relaxed text-[#F4F1EA]/90">{contribution}</p></div><p className="mt-4 font-board text-xs leading-relaxed tracking-wide text-[#F4F1EA]/80">{tech}</p>{outcome && <p className="mt-4 border-t border-[#F4F1EA]/20 pt-4 font-board text-xs tracking-wide text-[#FFD263]">{outcome}</p>}<a href={href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-board text-xs font-semibold tracking-[0.12em] text-[#D9E4FF] hover:text-white">VIEW PROJECT <ArrowUpRight size={14} /></a></div>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 border-t border-[#F4F1EA]/20 pt-7">
          <Link to="/events" className="rounded-sm bg-[#F5B31B] px-5 py-3 font-board text-xs font-bold tracking-wider text-[#1A1A1A] hover:bg-[#ffd064]">NEXT LINE · COMMUNITY →</Link>
          <Link data-testid="ticket-counter-return" to="/#booking" className="px-5 py-3 font-board text-xs font-semibold tracking-wider text-[#F4F1EA] hover:text-white">BACK TO TICKET COUNTER</Link>
        </div>
      </div>
    </main>
  );
}
