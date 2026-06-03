"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DigitalIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="digital-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Transform your raw data into <span className="text-[var(--color-accent)]">business insights</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              Digital transformation involves the use of technology to streamline processes, improve efficiency, and enhance experience. We don’t just implement solutions for our clients in GCC, we become your strategic partner in digital evolution.
            </p>
            <p>
              Our mission is to empower organisations to thrive in the digital landscape through comprehensive strategies, unparalleled expertise, and hands-on support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
