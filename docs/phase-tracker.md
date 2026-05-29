# TeacherSathi — Phase Tracker

## Phase 0: Critical Fixes (Ship-Blocking)

> These are production-breaking issues that must be resolved before any new feature work.

- [x] **P0-01** — Fix `/signup` route 404 (currently killing every acquisition CTA)
- [x] **P0-02** — Add `typecheck` npm script (`tsc --noEmit`)
- [x] **P0-03** — Add `svgrepo.com` to Next.js image remote patterns (login page Google icon broken)
- [x] **P0-04** — Land LanguageToggle fix (use `@/i18n/routing` instead of `next/navigation`)
- [ ] **P0-05** — Security audit: verify no API secrets in client-side code

---

## Phase 1: Auth & Core Flow

- [ ] **P1-01** — Supabase email/password signup with role selection (teacher/student)
- [ ] **P1-02** — Supabase email/password login with session management
- [ ] **P1-03** — Google OAuth integration
- [ ] **P1-04** — Protected route middleware (redirect unauthenticated users)
- [ ] **P1-05** — User profile page with basic settings

## Phase 2: Content Engine

- [ ] **P2-01** — NCERT chapter content API (Claude-powered generation)
- [ ] **P2-02** — Quiz generation and grading
- [ ] **P2-03** — Mind map generation
- [ ] **P2-04** — Video integration (YouTube IFrame API)
- [ ] **P2-05** — Content caching and offline support

## Phase 3: Payments & Premium

- [ ] **P3-01** — Razorpay checkout integration
- [ ] **P3-02** — Subscription management
- [ ] **P3-03** — Usage metering (free tier limits)

## Phase 4: Polish & Launch

- [ ] **P4-01** — SEO optimization
- [ ] **P4-02** — Performance audit (Core Web Vitals)
- [ ] **P4-03** — Accessibility audit
- [ ] **P4-04** — Analytics integration
