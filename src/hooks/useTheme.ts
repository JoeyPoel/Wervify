import { useState, useEffect, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark';

/**
 * Custom hook to toggle between light and dark theme.
 * Defaults to 'light' per design requirements.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wervify-theme') as ThemeMode | null;
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('wervify-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      const root = document.documentElement;
      root.classList.add('theme-transitioning');
      if (nextTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('wervify-theme', nextTheme);
      window.setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 350);
      return nextTheme;
    });
  }, []);

  return { theme, toggleTheme, isDark: theme === 'dark' };
}

