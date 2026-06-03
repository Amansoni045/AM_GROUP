"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OutsourcingIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="outsourcing-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-accent)] text-xl font-bold tracking-widest uppercase mb-4"
          >
            Efficiency. Expertise. Excellence.
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading leading-tight"
          >
            Streamline Operations for <span className="text-[var(--color-accent)]">Strategic Growth</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              At <strong className="text-[var(--text-primary)]">AM Consulting</strong>, we help organizations optimize operations by outsourcing non-core functions, enabling teams to focus on strategic growth. Our approach combines skilled talent, technology, and industry best practices to deliver scalable, compliant, and high-performance solutions.
            </p>
            <p>
              We empower organizations to streamline processes, improve efficiency, and enhance operational performance through targeted Corporate Outsourcing solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
