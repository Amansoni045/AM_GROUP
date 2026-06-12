"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Provides real-time performance judgements",
  "Helps in performance tracking and goal alignment",
  "Helps in data-driven decision-making",
  "Compares projections vs. reality",
  "Increased Accountability",
  "Increased Transparency"
];

export default function MISIntro() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="mis-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Customized <span className="text-[var(--color-accent)]">MIS Reporting</span> Tailored to Your Needs
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              We specialize in providing Management Information System (MIS) reporting services across various business disciplines. We analyze and understand our clients’ business needs to design customized MIS reports tailored to their requirements.
            </p>
            <p>
              Our MIS reports help organizations organize operations, track progress, and gain timely, accurate insights for informed decision-making and performance optimization.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-heading">
              Benefits of MIS Report
            </h3>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 shadow-sm bg-[var(--bg-alt)] hover:bg-white hover:shadow-md transition-all group"
              >
                <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[var(--text-primary)]">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
