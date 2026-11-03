# PRATHAM CENTRAL — architecture.md
What exists, where, and how to extend it.

## Stack
- **Frontend**: React 19 (Create React App via craco), Tailwind CSS 3.4 + tailwindcss-animate, framer-motion 11.18, lenis 1.3.27 (lazy), react-router-dom 7.18, sonner (toasts), lucide-react (icons). No TypeScript (template default), no state library (context is enough).
- **Backend**: stock FastAPI template (`/app/backend/server.py`, health route `/api/`). Unused by the portfolio. MongoDB env vars untouched.
- **Assets pipeline**: one-shot Python scripts (see "Scripts" below). No runtime asset generation.

## Routes
| Path | Page | Notes |
|---|---|---|
| `/` | `pages/Station.jsx` | Station home: hero + platform scene + booking counter + all lines |
| `/engineering` | `pages/LineStub.jsx id="engineering"` | Navy blueprint stub → full build next |
| `/events` | `pages/LineStub.jsx id="events"` | Amber poster stub |
| `/product` | `pages/LineStub.jsx id="product"` | Green studio stub |
| `/about` | `pages/About.jsx` | Central Interchange — real data |
| `/contact` | `pages/Contact.jsx` | Terminus — GitHub live, rest placeholders |

## Source map (all under `/app/frontend/src`)
- **`data/content.js` — THE single source of truth.**
  - `LINES`: 3 lines (id, line name, destination, coach, color, path, category per language).
  - `STATIONS`: station names per line (6 each; first = PRATHAM CENTRAL, last = destination).
  - `STUBS`: per-line stub theme (colors, dark flag, blurb[lang], upcoming chips, note[lang]).
  - `ABOUT`: intro paragraphs, education, achievements, GitHub URL.
  - `STRINGS`: complete en/hi/mr UI dictionary (nav, hero, board messages, ticket labels, boarding, eggs, stations, footer). **Adding any new visible text = add it here in all 3 languages.**
- **`components/LanguageContext.jsx`** — `LanguageProvider` (localStorage `pc-lang`, sets `<html lang>`), `useLang()` → `{lang, setLang, t}`, `LanguageToggle` (segmented EN/हिंदी/मराठी pill; `idPrefix` prop keeps testids unique when used in nav AND hero).
- **`components/Nav.jsx`** — fixed charcoal signage bar: Roundel SVG logo, NavLinks with line-color dots, desktop inline + mobile full-screen overlay (`nav-menu-button`), language toggle in both. Active link = amber.
- **`components/DigitalBoard.jsx`** — LED panel: recessed dark inset, amber mono text with glow shadow, `aria-live="polite"`, rotates `t.board` messages every 4.5s (resets on language change), click = next message. AnimatePresence flip on swap.
- **`components/PlatformScene.jsx`**
  - `export function TrainSVG({stripe, id})` — the flat EMU: roof, pantograph, cream body, red band (default `#B3352B`, prop-overridable), doors, windows, per-coach "PRATHAM EXPRESS · Cx" labels, cab with PRATHAM destination box + headlights + bogies.
  - `default PlatformScene` — parallax skyline (useScroll/useTransform, grayscale 10%), hanging yellow sign (प्रथम सेंट्रल | PRATHAM CENTRAL), train arrival (`x: 108% → 0`, 1.7s, `useReducedMotion` → opacity fallback), platform strip + yellow safety line, **aunty** (polaroid button → AnimatePresence speech bubble with `t.eggs.auntyLabel` + `<audio src="/audio/aunty.mp3">` tap-to-play, auto-hides play button on error), **chaiwala** (sticker button → `toast.success(t.eggs.chaiToast)`).
- **`components/TicketCounter.jsx`** — section `#booking`. Line cards (`aria-pressed`, selected = line-color border + hard shadow) → ticket (paper texture overlay, colored header, FROM/TO, perforation, TRAIN/CLASS/FARE/PNR/DATE/TIME grid, deterministic `Barcode` seeded from serial, footnote) → `punch-board-button` → stamp → boarding overlay (train sweep + `BOARDING — {destination}` + progress bar) → `navigate(line.path)`. Timers in a ref, cleaned on unmount.
- **`components/AllStations.jsx`** — section `#stations`. One card per line: header chip + destination; horizontal track of `STATIONS[line]` dots (first = red pulsing YOU ARE HERE via `animate-ping`, last = filled in line color, connectors at 35% opacity); labels under dots (last label `-translate-x-full` to stay inside the card). Every node/line click → `navigate(line.path)`.
- **`components/Footer.jsx`** — charcoal: brand, nav links, GitHub real link, dashed placeholder chips (LinkedIn/email/résumé), disclaimer line.
- **`pages/Station.jsx`** — composes the home: eyebrow → masked h1 reveal → tagline → support → CTAs (`book-ticket-cta` scrolls to #booking, `skip-intro-btn` to #stations — via `window.__lenis.scrollTo` if present) → DigitalBoard → PlatformScene (`mt-auto` pins the scene to the viewport bottom) → TicketCounter → AllStations.
- **`pages/LineStub.jsx`** — prop `id`; reads `STUBS[id]`; themed bg (engineering = #0F1D45 + CSS blueprint grid gradients; events = #F5B31B; product = #123B2A), line badge, Oswald destination, blurb, "UNDER CONSTRUCTION" box with upcoming station chips, CTAs.
- **`pages/About.jsx`** / **`pages/Contact.jsx`** — render `ABOUT` + `t`; placeholders styled dashed with "AWAITING LINK".
- **`App.js`** — ErrorBoundary (train-themed fallback) → LanguageProvider → BrowserRouter: `LenisSetup` (dynamic `import("lenis")`, try/catch, skipped when reduced motion, exposes `window.__lenis`, destroys on unmount), `ScrollToTop`, `Nav`, Routes, `Footer`, sonner `Toaster`.
- **`index.css`** — CSS vars, `.font-display` (Oswald→Khand fallback), `.font-board` (JetBrains Mono→Mukta), grain overlay, selection/focus styles, `prefers-reduced-motion` kill switch. `tailwind.config.js` adds `fontFamily.display/board` on top of the template's shadcn tokens (kept intact — ui/ components depend on them).

## Public assets (`/app/frontend/public`)
- `fonts/` — 41 self-hosted woff2 (Oswald, Khand, Outfit, Mukta, JetBrains Mono; latin/latin-ext/devanagari) + `fonts.css` with @font-face + unicode-range. Loaded via `<link rel="stylesheet" href="/fonts/fonts.css">` in index.html.
- `figures/aunty.jpg` (platform polaroid), `figures/chaiwala.png` (alpha cutout), `og.jpg` (OG poster), `favicon.svg` (amber roundel "P"), `audio/aunty.mp3` (TTS clip, 80KB).

## Scripts (one-shot, outside frontend)
- `/app/scripts/fetch_fonts.py` — downloads Google Fonts woff2 subsets, rewrites `fonts.css` to local paths. Re-run only if fonts change.
- `/app/scripts/process_figures.py <in> <out>` — numpy border flood-fill background removal (threshold 185).
- `/app/backend/scripts/generate_audio.py` — emergentintegrations `OpenAITextToSpeech` (key `EMERGENT_LLM_KEY` in `/app/backend/.env`) → aunty.mp3. Re-run only if the line changes.

## Local environment and run commands
- This checkout is at `C:\WEBSITE\emergent_wispr`; the frontend lives in `frontend/`.
- Use Node.js 20 or 22 and Corepack. From `frontend/`, run `corepack yarn install --frozen-lockfile`, then `corepack yarn start` and open `http://localhost:3000`.
- Create a production bundle with `corepack yarn build` from `frontend/`; output is `frontend/build/`.
- The current portfolio routes do not call the backend and need no `.env`, database, migrations, or authentication. `backend/` is a separate FastAPI starter.
- The font stylesheet loads locally from `frontend/public/fonts/`; `python scripts/fetch_fonts.py` refreshes those files from the project root.
- See the root `README.md` for the numbered first-run guide.

## How to extend
- **Build a real line page**: replace `LineStub` route with a new page; reuse `LINES`/`STATIONS`; map each "station" to an anchored section (`/engineering#toolkit`) so `AllStations` nodes can deep-link (change `navigate(line.path)` → `navigate(``${line.path}#${i}``)`).
- **Add a line/event/project/award**: edit `content.js` only.
- **Add UI text**: add keys to `STRINGS` in all three languages; never hardcode strings in components.
- **Swap the aunty's line**: edit `t.eggs.auntyLabel` (content.js) + re-run `generate_audio.py` to regenerate the mp3.
