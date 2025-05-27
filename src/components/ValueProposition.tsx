
import React, { useEffect, useState } from 'react';
import { Cpu, Zap, Users, Workflow } from 'lucide-react';

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('value-prop');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const typewriterText = "Every minute your team spends on repetitive tasks is a minute not spent on innovation.";

  return (
    <section id="value-prop" className="bg-tezzeract-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Part 1 */}
        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Left Column - 60% */}
          <div className="md:col-span-3">
            <h2 className={`text-4xl md:text-5xl font-bold text-gradient mb-6 ${isVisible ? 'typewriter' : ''}`}>
              {isVisible ? typewriterText : ''}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Transform your business operations with intelligent automation that learns, 
              adapts, and scales with your needs. Stop wasting valuable resources on 
              manual processes that AI can handle better.
            </p>
          </div>

          {/* Right Column - 40% */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Workflow Visualization */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500/20 border border-red-500/30 rounded-tezzeract p-4 text-center">
                  <span className="text-red-400 text-sm">Manual Tasks</span>
                  <div className="mt-2 text-white/60 text-xs">Slow • Error-prone • Costly</div>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-tezzeract p-4 text-center">
                  <span className="text-green-400 text-sm">AI Optimized</span>
                  <div className="mt-2 text-white/80 text-xs">Fast • Accurate • Scalable</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-tezzeract-gradient rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - 40% */}
          <div className="md:col-span-2">
            <div className="relative flex items-center justify-center h-80">
              {/* Central Tezzeract Cube */}
              <div className="w-20 h-20 bg-tezzeract-gradient rounded-lg flex items-center justify-center animate-float shadow-2xl">
                <Cpu className="w-10 h-10 text-white" />
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0">
                {[
                  { icon: Users, delay: '0s' },
                  { icon: Workflow, delay: '2s' },
                  { icon: Zap, delay: '4s' },
                  { icon: Cpu, delay: '6s' }
                ].map(({ icon: Icon, delay }, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6"
                    style={{ 
                      animation: `orbit 8s linear infinite`,
                      animationDelay: delay,
                      transformOrigin: '24px 24px'
                    }}
                  >
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              AI Agents Working Around the Clock
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Deploy intelligent agents that integrate seamlessly with your existing tools. 
              From Slack to Stripe, Gmail to Notion - our AI ecosystem connects everything 
              and automates the workflows that matter most to your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
