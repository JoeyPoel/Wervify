---
name: wervify-section-blueprints
description: Page and section design blueprints, layout patterns, visual hierarchy, and reference synthesis for Wervify.
---

# Wervify Section Blueprints

This skill documents structural layout guidelines, component trees, spacing formulas, and micro-interactions for all primary website sections.

## 1. Global Layout & Spacing Rules
- **Container Max-Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-20 sm:py-28` for breathing room between distinct blocks.
- **Header Structure**: Every section features:
  1. Eyebrow badge / pill: `text-xs font-semibold uppercase tracking-wider text-wervify-azure`
  2. Main section heading: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-wervify-white`
  3. Sub-heading: `max-w-2xl text-base sm:text-lg text-slate-300 mt-4`

---

## 2. Section Blueprints

### 1. Navigation (`src/components/layout/Navbar.tsx`)
- **Structure**: Fixed/sticky at top with subtle `backdrop-blur-md bg-wervify-void/80 border-b border-wervify-marine/50`.
- **Items**: Logo, Aanpak (`/aanpak`), Pakketten (`/pakketten`), Cases (`/cases`), Over ons (`/over-ons`), Contact (`/contact`).
- **Primary CTA**: Button `Plan gratis demo` anchored to open modal or jump to `#demo`.
- **Mobile Menu**: Fullscreen / slide-down drawer with clean list and quick-call button.

### 2. Hero Section (`src/components/hero/Hero.tsx`)
- **Canvas**: Signature radial glow `bg-wervify-hero` with dark void canvas.
- **Visuals**:
  - Eyebrow pill: "Wervingsmarketing voor het MKB".
  - Headline: Focus on reaching candidates who aren't on job boards (passive talent).
  - Subline: Explaining the social campaign + 24/7 AI qualification + human validation model.
  - CTAs: Primary button (Plan gratis demo) + Ghost button (Ontdek de aanpak).
  - 3 Stat Tiles: Highlighting time to interview, cost reduction vs agency fees, candidate qualification rate.
  - Candidate interaction card preview / UI snippet mockup.

### 3. Trust Strip (`src/components/trust/TrustStrip.tsx`)
- **Pattern**: Infinite horizontal scrolling marquee with client/sector logos.
- **Labels**: "Vertrouwd door groeiende MKB-werkgevers in Nederland" (clearly indicated placeholders).

### 4. Problem Section (`src/components/problem/ProblemSection.tsx`)
- **Concept**: "Waarom traditionele werving het MKB in de steek laat".
- **Cards (3-column grid)**:
  1. *Hoge wervingsfees*: 20-25% jaarsalaris betalen zonder garantie op behoud.
  2. *Dode vacaturebanken*: Alleen de 10-15% actieve werkzoekenden bereiken (vaak 'job-hoppers').
  3. *Tijdverlies & ruis*: Stapels irrelevante cv's doorspitten terwijl vacatures openstaan.

### 5. "Hoe het wél moet" / Active vs Passive Visual (`src/components/pillars/PassiveTalentSection.tsx`)
- **Concept**: The 85/15 Iceberg Model.
  - Left column: De 15% actieve zoekers (overvraagd, via Indeed/LinkedIn jobs).
  - Right column: De 85% passieve professionals (gelukkig op hun plek, maar open voor een aantrekkelijk aanbod via social media).
  - Clear graphic contrast with progress bars and key takeaway.

### 6. Pillars Section (`src/components/pillars/PillarsSection.tsx`)
- **4 Building Blocks**:
  1. *Social Recruitment Campagnes*: Op maat gemaakte Meta- en LinkedIn-advertenties in de huisstijl van de werkgever.
  2. *AI-voorselectie met Bo*: 24/7 binnen 90 seconden kwalificeren via WhatsApp en chat.
  3. *Persoonlijke Validatie*: Menselijke check op motivatie en werkelijke beschikbaarheid.
  4. *Kandidaten-Dashboard*: Centraal overzicht, directe planning van sollicitatiegesprekken.

### 7. Process Section (`src/components/process/ProcessSection.tsx`)
- **Framework**: "De Wervify Methode" (4 logische stappen):
  1. *Digitale Vacature-Intake*: Binnen 30 minuten scherp wie we zoeken en wat het aanbod uniek maakt.
  2. *Campagnelancering*: Gerichte advertenties live binnen 5 werkdagen.
  3. *AI Screening & Validatie*: Bo filtert 24/7; onze consultants verifiëren motivatie.
  4. *Gesprekken & Aanname*: Alleen gemotiveerde, gekwalificeerde kandidaten in jouw agenda.

### 8. Results Stat Band (`src/components/results/ResultsBand.tsx`)
- **Pattern**: Full-width high-contrast strip with 4 prominent figures (time-to-first-candidate, candidate match score, interview conversion rate, average cost savings).

### 9. Cases Section (`src/components/cases/CasesSection.tsx`)
- **Pattern**: Grid of 3 case cards with sector badge, vacancy type, key metric, and challenge/solution breakdown.

### 10. Comparison Table (`src/components/comparison/ComparisonSection.tsx`)
- **Two-Column Matrix**: "Traditioneel Wervingsbureau vs. Wervify Wervingssysteem".
  - Evaluates cost structure, exclusivity, candidate pool (active vs passive), response time, and employer brand ownership.

### 11. Video Section (`src/components/video/VideoSection.tsx`)
- **Pattern**: 16:9 cinematic video player placeholder with high-resolution poster frame, subtle pulsing play button affordance, and feature highlights on the side.

### 12. Pricing Section (`src/components/pricing/PricingSection.tsx`)
- **Structure**:
  - 3 Tiers: *Basis* (1 vacature), *Standaard / Groei* (tot 3 vacatures, meest gekozen), *Premium / Pro* (doorlopend werven).
  - Transparent setup fee clearly marked.
  - Feature comparison table (checkmarks and detailed capabilities).
  - Add-ons list: Vacaturetekst optimalisatie, Strategische employer branding sessie, Bedrijfsfotografie op locatie, Video-productie, Exclusief ATS-koppelingsdashboard.
  - Realistic note on ad budget (direct bij advertentieplatformen, geen verborgen opslag).

### 13. Testimonials Section (`src/components/trust/TestimonialsSection.tsx`)
- **Pattern**: Verified quotes from business owners and HR leads with company type, avatar placeholder, and specific hire results.

### 14. FAQ Accordion (`src/components/faq/FAQSection.tsx`)
- **Topics**: Total cost predictability, what if candidate drops out, how Bo handles questions, time investment required from client, GDPR compliance.

### 15. About Teaser (`src/components/about/AboutTeaser.tsx`)
- **Pattern**: Founder mission, Why Wervify exists (frustratie over trage bureaus en dure no-cure-no-pay fees), direct contact consultant portrait and bio.

### 16. Closing CTA + Demo Request Form (`src/components/demo/DemoSection.tsx`)
- **Form Fields**:
  1. Bedrijfsnaam* (`companyName`)
  2. Functietitel vacature* (`vacancyTitle`)
  3. Salarisindicatie (optioneel) (`salaryRange`)
  4. Extra toelichting / eisen (`notes`)
  5. Contact e-mailadres* (`email`)
  6. GDPR toestemming checkbox* (`gdprConsent`)
- **Direct Contact Alternative**: Phone number and WhatsApp quick link for direct contact.

### 17. Footer (`src/components/layout/Footer.tsx`)
- Navigation columns, newsletter signup, KvK & VAT placeholders, legal notices, copyright notice.

---

## 3. Live Reference Synthesis & Architectural Observations

### A. Pulse Agency (`pulseagency.nl/aanbod/recruitment-marketing`) - Primary Funnel & Proposition
- **Hero Framing**: Immediate contrast between traditional agency fees and predictable recruitment marketing. Clear 20-minute demo CTA paired with 3 quantitative proof points (time to interview, candidate conversion, cost per hire).
- **Active vs Passive Dichotomy**: Visual explanation highlighting that only 10-15% of the workforce is actively looking on job boards, while 85% is passive yet receptive to tailored employer-brand narratives on Meta/LinkedIn.
- **AI Automation + Speed**: Immediate conversational engagement (WhatsApp/chat) responding within minutes to prevent drop-off.
- **Candidate Delivery**: Dashboard interface giving the employer full autonomy to schedule interviews directly.
- **Pricing & Commercial Structure**: 3 distinct monthly service tiers with an onboarding setup fee, comprehensive comparison matrix, and transparent ad-spend separation.

### B. Toppa (`toppa.nl`) - Employer-First Branding & Cockpit
- **Employer-Centric Campaigns**: Never recruiting under an agency banner; campaigns run strictly under the client's employer brand, building long-term talent equity.
- **Behavioral Psychology & Targeting**: Highlighting tailored messaging triggers (motivation, culture, work-life balance) rather than dry job requirement bullet points.
- **Dedicated Consultant Visibility**: Human face alongside every key conversion step (photo, direct contact options, personal onboarding).
- **Data Cockpit**: Visual presentation of recruitment KPIs, campaign reach, and candidate pipeline status.

### C. Recruitment-Online (`recruitment-online.nl`) - Human-in-the-Loop Validation
- **Quality Over Quantity**: Emphasizes that high-speed lead capture without verification causes employer burnout.
- **Pre-Handover Screening**: A dedicated recruitment specialist conducts a swift validation call/message checking motivation, availability, salary expectations, and travel time before the candidate enters the client's calendar.
- **Subscription Predictability**: Fixed monthly packages with zero placement fees upon hire.
- **Transparent FAQ**: Transparent answers regarding ad budget ownership, candidate guarantees, and notice periods.

### D. Sticky Chapters (`stickychapters.nl`) - High-Impact Editorial & Visual Storytelling
- **Editorial Typography & Hierarchy**: High-contrast oversized headings, sharp subheadings, and uncluttered cards with deep negative space.
- **Signature Framework**: Packaging the operational workflow into a memorable branded methodology.
- **Big-Number Metric Cards**: Metrics lead the design (e.g. bold "+300%", "14 Dagen"), supported by concise case breakdowns.
- **Cinematic Media Integration**: Dedicated video section with elegant custom play affordances and employer behind-the-scenes previews.

---

## 4. Synthesis for Wervify Architecture
1. **The Signature Wervify Method**: "Het 4-Fasen Wervingssysteem" (Intake -> Campagne in eigen huisstijl -> AI & Menselijke Voorselectie -> Directe Sollicitatiegesprekken).
2. **Dual Qualification**: Combining "Bo" (24/7 instant WhatsApp pre-screener) with human validation consultants to ensure zero time wasted on unqualified applicants.
3. **Transparent Pricing Architecture**:
   - *Basis* (1 vacature tegelijk werven)
   - *Groei* (tot 3 actieve vacatures - Meest gekozen)
   - *Pro / Continu* (doorlopende talent-pipeline voor groeiend MKB)
   - Setup fee & add-on catalog (vacaturetekst, foto/video, ATS-koppeling).
4. **Visual Rhythm**: Alternating deep void hero (`bg-wervify-hero` / `bg-wervify-void`) with clean high-contrast card structures and soft ice-tinted accents.

