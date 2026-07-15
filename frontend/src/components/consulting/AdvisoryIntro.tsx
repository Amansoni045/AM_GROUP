"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Strategic Financial Planning",
  "Capital Restructuring",
  "Performance Optimization",
  "Investment Advisory",
  "Data-Driven Insights",
  "Future-Proofing Models"
];

export default function AdvisoryIntro() {
  return (
    <section className="bg-[var(--bg-main)] pt-12 pb-24 px-4 md:px-12 relative overflow-hidden" id="intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Guiding <span className="text-[var(--color-accent)]">Sustainable</span> Business Growth
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              At <strong className="text-[var(--text-primary)]">AM Consulting</strong>, we provide end-to-end advisory services across Bahrain and the GCC, helping organizations restructure, mitigate risks, ensure compliance, and embrace digital transformation. With over 45 years of collective expertise, we are your trusted partner for business excellence.
            </p>
            <p>
              Our approach is holistic and data-driven. We start by analyzing your financial landscape, identifying gaps and opportunities, and building strategies that deliver sustainable growth and resilience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-12">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20  }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[var(--bg-alt)] p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[var(--text-primary)]">{principle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
