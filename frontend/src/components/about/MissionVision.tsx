"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = [
  { label: "Strategic Advisory", value: 100 },
  { label: "Creative Design", value: 100 },
  { label: "Financial Expertise", value: 100 },
];

export default function MissionVision() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12 overflow-hidden" id="mission">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/am-group.webp" alt="AM Group Team" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/50 to-transparent rounded-3xl" />
            </div>
            {/* Skills card overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
            >
              {skills.map((skill, i) => (
                <div key={i} className={i < skills.length - 1 ? "mb-4" : ""}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#020817]">{skill.label}</span>
                    <span className="text-sm font-bold text-[#d4af37]">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                      className="h-full bg-[#d4af37] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Mission + Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-8 lg:mt-0"
          >
            <div className="inline-block bg-[#020817] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Get To Know Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#020817] leading-tight mb-10 font-heading">
              Driving Innovation and<br />
              <span className="text-[#6373f2]">Growth Globally</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="w-10 h-10 bg-[#6373f2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#6373f2]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#020817] mb-2 font-heading">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To deliver tailored consulting, design, and accounting solutions that foster sustainable growth, operational efficiency, and market relevance for businesses across the Gulf region.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="w-10 h-10 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#020817] mb-2 font-heading">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To be the leading consultancy in Bahrain, Saudi Arabia, and Oman, empowering businesses with strategy, creative design, and financial expertise while upholding innovation, integrity and excellence.
                </p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/#consultation"
              className="inline-flex items-center gap-3 bg-[#020817] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6373f2] transition-all duration-300 group"
            >
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
