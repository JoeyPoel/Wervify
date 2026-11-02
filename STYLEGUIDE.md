# Wervify Styleguide & Design System

## 1. Palette & Color Tokens
All styling must strictly use the semantic Tailwind tokens mapped from `src/config/theme.ts`:

- `bg-wervify-void` (`#050811`): Primary dark canvas.
- `bg-wervify-midnight` (`#081630`): Elevated surfaces, cards, and modal backdrops.
- `border-wervify-marine` (`#0F2E64`): Subtle structural borders and input strokes.
- `bg-wervify-cobalt` (`#2558B8`): Primary action buttons, active tags, key highlights.
- `text-wervify-cerulean` (`#3A7AEF`): Hover states, interactive links, glow accents.
- `text-wervify-azure` (`#6BA8FB`): High-contrast icons, badges, and focus rings.
- `text-wervify-ice` (`#BFE0FE`): Secondary headings, pill badges, and light section tints.
- `text-wervify-white` (`#FFFFFF`): Primary headings and high-visibility text.

## 2. Invariants & Rules
1. **Zero Hardcoded Hex**: Do NOT write `bg-[#050811]` or `style={{ color: '#2558B8' }}`. Always use semantic Tailwind utility classes with opacity modifiers as needed (e.g., `border-wervify-marine/60`).
2. **Zero Inlined Strings**: All Dutch text must come from `src/constants/strings.ts`.
3. **Responsive Spacing**: Sections use `py-20 sm:py-28` with container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
4. **Elevation**: Glassmorphism cards use `border border-wervify-marine/70 bg-wervify-midnight/50 backdrop-blur-md rounded-xl`.
