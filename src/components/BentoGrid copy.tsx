import React, { useState, useEffect } from "react";
import {
  DollarSign,
  Clock,
  TrendingUp,
  Package,
  Target,
  Bot,
  Zap,
  Percent,
} from "lucide-react";

const BentoLayout = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);

  const rotatingStats = [
    { value: 80, label: "Cost Reduction", suffix: "%" },
    { value: 2.1, label: "CTR Increase", suffix: "x" },
    { value: 40, label: "Time Saved", suffix: "%" },
    { value: 50, label: "Inventory Optimization", suffix: "%" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % rotatingStats.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setAnimatedValue(0);
    const animationTimer = setTimeout(() => {
      setAnimatedValue(rotatingStats[currentStat].value);
    }, 200);

    return () => clearTimeout(animationTimer);
  }, [currentStat]);

  const businessAreas = [
    {
      tag: "Finance",
      title: "Automated Invoice Processing",
      stat: "80%",
      description: "cost reduction and processing time from days to minutes",
      source: "(APQC benchmarking)",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      size: "large",
    },
    {
      tag: "Human Resources",
      title: "HR Automation",
      stat: "40%",
      description: "time saved on administrative tasks",
      source: "(Deloitte Human Capital Trends, 2024)",
      icon: Clock,
      gradient: "from-purple-500 to-violet-500",
      size: "medium",
    },
    {
      tag: "Sales & Marketing",
      title: "AI-Powered Lead Nurturing",
      stat: "20%",
      description: "increase in sales opportunities on average",
      source: "",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      size: "medium",
    },
    {
      tag: "Operations",
      title: "AI Inventory Optimization",
      stat: "20-50%",
      description:
        "reduction in excess inventory while improving service levels",
      source: "(Boston Consulting Group)",
      icon: Package,
      gradient: "from-indigo-500 to-purple-500",
      size: "large",
    },
    {
      tag: "Creatives & Advertising",
      title: "AI for Ad Creative",
      stat: "2.1x CTR",
      description:
        "higher click-through rates and 40% lower cost-per-acquisition",
      source: "(Facebook Business, 2023)",
      icon: Target,
      gradient: "from-pink-500 to-rose-500",
      size: "large",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 relative overflow-hidden"
      style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
    >
      {/* Background glass orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transform Every Part of Your Business
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Real results from AI implementation across industries. See how
            businesses like yours are achieving measurable improvements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Stats Display - Large - Glass Style */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-blue-400/30 backdrop-blur-sm border border-blue-300/40 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                Customer Experience
              </span>
            </div>

            <div className="mt-16 relative z-10">
              <h2 className="text-2xl md:text-3xl">
                <b>Email & Chat Response</b> <br />
                <b>Automation</b> driving up to
              </h2>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-7xl md:text-7xl font-light bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  80%
                </div>
                <div className="text-3xl leading-tight text-blue-100">
                  reduction in customer <br />
                  service costs
                </div>
              </div>
              <div className="text-blue-200/80 text-sm">(IBM)</div>
            </div>

            {/* Glass decorative elements */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-400/20 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-400/20 rounded-full backdrop-blur-sm"></div>
          </div>

          {/* AI Automation Badge - Glass Style */}
          <div className="bg-gradient-to-br from-blue-500/25 to-indigo-600/25 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 text-white flex flex-col justify-center shadow-xl">
            <div className="text-center">
              <Bot className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <div className="font-bold text-lg mb-2">AI Automation</div>
              <div className="text-blue-200/80 text-sm">
                Across All Departments
              </div>
            </div>
          </div>

          {/* Implementation Ready - Glass Style */}
          <div className="bg-gradient-to-br from-emerald-500/25 to-green-600/25 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-6 text-white flex items-center justify-center shadow-xl">
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-3 text-emerald-200" />
              <div className="font-semibold mb-1">Ready to</div>
              <div className="font-bold text-lg">Implement</div>
            </div>
          </div>

          {/* Business Areas Cards */}
          {businessAreas.map((area, index) => (
            <div
              key={index}
              className={`
                group bg-gradient-to-br from-blue-500/15 to-blue-800/15 backdrop-blur-xl border border-blue-400/25 rounded-3xl p-6 text-white relative overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl
                ${
                  area.size === "large"
                    ? "md:col-span-2 lg:col-span-2"
                    : "md:col-span-1 lg:col-span-1"
                }
              `}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {area.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mt-16 relative z-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
                  <b>{area.title.split(" ").slice(0, -2).join(" ")}</b>
                  <br />
                  <b>{area.title.split(" ").slice(-2).join(" ")}</b> driving up
                  to
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`${
                      area.size === "large"
                        ? "text-6xl md:text-7xl"
                        : "text-4xl md:text-5xl"
                    } font-light bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent`}
                  >
                    {area.stat}
                  </div>
                  <div
                    className={`${
                      area.size === "large"
                        ? "text-2xl md:text-3xl"
                        : "text-lg md:text-xl"
                    } leading-tight text-blue-100`}
                  >
                    {area.description.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {area.description.split(" ").slice(4).join(" ")}
                  </div>
                </div>

                {area.source && (
                  <div className="text-blue-200/70 text-sm">{area.source}</div>
                )}
              </div>

              {/* Glass decorative elements */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/15 rounded-full backdrop-blur-sm"></div>
            </div>
          ))}

          {/* ROI Calculator Teaser - Glass Style */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-amber-500/25 to-orange-500/25 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-6 text-white shadow-xl">
            <div className="text-center">
              <Percent className="w-8 h-8 mx-auto mb-3 text-amber-200" />
              <div className="font-bold text-lg mb-2">Calculate Your</div>
              <div className="font-bold text-xl">ROI</div>
              <div className="text-amber-100/80 text-sm mt-2">
                Get personalized savings estimate
              </div>
            </div>
          </div>

          {/* Duplicate AI Automation - Glass Style */}
          <div className="bg-gradient-to-br from-purple-500/25 to-indigo-600/25 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-6 text-white flex flex-col justify-center shadow-xl">
            <div className="text-center">
              <Bot className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <div className="font-bold text-lg mb-2">AI Automation</div>
              <div className="text-purple-200/80 text-sm">
                Across All Departments
              </div>
            </div>
          </div>

          {/* Implementation Timeline - Enhanced Glass */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-xl border border-slate-600/40 rounded-3xl p-6 shadow-xl">
            <div className="text-white font-semibold mb-4">
              Implementation Timeline
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                <span className="text-slate-200 text-sm">
                  Week 1-2: Assessment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                <span className="text-slate-200 text-sm">Week 3-4: Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                <span className="text-slate-200 text-sm">Week 5+: Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
