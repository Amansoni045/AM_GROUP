"use client";
import React, { useState } from "react";
import { Workflow, ArrowUp, ArrowDown, Target, Lightbulb, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Strategic Planning",
    desc: "We work closely with you to define your goals and develop a comprehensive strategy for success. Our approach ensures every step aligns with your core business objectives.",
    icon: Target,
  },
  {
    id: "02",
    title: "Creative Development",
    desc: "Our team of experts creates innovative designs and solutions tailored to your unique needs. We blend aesthetic excellence with functional precision to make your brand stand out.",
  },
  {
    id: "03",
    title: "Implementation & Integration",
    desc: "We ensure smooth implementation and seamless integration of technologies into your existing ecosystem. Our technical experts handle the complexity while you focus on growth.",
    icon: Workflow,
  },
  {
    id: "04",
    title: "Sustainable Growth",
    desc: "We provide ongoing support and analysis to ensure your business continues to thrive in the long term. Data-driven insights fuel our continuous improvement strategy.",
    icon: TrendingUp,
  }
];

export default function Process() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  React.useEffect(() => {
    const timer = setInterval(nextStep, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#020817] py-32 px-4 md:px-12 relative overflow-hidden" id="process">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6373f2]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Premium Image Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl shadow-black/40 border border-white/10 group">
              <img 
                src="/digital_hands_process.png" 
                alt="AM Group Process Illustration" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Gold accent overlay bottom-left */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020817]/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Ambient Glows */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#6373f2]/20 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
          
          {/* Right Column: Interactive Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="inline-block bg-[#d4af37]/10 px-4 py-1.5 rounded-full mb-8 border border-[#d4af37]/20">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em]">
                Our Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] font-heading">
              A Strategic Framework<br />
              For Your <span className="text-[#6373f2]">Success</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
              We guide our clients through a meticulously designed journey, transforming complex challenges into clear, actionable, and profitable outcomes.
            </p>
            
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              {/* Dynamic Step Card */}
              <div className="flex-grow min-h-[360px] relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, x: 20  }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-[#111827] to-[#020817] p-10 rounded-[32px] border border-white/5 shadow-2xl overflow-hidden group"
                  >
                    {/* Large Background Number */}
                    <div className="absolute top-2 right-6 text-[100px] font-black text-white/[0.03] select-none leading-none group-hover:text-[#6373f2]/10 transition-colors duration-500">
                      {steps[currentStep].id}
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6373f2] to-[#4f46e5] flex items-center justify-center mb-10 shadow-lg shadow-[#6373f2]/20">
                      {React.createElement(steps[currentStep].icon || Lightbulb, { className: "w-8 h-8 text-white", strokeWidth: 2 })}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 font-heading">{steps[currentStep].title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {steps[currentStep].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Vertical/Horizontal Controls */}
              <div className="flex md:flex-col justify-center items-center gap-4">
                <button 
                  onClick={prevStep}
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#6373f2] hover:border-[#6373f2] transition-all duration-300 group"
                  aria-label="Previous step"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform hidden md:block" />
                  <ArrowUp className="w-5 h-5 -rotate-90 group-hover:-translate-x-0.5 transition-transform md:hidden" />
                </button>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden"></div>
                <button 
                  onClick={nextStep}
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#6373f2] hover:border-[#6373f2] transition-all duration-300 group"
                  aria-label="Next step"
                >
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform hidden md:block" />
                  <ArrowDown className="w-5 h-5 -rotate-90 group-hover:translate-x-0.5 transition-transform md:hidden" />
                </button>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex gap-2 mt-8">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-500 ${currentStep === idx ? 'w-12 bg-[#6373f2]' : 'w-4 bg-white/10'}`} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
