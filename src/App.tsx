import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { TrustStrip } from './components/trust/TrustStrip';
import { ProblemSection } from './components/problem/ProblemSection';
import { PassiveTalentSection } from './components/pillars/PassiveTalentSection';
import { PillarsSection } from './components/pillars/PillarsSection';
import { ProcessSection } from './components/process/ProcessSection';
import { ResultsBand } from './components/results/ResultsBand';
import { CasesSection } from './components/cases/CasesSection';
import { ComparisonSection } from './components/comparison/ComparisonSection';
import { VideoSection } from './components/video/VideoSection';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/trust/TestimonialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { AboutTeaser } from './components/about/AboutTeaser';
import { DemoSection } from './components/demo/DemoSection';
import { ContactSection } from './components/contact/ContactSection';
import { NotFoundView } from './components/common/NotFoundView';

/**
 * Root Application Component with Client-Side Routing and Deep Linking.
 */
export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      const targetRoute = route || '/';
      window.history.pushState(null, '', path);
      setCurrentPath(targetRoute);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanDemo = () => {
    navigate('/#demo');
  };

  const handleExploreApproach = () => {
    navigate('/aanpak');
  };

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    navigate('/#demo');
  };

  // View router
  const renderContent = () => {
    switch (currentPath) {
      case '/':
      case '':
        return (
          <>
            <Hero onPlanDemo={handlePlanDemo} onExploreApproach={handleExploreApproach} />
            <TrustStrip />
            <ProblemSection />
            <PassiveTalentSection />
            <PillarsSection />
            <ProcessSection />
            <ResultsBand />
            <CasesSection />
            <ComparisonSection />
            <VideoSection />
            <PricingSection onSelectTier={handleSelectTier} />
            <TestimonialsSection />
            <FAQSection />
            <AboutTeaser />
            <DemoSection selectedTier={selectedTier} />
          </>
        );

      case '/aanpak':
        return (
          <>
            <PassiveTalentSection />
            <PillarsSection />
            <ProcessSection />
            <ComparisonSection />
            <DemoSection selectedTier={selectedTier} />
          </>
        );

      case '/pakketten':
        return (
          <>
            <PricingSection onSelectTier={handleSelectTier} />
            <ComparisonSection />
            <FAQSection />
            <DemoSection selectedTier={selectedTier} />
          </>
        );

      case '/cases':
        return (
          <>
            <CasesSection />
            <ResultsBand />
            <TestimonialsSection />
            <DemoSection selectedTier={selectedTier} />
          </>
        );

      case '/over-ons':
        return (
          <>
            <AboutTeaser />
            <PillarsSection />
            <ContactSection />
          </>
        );

      case '/contact':
        return (
          <>
            <ContactSection />
            <FAQSection />
          </>
        );

      default:
        return <NotFoundView onGoHome={() => navigate('/')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-wervify-void dark:text-slate-100 transition-colors duration-200">
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;

