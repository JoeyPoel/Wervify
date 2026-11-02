import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { strings } from '../../constants/strings';
import { useTheme } from '../../hooks/useTheme';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

/**
 * Global Header & Sticky Navigation Bar with Theme Toggle.
 * @param props NavbarProps
 */
export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  const navLinks = [
    { label: strings.nav.approach, path: '/aanpak', anchor: '#aanpak' },
    { label: strings.nav.pricing, path: '/pakketten', anchor: '#pakketten' },
    { label: strings.nav.cases, path: '/cases', anchor: '#cases' },
    { label: strings.nav.about, path: '/over-ons', anchor: '#over-ons' },
    { label: strings.nav.contact, path: '/contact', anchor: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-wervify-void/85 border-b border-slate-200 dark:border-wervify-marine/50 transition-colors duration-200">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wordmark - TODO(brand): official asset replacement */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-wervify-azure rounded-lg p-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wervify-cobalt to-wervify-cerulean shadow-md shadow-wervify-cobalt/20 group-hover:scale-105 transition-transform text-white">
              <svg className="h-6 w-6 text-white" viewBox="0 0 32 32" fill="none">
                <path d="M7 9L11.5 23L16 13.5L20.5 23L25 9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 9L25 15" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-wervify-white group-hover:text-wervify-cobalt dark:group-hover:text-wervify-ice transition-colors">
              {strings.common.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-wervify-cobalt dark:text-wervify-azure font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-wervify-cobalt dark:hover:text-wervify-ice'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-wervify-marine/70 bg-slate-100 dark:bg-wervify-midnight/60 text-slate-700 dark:text-wervify-ice hover:bg-slate-200 dark:hover:bg-wervify-marine/50 transition-colors focus:outline-none focus:ring-2 focus:ring-wervify-azure cursor-pointer"
              aria-label={isDark ? strings.common.themeToggleDark : strings.common.themeToggleLight}
              title={isDark ? strings.common.themeToggleDark : strings.common.themeToggleLight}
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleLinkClick('/#demo', e as any)}
              className="gap-2"
            >
              <span>{strings.nav.ctaButton}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-wervify-marine/70 bg-slate-100 dark:bg-wervify-midnight text-slate-700 dark:text-wervify-ice"
              aria-label={isDark ? strings.common.themeToggleDark : strings.common.themeToggleLight}
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-wervify-marine/40 focus:outline-none focus:ring-2 focus:ring-wervify-azure"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-wervify-marine/60 bg-white/95 dark:bg-wervify-midnight/95 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link.path, e)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-wervify-marine/50 hover:text-wervify-cobalt dark:hover:text-wervify-ice transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-wervify-marine/40">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={(e) => handleLinkClick('/#demo', e as any)}
              className="gap-2"
            >
              <span>{strings.nav.ctaButton}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
