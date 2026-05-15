"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Layers, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Our focus is on collaboration and tailored strategies, ensuring every solution aligns seamlessly with your business goals.",
  },
  {
    icon: Layers,
    title: "Integrated Solutions",
    desc: "From consulting and design to accounting, we offer a complete suite of services under one roof—saving you time and resources.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "We deliver measurable impact by helping businesses achieve sustainable growth, operational efficiency, and long-term success.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Risk Expertise",
    desc: "We help businesses navigate regulatory requirements and manage risks effectively, ensuring compliance and resilience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28 px-4 md:px-12 overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-block bg-[#020817] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            WHY CHOOSE US?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#020817] leading-tight font-heading">
            Smart Strategies,<br />
            <span className="text-[#6373f2]">Real Results.</span>
          </h2>
        </motion.div>

        {/* 3-Col Grid Layout matching the reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Column 1: First 2 reasons */}
          <div className="flex flex-col gap-6">
            {reasons.slice(0, 2).map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2, delay: 0 }
                }}
                className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer"
              >
                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />
                <div className="w-14 h-14 bg-[#6373f2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6373f2] transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-[#6373f2] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Center CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#020817] rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-[#020817]/30"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#6373f2]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8">
                WHY CHOOSE US?
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8 font-heading">
                Smart Strategies,<br />Real Results.
              </h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                We go beyond advice – we deliver measurable impact. Every solution we design is rooted in strategic thinking, innovation, and a deep understanding of our clients&#39; unique needs.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#consultation"
              className="relative z-10 inline-flex items-center gap-3 bg-[#6373f2] text-white px-8 py-4 rounded-xl font-bold w-full justify-center group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Column 3: Last 2 reasons */}
          <div className="flex flex-col gap-6">
            {reasons.slice(2).map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2, delay: 0 }
                }}
                className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer"
              >
                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />
                <div className="w-14 h-14 bg-[#6373f2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6373f2] transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-[#6373f2] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
