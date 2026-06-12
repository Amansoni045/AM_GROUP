"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BrandingIntro() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="branding-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Create Identity. <span className="text-[var(--color-accent)]">Build Recognition.</span> Inspire Trust.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              At <strong className="text-[var(--text-primary)]">AM Design</strong>, we build brand identities that communicate who you are and what you stand for.
            </p>
            <p>
              From logo design to full brand systems, we craft visual identities that connect with your audience and leave a lasting impression.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
