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
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24 overflow-hidden" id="mission">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="flex flex-col gap-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="/am-group.webp" 
                  alt="AM Group Team" 
                  className="w-full h-64 md:h-80 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg font-heading">
                  The AM Group Team
                </div>
              </div>

              {/* Skills card below image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)]/60">{skill.label}</span>
                        <span className="text-xs font-black text-[var(--color-accent)]">{skill.value}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.1 }}
                          className="h-full bg-[var(--color-primary)] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Mission + Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 lg:mt-0"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">Get To Know Us</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-10 font-heading">
              Driving Innovation and<br />
              <span className="text-[var(--color-accent)]">Growth Globally</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="w-10 h-10 bg-[var(--color-accent-soft)] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-heading">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To deliver tailored consulting, design, accounting and technical solutions that foster sustainable growth, operational efficiency, and market relevance for businesses across the Gulf region.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="w-10 h-10 bg-[var(--color-accent-soft)] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-heading">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To be the leading consultancy in Bahrain, Saudi Arabia, Oman, and UAE, empowering businesses with strategy, creative design, and financial expertise while upholding innovation, integrity and excellence.
                </p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/#consultation"
              className="inline-flex items-center gap-3 bg-[var(--bg-alt)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-accent-soft)] transition-all duration-300 group"
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
