
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesOverview from '@/components/ServicesOverview';
import BentoGrid from '@/components/BentoGrid';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <BentoGrid />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
