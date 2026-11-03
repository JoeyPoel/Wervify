import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AmbientBackground } from './components/common/AmbientBackground';
import { Hero } from './components/hero/Hero';
import { TrustStrip } from './components/trust/TrustStrip';
import { ProblemSection } from './components/problem/ProblemSection';
import { FunnelVisualizer } from './components/funnel/FunnelVisualizer';
import { CasesSection } from './components/cases/CasesSection';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/trust/TestimonialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { AboutTeaser } from './components/about/AboutTeaser';
import { DemoSection } from './components/demo/DemoSection';

/**
 * Root Application Component with Smooth Anchor Navigation.
 * Clean, authentic Dutch agency structure modeled after Pulse Agency, Toppa, and Sticky Chapters.
 */
export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial check on load for hash or pathname anchor
    const hash = window.location.hash.replace('#', '');
    const pathname = window.location.pathname.replace('/', '');
    const target = hash || pathname;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    let targetId = '';
    if (path.startsWith('#')) {
      targetId = path.replace('#', '');
    } else if (path.includes('#')) {
      targetId = path.split('#')[1];
    } else if (path === '/aanpak') {
      targetId = 'aanpak';
    } else if (path === '/pakketten') {
      targetId = 'pakketten';
    } else if (path === '/cases') {
      targetId = 'cases';
    } else if (path === '/over-ons') {
      targetId = 'over-ons';
    } else if (path === '/contact' || path === '/demo') {
      targetId = 'demo';
    }

    if (targetId) {
      window.history.pushState(null, '', `#${targetId}`);
      setCurrentPath(`#${targetId}`);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState(null, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanDemo = () => {
    navigate('#demo');
  };

  const handleExploreApproach = () => {
    navigate('#aanpak');
  };

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    navigate('#demo');
  };

  const renderContent = () => {
    return (
      <>
        <Hero onPlanDemo={handlePlanDemo} onExploreApproach={handleExploreApproach} />
        <TrustStrip />
        <ProblemSection />
        <FunnelVisualizer />
        <CasesSection />
        <PricingSection onSelectTier={handleSelectTier} />
        <TestimonialsSection />
        <FAQSection />
        <AboutTeaser />
        <DemoSection selectedTier={selectedTier} />
      </>
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50/70 text-slate-900 dark:bg-wervify-void dark:text-slate-100 transition-colors duration-300">
      <AmbientBackground fixed intensity="vibrant" />
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      <main className="relative z-10 flex-1">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};
