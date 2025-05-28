
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesOverview from '@/components/ServicesOverview';
import BentoGrid from '@/components/BentoGrid';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Strategic from '@/components/Strategic';
import PortfolioSection  from '@/components/portfolio-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Strategic />
      <ValueProposition />
      <ServicesOverview />
      <BentoGrid />


      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
