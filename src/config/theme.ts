/**
 * Authoritative Wervify Theme Configuration.
 * Single source of truth for color tokens, gradients, and visual styling.
 * All UI components reference these tokens via semantic Tailwind classes.
 */

export const THEME = {
  colors: {
    void: '#050811',       // Primary dark canvas
    midnight: '#081630',   // Elevated surfaces, cards, overlays
    marine: '#0F2E64',     // Borders, active fills, secondary strokes
    cobalt: '#2558B8',     // Primary accent, main buttons, key badges
    cerulean: '#3A7AEF',   // Hover accents, active links
    azure: '#6BA8FB',      // High-contrast details, icons, focus rings
    ice: '#BFE0FE',        // Soft tints, pill badges, tags, light sections
    white: '#FFFFFF',      // Headings on dark, light cards, logo text
  },
  gradients: {
    hero: 'radial-gradient(115% 100% at 90% 100%, #2D63CC 0%, #1A3D8A 35%, #0B1A3E 65%, #050811 100%)',
    subtleCard: 'linear-gradient(180deg, rgba(8, 22, 48, 0.7) 0%, rgba(5, 8, 17, 0.9) 100%)',
    accentGlow: 'radial-gradient(circle at center, rgba(37, 88, 184, 0.15) 0%, rgba(5, 8, 17, 0) 70%)',
  },
  fonts: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
} as const;

export type ThemeColors = typeof THEME.colors;
export type ThemeTokenKey = keyof ThemeColors;
