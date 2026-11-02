import { THEME } from '../config/theme';

export type Theme = typeof THEME;
export type ColorToken = keyof typeof THEME.colors;
