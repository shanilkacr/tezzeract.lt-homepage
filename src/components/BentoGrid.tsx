
import React from 'react';
import { Users, DollarSign, Clock, TrendingUp, Package, Target } from 'lucide-react';

const BentoGrid = () => {
  const benefits = [
    {
      tag: "Customer Experience",
      title: "Email & Chat Response Automation",
      stat: "driving up to 80% reduction in customer service costs (IBM).",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      size: "large" // spans 2 columns on desktop
    },
    {
      tag: "Finance",
      title: "Automated invoice processing",
      stat: "reduces costs by 80% and processing time from days to minutes (APQC benchmarking)",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      size: "large"
    },
    {
      tag: "HR Operations",
      title: "HR automation",
      stat: "can save 40% of time spent on administrative tasks (Deloitte Human Capital Trends, 2024).",
      icon: Clock,
      gradient: "from-purple-500 to-violet-500",
      size: "medium"
    },
    {
      tag: "Sales & Marketing",
      title: "Lead Nurturing powered by AI",
      stat: "increase 20% sales opportunities on average.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      size: "medium"
    },
    {
      tag: "Supply Chain",
      title: "AI-powered inventory optimization",
      stat: "can reduce excess inventory by 20-50% while improving service levels (Boston Consulting Group).",
      icon: Package,
      gradient: "from-indigo-500 to-purple-500",
      size: "large"
    },
    {
      tag: "Marketing",
      title: "AI for ad creative",
      stat: "see 2.1x higher click-through rates and 40% lower cost-per-acquisition (Facebook Business, 2023).",
      icon: Target,
      gradient: "from-pink-500 to-rose-500",
      size: "large"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-tezzeract-light via-gray-50 to-tezzeract-light py-20 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-tezzeract-gradient opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Transform Every Part of Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real results from AI implementation across industries. See how businesses like yours are achieving measurable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                group bg-white rounded-tezzeract p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100
                ${benefit.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'}
                ${benefit.size === 'medium' ? 'md:col-span-1' : ''}
              `}
            >
              {/* Tag */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${benefit.gradient}`}>
                  {benefit.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-tezzeract bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-tezzeract-darkblue transition-colors">
                <span dangerouslySetInnerHTML={{ __html: benefit.title.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.stat}
              </p>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-tezzeract transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
