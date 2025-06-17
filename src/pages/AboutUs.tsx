import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import TezzeractWhiteLogo from "@/assets/Tezzeract - Text Logo (White).webp";
import { Globe } from "@/components/world-map";
import { Ripple } from "@/components/Ripple";
import Footer from "@/components/Footer";
import { IconCloudDemo } from "@/components/IconCloudImages";

import { AnimatedBeamDemo } from "@/components/AnimatedUniBeam";

const AboutUsHero = () => {
  const [scale, setScale] = useState(1);
  const rafRef = useRef();
  const sectionRef = useRef(null);

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
    <div className="bg-[#242424]">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section with Scroll Animation */}
      <section
        ref={sectionRef}
        className="relative h-[60vh] sm:h-[60vh] bg-gradient-to-br from-tezzeract-blue/20 via-transparent to-tezzeract-darkblue/30 overflow-hidden rounded-b-[20px]"
        style={{
          transformOrigin: "center top",
          willChange: "transform",
        }}
      >
        {/* Gradient Mesh Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00378A] to-[#00A9EE]"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight sm:leading-normal text-white mb-6">
              We're{" "}
              <img
                src={TezzeractWhiteLogo}
                alt="Tezzeract Object"
                className="w-[40%] mx-auto pt-4"
              />
              <span className="sm:hidden"> </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-light text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your AI-powered partner in business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - This enables scrolling to see the animation */}
      <div className="bg-[#242424] px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h1 className="tezzeracth2">
              Get access to a pool of vetted professionals specialized in tech,
              growth, creatives and more!
            </h1>
            <p className="text-white text-sm sm:text-base lg:text-lg max-w-3xl font-light mx-auto mt-2 sm:mt-4">
              We'll take care of the talent Effortlessly build and manage a
              remote team of highly skilled professionals, carefully matched to
              your project needs. From recruitment to collaboration, we handle
              the details so you can focus on growing your business.{" "}
            </p>
          </div>
        </section>
        {/* Statistics Section */}
        <div
          className="bg-gradient-to-br from-[#00A9EE] to-[#00378A] py-[5%]
-"
        >
          <section className="max-w-6xl mx-auto py-1 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div
                className="bg-gradient-to-br from-[rgb(142,185,255)] to-white backdrop-blur-sm rounded-2xl p-12 self-center
 text-center border border-white/10"
              >
                <div className="tezzeracth2 text-7xl">60+</div>
                <div className="tezzeracth2 text-2xl tracking-normal">
                  clients
                </div>
                 <div className=" ">
                  <IconCloudDemo />
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-[rgb(142,185,255)] to-white backdrop-blur-sm  self-center
 rounded-2xl p-12 text-center border border-white/10"
              >
               
                <div className="tezzeracth2 text-7xl">20+</div>
                <div className="tezzeracth2 text-2xl tracking-normal">
                  industries
                </div>
              </div>
              <div
                className="relative flex flex-col
               size-full overflow-hidden rounded-lg border bg-gradient-to-br from-[rgb(142,185,255)] to-white  pt-8"
              >
                <div className="flex flex-col items-center">
                  <h1 className="tezzeracth2 text-6xl">15+</h1>
                  <div className="tezzeracth2 text-xl tracking-normal mt-[-30px]">
                    countries
                  </div>
                </div>
                <Globe className="top-[100px]" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
              <div className="bg-gradient-to-br from-[rgb(142,185,255)] to-white backdrop-blur-sm  self-center rounded-2xl p-8 text-center border border-white/10">
                <div className="tezzeracth2 text-7xl">150</div>
                <div className="tezzeracth2 text-2xl tracking-normal">
                  successful
                  <br />
                  projects
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">
              Core features that set us
            </h2>
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              apart from the competition
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our competitive advantages that deliver extraordinary
              results and exceptional value, while operating at twice the
              competition.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left side - Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img
                  src="src/assets/Collaboration Over Control.png"
                  alt="Step 1"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-medium text-white mb-3">
                  Collaboration Over Control
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  We don’t replace people, we empower them. Our AI tools are
                  made to partner with humans, not overpower them.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img
                  src="src/assets/Transparency.png"
                  alt="Step 2"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-medium text-white mb-3">
                  Transparency{" "}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  We communicate openly—about what our AI can do, what it can't,
                  and how it makes decisions.
                </p>
              </div>
            </div>
            {/* Center - Professional Image */}
            <div className="flex justify-center items-center">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Ripple />
              </div>
            </div>
            {/* Right side - Features */}
            <div className="space-y-6">
              {/* Feature 4 */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img
                  src="src/assets/Real-World Impact.png"
                  alt="Step 3"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-medium text-white mb-3">
                  Real-World impact{" "}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  We build tech that actually works where it matters—solving
                  real problems, not just demo-stage hype.
                </p>
              </div>
              {/* Feature 5 */}
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <img
                  src="src/assets/Relentless Innovation.png"
                  alt="Step 4"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-medium text-white mb-3">
                  Relentless Innovation{" "}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  We move fast, adapt faster, and never settle. AI is
                  evolving—and so are we, always pushing the edge.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="max-w-4xl mx-auto py-20 text-center">
          <div className="bg-gradient-to-br from-[#00378A]/20 to-[#00A9EE]/20 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join hundreds of businesses that have already saved thousands of
              hours with our AI solutions.
            </p>
            <Button className="bg-gradient-to-r from-white to-[#D8F4FF] hover:bg-gradient-to-tr hover:from-[#00378AB0] hover:to-[#00A9EE] shadow-[0_0px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_-5px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl text-[#005D8A] font-medium hover:text-white text-lg transition-all duration-300 px-8 py-6 active:scale-95">
              Start Your Transformation Today
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsHero;
