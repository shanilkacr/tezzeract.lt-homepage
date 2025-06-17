import React from "react";
import Logo from "@/assets/Tezzeract - Symbolic Logo (Gradient).webp";
import { DollarSign, Clock, TrendingUp, Package, Target } from "lucide-react";
import { NumberTicker } from "@/components/NumberTicker";
import { Ripple } from "@/components/Ripple";
import AnimatedLogo from "@/assets/animated_logo.webm";

const BentoLayout = () => {
  return (
    <div
      className="min-h-screen bg-[#242424] p-6"
      style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
    >
      <div className="w-[95%] lg:w-[80%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="tezzeracth2">Transform Every Part of Your Business</h2>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-3xl font-light mx-auto mt-2 sm:mt-4">
            Real results from AI implementation across industries. See how
            businesses like yours are achieving measurable improvements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-10 gap-6">
          {/* First Row: Two boxes, 50% each */}
          <div
            className="col-span-12 sm:col-span-10 md:col-span-5 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl 
    p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden 
    transition-all duration-300 transform hover:-translate-y-2 custom-box-1"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Customer Experience
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="font-semibold">
                  Email & Chat Response
                  <br />
                  Automation
                </span>{" "}
                driving up to
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light">
                  <NumberTicker value={80} />%
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                  reduction in customer service costs
                </div>
              </div>
              <div className="text-blue-200 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                (IBM)
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 sm:-right-6 lg:-right-8 -top-4 sm:-top-6 lg:-top-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -right-2 sm:-right-3 lg:-right-4 -bottom-2 sm:-bottom-3 lg:-bottom-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-blue-400 rounded-xl opacity-30"></div>
          </div>
          <div
            className="col-span-12 sm:col-span-10 md:col-span-5 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl 
    p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden 
    transition-all duration-300 transform hover:-translate-y-2 custom-box-2"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Finance
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="font-semibold">
                  Automated Invoice Processing
                  <br />
                </span>
                reduces costs by
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light">
                  80%
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                  and processing time from days to minutes
                </div>
              </div>
              <div className="text-blue-200 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                (APQC benchmarking)
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 sm:-right-6 lg:-right-8 -top-4 sm:-top-6 lg:-top-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -right-2 sm:-right-3 lg:-right-4 -bottom-2 sm:-bottom-3 lg:-bottom-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-blue-400 rounded-xl opacity-30"></div>
          </div>
          {/* Second Row: Three items, 40% | 20% (Logo) | 40% */}
          <div
            className="col-span-12 sm:col-span-10 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl 
    p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden 
    hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-3"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Sales & Marketing
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="font-semibold">
                  Lead Nurturing
                  <br />
                  powered by AI
                </span>{" "}
                increase
              </h3>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-3">
                20%
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                in sales opportunities on average
              </div>
            </div>
          </div>
          <div className="col-span-10 md:col-span-2 custom-logo  relative overflow-hidden">
            <video
              src={AnimatedLogo}
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="col-span-12 sm:col-span-10 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl 
    p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden 
    hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-4"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Human Resources
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="font-semibold">
                  HR Automation
                  <br />
                </span>
                can save
              </h3>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-3">
                40%
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                of time spent on administrative tasks
              </div>
              <div className="text-slate-400 text-xs sm:text-sm lg:text-base">
                (Deloitte Human Capital Trends, 2024)
              </div>
            </div>
          </div>

          {/* Third Row: Two boxes, 70% | 30% */}
          <div
            className="col-span-12 sm:col-span-10 md:col-span-7 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl 
    p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden 
    transition-all duration-300 transform hover:-translate-y-2 custom-box-5"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Operations
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="font-semibold">
                  AI-powered Inventory Optimization
                  <br />
                </span>
                can reduce excess inventory by
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light">
                  20-50%
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                  while improving service levels
                </div>
              </div>
              <div className="text-blue-200 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                (Boston Consulting Group)
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 sm:-right-6 lg:-right-8 -top-4 sm:-top-6 lg:-top-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -right-2 sm:-right-3 lg:-right-4 -bottom-2 sm:-bottom-3 lg:-bottom-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-blue-400 rounded-xl opacity-30"></div>
          </div>
          <div
            className="col-span-12 sm:col-span-10 md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl 
    p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden 
    hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-6"
          >
            <div className="relative z-10">
              <span
                className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white 
        px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-light"
              >
                Creatives & Advertising
              </span>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                AI for Ad Creative
              </h3>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-3">
                2.1x CTR
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl leading-tight text-blue-100 font-light">
                higher click-through rates and 40% lower cost-per-acquisition
              </div>
              <div className="text-slate-400 text-xs sm:text-sm lg:text-base">
                (Facebook Business, 2023)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
