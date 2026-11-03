# PRATHAM CENTRAL — summary.md

## What this website is
An interactive Mumbai Local Train-inspired developer portfolio for **Pratham Handa** — MCA student, software developer, technical consultant at Intellidea, product builder, and community/event enthusiast from Mumbai, India.

The site is NOT a conventional portfolio (no hero + skill cards + project grid). The entire experience is a railway metaphor:

- The website is **PRATHAM CENTRAL** — a station named after Pratham (echoing CSMT, the "Central" line, without copying railway branding).
- Tagline: **"A journey through code, products and people."**
- Supporting line: **"Building technology, shaping products, connecting people."**
- The visitor enters the station, a local train arrives, a digital board announces trains, they pick a language (English / हिंदी / मराठी) via "Where do you want to go?", book a **free ticket** at the counter, punch it, and board one of three lines:

| Line | Train | Destination | Theme |
|---|---|---|---|
| Blue — ENGINEERING EXPRESS | PRATHAM EXPRESS · C1 | ENGINEERING CENTRAL | Software development & technical consulting. Dark navy, blueprint grids, technical type. |
| Yellow — EVENTS EXPRESS | PRATHAM EXPRESS · C2 | COMMUNITY JUNCTION | Event ops, project management, community building. Warm amber, posters, timelines, human. |
| Green — PRODUCT EXPRESS | PRATHAM EXPRESS · C3 | PRODUCT JUNCTION | Product thinking, strategy, building. Deep green + cream, roadmaps, editorial. |

- Central design principle: **it is not a website about a train — it is a journey through the ways Pratham builds, thinks and executes.** A recruiter must understand him in 30 seconds.
- Never force the ticketing flow: nav, skip-intro and all-stations shortcuts are always available.

## Current state (Phase 1, built 3 Nov 2026)
- Full station home page: train arrival animation, LED destination board (rotating announcements), trilingual interface, booking counter → printable ticket → punch stamp → boarding transition → line page.
- Easter eggs: the aunty (polaroid on the platform, tap → speech bubble with her line + tap-to-play TTS voice clip), the chaiwala (tap → garam chai toast), the board itself (tap → cycles announcements).
- All Lines station map with YOU ARE HERE marker.
- Themed stub pages for /engineering, /events, /product (each with its personality + "under construction" station chips).
- /about (Central Interchange): real intro, education (MCA NMITD 2025–27, CGPA 9.03; B.Sc. KC College 2022–25, CGPA 9.63), achievements (RΞDACT 2025 national runner-up ₹15,000; Enthusiac 2026 first prize; NPTEL Affective Computing Elite 85%; BSE Health2Wealth certificate).
- /contact (Terminus): GitHub live; LinkedIn / email / résumé are clearly-marked placeholders awaiting real URLs from Pratham.
- Production details: self-hosted fonts, SEO + OG image + JSON-LD, grain texture, lenis smooth scroll, prefers-reduced-motion respected, data-testids everywhere, no horizontal overflow on mobile.

## Content accuracy rules (binding for anyone extending this)
- Never invent: employment, clients, metrics, user counts, awards, testimonials, event-management roles, project ownership, demo URLs.
- Do not include Designare experience. Do not claim sole ownership of SentinelSecure's ML model or all of EcoStyle's ML components.
- SentinelSecure: First Runner-Up / National Second Place, RΞDACT 2025, ₹15,000 (Streamlit dashboard + workflow integration contribution).
- Wingtern: OpenAI × Outskill hackathon, 88/100 (full-stack MVP). EcoStyle Agent: end-to-end integration contributor.
- buildspace PM June–July 2024. Enthusiac 2026 Business Speech first prize, dated 6 Feb 2026.

## Long-term vision
1. **Three complete journeys.** Each line becomes a scrollable ride where the train (a persistent route map) moves with you: Engineering = the deepest technical section (toolkit as coach layout, Intellidea case study, three project case files), Events = timetable-board timeline + poster wall, Product = roadmaps + sticky-note boards + Wingtern as flagship case study.
2. **A living network map.** One persistent SVG map of all three lines; the visitor's train marker moves along the active line as they scroll; stations are deep links to sections.
3. **The station grows with Pratham.** New job/project/event = new station on the map. Content lives in ONE file (`src/data/content.js`) so extensions never touch components.
4. **A place people remember** — Mumbai warmth, inside jokes (aunty, chai, "thoda jaa thoda aa"), without ever becoming a gimmick. Navigation stays boring and perfect.

## Porting notes (for Codex or any other agent)
- Everything lives in `/app/frontend` (React 19 + CRA/craco + Tailwind). No database, no backend routes needed for the experience — content is in `src/data/content.js`.
- `yarn install && yarn start` to run; `REACT_APP_BACKEND_URL` in `/app/frontend/.env` must stay (platform requirement, health check only).
- Handoff docs: `decisions.md` (why things are the way they are), `architecture.md` (what exists where + how to extend), `features.md` (the full feature roadmap).
- Pending from Pratham: real LinkedIn URL, email, résumé PDF — currently dashed placeholders labelled "[add yours]".
