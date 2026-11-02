export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  monthlyPrice: string;
  setupFee: string;
  features: string[];
  ctaText: string;
}

export interface PricingAddOn {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  companySector: string;
  vacancyRole: string;
  primaryMetric: string;
  metricLabel: string;
  timeframe: string;
  summary: string;
  highlightQuote: string;
  authorTitle: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}
