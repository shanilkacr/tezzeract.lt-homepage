import React from "react";
import { Bot, Workflow, ArrowRight, Cloud, Sparkles } from "lucide-react";
import AutomateVideo from "@/assets/Card 1 - V6.webm";
import GenerativeVideo from "@/assets/Card 4 - V6.webm";
import DigitalVideo from "@/assets/Card 3 - V6.webm";
import AIAgentic from "@/assets/Card 2 - V6.webm";

const ServicesOverview = () => {
  const services = [
    {
      tag: "Effortless Connectivity",
      title: "Automate your Workflows with AI",
      description:
        "Connect and automate your business processes with zero-friction logic that scales.",
      gradient: "from-blue-500 to-purple-600",
      asset: AutomateVideo,
    },
    {
      tag: "Effortless Connectivity",
      title: "AI powered Agentic Automation",
      description:
        "Deploy intelligent agents that think, learn, and act autonomously. Integrate with your existing stack.",
      gradient: "from-purple-600 to-pink-600",
      asset: AIAgentic,
    },
    {
      tag: "Effortless Connectivity",
      title: "Digital Transformation powered by AI",
      description:
        "Modernize legacy systems and rearchitect processes with AI-first strategies on the cloud.",
      gradient: "from-pink-600 to-red-500",
      asset: DigitalVideo,
    },
    {
      tag: "Effortless Connectivity",
      title: "Generative AI powered Creatives",
      description:
        "Leverage cutting-edge generative models to produce digital creatives, avatars, videos, and more.",
      gradient: "from-red-500 to-orange-500",
      asset: GenerativeVideo,
    },
  ];

  return (
    <section
      className="bg-[#242424]  py-8 sm:py-12 lg:py-20 relative overflow-hidden"
      id="services"
    >
      {/* Smooth transition overlay */}
      <div className="absolute  top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-[#242424] to-transparent"></div>

      <div className=" w-[95%] lg:w-[81%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className=" tezzeracth2">
            Smart Solutions, Built for Scale
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-3xl font-light mx-auto mt-2 sm:mt-4">
            Transform your business with our comprehensive AI-powered solutions
            designed to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-start 
                min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] 
                border-2 border-[#FFFFFF40] rounded-[20px] 
                p-4 sm:p-6 lg:p-8 
                hover:shadow-[0_0_44px_0_rgba(13,105,143,0.75)] 
                transition-shadow duration-300 
                overflow-hidden bg-[#00378A] 
                group"
            >
              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={service.asset} type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Fixed Gradient Overlay with Multiply Blend Mode */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#00A9EE] from-34% to-[#00378A] opacity-100"
                style={{ mixBlendMode: "multiply" }}
              ></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-row justify-between items-center">
                  <p className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-3 py-1 rounded-xl text-xs sm:text-sm font-light">
                    {service.tag}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-tight mb-3 sm:mb-4  transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-24 sm:w-32 lg:w-36 h-px bg-white/50 my-3 sm:my-4"></div>
                  <p className="text-white text-xs sm:text-sm lg:text-base font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;