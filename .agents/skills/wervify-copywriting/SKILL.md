---
name: wervify-copywriting
description: Dutch tone of voice, audience personas, vocabulary guidelines, claims policy, and product messaging blueprints for Wervify.
---

# Wervify Copywriting & Messaging Guide

This skill governs the editorial tone, Dutch language standards, product positioning, and legal claims policy for Wervify.

## 1. Target Audience & Persona
- **Primary Audience**: Business owners (directeuren-grootaandeelhouders / DGA's), managing directors, HR managers, and office managers at Dutch SMEs (MKB: 10 to 150 employees).
- **Secondary Audience**: Internal talent acquisition leads and small recruitment agency owners.
- **Pain Points**:
  - Outdated job boards yield zero or low-quality applicants.
  - Traditional recruitment agencies charge exorbitant placement fees (20-25% of annual salary) with zero guarantee of culture fit.
  - Lack of in-house recruitment marketing knowledge, ad budget waste on social media.
  - Overwhelmed by screening irrelevant CVs; slow response times cause top talent to drop off.

## 2. Tone of Voice & Language Rules
- **Language**: Dutch (`nl-NL`). All code, identifiers, and configuration remain in English.
- **Form of Address**: Always address the reader informally using **"je" / "jij"** and **"jouw"** (matches modern Dutch tech/agency standard; approachable yet professional). Never use stiff "u".
- **Attributes**: Direct, grounded, pragmatic, results-driven, transparent.
- **Syntax**: Short, punchy sentences. Active voice. Concrete business outcomes over conceptual abstraction.

### Preferred Vocabulary
- `passieve kandidaten` (people currently employed who are open to the right step)
- `voorselectie` (automated initial qualification)
- `persoonlijke validatie` (human quality check before handover)
- `gekwalificeerde kandidaten` (vetted talent meeting specific criteria)
- `werkgeversmerk` (employer branding)
- `transparante vaste kosten` (predictable investment without placement commissions)
- `kandidaten-dashboard` (central cockpit for reviewing applicants)
- `eigen regie` (the employer keeps complete control over who to interview)

### Strictly Forbidden Phrases
- `magie` / `magisch`
- `supercharge` / `rocket fuel`
- `all-in-one AI tool` / `alles-in-één wondermiddel`
- `revolutionair` / `game-changing`
- Fake urgency: "Slechts 2 plekken over deze maand", "Haast je!"
- Vague superlatives without backing data.

## 3. Product Architecture & AI Assistant
- **Product Proposition**: Wervify builds and runs automated recruitment marketing funnels that activate passive talent on social channels (Instagram, Facebook, LinkedIn) and qualifies them instantly before delivering them to your dashboard.
- **AI Assistant**: Wervify's proprietary conversational screener is named **"Bo"** (or **"Wervify Bo"**).
  - Operates 24/7 via WhatsApp and webchat.
  - Responds within 90 seconds to candidate inquiries.
  - Asks 3 to 4 knockout questions (experience, certifications, salary expectations, commute distance).
  - *Never reuse the name "Maxim" from reference sites.*
- **Human-in-the-Loop Validation**:
  - Emphasize that AI does the speed work, but an experienced recruitment consultant validates motivation and communication before the candidate is scheduled for the employer interview.

## 4. Strict Claims & Transparency Policy
1. **Never Invent Data**: Do not fabricate statistics (e.g. "98.4% succesgarantie"), client quotes, or company names.
2. **Placeholder Convention**:
   - Any stat, client quote, or metric that awaits production verification must be stored in `strings.ts` with a `PLACEHOLDER_` prefix or key.
   - Example: `PLACEHOLDER_STAT_TIME_TO_HIRE: "14 dagen"`, `PLACEHOLDER_CLIENT_NAME_1: "Bouw & Techniek Groep MKB"`.
3. **No Unconditional Guarantees**:
   - Do not display "no cure no pay" or "100% geld-terug-garantie" unless explicitly confirmed by the business owner.
   - Instead, emphasize transparent monthly billing, no long-term lock-in, and full campaign ownership.
