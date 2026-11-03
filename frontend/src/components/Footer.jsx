import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useLang } from "./LanguageContext";
import { ABOUT, PROFILE_LINKS } from "../data/content";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] pb-10 pt-16 text-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.1em]">PRATHAM CENTRAL</p>
            <p className="mt-2 max-w-xs text-sm text-[#F4F1EA]/60">{t.tagline}</p>
            <p className="mt-4 text-xs italic text-[#F4F1EA]/40">{t.footer.built}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            {["station", "engineering", "events", "product", "about", "contact"].map((k) => (
              <Link
                key={k}
                data-testid={`footer-link-${k}`}
                to={k === "station" ? "/" : `/${k}`}
                className="w-fit text-[#F4F1EA]/70 transition-colors duration-200 hover:text-[#F5B31B]"
              >
                {t.nav[k]}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <a
              data-testid="footer-github"
              href={ABOUT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-[#F4F1EA]/80 transition-colors duration-200 hover:text-[#F5B31B]"
            >
              <Github size={16} /> GitHub
            </a>
            <a data-testid="footer-linkedin" href={PROFILE_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-2 text-[#F4F1EA]/80 transition-colors duration-200 hover:text-[#F5B31B]"><Linkedin size={16} /> {t.footer.linkedin}</a>
            <a data-testid="footer-email" href={`mailto:${PROFILE_LINKS.email}`} className="flex w-fit items-center gap-2 text-[#F4F1EA]/80 transition-colors duration-200 hover:text-[#F5B31B]"><Mail size={16} /> {t.footer.email}</a>
            <a data-testid="footer-resume" href={PROFILE_LINKS.resume} download className="flex w-fit items-center gap-2 text-[#F4F1EA]/80 transition-colors duration-200 hover:text-[#F5B31B]"><FileText size={16} /> {t.footer.resume} · PDF</a>
          </div>
        </div>

        <div className="mt-12 border-t border-[#F4F1EA]/10 pt-6">
          <p className="text-xs text-[#F4F1EA]/40">
            {t.footer.rights.replace("2026", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
}
