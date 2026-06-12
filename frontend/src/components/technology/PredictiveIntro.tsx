"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PredictiveIntro() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="predictive-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Access <span className="text-[var(--color-accent)]">meaningful data</span> to deliver key insights
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              In a fast-paced demanding world, there has been a phenomenal growth seen in structured and unstructured data, data systems acquired from multiple sources which cater to the requirements of the businesses so as to derive insights faster & keep up with the momentum.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
