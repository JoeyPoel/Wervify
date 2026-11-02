---
name: wervify-site-architecture
description: Architectural conventions, directory layout, API/Prisma resilience patterns, string and theme registries, and testing specifications for Wervify.
---

# Wervify Site Architecture

This skill governs codebase layout, engineering invariants, runtime resilience patterns, and verification standards for Wervify.

## 1. Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom `wervify-*` color tokens and typography scale
- **Animation**: Framer Motion for responsive, accessible transitions (respecting `prefers-reduced-motion`)
- **Backend / Serverless**: Vercel Serverless Functions in `api/`
- **Data Persistence**: Prisma ORM with PostgreSQL schema
- **Email Delivery**: Resend / SMTP driver with template compilation
- **Testing**: Node.js invariant suite (`test/invariants.test.mjs`) checking for zero hardcoded hex and zero inline strings

## 2. Directory Hierarchy
```text
wervify-site/
├── .agents/
│   ├── rules/codestyle.md
│   └── skills/
│       ├── wervify-brand-design/SKILL.md
│       ├── wervify-site-architecture/SKILL.md
│       ├── wervify-copywriting/SKILL.md
│       └── wervify-section-blueprints/SKILL.md
├── api/
│   ├── contact/index.ts            # Contact inquiry submission
│   ├── demo-request/index.ts       # 5-field demo request handler
│   ├── health/index.ts             # Health check endpoint
│   ├── lib/
│   │   ├── mail.ts                 # Resilient mailer (noop/log fallback without keys)
│   │   └── prisma.ts               # Resilient Prisma proxy (in-memory mock if no DB URL)
│   └── newsletter/subscribe.ts     # Newsletter subscription
├── prisma/
│   ├── schema.prisma               # Models: DemoRequest, NewsletterSubscriber, ContactMessage
│   └── seed.ts
├── public/
│   ├── brand/                      # Logos, icons, brand assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── about/                  # Company story, founder values
│   │   ├── cases/                  # Case studies with metric highlights
│   │   ├── common/                 # Button, Modal, Container, Badge, Card, Notification
│   │   ├── comparison/             # "Traditioneel vs Wervify" comparison table
│   │   ├── demo/                   # DemoRequestForm and schedule flow
│   │   ├── faq/                    # Accordion FAQ
│   │   ├── hero/                   # Hero with ambient glow and stat tiles
│   │   ├── layout/                 # Navbar, Footer, Sticky Header
│   │   ├── pillars/                # 4 core service building blocks
│   │   ├── pricing/                # 3 tiers, feature comparison, add-ons
│   │   ├── problem/                # 3 cards on traditional hiring failures
│   │   ├── process/                # 4-step recruitment marketing method
│   │   ├── results/                # Big-number stat band
│   │   ├── team/                   # Team & consultant profiles
│   │   ├── trust/                  # Logo marquee, certifications
│   │   └── video/                  # Promo video frame with poster
│   ├── config/
│   │   └── theme.ts                # Single source of truth for color tokens & styles
│   ├── constants/
│   │   ├── strings.ts              # Single source of truth for ALL user-facing text
│   │   ├── packages.ts             # Pricing tier configurations
│   │   ├── cases.ts                # Structured case study data
│   │   └── faq.ts                  # Structured Q&A items
│   ├── hooks/
│   │   └── useAccordion.ts         # Accordion collapse state manager
│   ├── lib/
│   │   ├── api.ts                  # Fetch client with typed error handling
│   │   └── utils.ts                # Class merging and string formatting utilities
│   ├── styles/
│   │   ├── globals.css             # Base Tailwind imports & CSS custom properties
│   │   └── animations.css          # Marquee, glow pulse, and fade keyframes
│   ├── types/
│   │   ├── content.types.ts
│   │   ├── forms.types.ts
│   │   └── theme.types.ts
│   ├── App.tsx                     # Client-side router & route view controller
│   └── main.tsx
├── test/
│   └── invariants.test.mjs         # Hardcoded hex and string detector
├── DEPLOYMENT.md
├── STYLEGUIDE.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 3. Core Invariants
1. **Zero Hardcoded Hex in Components**:
   Enforced via `test/invariants.test.mjs`. Hex patterns like `#[0-9a-fA-F]{3,8}` in `src/components/**/*.tsx` fail the test suite immediately.
2. **Centralized Strings (`src/constants/strings.ts`)**:
   Every label, heading, button text, error message, placeholder, and tooltip must be imported from `strings.ts`. This ensures copy review, easy translation (NL to EN), and prevents copy drift.
3. **Resilient Serverless Endpoints**:
   - `api/lib/prisma.ts`: Exports a singleton client. If `DATABASE_URL` is absent, returns an operational in-memory proxy that persists to memory and logs a clear warning without throwing.
   - `api/lib/mail.ts`: If `RESEND_API_KEY` or SMTP credentials are missing, logs the formatted HTML output to stdout and resolves `{ ok: true, fallback: true }`.
   - API endpoints always return HTTP status codes with a consistent JSON envelope: `{ ok: boolean, data?: unknown, error?: string }`.
4. **GDPR Consent**:
   All capture forms must require affirmative user consent for data processing (`gdprConsent: boolean`) before submission.

## 4. SPA Routing Strategy
The application operates as a lightweight client-side routed SPA in `App.tsx` matching:
- `/` - Complete landing page experience with seamless section jumps
- `/aanpak` - Dedicated deep-dive into the 4-step Wervify methodology & AI screening
- `/pakketten` - Full pricing matrix, tier breakdown, add-ons, and ad spend guidance
- `/cases` - Detailed client success stories and recruitment metrics
- `/over-ons` - Founder narrative, mission, team, and contact consultant details
- `/contact` - Direct contact form, office information, and direct scheduling
- `*` - Accessible, helpful 404 view with return links

Configured in `vercel.json` with SPA rewrites (`"source": "/(.*)", "destination": "/index.html"`).
