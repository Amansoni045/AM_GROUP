"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ConsultingAbout() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="about-consulting">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block bg-[var(--bg-alt)] text-[var(--text-primary)] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              About AM Consulting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8 font-heading">
              Consulting with <span className="text-[var(--color-accent)]">Purpose</span><br />
              and <span className="text-[var(--color-accent)]">Precision</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                AM Consulting offers a comprehensive suite of management consulting, business advisory and ESG services designed to function as an extensive support of your business. 
              </p>
              <p>
                We provide a range of core and supplementary consulting and advisory services to empower you to make informed decisions and achieve your business goals.
              </p>
            </div>
          </motion.div>

          {/* Right Stats Content */}
          <motion.div
            initial={{ opacity: 0, x: 40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <div className="bg-[var(--bg-alt)] rounded-3xl p-10 border border-gray-100 shadow-md group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-[40px] -z-0 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-[var(--text-primary)] font-heading">20</span>
                  <span className="text-4xl font-bold text-[var(--color-accent)]">+</span>
                </div>
                <div className="w-12 h-1 bg-[var(--color-accent-soft)] rounded mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Years of Experience</h3>
                <p className="text-gray-500 text-sm mt-2">Delivering trusted financial advisory in the GCC.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[var(--bg-alt)] rounded-3xl p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden sm:translate-y-8">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent-soft)] rounded-full blur-[40px] -z-0 group-hover:bg-[var(--color-accent-soft)] transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-[var(--text-primary)] font-heading">105</span>
                  <span className="text-4xl font-bold text-[var(--color-accent)]">+</span>
                </div>
                <div className="w-12 h-1 bg-[var(--color-primary)] rounded mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Projects</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2">Successfully completed across various industries.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
