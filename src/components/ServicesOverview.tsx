import React from "react";
import { Bot, Workflow, ArrowRight, Cloud, Sparkles } from "lucide-react";
import Generative from "@/assets/Generative AI powered creatives.webm";

const ServicesOverview = () => {
  const services = [
    {
      tag: "Effortless Connectivity",
      title: "Automate your Workflows with AI",
      description:
        "Connect and automate your business processes with zero-friction logic that scales.",
      gradient: "from-blue-500 to-purple-600",
      asset: Generative,
    },
    {
      tag: "Effortless Connectivity",
      title: "AI & Agentic Automation",
      description:
        "Deploy intelligent agents that think, learn, and act autonomously. Integrate with your existing stack.",
      gradient: "from-purple-600 to-pink-600",
      asset: Generative,
    },
    {
      tag: "Effortless Connectivity",
      title: "Digital Transformation powered by AI",
      description:
        "Modernize legacy systems and rearchitect processes with AI-first strategies on the cloud.",
      gradient: "from-pink-600 to-red-500",
      asset: Generative,
    },
    {
      tag: "Effortless Connectivity",
      title: "Generative AI powered Creatives",
      description:
        "Leverage cutting-edge generative models to produce digital creatives, avatars, videos, and more.",
      gradient: "from-red-500 to-orange-500",
      asset: Generative,
    },
  ];

  return (
    <section
      className="bg-[#242424] py-20 relative overflow-hidden"
      id="services"
    >
      {/* Smooth transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-20"></div>

      <div className="max-w-[80%] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="tezzeracth2">Smart Solutions, Built for Scale</h2>
          <p className="text-white text-base max-w-3xl font-thin mx-auto">
            Transform your business with our comprehensive AI-powered solutions
            designed to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-top h-[45vh] border-2 border-[#FFFFFF40] rounded-[20px] p-10 hover:shadow-[0_0_44px_0_rgba(13,105,143,0.75)] transition-shadow duration-300 overflow-hidden bg-[#00378A]"
            >
              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "" }}
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

              <div className="relative z-10 flex flex-col">
                <div className="flex flex-row justify-between mt-1">
                  <p className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-1 rounded-xl text-sm font-light">
                    {service.tag}
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-thin text-white leading-tight mb-4 mt-4 group-hover:text-tezzeract-darkblue transition-colors">
                    {service.title}
                  </h3>

                  <div className="w-[140px] h-px bg-white/50 my-4"></div>

                  <p className="text-white text-sm font-thin leading-relaxed">
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