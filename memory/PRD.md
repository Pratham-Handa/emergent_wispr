# PRD — PRATHAM CENTRAL

Last updated: 2026-11-04 01:22 IST

## Original Problem Statement
Build a Mumbai Local Train-inspired interactive portfolio for **Pratham Handa** (software engineer, MCA student, product builder, and community leader in Mumbai). Visitors arrive at a station, answer "Where do you want to go?", book a free ticket, and board one of three lines: Blue Engineering Express (ENGINEERING CENTRAL), Yellow Events Express (COMMUNITY JUNCTION), or Green Product Express (PRODUCT JUNCTION). Each line has a complete, distinct portfolio page; the ticket flow stays optional.

## Architecture
- React 19 (CRA/craco) + Tailwind 3 + framer-motion 11 + lenis (lazy, reduced-motion aware)
- `src/data/content.js` — single source of truth: lines, stations, profile links, about, trilingual strings
- `src/components/` — Nav (signage bar + mobile menu), LanguageContext (persisted UI strings; no header language picker), DigitalBoard (LED board, rotating announcements, aria-live), PlatformScene (SVG Pratham Express train, arrival animation, parallax skyline, aunty + chaiwala eggs), TicketCounter (line cards → printable ticket → punch stamp → boarding overlay → route), AllStations (3-line station map), Footer
- `src/pages/` — Station (home), Engineering, Community, Product, About, Contact
- Fonts self-hosted at `public/fonts/` (Oswald, Khand, Outfit, Mukta, JetBrains Mono — Devanagari support)
- Illustrations and motion in the station scene, with reduced-motion support
- SEO: title/description/OG + JSON-LD Person + SVG favicon roundel

## User Personas
- Recruiter/hiring manager: 30-second scan → hero question → ticket line cards → booking → line journey
- Curious visitor: discovers aunty/chaiwala/board eggs and explores the line pages
- Pratham (owner): portfolio content and verified contact links in `content.js`; downloadable résumé at `public/resume.pdf`

## Core Requirements (static)
- Station experience, trilingual UI, ticket booking with punch/boarding animation, skip-intro, no forced flow
- Line colors consistent: blue #1E3A8A, amber #D97706, green #166534, signal red accent
- Content accuracy: use verified work, dates, roles, links, and metrics only
- Accessibility: data-testids everywhere, aria-live board, focus rings, prefers-reduced-motion

## Implemented (2026-11-04)
- [x] Station home: train arrival, destination board, English interface, ticket booking → punch → boarding transition
- [x] Station scene includes aunty and chaiwala illustrations, train movement, and rotating board announcements
- [x] All Lines station map with YOU ARE HERE marker
- [x] Complete line pages: /engineering (blueprint), /events (community and event leadership), /product (green product studio)
- [x] About page explains practical engineering, AI, workflow, and team value
- [x] LinkedIn, email, GitHub, and current résumé are linked from About, Contact, and Footer
- [x] Community page details communications leadership, Fiestron 2024, social media management, buildspace, and verified event participation
- [x] Contact page offers mailto, LinkedIn, GitHub, and downloadable résumé links
- [x] Self-hosted fonts, grain texture, lenis smooth scroll, reduced-motion guards, mobile hamburger nav

## Backlog
- P1: Expand product case studies as more verified outcomes become available
- P1: Add community roles or event contributions as new work is documented
- P2: Interactive railway route map v2 (train marker animating along active line)
- P2: Contact form and page transitions per line

## Next Tasks
1. Expand product case studies when additional verified outcomes are available
2. Add community contributions when additional verified roles or events are documented
