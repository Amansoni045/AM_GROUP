"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ReconciliationIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="reconciliation-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Accurate and Verifiable <span className="text-[var(--color-accent)]">Financial Records</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              At <strong className="text-[var(--text-primary)]">AM Accounting Service</strong> we make sure that your financial records are both accurate and verifiable, with thorough reconciliation processes that are backed by clear documentation and reliable oversight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
