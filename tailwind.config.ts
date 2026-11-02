import type { Config } from 'tailwindcss';
import { THEME } from './src/config/theme';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wervify: {
          void: THEME.colors.void,
          midnight: THEME.colors.midnight,
          marine: THEME.colors.marine,
          cobalt: THEME.colors.cobalt,
          cerulean: THEME.colors.cerulean,
          azure: THEME.colors.azure,
          ice: THEME.colors.ice,
          white: THEME.colors.white,
        },
      },
      backgroundImage: {
        'wervify-hero': THEME.gradients.hero,
        'wervify-subtle-card': THEME.gradients.subtleCard,
        'wervify-accent-glow': THEME.gradients.accentGlow,
      },
      fontFamily: {
        sans: [...THEME.fonts.sans],
      },
    },
  },
  plugins: [],
};

export default config;
