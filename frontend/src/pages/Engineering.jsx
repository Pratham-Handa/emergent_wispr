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

const workflowStops = [
  { title: "Registration", detail: "Collect the candidate's details and start the assessment journey." },
  { title: "Razorpay", detail: "Process payment before access is issued." },
  { title: "Access token", detail: "Use a token or redeem code to unlock the assessment." },
  { title: "48-hour assessment", detail: "Give candidates a clear, timed window to complete the work." },
  { title: "Evaluation", detail: "Capture assessment results for review." },
  { title: "Reports & admin", detail: "Manage access, review outcomes, and keep audit logs." },
];

const liveWebsites = [
  {
    name: "Intellidea",
    domain: "intellidea.co.in",
    image: "/projects/intellidea-site.png",
    alt: "Intellidea live homepage showing its business transformation and technology services",
    href: "https://www.intellidea.co.in/",
    description: "Corporate website · custom-coded Wix migration",
  },
  {
    name: "IntelliWise Academy",
    domain: "intelliwiseacademy.com",
    image: "/projects/intelliwise-site.png",
    alt: "IntelliWise Academy live homepage showing learning and development programs",
    href: "https://intelliwiseacademy.com/",
    description: "Learning platform · custom-coded Wix migration · IMP experience",
  },
];

const capabilityGroups = [
  { title: "PROGRAMMING", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "FRONTEND", items: ["React", "Next.js", "Tailwind CSS", "Alpine.js"] },
  { title: "BACKEND & APIs", items: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { title: "AI & MACHINE LEARNING", items: ["OpenAI", "XGBoost", "SHAP", "Hugging Face", "Google Cloud Vision"] },
  { title: "TOOLS & CLOUD", items: ["Git", "GitHub", "Docker", "Vercel", "Supabase", "Firebase"] },
  { title: "CORE CS", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },
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
            <p className="font-board text-[11px] tracking-[0.32em] text-[#91B2FF]">ENGINEERING LOCAL <span className="mx-2 text-[#F5B31B]">/</span> COACH C1</p>
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

        <section className="border-b border-[#F4F1EA]/20 py-12 md:py-16">
          <header className="text-center">
            <p className="font-board text-[10px] tracking-[0.28em] text-[#91B2FF]">01 / PROFESSIONAL WORK</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Engineering in Practice</h2>
          </header>

          <div className="mx-auto mt-9 max-w-4xl border-y-2 border-[#F5B31B]/55 py-7 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"><p className="font-board text-xs tracking-[0.22em] text-[#F5B31B]">INTELLIDEA · TECHNICAL CONSULTANT</p><span className="font-board text-xs tracking-widest text-[#F4F1EA]/90">APR 2025 — PRESENT</span></div>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#F4F1EA]/90">With a requirement to avoid Wix-generated code, I manually rebuilt the company’s Wix websites as custom-coded sites and kept their forms working. I also implemented an assessment and payment workflow connecting registration, Razorpay, access tokens, a 48-hour assessment, evaluation, reporting, and administration.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">{["Razorpay", "Token + redeem codes", "48-hour access", "Admin controls", "Audit logs", "Google Apps Script", "Google Workspace"].map((item) => <span key={item} className="border border-[#91B2FF]/40 px-2.5 py-1.5 font-board text-[10px] tracking-wide text-[#E8EEFF]">{item}</span>)}</div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 border border-[#C7E77B]/55 bg-[#C7E77B]/10 px-3 py-2 font-board text-[10px] font-bold tracking-[0.14em] text-[#DDF39E]"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#C7E77B] shadow-[0_0_0_3px_rgba(199,231,123,0.18)]" />LIVE · DEPLOYED</span>
              <a href="https://intelliwiseacademy.com/imp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#91B2FF] bg-[#91B2FF] px-4 py-2.5 font-board text-[10px] font-bold tracking-[0.14em] text-[#101D3B] transition-colors hover:bg-[#B8CCFF]">VIEW THE LIVE WORK <ArrowUpRight size={14} /></a>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl" aria-label="Intellidea assessment workflow">
            <div className="text-center"><p className="font-board text-[10px] font-bold tracking-[0.2em] text-[#B8CCFF]">WORKFLOW MAP</p><p className="mt-2 font-board text-[9px] tracking-[0.14em] text-[#F4F1EA]/65">REGISTRATION TO REVIEW</p></div>
            <div className="relative mx-auto mt-8 max-w-4xl">
              <div aria-hidden="true" className="absolute bottom-7 left-3 top-2 w-4 -translate-x-1/2 border-x-2 border-[#91B2FF]/45 opacity-80 md:bottom-9 md:left-1/2" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 22px, rgba(145,178,255,.38) 22px 24px)" }} />
              <ol className="relative">
                {workflowStops.map((stop, index) => (
                  <li key={stop.title} className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 pb-8 last:pb-0 md:grid-cols-[1fr_48px_1fr] md:gap-x-6 md:pb-10">
                    <span aria-hidden="true" className="z-10 col-start-1 row-start-1 mt-1 grid h-6 w-6 place-items-center rounded-full border-2 border-[#101D3B] bg-[#F5B31B] font-board text-[8px] font-bold text-[#101D3B] ring-1 ring-[#F5B31B]/70 md:col-start-2 md:justify-self-center">{index + 1}</span>
                    <div className={`col-start-2 row-start-1 ${index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left"}`}>
                      <p className={`font-board text-[9px] tracking-[0.18em] text-[#91B2FF] ${index % 2 === 0 ? "md:ml-auto" : ""}`}>STATION 0{index + 1}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-[#F4F1EA]">{stop.title}</h3>
                      <p className={`mt-2 max-w-sm text-sm leading-relaxed text-[#F4F1EA]/80 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>{stop.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-b border-[#F4F1EA]/20 py-12 md:py-16" aria-labelledby="capabilities-heading" data-testid="capabilities-timetable">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="font-board text-[10px] tracking-[0.28em] text-[#91B2FF]">02 / CAPABILITIES TIMETABLE</p><h2 id="capabilities-heading" className="mt-2 font-display text-3xl font-semibold">Technical toolkit</h2></div>
            <span className="font-board text-[9px] tracking-[0.16em] text-[#F4F1EA]/65">PLATFORM 1 · SKILLS BOARD</span>
          </div>
          <div className="mt-6 overflow-hidden border-2 border-[#2A3854] bg-[#080E1C] shadow-[7px_7px_0_rgba(0,0,0,0.28)]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#91B2FF]/30 bg-[#0B1427] px-4 py-3 sm:px-5">
              <p className="font-board text-[9px] font-bold tracking-[0.17em] text-[#B8CCFF]">PRATHAM CENTRAL · DEPARTURES</p>
              <p className="font-board text-[9px] tracking-[0.14em] text-[#F5B31B]">LANGUAGES · SYSTEMS · AI</p>
            </div>
            <div className="grid gap-px bg-[#91B2FF]/20 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityGroups.map((group, index) => (
                <article key={group.title} className="min-h-[142px] bg-[#0A1222] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3"><p className="font-board text-[9px] font-bold tracking-[0.16em] text-[#91B2FF]">{group.title}</p><span className="font-board text-[9px] tracking-widest text-[#F5B31B]">0{index + 1}</span></div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => <li key={item} className="border border-[#F4F1EA]/15 bg-[#111C30] px-2.5 py-1.5 text-xs text-[#F4F1EA]/90">{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#91B2FF]/30 px-4 py-3 sm:px-5">
              <span className="font-board text-[9px] tracking-[0.12em] text-[#F4F1EA]/60">TOOLS SHOWN ACROSS WORK &amp; PROJECTS</span>
              <span className="font-board text-[9px] font-bold tracking-[0.16em] text-[#C7E77B]">ALL LINES OPERATIONAL</span>
            </div>
          </div>
        </section>

        <section id="engineering-work" className="scroll-mt-24 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="font-board text-[11px] tracking-[0.28em] text-[#91B2FF]">03 / SELECTED BUILDS</p><h2 className="mt-3 font-display text-3xl font-semibold">Engineering projects &amp; live websites</h2></div>
            <div className="flex items-center gap-2 text-sm text-[#F4F1EA]/80"><Terminal size={15} /> 2 LIVE SITES · 3 PROJECTS</div>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#F4F1EA]/85">With a requirement to avoid Wix-generated code, I manually rebuilt both Wix websites in custom code and kept their forms working.</p>

          <div className="mt-7 grid gap-6 lg:grid-cols-2" aria-label="Live client websites">
            {liveWebsites.map((site) => (
              <motion.article key={site.domain} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="group overflow-hidden border border-[#F4F1EA]/20 bg-[#F4F1EA]/[0.035] transition-colors hover:border-[#91B2FF]/65">
                <div className="relative aspect-[2/1] overflow-hidden border-b border-[#F4F1EA]/15 bg-[#0A1329]">
                  <img src={site.image} alt={site.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-[#101D3B]/95 px-3 py-2 font-board text-[9px] font-bold tracking-[0.15em] text-[#DDF39E]"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#C7E77B]" />LIVE · DEPLOYED</span>
                </div>
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
                  <div><h3 className="font-display text-3xl font-semibold">{site.name}</h3><p className="mt-1 font-board text-xs tracking-wide text-[#91B2FF]">{site.domain}</p><p className="mt-3 text-sm leading-relaxed text-[#F4F1EA]/80">{site.description}</p></div>
                  <a href={site.href} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#91B2FF]/70 px-4 py-2.5 font-board text-[10px] font-bold tracking-[0.14em] text-[#D9E4FF] transition-colors hover:bg-[#91B2FF]/10">VISIT WEBSITE <ArrowUpRight size={14} /></a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-end justify-between gap-4 border-t border-[#F4F1EA]/20 pt-10">
            <div><p className="font-board text-[10px] tracking-[0.24em] text-[#91B2FF]">PROJECT CASE FILES</p><h3 className="mt-2 font-display text-2xl font-semibold">Three selected projects</h3></div>
            <p className="max-w-lg text-sm leading-relaxed text-[#F4F1EA]/75">My role, the system built, and the stack behind each one—at a glance.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Three selected project case studies">
            {projects.map(({ name, kind, mark, icon: Icon, image, alt, summary, contribution, stack: tech, outcome, href }) => (
              <motion.article key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="group flex h-full flex-col overflow-hidden border border-[#F4F1EA]/20 bg-[#F4F1EA]/[0.035] transition-colors hover:border-[#91B2FF]/65 hover:bg-[#F4F1EA]/[0.06]">
                <div className="relative aspect-[16/8] overflow-hidden border-b border-[#F4F1EA]/15 bg-[#0A1329]"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100" /><span className="absolute left-3 top-3 bg-[#101D3B]/95 px-2 py-1 font-board text-[8px] tracking-[0.14em] text-[#D9E4FF]">{kind}</span><span className="absolute right-3 top-3 font-board text-[10px] text-white">{mark}</span></div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center gap-2.5"><Icon className="shrink-0 text-[#F5B31B]" size={19} strokeWidth={1.6} /><h4 className="font-display text-xl font-semibold">{name}</h4></div>
                  <p className="mt-2 text-sm leading-relaxed text-[#F4F1EA]/85">{summary}</p>
                  <div className="mt-4 border-l-2 border-[#91B2FF]/65 pl-3"><p className="font-board text-[9px] tracking-[0.16em] text-[#B8CCFF]">MY CONTRIBUTION</p><p className="mt-1.5 text-sm leading-relaxed text-[#F4F1EA]/80">{contribution}</p></div>
                  <p className="mt-3 font-board text-[10px] leading-relaxed tracking-wide text-[#F4F1EA]/65">{tech}</p>
                  {outcome && <p className="mt-3 border-t border-[#F4F1EA]/15 pt-3 font-board text-[10px] leading-relaxed tracking-wide text-[#FFD263]">{outcome}</p>}
                  <a href={href} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-4 font-board text-[10px] font-semibold tracking-[0.12em] text-[#D9E4FF] hover:text-white">VIEW PROJECT <ArrowUpRight size={13} /></a>
                </div>
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
