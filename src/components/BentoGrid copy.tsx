import React, { useState, useEffect } from "react";
import {
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Package,
  Target,
  Bot,
  Zap,
  ArrowUp,
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
      tag: "Customer Experience",
      title: "Email & Chat Response Automation",
      stat: "80%",
      description: "driving up to 80% reduction in customer service costs",
      source: "(IBM)",
      gradient: "from-green-500 to-emerald-500",
      size: "large",
    },
    {
      tag: "Human Resources",
      title: "HR Automation can save",
      stat: "40%",
      description: "time spent on administrative tasks",
      source: "(Deloitte Human Capital Trends, 2024)",
      icon: Clock,
      gradient: "from-purple-500 to-violet-500",
      size: "small",
    },
    {
      tag: "Sales & Marketing",
      title: "AI-Powered Lead Nurturing",
      stat: "20%",
      description: "increase in sales opportunities on average",
      source: "",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      size: "small",
    },
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
      className="min-h-screen bg-slate-900 p-6"
      style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transform Every Part of Your Business
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Real results from AI implementation across industries. See how
            businesses like yours are achieving measurable improvements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {/* Main Stats Display - Large */}
          {/* <div className="md:col-span-2 lg:col-span-2 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl p-12  text-white relative overflow-hidden hover: transition-all duration-300 transform hover:-translate-y-2">
            <div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
                Customer Experience
              </span>
            </div>

            <div className="mt-8">
              <h2 className=" text-3xl font-light ">
                <span className=" font-semibold ">
                  Email & Chat Response <br></br> Automation
                </span>{" "}
                driving up to
              </h2>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-7xl md:text-7xl font-light">
                  80%<span className="text-3xl"></span>
                </div>
                <div className="text-3xl leading-tight text-blue-100 font-light">
                  reduction in customer <br></br> service costs
                </div>
              </div>
              <div className="text-blue-200 text-sm">(IBM)</div>
            </div> */}

          {/* Decorative elements
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400 rounded-xl opacity-30"></div>
          </div> */}

          {/* Business Areas Cards */}
          {businessAreas.map((area, index) => (
            <div
              key={index}
              className={`
                ${
                  area.size === "large"
                    ? "md:col-span-2 lg:col-span-2 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl p-12 text-white relative overflow-hidden hover: transition-all duration-300 transform hover:-translate-y-2"
                    : "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1"
                }
              `}
            >
              {/* Tag */}
              <div className={area.size === "large" ? "top-6 left-6" : ""}>
                <span
                  className={
                    area.size === "large"
                      ? "bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light "
                      : "bg-slate-700 border border-slate-500 text-slate-300 px-4 py-2 rounded-lg text-xs"
                  }
                >
                  {area.tag}
                </span>
              </div>

              {/* Content */}
              <div className={area.size === "large" ? "mt-8" : "mt-8"}>
                {area.size === "large" ? (
                  <>
                    <h2 className="text-3xl font-light">
                      <span className="font-semibold">
                        {area.title.split(" ").slice(0, -1).join(" ")}
                        <br />
                        {area.title.split(" ").slice(-1).join(" ")}
                      </span>{" "}
                      {area.description.split(" ").slice(0, 3).join(" ")}
                    </h2>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-7xl md:text-7xl font-light ">
                        {area.stat}
                      </div>
                      <div className="text-3xl leading-tight text-blue-100 font-light">
                        {area.description.split(" ").slice(4, 10).join(" ")}

                        <br />
                      </div>
                    </div>
                    {area.source && (
                      <div className="text-blue-200 text-sm mt-3">
                        {area.source}
                      </div>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400 rounded-xl opacity-30"></div>
                  </>
                ) : (
                  <>
                    <h3 className="text-3xl font-semibold mb-3">
                      {area.title}
                    </h3>

                    <div className="text-7xl font-light mb-2">{area.stat}</div>

                    <div className="text-slate-300 text-xl mb-3">
                      {area.description}
                    </div>

                    {area.source && (
                      <div className="text-slate-400 text-xs">
                        {area.source}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {/* ROI Calculator Teaser */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-6 text-white">
            <div className="text-center">
              <Percent className="w-8 h-8 mx-auto mb-3" />
              <div className="font-bold text-lg mb-2">Calculate Your</div>
              <div className="font-bold text-xl">ROI</div>
              <div className="text-yellow-100 text-sm mt-2">
                Get personalized savings estimate
              </div>
            </div>
          </div>
          {/* Implementation Ready */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white flex items-center justify-center">
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Ready to</div>
              <div className="font-bold text-lg">Implement</div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="md:col-span-2 lg:col-span-1 bg-slate-800 border border-slate-700 rounded-3xl p-6">
            <div className="text-white font-semibold mb-4">
              Implementation Timeline
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">
                  Week 1-2: Assessment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">Week 3-4: Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-300 text-sm">Week 5+: Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
