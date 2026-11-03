import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "./LanguageContext";
import { LINES } from "../data/content";

function Roundel({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <circle cx="32" cy="32" r="30" fill="#F59E0B" />
      <circle cx="32" cy="32" r="19" fill="#1A1A1A" />
      <path
        d="M25 43V21h8.5a7.5 7.5 0 010 15H25"
        stroke="#F4F1EA"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { k: "station", to: "/" },
    { k: "engineering", to: "/engineering" },
    { k: "events", to: "/events" },
    { k: "product", to: "/product" },
    { k: "about", to: "/about" },
    { k: "contact", to: "/contact" },
  ];
  const lineColor = { engineering: LINES[0].color, events: LINES[1].color, product: LINES[2].color };

  const linkCls = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#F5B31B] ${
      isActive ? "text-[#F5B31B]" : "text-[#F4F1EA]/80"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F4F1EA]/10 bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Roundel />
          <span className="font-display text-lg font-semibold tracking-[0.12em] text-[#F4F1EA]">
            PRATHAM CENTRAL
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map(({ k, to }) => (
            <NavLink key={k} to={to} end={k === "station"} data-testid={`nav-link-${k}`} className={linkCls}>
              <span className="flex items-center gap-1.5">
                {lineColor[k] && (
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: lineColor[k] }} />
                )}
                {t.nav[k]}
              </span>
            </NavLink>
          ))}
        </nav>

        <button
          data-testid="nav-menu-button"
          className="text-[#F4F1EA] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-14 z-40 flex flex-col gap-2 bg-[#1A1A1A] px-6 pt-10 lg:hidden" data-testid="nav-mobile-menu">
          {links.map(({ k, to }) => (
            <NavLink
              key={k}
              to={to}
              end={k === "station"}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-${k}`}
              className={({ isActive }) =>
                `flex items-center gap-3 border-b border-[#F4F1EA]/10 py-4 font-display text-3xl font-semibold tracking-wide ${
                  isActive ? "text-[#F5B31B]" : "text-[#F4F1EA]"
                }`
              }
            >
              {lineColor[k] && (
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: lineColor[k] }} />
              )}
              {t.nav[k]}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
