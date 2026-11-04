import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Compass,
  ExternalLink,
  FileText,
  Github,
  Mail,
  Send,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/components/LanguageContext";
import { ABOUT, PROFILE_LINKS } from "@/data/content";

const CONTACT_LINKS = [
  {
    id: "email",
    icon: Mail,
    labelKey: "email",
    value: PROFILE_LINKS.email,
    href: `mailto:${PROFILE_LINKS.email}`,
    action: "SEND AN EMAIL",
  },
  {
    id: "linkedin",
    icon: ExternalLink,
    labelKey: "linkedin",
    value: "linkedin.com/in/pratham-handa",
    href: PROFILE_LINKS.linkedin,
    action: "VIEW PROFILE",
    external: true,
  },
  {
    id: "resume",
    icon: FileText,
    labelKey: "resume",
    value: "Download PDF",
    href: PROFILE_LINKS.resume,
    action: "DOWNLOAD RÉSUMÉ",
    download: true,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "github.com/Pratham-Handa",
    href: ABOUT.github,
    action: "VIEW REPOSITORIES",
    external: true,
  },
];

const SERVICES = [
  {
    number: "01",
    icon: Blocks,
    title: "Full-stack product delivery",
    description: "Turn a rough brief into a coherent web product: user flows, frontend, backend, APIs, authentication, payments, and deployment.",
    tags: "WEB APPS · INTEGRATIONS · WORKFLOWS",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Applied AI that fits the workflow",
    description: "Add AI, agents, or computer vision where they solve a real user problem, then connect the experience to the systems around it.",
    tags: "GENERATIVE AI · AGENTS · COMPUTER VISION",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Product thinking with execution",
    description: "Clarify the user need, shape the MVP, map the journey, and carry the work through implementation and iteration.",
    tags: "DISCOVERY · MVP · BUILD",
  },
];

const FITS = [
  {
    icon: Compass,
    title: "I connect the whole journey",
    copy: "Product choices, interface, backend, integrations, and delivery stay connected instead of becoming separate handoffs.",
  },
  {
    icon: Workflow,
    title: "I improve real operating work",
    copy: "At Intellidea, I migrated Wix sites to custom-coded websites and built connected assessment, payment, access, and reporting workflows.",
  },
  {
    icon: BrainCircuit,
    title: "I build AI into useful products",
    copy: "Wingtern, EcoStyle Agent, and SentinelSecure show how I apply AI within products and user workflows.",
  },
];

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const senderEmail = String(form.get("email") || "").trim();
    const topic = String(form.get("topic") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = `Portfolio enquiry${topic ? ` · ${topic}` : ""}`;
    const body = `Hi Pratham,\n\n${message}\n\nName: ${name}\nEmail: ${senderEmail}\nTopic: ${topic || "Not specified"}`;
    window.location.href = `mailto:${PROFILE_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <main data-testid="contact-page" className="relative min-h-screen overflow-hidden bg-[#2D2719] px-4 pb-16 pt-24 text-[#F4F1EA] sm:px-6 md:px-12 md:pb-20 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 top-20 h-[420px] w-[420px] rounded-full border-[54px] border-[#F5B31B]/[0.06]" />
      <div className="relative mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 font-board text-xs tracking-[0.16em] text-[#F4F1EA]/85 transition-colors hover:text-white">
          <ArrowLeft size={15} /> {t.nav.station}
        </Link>

        <section className="relative mt-7 overflow-hidden border-y border-[#F5B31B]/40 py-8 md:mt-9 md:py-11">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(227,243,164,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(227,243,164,.65) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
          <div className="relative grid gap-8 md:grid-cols-[1.12fr_.88fr] md:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="font-board text-[10px] font-semibold tracking-[0.3em] text-[#F5B31B]">CONTACT TERMINUS <span className="mx-2 text-[#F5B31B]">/</span> COACH C4</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Let’s move your<br /><span className="text-[#F5B31B]">next idea forward.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F4F1EA]/90 md:text-lg">
                I’m Pratham, a software engineer and product-minded builder in Mumbai. I turn unclear needs into connected, usable systems—from the first workflow through full-stack delivery and applied AI.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact-form" className="inline-flex items-center gap-3 bg-[#F5B31B] px-5 py-3 font-board text-xs font-bold tracking-[0.12em] text-[#241C0C] shadow-[4px_4px_0_#130F08] transition-transform hover:-translate-y-0.5">
                  CONTACT ME NOW <ArrowRight size={16} />
                </a>
                <a href={`mailto:${PROFILE_LINKS.email}`} className="inline-flex items-center gap-2 border border-[#F5B31B]/55 px-5 py-3 font-board text-xs font-semibold tracking-[0.1em] text-[#F4F1EA] transition-colors hover:bg-white/5">
                  <Mail size={15} /> EMAIL DIRECTLY
                </a>
              </div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }} aria-label="How I take an idea from problem to delivery" className="mx-auto w-full max-w-[420px] border-2 border-[#130F08] bg-[#FDFBF7] p-4 text-[#1A1A1A] shadow-[7px_7px_0_#AC7917] sm:p-5">
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-3 font-board text-[9px] font-semibold tracking-[0.18em]">
                <span>PRATHAM CENTRAL · BUILD ROUTE</span><span className="text-[#95691A]">C4</span>
              </div>
              <div className="relative mt-4 space-y-3 pl-1">
                <div aria-hidden="true" className="absolute bottom-4 left-[13px] top-4 w-px bg-[#A57A24]" />
                {[
                  ["01", "Understand the real need"],
                  ["02", "Design a clear route"],
                  ["03", "Build, connect, ship"],
                ].map(([number, label], index) => (
                  <div key={number} className="relative flex items-center gap-3">
                    <span className={`z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[#FDFBF7] font-board text-[8px] font-bold text-white ${index === 2 ? "bg-[#785213]" : "bg-[#95691A]"}`}>{number}</span>
                    <span className="font-display text-base font-semibold sm:text-lg">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[#1A1A1A]/25 pt-3 font-board text-[9px] tracking-[0.12em] text-[#95691A]">
                <span>FROM A REAL PROBLEM</span><span>TO A WORKING PRODUCT →</span>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="py-10 md:py-12" aria-labelledby="services-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="font-board text-[10px] font-semibold tracking-[0.25em] text-[#F5B31B]">WHAT I CAN HELP WITH</p><h2 id="services-heading" className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Useful work, from plan to platform.</h2></div>
            <span className="font-board text-[9px] tracking-[0.15em] text-[#F4F1EA]/65">THREE LINES · ONE BUILD PARTNER</span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {SERVICES.map(({ number, icon: Icon, title, description, tags }) => (
              <motion.article key={number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="border border-[#F5B31B]/30 border-t-2 border-t-[#F5B31B] bg-[#3D3422] p-4 sm:p-5">
                <div className="flex items-center justify-between"><span className="font-board text-[9px] tracking-[0.18em] text-[#F5B31B]">{number} / SERVICE</span><Icon size={19} className="text-[#FFE6A6]" strokeWidth={1.7} /></div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F4F1EA]/85">{description}</p>
                <p className="mt-4 border-t border-[#F5B31B]/20 pt-3 font-board text-[8px] leading-relaxed tracking-[0.12em] text-[#F5B31B]">{tags}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#F5B31B]/35 py-9 md:py-11" aria-labelledby="fit-heading">
          <div className="grid gap-6 md:grid-cols-[.72fr_1.28fr] md:gap-10">
            <div>
              <p className="font-board text-[10px] font-semibold tracking-[0.25em] text-[#F5B31B]">WHY BRING ME ON</p>
              <h2 id="fit-heading" className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight sm:text-4xl">A builder who can connect the dots—and ship the work.</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#F4F1EA]/80">You get someone who can move between product questions and implementation, keep the user journey in view, and take ownership of the details that make a system usable.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="border border-[#F5B31B]/30 bg-[#3D3422] px-3 py-2 font-board text-[9px] tracking-wide text-[#FFE6A6]">WINGTERN · 88 / 100</span>
                <span className="border border-[#F5B31B]/30 bg-[#3D3422] px-3 py-2 font-board text-[9px] tracking-wide text-[#FFE6A6]">FULL-STACK · AI · PRODUCT</span>
              </div>
            </div>
            <div className="space-y-3">
              {FITS.map(({ icon: Icon, title, copy }, index) => (
                <motion.article key={title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="grid grid-cols-[34px_1fr] gap-3 border-b border-[#F5B31B]/20 pb-3 last:border-0 last:pb-0">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[#F5B31B]/35 bg-[#3D3422] text-[#F5B31B]"><Icon size={16} /></span>
                  <div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#F4F1EA]/80">{copy}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-form" className="scroll-mt-24 py-10 md:py-12" aria-labelledby="contact-form-heading">
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="font-board text-[10px] font-semibold tracking-[0.25em] text-[#F5B31B]">NEXT STOP · YOUR INBOX</p>
              <h2 id="contact-form-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Tell me what you’re trying to build.</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#F4F1EA]/85">Share the goal, the rough idea, or the part that’s stuck. I’ll get back to you and we can find the right next step.</p>
              <p className="mt-5 flex items-center gap-2 font-board text-[9px] tracking-[0.12em] text-[#F5B31B]"><span className="h-2 w-2 rounded-full bg-[#F5B31B]" /> OPEN TO FULL-STACK, APPLIED AI &amp; PRODUCT WORK</p>
            </div>

            <form onSubmit={handleSubmit} className="border border-[#F5B31B]/35 bg-[#3D3422] p-4 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="font-board text-[9px] font-semibold tracking-[0.15em] text-[#F5B31B]">YOUR NAME</span><input name="name" autoComplete="name" required className="mt-2 w-full border border-[#F5B31B]/30 bg-[#211A0D] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F5B31B] focus:ring-1 focus:ring-[#F5B31B]" placeholder="Name" /></label>
                <label className="block"><span className="font-board text-[9px] font-semibold tracking-[0.15em] text-[#F5B31B]">EMAIL ADDRESS</span><input name="email" type="email" autoComplete="email" required className="mt-2 w-full border border-[#F5B31B]/30 bg-[#211A0D] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#F5B31B] focus:ring-1 focus:ring-[#F5B31B]" placeholder="you@company.com" /></label>
              </div>
              <label className="mt-4 block"><span className="font-board text-[9px] font-semibold tracking-[0.15em] text-[#F5B31B]">WHAT WOULD YOU LIKE TO WORK ON?</span><select name="topic" defaultValue="" style={{ colorScheme: "light" }} className="mt-2 w-full border border-[#F5B31B]/50 bg-[#FDFBF7] px-3 py-2.5 text-sm text-[#1A1A1A] outline-none focus:border-[#AC7917] focus:ring-1 focus:ring-[#AC7917]"><option value="" disabled style={{ backgroundColor: "#FDFBF7", color: "#1A1A1A" }}>Choose a route</option><option style={{ backgroundColor: "#FDFBF7", color: "#1A1A1A" }}>Full-stack product build</option><option style={{ backgroundColor: "#FDFBF7", color: "#1A1A1A" }}>Applied AI or automation</option><option style={{ backgroundColor: "#FDFBF7", color: "#1A1A1A" }}>Product discovery and MVP</option><option style={{ backgroundColor: "#FDFBF7", color: "#1A1A1A" }}>Something else</option></select></label>
              <label className="mt-4 block"><span className="font-board text-[9px] font-semibold tracking-[0.15em] text-[#F5B31B]">A LITTLE CONTEXT</span><textarea name="message" required rows={4} className="mt-2 w-full resize-y border border-[#F5B31B]/30 bg-[#211A0D] px-3 py-2.5 text-sm leading-relaxed text-white outline-none placeholder:text-white/45 focus:border-[#F5B31B] focus:ring-1 focus:ring-[#F5B31B]" placeholder="What are you building, who is it for, and what would a good outcome look like?" /></label>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button type="submit" className="inline-flex items-center gap-2 bg-[#F5B31B] px-5 py-3 font-board text-[10px] font-bold tracking-[0.13em] text-[#241C0C] shadow-[4px_4px_0_#130F08] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">CONTACT ME NOW <Send size={14} /></button>
                <p className="max-w-[260px] text-[11px] leading-relaxed text-[#F4F1EA]/65">This opens your email app with the message ready to send. No data is submitted to this website.</p>
              </div>
              {submitted && <p role="status" className="mt-4 border-t border-[#F5B31B]/20 pt-3 text-xs leading-relaxed text-[#FFE6A6]">Your email app should open with your draft. If it didn’t, email <a className="underline underline-offset-2" href={`mailto:${PROFILE_LINKS.email}`}>{PROFILE_LINKS.email}</a>.</p>}
            </form>
          </div>

          <div className="mt-8 border-t border-[#F5B31B]/25 pt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-board text-[9px] font-semibold tracking-[0.22em] text-[#F5B31B]">OTHER WAYS TO REACH ME</p><span className="font-board text-[8px] tracking-[0.15em] text-[#F4F1EA]/55">PRATHAM CENTRAL · CONTACT DESK</span></div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_LINKS.map(({ id, icon: Icon, labelKey, label, value, href, external, download }) => (
                <a key={id} data-testid={`contact-${id}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} download={download || undefined} className="group flex min-w-0 items-center gap-3 border border-[#F5B31B]/20 bg-[#3D3422]/75 p-3 transition-colors hover:border-[#F5B31B]/55 hover:bg-[#3D3422]">
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#F5B31B]/30 text-[#F5B31B]"><Icon size={15} /></span>
                  <span className="min-w-0 flex-1"><span className="block font-board text-[8px] tracking-[0.13em] text-[#F5B31B]">{label || t.footer[labelKey]}</span><span className="mt-1 block truncate text-xs text-[#F4F1EA]/85">{value}</span></span>
                  <ArrowUpRight size={13} className="shrink-0 text-[#F4F1EA]/50 transition-colors group-hover:text-[#F5B31B]" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between border-t border-[#F5B31B]/25 pt-4 font-board text-[9px] tracking-[0.14em] text-[#F4F1EA]/60">
          <span>PRATHAM CENTRAL · MUMBAI, INDIA</span>
          <Link to="/#booking" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F5B31B]">BACK TO THE BOOKING COUNTER <ArrowUpRight size={12} /></Link>
        </div>
      </div>
    </main>
  );
}
