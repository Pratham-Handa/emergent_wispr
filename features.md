# PRATHAM CENTRAL — features.md
The full "make it completely busted" roadmap. Grouped by impact, ordered so each item is buildable independently.

## A. The Journey Engine (site-wide wow)
1. **Living route map with a scroll-driven train marker** — one persistent SVG map of all three lines; the little train moves along the active line as the visitor scrolls, stations light up as they pass. The single biggest upgrade.
2. **Line-color theme morphing** — CSS variables flip to each line's palette when you enter its sections; the whole site subtly changes mood per journey.
3. **Ticket wallet** — after booking, "download ticket" renders the punched ticket to a canvas/PNG; a "collect all 3 punches" easter egg unlocks the **ANNUAL PASS** (a hidden fourth ticket: "PRATHAM CENTRAL UNLIMITED").
4. **Coach seat map as the toolkit metaphor** — skills rendered as seats in a coach (AI/ML = first class, frontend = door-side standing spots). Engineering section centerpiece.
5. **⌘K "Station Announcer" command palette** — jump to any station/line/project; announces results in railway-speak ("Platform available: Wingtern Case Study, Green Line").
6. **Night local mode** — dark theme styled as the 11pm fast local: same palette pushed dark, board glows harder, aunty goes home.
7. **404 = "Platform not found"** — the indicator board with no trains, and a chaiwala walking you back to the station.

## B. Engineering Central (Blue)
8. **Intellidea full case study** — problem → solution → responsibilities → implementation → impact accordion, with a real workflow diagram (Wix migration → custom site → token/redeem system → assessment access → admin logging).
9. **Project case files (SentinelSecure, Wingtern, EcoStyle)** — expandable dossiers styled as train indicator boards: problem, solution, personal contribution, stack, challenges/trade-offs, architecture diagram, GitHub button. Contribution honesty baked in (no sole-ML claims).
10. **Architecture diagrams as railway line diagrams** — data flow drawn as stations on a line (Request → FastAPI → XGBoost → Report). On-brand and genuinely informative.
11. **Timetable of capabilities** — skills table rendered as the black plastic timetable board with flip animation, grouped Languages / Frontend / Backend / AI.
12. **GitHub activity as platform board** — contribution graph framed as departure times (needs GitHub API, cache 24h).

## C. Community Junction (Yellow)
13. **Flip-board event timeline** — each event card flips like a split-flap departure board: name, date, location, role badge (Organizer/Speaker/Participant/Attendee — honesty rules enforced), contribution, learning.
14. **Poster wall with lightbox** — buildspace, hackathons, Enthusiac 2026 first prize framed as station posters.
15. **Community photo strip** — film-negative style horizontal scroll of verified photos.
16. **"What I learned at every station" board** — one-line lessons under each event.

## D. Product Junction (Green)
17. **Wingtern as flagship case study** — the full product journey: discovery → personas → pain points → MVP scope → prioritization board (sticky notes) → user journey drawn as a train route with "delayed stations" = pain points → AI integration → feedback → roadmap.
18. **Now / Next / Later roadmap** — rendered as signal lights (green/amber/red) with feature notes.
19. **EcoStyle product strategy dossier** — strategy view of the same project.
20. **PRD preview as a printable ticket** — "Product Requirement Document" rendered in ticket typography, printable.

## E. About / Contact (Central Interchange & Terminus)
21. **Auto-generated résumé** — "Download résumé" builds a clean PDF from content.js on the fly (no file dependency; always current).
22. **Contact as a booking form** — "From: [their name] → To: Pratham" mailto/form ticket; the message becomes the "purpose of journey" field.
23. **Guestbook = Station Register** — visitors sign the platform register (needs a tiny backend or a third-party form store).
24. **"Time to your destination"** — playful calculator: visitor picks a goal (hire/collaborate/chat) → "2 stops away" → CTA.

## F. Platform / Engineering quality
25. **Migrate CRA → Vite** — 5× faster builds/dev, smaller bundle, kills the craco layer.
26. **Page transitions** — AnimatePresence + shared-layout so boarding the train visually carries the page away per line.
27. **Per-route OG images + sitemap + robots** — each line shares its own preview card.
28. **PWA** — installable, offline shell for the home station, board works offline.
29. **Real analytics** — privacy-friendly events: which line people board, punch rate, egg discovery rate.
30. **Full i18n pass** — Marathi copy reviewed by a native speaker; language-aware date/number formatting everywhere.
31. **E2E tests** — Playwright flows over the existing data-testids (book → punch → land; language toggle; eggs).
32. **Station ambience toggle** — optional, muted-by-default ambience (train rumble, chai tapri) — brief explicitly allows it muted.
