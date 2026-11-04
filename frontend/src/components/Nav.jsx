import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
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
  const [muted, setMuted] = useState(true);
  const [captionsOn, setCaptionsOn] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    audio.volume = 0.62;
    const playMuted = audio.play();
    if (playMuted?.catch) playMuted.catch(() => {});
    return () => audio.pause();
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !muted;
    if (!nextMuted) {
      audio.volume = 0.62;
      try { await audio.play(); } catch { return; }
    }
    audio.muted = nextMuted;
    setMuted(nextMuted);
  };

  const toggleCaptions = () => {
    setCaptionsOn((value) => {
      const next = !value;
      const textTrack = audioRef.current?.textTracks?.[0];
      if (textTrack) textTrack.mode = next ? "hidden" : "disabled";
      return next;
    });
  };

  const links = [
    { k: "station", to: "/" },
    { k: "engineering", to: "/engineering" },
    { k: "events", to: "/events" },
    { k: "product", to: "/product" },
    { k: "about", to: "/about" },
    { k: "contact", to: "/contact" },
  ];
  const lineColor = {
    engineering: LINES[0].color,
    events: LINES[1].color,
    product: LINES[2].color,
    about: "#D2B8EE",
    contact: "#F5B31B",
  };

  const linkCls = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#F5B31B] ${
      isActive ? "text-[#F5B31B]" : "text-[#F4F1EA]/80"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#F4F1EA]/10 bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-2 sm:px-4 md:px-8">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Roundel />
          <span className="font-display text-base font-semibold tracking-[0.08em] text-[#F4F1EA] sm:text-lg sm:tracking-[0.12em]">
            PRATHAM CENTRAL
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
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

          <div className="flex items-center gap-0.5 text-[#F4F1EA] sm:gap-1.5">
            <button
              type="button"
              data-testid="station-audio-toggle"
              onClick={toggleAudio}
              aria-label={muted ? "Unmute Mumbai station ambience" : "Mute Mumbai station ambience"}
              aria-pressed={!muted}
              title={muted ? "Unmute station ambience" : "Mute station ambience"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B31B] md:h-10 md:w-auto md:gap-2 md:px-3"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span className="hidden xl:inline">{muted ? "SOUND OFF" : "MUTE"}</span>
            </button>
            <button
              type="button"
              data-testid="station-captions-toggle"
              onClick={toggleCaptions}
              aria-label={`${captionsOn ? "Turn off" : "Turn on"} ambience captions`}
              aria-pressed={captionsOn}
              title={captionsOn ? "Captions on" : "Captions off"}
              className={`inline-flex h-9 min-w-8 items-center justify-center rounded border px-1 font-board text-[10px] font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B31B] ${captionsOn ? "border-[#F5B31B]/70 text-[#F5B31B]" : "border-white/25 text-white/70 hover:text-white"}`}
            >CC</button>
          </div>

          <button
            data-testid="nav-menu-button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#F4F1EA]/20 bg-[#2C2A26] text-[#F4F1EA] shadow-sm transition-colors hover:bg-[#3A3427] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B31B] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <audio className="hidden" ref={audioRef} src="/audio/mumbai-station-ambience.mp3" autoPlay muted loop preload="auto" data-testid="station-ambience-audio">
        <track kind="captions" src="/audio/mumbai-station-ambience.en.vtt" srcLang="en" label="English ambience captions" onLoad={(event) => { event.currentTarget.track.mode = "hidden"; }} />
      </audio>
      {!muted && captionsOn && (
        <p role="status" aria-live="polite" data-testid="station-ambience-caption" className="absolute left-1/2 top-full w-max max-w-[min(92vw,46rem)] -translate-x-1/2 rounded-b-md border border-t-0 border-white/15 bg-[#1A1A1A]/95 px-4 py-2 text-center text-xs leading-relaxed text-[#F4F1EA]/90 shadow-lg">
          [Distant, indistinct platform announcements over Mumbai station crowd and rail ambience.]
        </p>
      )}

      {open && (
        <div className="absolute inset-x-0 top-full z-40 flex min-h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto border-b border-[#F4F1EA]/15 bg-[#1A1A1A] px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-xl lg:hidden" data-testid="nav-mobile-menu">
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
