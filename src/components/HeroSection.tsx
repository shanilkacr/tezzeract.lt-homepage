import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import LogoSlider from "./LogoSlider";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-tezzeract-gradient overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tezzeract-blue/20 via-transparent to-tezzeract-darkblue/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-tezzeract-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <Navigation />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6 leading-tight">
            Save <span className="text-white font-semibold">100+ hours</span> a week with
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered Workflow Automations!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-xl font-thin text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tezzeract helps businesses unlock efficiency and scale through
            intelligent AI agents, workflow automation, Gen-AI powered
            creatives, and full-stack AI development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
            <Button className="bg-gradient-to-r from-white to-[#D8F4FF] hover:bg-gradient-to-bl hover:from-[#00378AB0] hover:to-[#00A9EE] shadow-[0_70px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_70px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl px-8 py-4 text-[#005D8A] font-thin hover:text-white transition-all duration-300 sm:px-12 sm:py-5">
              Book a Free Strategy Call
            </Button>
          </div>

 
       {/* Logo Slider */}

         {/*   <div className="mb-12">
            <LogoSlider />
          </div>
          
          */}
     
      
      

         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
