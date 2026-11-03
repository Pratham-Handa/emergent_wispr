import { motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, GitBranch, Megaphone, Mic2, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/components/LanguageContext";

const moments = [
  { year: "2026", label: "6 FEBRUARY", title: "Enthusiac", role: "First Prize · Business Speech", detail: "Business communication and public-speaking competition at J. S. Kothari Business School, Mumbai.", contribution: "Delivered the business speech and won first prize.", icon: Mic2 },
  { year: "2026", label: "25 MAY", title: "AI Builders Hackathon", role: "OpenAI × Outskill · 88 / 100", detail: "An AI-building hackathon focused on developing practical solutions with generative AI.", contribution: "Built the Wingtern full-stack MVP using Next.js, TypeScript, Supabase, and OpenAI.", icon: GitBranch },
  { year: "2024", label: "JUNE — JULY", title: "buildspace", role: "Project Builder / Project Manager", detail: "A short, focused product environment centered on building projects.", contribution: "Worked across project building and coordination.", icon: UsersRound },
  { year: "2023–24", label: "AUG — MAR", title: "Communications Directorate", role: "Director of Communications · KC College", detail: "Led four teams: DC, SMR, Content, and Coverage.", contribution: "Directed work across the teams and coordinated communication efforts.", icon: UsersRound },
  { year: "2023–24", label: "TECH DEPARTMENT", title: "Fiestron 2024", role: "Chairperson · KC College", detail: "The annual tech festival hosted by the college's Tech Department.", contribution: "Hosted Fiestron 2024 as Tech Department Chairperson.", icon: Megaphone },
  { year: "2023–24", label: "SEP — FEB", title: "Sports Committee", role: "Social Media Manager · HSNC University", detail: "The university's official Sports Committee Instagram account.", contribution: "Managed the committee's official social media account.", icon: GitBranch },
];

const gatherings = [
  { date: "17 DEC 2025", title: "HABITia 25 · Innovate to Incubate", role: "Participated", detail: "Startup pitches, panels, incubation opportunities, and ecosystem conversations." },
  { date: "31 MAY 2026", title: "Codex Community Meetup · Mumbai", role: "Attended", detail: "Modern AI-assisted software development and builder workflows." },
  { date: "19 JUN 2026", title: "Student Builder Mixer · Devfolio", role: "Attended", detail: "A gathering for student builders, developers, and founders to exchange ideas." },
  { date: "05 SEP 2026", title: "Dev Days · Mumbai", role: "Attended", detail: "Developer event covering agent-driven development, AI coding tools, architecture, and engineering workflows." },
  { date: "05 SEP 2026", title: "AI Product Management Meetup", role: "Attended", detail: "Product strategy, validation, technology, and real-world AI product development." },
];

export default function Community() {
  const { t } = useLang();

  return (
    <main data-testid="community-platform" className="relative min-h-screen overflow-hidden bg-[#F5B31B] px-4 pb-24 pt-24 text-[#1A1A1A] sm:px-6 md:px-12 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.075]" style={{ backgroundImage: "conic-gradient(#1A1A1A 25%, transparent 0 50%, #1A1A1A 0 75%, transparent 0)", backgroundSize: "52px 52px" }} />
      <div className="relative mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 font-board text-xs tracking-[0.16em] text-[#1A1A1A]/85 transition-colors hover:text-black"><ArrowLeft size={15} /> {t.nav.station}</Link>

        <section className="relative mt-10 grid gap-8 border-y-2 border-[#1A1A1A] py-10 md:grid-cols-[1.15fr_.85fr] md:items-center md:py-14">
          <div>
            <p className="font-board text-[11px] tracking-[0.28em]">EVENTS EXPRESS <span className="mx-2 text-[#B3352B]">/</span> COACH C2</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.97] tracking-tight sm:text-6xl lg:text-7xl">Good things<br /><span className="text-[#B3352B]">happen together.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1A1A1A]/90 md:text-lg">A people-first line through building alongside others, learning in public, and sharing ideas. Here are a few verified stops from the journey so far.</p>
            <a href="#community-stops" className="mt-8 inline-flex items-center gap-3 border-2 border-[#1A1A1A] bg-[#FDFBF7] px-5 py-3 font-board text-xs tracking-widest shadow-[4px_4px_0_#1A1A1A] transition-transform hover:-translate-y-0.5">WALK THE PLATFORM <ArrowDownRight size={16} /></a>
          </div>
          <div aria-hidden="true" className="relative mx-auto w-full max-w-[360px] rotate-2 border-2 border-[#1A1A1A] bg-[#FDFBF7] p-5 shadow-[9px_9px_0_#B3352B] md:p-7">
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-3 font-board text-[9px] tracking-[0.2em]"><span>COMMUNITY JUNCTION</span><span>EST. MUMBAI</span></div>
            <div className="py-8 text-center"><UsersRound className="mx-auto text-[#B3352B]" size={42} strokeWidth={1.5} /><p className="mt-4 font-display text-4xl font-semibold leading-none">MAKE<br />ROOM.</p><p className="mt-3 font-board text-[10px] tracking-[0.22em] text-[#1A1A1A]/80">IDEAS · PEOPLE · MOMENTUM</p></div>
            <div className="flex items-center justify-between border-t border-dashed border-[#1A1A1A]/30 pt-3 font-board text-[9px] tracking-widest"><span>ALL ABOARD</span><span>NO RSVP REQUIRED</span></div>
          </div>
        </section>

        <section id="community-stops" className="scroll-mt-24 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-board text-[11px] font-bold tracking-[0.24em] text-[#8F281F]">MY ROLES &amp; CONTRIBUTIONS</p><h2 className="mt-3 font-display text-3xl font-semibold">Teams I led, events I hosted, products I built.</h2></div><span className="font-board text-xs font-semibold tracking-widest text-[#1A1A1A]/75">2023 — 2026</span></div>

          <div data-testid="community-moment-cards" className="relative mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {moments.map(({ year, label, title, role, detail, contribution, icon: Icon }, i) => (
              <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.08 }} className="relative border-2 border-[#1A1A1A] bg-[#FDFBF7] p-5 shadow-[5px_5px_0_rgba(26,26,26,0.85)] sm:p-6">
                <span className="absolute -top-3 left-5 grid h-8 w-8 place-items-center rounded-full border-2 border-[#1A1A1A] bg-[#B3352B] text-[#FDFBF7] md:left-6"><span className="h-2 w-2 rounded-full bg-[#FDFBF7]" /></span>
                <p className="font-board text-[11px] font-semibold tracking-[0.16em] text-[#70231D]">{year} <span className="mx-1 text-[#1A1A1A]/75">·</span> {label}</p>
                <div className="mt-4 flex items-start justify-between gap-2"><h3 className="font-display text-2xl font-semibold leading-tight">{title}</h3><Icon size={22} className="mt-1 shrink-0 text-[#B3352B]" strokeWidth={1.7} /></div>
                <p className="mt-2 font-board text-sm font-bold tracking-wide">{role}</p>
                <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]/85">{detail}</p>
                <div className="mt-5 border-t border-[#1A1A1A]/15 pt-4"><p className="font-board text-[10px] font-bold tracking-[0.18em] text-[#8F281F]">MY CONTRIBUTION</p><p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/90">{contribution}</p></div>
              </motion.article>
            ))}
          </div>
          <div className="mt-14 border-t-2 border-[#1A1A1A]/25 pt-8">
            <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-board text-[11px] font-bold tracking-[0.24em] text-[#8F281F]">EVENTS &amp; COMMUNITY · PARTICIPATION LOG</p><h3 className="mt-2 font-display text-3xl font-semibold">Rooms I’ve learned in.</h3></div><p className="max-w-md text-base leading-relaxed text-[#1A1A1A]/85">This log keeps attendance distinct from work I took responsibility for; the contribution cards above show the documented roles and outputs.</p></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{gatherings.map((event) => <article key={event.title} className="border border-[#1A1A1A]/35 bg-[#FDFBF7] p-4 sm:p-5"><div className="flex items-baseline justify-between gap-3"><p className="font-board text-[10px] font-bold tracking-wide text-[#8F281F]">{event.date}</p><span className="shrink-0 font-board text-[10px] font-bold text-[#31573E]">{event.role}</span></div><h4 className="mt-3 font-display text-xl font-semibold leading-tight">{event.title}</h4><p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/85">{event.detail}</p></article>)}</div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 border-t-2 border-[#1A1A1A]/20 pt-7">
          <Link to="/engineering" className="bg-[#1A1A1A] px-5 py-3 font-board text-xs font-bold tracking-wider text-[#F4F1EA] hover:bg-[#333]">← PREVIOUS LINE · ENGINEERING</Link>
          <Link data-testid="ticket-counter-return" to="/#booking" className="px-5 py-3 font-board text-xs font-bold tracking-wider text-[#1A1A1A] hover:text-black">BACK TO TICKET COUNTER</Link>
        </div>
      </div>
    </main>
  );
}
