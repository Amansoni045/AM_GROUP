"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "ESG Materiality Assessment",
  "Compliance & Regulatory Alignment",
  "ESG Reporting & Disclosure",
  "Risk Mitigation & Sustainability Roadmap",
  "ESG Risk Identification & Mapping",
  "Stakeholder Engagement & Communication"
];

export default function ESGIntro() {
  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="esg-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading leading-tight"
          >
            Sustainable Growth Through <br className="hidden md:block" />
            <span className="text-[var(--color-accent)]">Responsible Business</span>: ESG Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              At <strong className="text-[var(--text-primary)]">AM Consulting</strong>, we help businesses integrate sustainability into their strategy through ESG Reporting and ESG Risk Assessment. Our approach ensures compliance, improves stakeholder trust, and drives long-term value creation.
            </p>
            <p>
              We help organizations embed ESG principles into their operations, improve compliance, and build long-term value through targeted strategic roadmaps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-12 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[var(--bg-alt)] p-5 rounded-xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center group-hover:bg-[var(--color-accent-soft)] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] group-hover:text-[var(--text-primary)]" />
              </div>
              <span className="font-bold text-[var(--text-primary)] text-sm md:text-base">{pillar}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
