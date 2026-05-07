import React from "react";
import { Target, Award } from "lucide-react";

export default function Story() {
  return (
    <section className="py-32 px-4 md:px-20 bg-threedots-navy relative overflow-hidden" id="story">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-threedots-blue/10 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="bg-threedots-lime text-threedots-navy text-[12px] font-bold px-4 py-1 rounded-full inline-block mb-8 uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight font-heading">
              Shaping the Future of Business in the GCC.
            </h2>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Founded in 2016 by Ravi Mehta, AM Group was established with a clear mission: to deliver tailored consulting, design, and accounting solutions that foster sustainable growth.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                With over 25 years of leadership experience in the MENA region, we turn challenges into opportunities, empowering businesses in Bahrain, Saudi Arabia, and Oman with strategy and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="glass-card p-8 rounded-[24px] border-white/5">
                <div className="bg-threedots-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-threedots-blue" />
                </div>
                <h4 className="font-bold text-white mb-2 text-xl font-heading">Our Mission</h4>
                <p className="text-sm text-gray-400 font-medium">Tailored solutions for operational efficiency and market relevance.</p>
              </div>
              <div className="glass-card p-8 rounded-[24px] border-white/5">
                <div className="bg-threedots-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-threedots-blue" />
                </div>
                <h4 className="font-bold text-white mb-2 text-xl font-heading">Our Vision</h4>
                <p className="text-sm text-gray-400 font-medium">Leading consultancy in the GCC, upholding integrity and excellence.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-[48px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880212340-02d956ea3a13?q=80&w=2033&auto=format&fit=crop" 
                alt="Corporate Leadership" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-threedots-navy/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card text-white p-10 rounded-[32px] z-20 border-threedots-blue/20 hidden md:block backdrop-blur-xl">
              <div className="text-5xl font-black mb-2 text-threedots-blue font-heading">25+</div>
              <div className="text-sm font-bold opacity-70 uppercase tracking-widest">Years of MENA<br/>Expertise</div>
            </div>
            {/* Grid Decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 grid-pattern opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

