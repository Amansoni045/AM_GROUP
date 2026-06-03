"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DataAnalyticsIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="data-analytics-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Refining Capabilities in <span className="text-[var(--color-accent)]">Digital and Converge Space</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              We help clients in creating data strategies, through master data management, assisting in cleansing to enable obtaining value from data and finally unlocking this through analytics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
