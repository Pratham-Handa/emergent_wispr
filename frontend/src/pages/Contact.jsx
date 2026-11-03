import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, FileText } from "lucide-react";
import { useLang } from "@/components/LanguageContext";
import { ABOUT, PROFILE_LINKS } from "@/data/content";

const CARDS = [
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
    action: "VIEW REPOSITORIES",
    external: true,
    href: ABOUT.github,
  },
];

export default function Contact() {
  const { t } = useLang();

  return (
    <main data-testid="contact-page" className="min-h-[100svh] bg-[#F4F1EA] px-6 pb-24 pt-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-board text-[11px] tracking-[0.3em] text-[#B3352B]">TERMINUS · संपर्क</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            {t.nav.contact}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#1A1A1A]/70">
            I can help turn an unclear workflow into a usable system: full-stack product builds, applied AI integrations, payment and access flows, and practical automation. If that is what your team needs, tell me what you are trying to improve.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const label = c.label || t.footer[c.labelKey];
            const value = c.value;
            const inner = (
              <>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[#F4F1EA]"
                  style={{ background: "#166534" }}
                >
                  <Icon size={20} />
                </span>
                <span className="mt-4 block font-display text-xl font-semibold tracking-wide text-[#1A1A1A]">
                  {label}
                </span>
                <span className="mt-1 block break-all text-sm text-[#1A1A1A]/75">
                  {value}
                </span>
                <span className="mt-4 block font-board text-[10px] font-semibold tracking-[0.2em] text-[#166534]">
                  {c.action} →
                </span>
              </>
            );
            const cls = "block h-full rounded-lg border-2 border-[#1A1A1A]/20 bg-[#FDFBF7] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#166534]/60";
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a data-testid={`contact-${c.id}`} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} download={c.download || undefined} className={cls}>
                  {inner}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
