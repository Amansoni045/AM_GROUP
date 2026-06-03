"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BookkeepingIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="bookkeeping-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Save time, money & effort by <span className="text-[var(--color-accent)]">outsourcing your books</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              Outsourcing your bookkeeping allows you to focus on growing your business while we manage your financial records with accuracy and care.
            </p>
            <p>
              Our services are designed to improve efficiency, reduce risk, and give you peace of mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
