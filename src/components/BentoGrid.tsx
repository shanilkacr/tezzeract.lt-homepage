import React from "react";
import Logo from "@/assets/Tezzeract - Symbolic Logo (Gradient).webp";
import {
  DollarSign,
  Clock,
  TrendingUp,
  Package,
  Target,
} from "lucide-react";

const BentoLayout = () => {
  return (
    <div
      className="min-h-screen bg-[#242424] p-6"
      style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="tezzeracth2">
            Transform Every Part of Your Business
          </h1>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Real results from AI implementation across industries. See how
            businesses like yours are achieving measurable improvements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-10 gap-6">
          {/* First Row: Two boxes, 50% each */}
          <div
            className="col-span-10 md:col-span-5 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl p-12 text-white relative overflow-hidden hover: transition-all duration-300 transform hover:-translate-y-2 custom-box-1"
          >
            <div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
                Customer Experience
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-light">
                <span className="font-semibold">
                  Email & Chat Response<br />Automation
                </span> driving up to
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-7xl font-light">80%</div>
                <div className="text-3xl leading-tight text-blue-100 font-light">
                  reduction in customer service costs
                </div>
              </div>
              <div className="text-blue-200 text-sm mt-3">(IBM)</div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400 rounded-xl opacity-30"></div>
            </div>
          </div>
          <div
            className="col-span-10 md:col-span-5 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl p-12 text-white relative overflow-hidden hover: transition-all duration-300 transform hover:-translate-y-2 custom-box-2"
          >
            <div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
              Finance
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-light">
              <h3 className="text-3xl font-light">
                <span className="font-semibold">
                Automated Invoice Processing<br />
                </span>  reduces costs by
              </h3>

              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-7xl font-light">80%</div>
                <div className="text-3xl leading-tight text-blue-100 font-light">
                 and processing time from days to minutes
                </div>
              </div>
              <div className="text-blue-200 text-sm mt-3">
                (APQC benchmarking)
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400 rounded-xl opacity-30"></div>
            </div>
          </div>

          {/* Second Row: Three items, 40% | 20% (Logo) | 40% */}
          <div
            className="col-span-10 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-3"
          >
              <div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
              Sales & Marketing
              </span>
            </div>
            <div className="mt-8">

            <h2 className="text-3xl font-light">
                <span className="font-semibold">
                Lead Nurturing <br />powered by AI 
                </span> increase
              </h2>

          
              <div className="text-7xl font-light mb-2">20%</div>
              <div className="text-slate-300 text-xl mb-3">
               in sales opportunities on average
              </div>
            </div>
          </div>
          <div
            className="col-span-10 md:col-span-2 flex items-center justify-center custom-logo"
          >
            <img
              src={Logo}
              alt="Tezzeract Logo"
              className="max-w-[150px] max-h-[150px] object-contain"
            />
          </div>
          <div
            className="col-span-10 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-4"
          >

<div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
              Human Resources
              </span>
            </div>
            <div className="mt-8">

            <h2 className="text-3xl font-light">
                <span className="font-semibold">
                HR Automation <br />
                </span> can save 
              </h2>


              <div className="text-7xl font-light mb-2">40%</div>
              <div className="text-slate-300 text-xl mb-3">
              of time spent on administrative tasks
              </div>
              <div className="text-slate-400 text-xs">
                (Deloitte Human Capital Trends, 2024)
              </div>
            </div>
          </div>

          {/* Third Row: Two boxes, 70% | 30% */}
          <div
            className="col-span-10 md:col-span-7 border border-white/40 bg-gradient-to-br from-[#00A9EE] to-[#00378A] rounded-3xl p-12 text-white relative overflow-hidden hover: transition-all duration-300 transform hover:-translate-y-2 custom-box-5"
          >
            <div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
                Operations
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-light">
                <span className="font-semibold">
                AI-powered inventory Optimization<br />
                </span> can reduce excess inventory by
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-7xl font-light">20-50%</div>
                <div className="text-3xl leading-tight text-blue-100 font-light">
                while improving service levels 
                </div>
              </div>
              <div className="text-blue-200 text-sm mt-3">
                (Boston Consulting Group)
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400 rounded-xl opacity-30"></div>
            </div>
          </div>
          <div
            className="col-span-10 md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-3xl p-10 text-white relative overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 custom-box-6"
          >

<div className="top-6 left-6">
              <span className="bg-[radial-gradient(circle,_#FFFFFF20,_#FFFFFF50)] border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-light">
              Creatives & Advertising
              </span>
            </div>


            <div className="mt-8">
              <h3 className="text-3xl font-semibold mb-3">AI for Ad Creative</h3>
              <div className="text-7xl font-light mb-2">2.1x CTR</div>
              <div className="text-slate-300 text-xl mb-3">
                higher click-through rates and 40% lower cost-per-acquisition
              </div>
              <div className="text-slate-400 text-xs">
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