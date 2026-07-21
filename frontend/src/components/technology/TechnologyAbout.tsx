"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TechnologyAbout() {
  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="about-technology">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="eyebrow">About AM Technology</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8 font-heading">
              Unlocking Value <br />
              Through <span className="text-[var(--color-accent)]">Data Intelligence</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                AM Technology is a specialized data analytics and intelligence firm under the AM Group, delivering Big Data Analytics, Business Intelligence, and Risk Assurance solutions to organizations across industries.
              </p>
              <p>
                We help businesses transform complex data into meaningful insights that support informed decision-making and sustainable growth, leveraging advanced platforms.
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="p-8 md:p-10 bg-white rounded-3xl border border-[var(--border-light)] shadow-xl shadow-black/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-soft)] to-transparent opacity-50 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-[40px] -z-0" />

            <div className="relative z-10">
              <p className="font-body text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase font-bold mb-6">Why AM Technology</p>
              <div className="space-y-6">
                {[
                  { t: "Actionable Insight", d: "Complex data turned into decisions you can act on." },
                  { t: "Smart Automation", d: "Efficiency through integration and intelligent workflows." },
                  { t: "Assured Governance", d: "Risk, compliance and reporting you can rely on." },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] leading-tight">{item.t}</h3>
                      <p className="font-body text-sm text-[var(--text-secondary)] mt-0.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Memorial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[var(--bg-alt)] rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[80px]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-4 border-[var(--color-accent)] p-2 mb-6">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden grayscale">
                   {/* Placeholder for memorial image - typically provided by user but we use a themed representation if not available */}
                   <div className="w-full h-full flex items-center justify-center bg-[var(--bg-alt)]">
                      <span className="text-[var(--text-primary)] font-bold text-4xl">NS</span>
                   </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-1">In Loving Memory</p>
                <h4 className="text-xl font-bold text-[var(--text-primary)]">Mr. Nishith Seth</h4>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="mb-6">
                <div className="w-10 h-[2px] bg-[var(--color-accent)] mb-4" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading">A Legacy of Innovation</h3>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  AM Technology was founded in loving memory of Mr. Nishith Seth, a visionary entrepreneur and a close friend of our CEO, Mr. Ravi Mehta. This initiative carries forward the inspiration and legacy of AM Technology, serving as a tribute to Nishith’s vision of innovation, excellence, and trust.
                </p>
                <p>
                  Every solution we build reflects these enduring values, ensuring that his dream of creating impactful, data-driven solutions continues to inspire, empower, and shape the future for generations to come.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
