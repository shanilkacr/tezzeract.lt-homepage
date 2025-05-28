
import React from 'react';
import { Bot, Workflow, Cloud, Sparkles } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Workflow,
      title: "Automate your Workflows with AI",
      description: "Connect and automate your business processes with zero-friction logic that scales.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Bot,
      title: "AI & Agentic Automation",
      description: "Deploy intelligent agents that think, learn, and act autonomously. Integrate with your existing stack.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Digital Transformation powered by AI",
      description: "Modernize legacy systems and rearchitect processes with AI-first strategies on the cloud.",
      gradient: "from-pink-600 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Generative AI powered Creatives",
      description: "Leverage cutting-edge generative models to produce digital creatives, avatars, videos, and more.",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="bg-tezzeract-light py-20 relative overflow-hidden" id='services'>
      {/* Smooth transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-20"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Smart Solutions, Built for Scale
          </h2>
          <p className="text-black text-base max-w-3xl font-thin mx-auto">
            Transform your business with our comprehensive AI-powered solutions designed to streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#00A9EE] from-34% to-[#00378A] border-2 border-[#FFFFFF40] rounded-[20px] shadow-[0_0_44px_0_rgba(13,105,143,0.75)] p-5"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-tezzeract bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-thin text-white mb-4 group-hover:text-tezzeract-darkblue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white text-sm font-thin leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-tezzeract transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
