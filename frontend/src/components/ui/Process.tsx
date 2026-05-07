import React, { useState } from "react";
import { Workflow, ArrowUp, ArrowDown, Target, Lightbulb, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Strategic Planning",
    desc: "We work closely with you to define your goals and develop a comprehensive strategy for success.",
    icon: Target,
  },
  {
    id: "02",
    title: "Creative Development",
    desc: "Our team of experts creates innovative designs and solutions tailored to your unique needs.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Implementation & Integration",
    desc: "We ensure smooth implementation and seamless integration of technologies into your existing ecosystem.",
    icon: Workflow,
  },
  {
    id: "04",
    title: "Sustainable Growth",
    desc: "We provide ongoing support and analysis to ensure your business continues to thrive in the long term.",
    icon: TrendingUp,
  }
];

export default function Process() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  React.useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#020617] py-32 px-4 md:px-20 relative overflow-hidden" id="process">
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
        </div>
        <div className="flex gap-4 justify-end">
          <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
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
          </motion.div>
          
          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-[#c5e17a] px-4 py-1.5 mb-8"
            >
              <span className="text-black text-[13px] font-bold uppercase tracking-widest">
                Work Process
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-heading">
              Proven Process For<br />
              Growing Your Business.
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg font-medium">
              We provide innovative solution that ensure long-term growth & stability, driving your business success.
            </p>
            
            <div className="flex items-center gap-8">
              {/* Main Step Card */}
              <div className="flex-grow min-h-[380px] relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[#6373f2] p-10 rounded-[32px] overflow-hidden group shadow-2xl shadow-[#6373f2]/20 cursor-pointer"
                  >
                    {/* Large Background Number */}
                    <div className="absolute top-2 right-6 text-[120px] font-black text-white/10 select-none leading-none">
                      {steps[currentStep].id}
                    </div>
                    
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-12 shadow-lg">
                      {React.createElement(steps[currentStep].icon, { className: "w-9 h-9 text-[#6373f2]", strokeWidth: 2.5 })}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 font-heading">{steps[currentStep].title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed font-medium">
                      {steps[currentStep].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Vertical Controls */}
              <div className="flex flex-col items-center gap-6">
                <button 
                  onClick={prevStep}
                  className="w-14 h-14 border-2 border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#6373f2] hover:border-white transition-all duration-300 group"
                >
                  <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="w-0.5 h-24 bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>
                <button 
                  onClick={nextStep}
                  className="w-14 h-14 border-2 border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#6373f2] hover:border-white transition-all duration-300 group"
                >
                  <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





