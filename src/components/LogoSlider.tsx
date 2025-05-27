
import React from 'react';

const LogoSlider = () => {
  const technologies = [
    'ChatGPT', 'Perplexity', 'Gumloop', 'Slack', 'Zapier', 
    'Notion', 'Gmail', 'Stripe', 'OpenAI', 'Claude', 'Anthropic'
  ];

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm rounded-tezzeract py-4">
      <div className="flex animate-slide-right">
        {[...technologies, ...technologies].map((tech, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-8 px-6 py-2 bg-white/20 rounded-lg backdrop-blur-sm"
          >
            <span className="text-white font-medium text-sm whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
