"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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

          {/* Right Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center p-12 bg-white rounded-3xl border border-[var(--border-light)] shadow-xl shadow-black/5 relative overflow-hidden h-[350px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-soft)] to-transparent opacity-50 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-[40px] -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent-soft)] rounded-full blur-[40px] -z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <img 
                src="/logo.webp" 
                alt="AM Group Logo" 
                className="h-20 w-auto object-contain mb-6 transition-transform duration-500 hover:scale-105" 
              />
              <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-4" />
              <h3 className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                AM <span className="text-[var(--color-accent)]">Technology</span>
              </h3>
              <p className="font-body text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mt-2">
                Data Intelligence & Digital Transformation
              </p>
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
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-[var(--color-accent)] fill-[#B4975A]" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading">A Legacy of Innovation</h3>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed italic">
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
