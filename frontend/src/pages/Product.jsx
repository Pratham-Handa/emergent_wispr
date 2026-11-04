import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, GitBranch, Layers3, Route, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/components/LanguageContext";

const principles = [
  { number: "01", icon: Compass, title: "Find the real problem", copy: "Start with the person and the friction in their current workflow." },
  { number: "02", icon: Route, title: "Shape the journey", copy: "Connect the screens and decisions into one coherent experience." },
  { number: "03", icon: Workflow, title: "Build the whole loop", copy: "Bring interface, data, and intelligence together—and keep room to learn." },
];

const cases = [
  {
    number: "01", name: "Wingtern", category: "AI STUDENT GROWTH COMPANION", status: "ONGOING PRODUCT",
    image: "/projects/wingtern.png", alt: "Wingtern AI student growth companion interface",
    problem: "Students often keep their goals, questions, and plans scattered across different tools.",
    approach: "Wingtern explores a more coherent growth journey: personalized guidance, authenticated flows, an onboarding experience, and a dashboard in one evolving product.",
    role: "I built the full-stack MVP, including the frontend, Supabase authentication and database, OpenAI integration, dashboard, and onboarding.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    signal: "88 / 100 · OpenAI × Outskill AI Builders Hackathon",
    href: "https://github.com/Pratham-Handa/Wingtern-V1",
    icon: Sparkles,
  },
  {
    number: "02", name: "EcoStyle Agent", category: "SUSTAINABILITY VERIFICATION", status: "AI PRODUCT BUILD",
    image: "/projects/ecostyle.png", alt: "EcoStyle Agent mobile and dashboard experience",
    problem: "Sustainability claims are difficult to verify when the app experience, backend, and AI signals are disconnected.",
    approach: "The product connects a mobile application with verification workflows, backend services, and computer-vision capabilities.",
    role: "I worked across most of the system and owned the end-to-end integration between the app, backend, and AI/ML workflows.",
    stack: ["React Native", "FastAPI", "Hugging Face", "Google Cloud Vision", "Firebase"],
    signal: "Applied AI · Computer vision · Sustainability",
    href: "https://github.com/Pratham-Handa/PS4-BITSOM",
    icon: GitBranch,
  },
];

function CaseCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} className="overflow-hidden rounded-sm border-2 border-[#1A1A1A]/15 bg-[#FDFBF7] text-[#1A1A1A] shadow-[7px_7px_0_rgba(26,26,26,0.12)]">
      <div className="relative min-h-56 overflow-hidden border-b-2 border-[#1A1A1A]/10 bg-[#142F25] md:min-h-0">
        <img src={item.image} alt={item.alt} loading="lazy" className="h-56 w-full object-cover object-top md:h-64" />
        <span className="absolute left-4 top-4 bg-[#E3F3A4] px-3 py-1 font-board text-[9px] font-bold tracking-[0.16em] text-[#173A2D]">{item.status}</span>
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/50 bg-[#173A2D]/80 text-[#E3F3A4]"><Icon size={17} /></span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-3"><div><p className="font-board text-[9px] tracking-[0.2em] text-[#3F6B4E]">{item.number} / {item.category}</p><h3 className="mt-2 font-display text-3xl font-semibold">{item.name}</h3></div><p className="font-board text-[10px] tracking-wide text-[#31573E]">{item.signal}</p></div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div><p className="font-board text-[10px] tracking-[0.2em] text-[#3F6B4E]">THE PROBLEM</p><p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/85">{item.problem}</p><p className="mt-5 font-board text-[10px] tracking-[0.2em] text-[#3F6B4E]">PRODUCT APPROACH</p><p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/85">{item.approach}</p></div>
          <div className="border-t-2 border-[#B5CA75] pt-4 lg:border-l-2 lg:border-t-0 lg:pl-5 lg:pt-0"><p className="font-board text-[10px] tracking-[0.2em] text-[#3F6B4E]">MY ROLE</p><p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/85">{item.role}</p><p className="mt-5 font-board text-[10px] tracking-[0.2em] text-[#3F6B4E]">BUILDING BLOCKS</p><div className="mt-2 flex flex-wrap gap-1.5">{item.stack.map((tech) => <span key={tech} className="rounded-full border border-[#31573E]/25 bg-[#31573E]/[0.06] px-2.5 py-1.5 font-board text-[10px] tracking-wide text-[#244A34]">{tech}</span>)}</div></div>
        </div>
        <a href={item.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-t border-[#1A1A1A]/10 pt-4 font-board text-[10px] font-bold tracking-[0.14em] text-[#31573E] hover:text-[#1A1A1A]">EXPLORE THE PROJECT <ArrowUpRight size={14} /></a>
      </div>
    </motion.article>
  );
}

export default function Product() {
  const { t } = useLang();

  return (
    <main data-testid="product-platform" className="relative min-h-screen overflow-hidden bg-[#123B2A] px-4 pb-24 pt-24 text-[#F4F1EA] sm:px-6 md:px-12 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-32 h-[430px] w-[430px] rounded-full border-[56px] border-[#D4E894]/[0.07]" />
      <div className="relative mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 font-board text-xs tracking-[0.16em] text-[#F4F1EA]/85 transition-colors hover:text-white"><ArrowLeft size={15} /> {t.nav.station}</Link>

        <section className="relative mt-8 overflow-hidden border-y border-[#D4E894]/35 py-8 md:mt-10 md:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(rgba(227,243,164,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(227,243,164,.6) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
          <div className="relative grid gap-9 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div><p className="font-board text-[11px] tracking-[0.3em] text-[#D4E894]">PRODUCT LOCAL <span className="mx-2 text-[#F5B31B]">/</span> COACH C3</p><h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Make the<br /><span className="text-[#D4E894]">whole thing work.</span></h1><p className="mt-6 max-w-xl text-base leading-relaxed text-[#F4F1EA]/90 md:text-lg">I like turning a useful idea into a product journey people can understand—from the first problem to the connected system behind it.</p><a href="#product-work" className="mt-8 inline-flex items-center gap-3 bg-[#D4E894] px-5 py-3 font-board text-xs font-bold tracking-widest text-[#173A2D] transition-transform hover:-translate-y-0.5">EXPLORE THE BUILDS <ArrowRight size={15} /></a></div>
            <div className="relative mx-auto grid w-full max-w-[410px] grid-cols-2 gap-3 md:rotate-2">
              <div className="col-span-2 flex items-center justify-between border border-[#D4E894]/45 bg-[#0E3022] px-4 py-3 font-board text-[10px] tracking-[0.17em] text-[#E4F3B0]"><span>PRODUCT FIELD NOTES</span><span>001 — 002</span></div>
              <div className="min-h-32 rotate-[-2deg] bg-[#F5B31B] p-4 text-[#1A1A1A] shadow-md"><span className="font-board text-[9px] tracking-widest">START HERE</span><p className="mt-4 font-display text-xl font-semibold leading-tight">Who is this<br />for?</p></div>
              <div className="min-h-32 rotate-[2deg] bg-[#D4E894] p-4 text-[#173A2D] shadow-md"><span className="font-board text-[9px] tracking-widest">THEN ASK</span><p className="mt-4 font-display text-xl font-semibold leading-tight">What makes<br />it useful?</p></div>
              <div className="col-span-2 flex items-center gap-3 border border-[#D4E894]/45 bg-[#0E3022] p-4"><Layers3 className="shrink-0 text-[#D4E894]" size={24} /><p className="font-board text-[10px] leading-relaxed tracking-wide text-[#F4F1EA]/90">USER NEED <span className="text-[#F5B31B]">→</span> EXPERIENCE <span className="text-[#F5B31B]">→</span> WORKING SYSTEM</p></div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-2xl"><p className="font-board text-[11px] tracking-[0.28em] text-[#D4E894]">HOW I THINK ABOUT PRODUCTS</p><h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">A product is the full journey, not just the screen.</h2><p className="mt-4 text-base leading-relaxed text-[#F4F1EA]/85">Across my projects, I work from the problem and the workflow through interface, backend, and integration—keeping the result practical to use and operate.</p></div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">{principles.map(({ number, icon: Icon, title, copy }) => <motion.article key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border border-[#D4E894]/30 border-t-2 border-t-[#D4E894] bg-[#1A4935] p-5"><div className="flex items-center justify-between"><span className="font-board text-[10px] tracking-widest text-[#D4E894]">{number} / PRINCIPLE</span><Icon size={19} className="text-[#E3F3A4]" strokeWidth={1.7} /></div><h3 className="mt-5 font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-base leading-relaxed text-[#F4F1EA]/85">{copy}</p></motion.article>)}</div>
        </section>

        <section className="mb-12 grid gap-6 border-y border-[#D4E894]/35 bg-[#1A4935] p-5 py-8 md:mb-16 md:grid-cols-[.75fr_1.25fr] md:items-center md:p-8">
          <div><p className="font-board text-[11px] tracking-[0.26em] text-[#D4E894]">PRODUCT LEARNING · BITSOM</p><h2 className="mt-2 font-display text-2xl font-semibold">Product Management with Generative &amp; Agentic AI</h2><p className="mt-2 text-base text-[#F4F1EA]/90">BITS School of Management – CEPD · Successfully completed</p><p className="mt-2 font-board text-[10px] font-semibold tracking-wide text-[#F4F1EA]/90">30 JUL 2025 — 25 JAN 2026</p><a href="/certificates/bitsom-product-management.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-board text-[10px] font-bold tracking-[0.14em] text-[#E3F3A4] hover:text-white">VIEW CERTIFICATE <ArrowUpRight size={13} /></a></div>
          <div className="md:border-l md:border-[#D4E894]/30 md:pl-6"><p className="text-base leading-relaxed text-[#F4F1EA]/90">Structured study across product management, product strategy, experimentation, marketing, pricing, go-to-market, and practical generative and agentic AI applications.</p><div className="mt-4 flex flex-wrap gap-2">{["Product strategy", "Experimentation", "Marketing", "Pricing", "Go-to-market", "Generative AI", "Agentic AI"].map((topic) => <span key={topic} className="rounded-full border border-[#D4E894]/35 bg-[#123B2A] px-3 py-1.5 font-board text-[10px] tracking-wide text-[#E4F3B0]">{topic}</span>)}</div><p className="mt-4 font-board text-[10px] leading-relaxed tracking-wide text-[#D4E894]">MODULE 2 · CERTIFICATE OF APPRECIATION · EXCELLENT PERFORMANCE IN QUIZ</p></div>
        </section>

        <section id="product-work" className="scroll-mt-24 border-t border-[#D4E894]/35 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-board text-[11px] tracking-[0.28em] text-[#D4E894]">CASE STUDIES · PRODUCT LOCAL</p><h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">From user problem to useful system.</h2></div><span className="font-board text-[10px] font-semibold tracking-widest text-[#F4F1EA]/90">MUMBAI · BUILD LOG</span></div>
          <div className="mt-8 space-y-7">{cases.map((item) => <CaseCard key={item.name} item={item} />)}</div>
        </section>

        <div className="flex flex-wrap gap-3 border-t border-[#D4E894]/35 pt-7">
          <Link to="/engineering" className="bg-[#173A2D] px-5 py-3 font-board text-xs font-bold tracking-wider text-[#F4F1EA] hover:bg-[#28553F]">← ENGINEERING LOCAL</Link>
          <Link to="/events" className="inline-flex items-center gap-2 px-5 py-3 font-board text-xs tracking-wider text-[#E4F3B0] hover:text-white">NEXT LINE · COMMUNITY <ArrowRight size={14} /></Link>
          <Link data-testid="ticket-counter-return" to="/#booking" className="px-5 py-3 font-board text-xs font-semibold tracking-wider text-[#F4F1EA] hover:text-white">BACK TO TICKET COUNTER</Link>
        </div>
      </div>
    </main>
  );
}
