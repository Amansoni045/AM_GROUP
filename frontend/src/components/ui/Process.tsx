import React from "react";
import { Workflow, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Process() {
  return (
    <section className="bg-[#020617] py-32 px-4 md:px-20 relative overflow-hidden" id="process">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 flex flex-col gap-4 opacity-20">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
        </div>
        <div className="flex gap-4 justify-end">
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image */}
          <div className="relative group">
            <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl shadow-[#6373f2]/10 border border-white/5">
              <img 
                src="/digital_hands_process.png" 
                alt="Digital Collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent"></div>
            </div>
            {/* Dynamic Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#6373f2]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>
            {/* Subtle glow behind image */}
            <div className="absolute -inset-4 bg-[#6373f2]/10 blur-[80px] -z-10"></div>
          </div>
          
          {/* Right Column: Content */}
          <div>
            <div className="inline-block bg-[#c5e17a] px-4 py-1.5 mb-8">
              <span className="text-black text-[13px] font-bold uppercase tracking-widest">
                Work Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-heading">
              Proven Process For<br />
              Growing Your Business.
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              We provide innovative solution that ensure long-term growth & stability, driving your business success.
            </p>
            
            <div className="flex items-center gap-8">
              {/* Main Step Card */}
              <div className="flex-grow bg-[#6373f2] p-10 rounded-[24px] relative overflow-hidden group shadow-2xl shadow-[#6373f2]/20">
                {/* Large Background Number */}
                <div className="absolute top-2 right-4 text-8xl font-black text-white/10 select-none">
                  03
                </div>
                
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-10 shadow-lg">
                  <Workflow className="w-8 h-8 text-[#6373f2]" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">Implementation & Integration</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  We ensure smooth implementation and seamless integration of technologies into your existing ecosystem.
                </p>
              </div>
              
              {/* Vertical Controls */}
              <div className="flex flex-col items-center gap-6">
                <button className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <div className="w-px h-24 bg-white/20"></div>
                <button className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <ArrowDownRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



