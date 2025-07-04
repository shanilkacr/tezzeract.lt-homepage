
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesOverview from '@/components/ServicesOverview';
import BentoGrid from '@/components/BentoGrid';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Strategic from '@/components/Strategic';
import GrowthCTA from '@/components/GrowthCTA';



const Index = () => {
  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <Strategic />
  
      <ServicesOverview />
      
      <BentoGrid />


      <GrowthCTA />
      <Footer />
    </div>
  );
};

export default Index;
