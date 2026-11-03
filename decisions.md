# PRATHAM CENTRAL — decisions.md
Why things are the way they are. Written for whoever picks this up next.

## Local handoff — 3 November 2026, 23:34:54 IST

25. **Keep the portfolio frontend standalone.** The routes and portfolio content are served by React; no backend API or database is needed for the current experience. Run the project from `frontend/`, and keep the FastAPI starter separate until a real backend feature is added.
26. **Use the checked-in Yarn lockfile.** `corepack yarn install --frozen-lockfile` reproduces the dependency graph pinned by the project instead of silently rewriting it.
27. **Keep fonts self-hosted and make the asset script portable.** The app’s CSS points to `/fonts/*.woff2`; the font fetcher now writes to this checkout’s `frontend/public/fonts` directory rather than the original Emergent container path.
28. **Include a local favicon.** A small SVG roundel uses the portfolio’s charcoal and amber palette and avoids a missing favicon request.
29. **Keep setup in the root README.** The README documents local development, production build output, optional asset refresh, and a numbered first-run sequence. No environment file or backend startup is required for the portfolio.

The production build was verified successfully on 3 November 2026 at 23:34:54 IST. Exact build and dependency setup are recorded in `test_result.md`.

## Scope
1. **Home page first.** Pratham's explicit ask ("build me the home page"), with a 10-credit budget. Everything else = themed stubs so navigation is never broken. Decided over building all three lines shallowly.
2. **No forced ticketing.** Brief rule. Skip-intro button, persistent nav, and All Lines section are reachable without touching the counter.
3. **No backend.** Zero data-driven features in Phase 1 → all content in `src/data/content.js`. No API latency, no DB dependency, trivially portable (works on any static host).

## Design system
4. **Palette: warm paper beige (#F4F1EA) + charcoal (#1A1A1A)** as the base — Pratham asked for "super warm, proper Mumbai" — with line colors blue #1E3A8A / amber #D97706 / green #166534 and signal red #B3352B as the accent. Solid colors + textures, never gradients (brief bans "AI slop" gradients; dark colors used independently, not as gradient washes).
5. **Typography: Oswald (Latin display) + Khand (Devanagari display)** — both condensed, so Hindi/Marathi headlines keep the same station-signage feel. Outfit + Mukta for body (Mukta covers Devanagari body text). JetBrains Mono for the LED board, ticket serials, labels — mimics real railway printouts. Deliberately avoided Inter/Roboto.
6. **Fonts are self-hosted** (`public/fonts/`, 41 woff2 faces, via `/fonts/fonts.css`). Reason: the Google Fonts stylesheet never actually loaded in the preview environment (document.fonts had zero loaded faces), and self-hosting removes a third-party dependency, is faster, and is deterministic. Khand/Oswald were chosen specifically because they have Devanagari subsets.
7. **The train is hand-built SVG** (viewBox 960×286), flat/architectural: cream body, charcoal skirt, red band — the iconic Mumbai EMU read. No 3D, no cartoon mascots (brief bans both). The SVG takes a `stripe` prop so the boarding overlay reuses it in the line's color.
8. **The aunty is a polaroid, not a cutout.** The generated illustration had a full station scene baked in, so framing it as a "platform photograph" (white border, hard shadow) looks deliberate; the chaiwala DID get background-removed (flood-fill script) and floats as a sticker. Two treatments read as intentional variety.
9. **Grain overlay** (`body::before`, feTurbulence SVG, 4.5% opacity) — makes beige feel like printed paper instead of a digital void.

## Interactions
10. **CSS/framer-motion only, nothing heavy.** Train arrival = 1.7s x-translate with a long-deceleration ease; headline = masked line reveal; board = flip-swap; punch = scale-2.4→1 stamp with backOut. All short and purposeful per the brief.
11. **lenis is an enhancement, not a dependency-critical path**: dynamically imported, wrapped in try/catch, skipped entirely under `prefers-reduced-motion`, exposed as `window.__lenis` so anchors (Book ticket / Skip intro) use `lenis.scrollTo` when present and `scrollIntoView` otherwise.
12. **Audio is never autoplayed** (brief rule). The aunty's clip has a tap-to-play button; her speech bubble works with zero audio (play button hides itself if the mp3 fails to load).
13. **Language persistence**: choice stored in localStorage (`pc-lang`) and set on `<html lang>`; the interface dictionary lives in `STRINGS` (en/hi/mr) in content.js. Technical terms (React, API, "Booking Counter" proper nouns) intentionally stay English — brief says don't translate technical content if it damages clarity.
14. **Board messages rotate every 4.5s** and reset on language change; clicking advances manually (doubles as a mini easter egg — one message is a pun: "THIS TRAIN IS NEVER LATE").

## Ticket
15. **Ticket realism details**: paper texture image with mix-blend-multiply, dashed perforation with punched-out circles matching the section background, PNR `PRTM-YYYY-XXXXX`, locale-formatted date (hi-IN / mr-IN / en-IN), CLASS: BUILDER, FARE: FREE, deterministic barcode (44 bars from a seeded PRNG on the serial), footnote "Carry your curiosity. Not valid for procrastination."
16. **Boarding sequence is timed, not blocked**: punch → stamp (700ms) → full-screen boarding overlay with the line-colored train sweeping across → `navigate(line.path)` at 2.7s. All timers cleaned up on unmount.

## Content integrity
17. **Placeholders are visible by design**: dashed borders + literal "[add your LinkedIn]" / "[add your email]" / "[add résumé PDF]" labels, so nothing reads as broken and nothing is invented. Pratham will supply real URLs.
18. **Nothing invented anywhere**: no metrics, no clients, no testimonials; buildspace listed as PM; RΞDACT prize stated once; team projects credit Pratham's slice only. Enforced in content.js and both pages that render achievements.
19. **Disclaimer in footer**: "Not an official railway website. Obviously." — satisfies the no-official-branding rule with a wink.

## Engineering
20. **data-testid on every interactive element** (kebab-case, functional names: `line-select-engineering`, `punch-board-button`, `aunty-audio-play`…) — platform automation and future e2e tests depend on it.
21. **Accessibility**: aria-live on the board, aria-pressed on selectors, labelled buttons, focus-visible outlines (signal red), reduced-motion kill switch in CSS + `useReducedMotion()` guards in JS, meaningful alt text on images.
22. **No `transition: all`** anywhere (breaks transforms); transitions target specific properties.
23. **Static assets self-produced**: og.jpg + figures generated once via image generation; chaiwala background removed with a numpy flood-fill script (`scripts/process_figures.py`); fonts fetched by `scripts/fetch_fonts.py`; audio by `backend/scripts/generate_audio.py` (OpenAI TTS, voice coral, tts-1, speed 0.95 — one-shot, no runtime cost).
24. **Mobile 390px treated as first-class**: hamburger full-screen menu, single-column stacks, headline scales via Tailwind sizes, no whitespace-nowrap on long text, verified zero horizontal overflow.
