"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GRCIntro() {
  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="grc-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Strengthen your core values & <span className="text-[var(--color-accent)]">align structure</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              We strengthen your core values, align your organization structure and infuse a culture that supports and sustains well in every season.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
