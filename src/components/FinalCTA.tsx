
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="bg-tezzeract-dark py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-tezzeract-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-tezzeract-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Decorative element */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-tezzeract-gradient rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Ready to Transform Your Business?
        </h2>

        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Don't let manual processes hold you back. Our automation experts are ready to 
          streamline your operations and accelerate your growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-tezzeract-darkblue hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-tezzeract shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-tezzeract-darkblue px-8 py-6 text-lg font-semibold rounded-tezzeract backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm mb-4">Trusted by 500+ businesses worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white/40 text-sm">Enterprise Ready</div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="text-white/40 text-sm">24/7 Support</div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="text-white/40 text-sm">99.9% Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
