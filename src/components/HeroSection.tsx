import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import LogoSlider from "./LogoSlider";
import HeroVideo from "@/assets/Hero Loop V2.webm"; // Assuming you have a video file
import { TextReveal } from "@/components/magicui/text-reveal";
import { Navigate, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [scale, setScale] = useState(1);
  const rafRef = useRef();
  const sectionRef = useRef(null);
  const Navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const startScroll = viewportHeight * 0.1; // 10% of viewport height
    const endScroll = viewportHeight * 0.2; // 20% of viewport height
    const scrollY = window.scrollY;

    // Calculate scale: 1 at scrollY <= startScroll, 0.95 at scrollY >= endScroll
    let newScale;
    if (scrollY <= startScroll) {
      newScale = 1;
    } else if (scrollY >= endScroll) {
      newScale = 0.95;
    } else {
      // Linear interpolation between startScroll and endScroll
      const progress = (scrollY - startScroll) / (endScroll - startScroll);
      newScale = 1 - progress * 0.05; // 1 to 0.95
    }

    // Use transform directly instead of React state for better performance
    if (sectionRef.current) {
      sectionRef.current.style.transform = `scale(${newScale})`;
    }
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame for smooth animation
    const throttledHandleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="bg-[#242424] ">
      {/* Background Gradient */}
      <Navigation />

      <section
        ref={sectionRef}
        className="relative h-[90vh] sm:h-[90vh] bg-tezzeract-gradient overflow-hidden rounded-b-[20px] "
        style={{ 
          transformOrigin: "center top",
          willChange: "transform"
        }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ mixBlendMode: "multiply" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HeroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Mesh Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-tezzeract-blue/20 via-transparent to-tezzeract-darkblue/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-tezzeract-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="tezzeracth1 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-normal">
              Save <span className="text-white font-semibold">100+ hours</span> a week with
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                AI-Powered Workflow Automations!
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-l font-thin text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Tezzeract helps businesses save time, reduce costs, and grow faster with our AI solutions that automate repetitive tasks, create marketing content, and build custom software, so you can focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-6 sm:pb-8 px-4 sm:px-0">
              <Button onClick={ () => Navigate('/book-a-call') }      
                className="w-[50%] sm:w-auto bg-gradient-to-r from-white to-[#D8F4FF] hover:bg-gradient-to-tr hover:from-[#00378AB0] hover:to-[#00A9EE] shadow-[0_0px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_-5px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl text-[#005D8A] font-thin hover:text-white text-sm sm:text-base transition-all duration-300 px-24 sm:px-8 py-4 sm:py-6 min-h-[48px] active:scale-95"
              >
                Book a Free Strategy Call
              </Button>
                
            </div>


            {/* Logo Slider */}
            {/* Uncomment when needed */}
            {/* <div className="mb-12">
              <LogoSlider />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;