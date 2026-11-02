---
name: wervify-brand-design
description: Visual design system, color tokens, typography, component patterns, Tailwind configuration, and brand rules for Wervify.
---

# Wervify Brand Design System

This skill defines the visual identity, tokens, component patterns, and UI rules for Wervify—a high-trust, performance-driven recruitment marketing platform for Dutch SMEs.

## 1. Brand Philosophy & Aesthetic Direction
- **Tone**: Modern B2B SaaS meets high-end recruitment agency. Minimalist, uncluttered, confident, and results-oriented.
- **Negative Space**: Generous whitespace/dark-space. Avoid clutter, floating blobs, particles, or cartoon illustrations.
- **Visual Contrast**: Dark-first canvas with the signature radial hero glow, alternating with crisp light sections (pure white or soft ice tints) for heightened readability and pacing.

## 2. Color Palette & Tokens
All colors must be defined in `src/config/theme.ts` and mapped in `tailwind.config.ts` under the `wervify-*` prefix.

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `wervify.void` | `#050811` | Primary dark background / body canvas |
| `wervify.midnight` | `#081630` | Elevated surfaces, card backgrounds, overlay sheets |
| `wervify.marine` | `#0F2E64` | Component borders, input strokes, secondary fills |
| `wervify.cobalt` | `#2558B8` | Primary brand accent, primary CTA buttons, badges |
| `wervify.cerulean` | `#3A7AEF` | Hover accents, active links, glow highlights |
| `wervify.azure` | `#6BA8FB` | High-contrast details, icon highlights, focus rings |
| `wervify.ice` | `#BFE0FE` | Pill badge text, subtle tags, light section backgrounds |
| `wervify.white` | `#FFFFFF` | Primary headings on dark, light cards, logo text |

### Rule on Hex Codes
**Components must NEVER contain raw hex codes (e.g. `bg-[#2558B8]`).**
Always use the semantic Tailwind utility classes with optional opacity modifiers:
- Allowed: `bg-wervify-cobalt`, `border-wervify-marine/70`, `text-wervify-azure`, `bg-wervify-midnight/50`
- Forbidden: `bg-[#081630]`, `text-[#6BA8FB]`, `style={{ color: '#2558B8' }}`

## 3. Gradients and Surface Effects
- **Hero Ambient Glow**:
  Exposed as `bg-wervify-hero` or via utility class:
  `radial-gradient(115% 100% at 90% 100%, #2D63CC 0%, #1A3D8A 35%, #0B1A3E 65%, #050811 100%)`
- **Surface Elevation (Cards & Panels)**:
  `border border-wervify-marine/70 bg-wervify-midnight/50 backdrop-blur-md`
- **Hover Transitions**:
  Card hover transitions use `hover:border-wervify-cerulean/60 hover:bg-wervify-midnight/80 transition-all duration-200`.

## 4. Typography Scale & Fonts
- **Font Family**: Modern clean sans-serif (`Inter`, `Plus Jakarta Sans`, or `Geist Sans`).
- **Hero Title**: `text-4xl sm:text-6xl font-bold tracking-tight text-wervify-white leading-[1.1]`.
- **Section Heading**: `text-3xl sm:text-4xl font-bold tracking-tight text-wervify-white`.
- **Subheading**: `text-lg sm:text-xl font-normal text-wervify-ice/80 leading-relaxed`.
- **Body Text**:
  - On Dark: `text-sm sm:text-base text-slate-300 leading-relaxed`.
  - On Light: `text-sm sm:text-base text-slate-700 leading-relaxed`.
- **Eyebrow Pill**: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-wervify-marine/50 text-wervify-ice border border-wervify-marine`.

## 5. Standard Component Patterns

### Primary Button
```tsx
<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-wervify-white bg-wervify-cobalt hover:bg-wervify-cerulean shadow-lg shadow-wervify-cobalt/20 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-wervify-azure disabled:opacity-50">
  {strings.common.planDemo}
</button>
```

### Ghost / Secondary Button
```tsx
<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-wervify-ice bg-wervify-midnight/60 border border-wervify-marine hover:bg-wervify-marine/40 hover:text-wervify-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-wervify-azure">
  {strings.common.learnMore}
</button>
```

### Standard Feature Card
```tsx
<div className="relative rounded-xl border border-wervify-marine/70 bg-wervify-midnight/50 p-8 backdrop-blur-sm transition-all duration-200 hover:border-wervify-cerulean/60 hover:bg-wervify-midnight/80">
  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-wervify-marine bg-wervify-marine/30 text-wervify-azure">
    <Icon className="h-5 w-5" />
  </div>
  <h3 className="text-xl font-semibold tracking-tight text-wervify-white">{title}</h3>
  <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
</div>
```

## 6. Logo & Brand Assets
- Text Wordmark: **Wervify** (capitalized W, geometric sans styling).
- Missing Asset Fallback: When official brand files in `public/brand/` are not yet available, use an SVG/styled typography wordmark labeled with `<!-- TODO(brand): official asset replacement -->`.
- Never attempt to hallucinate or redraw unofficial marks.
