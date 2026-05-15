"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SocialIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="social-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#020817] mb-8 font-heading"
          >
            Connect. Engage. <span className="text-[#d4af37]">Grow.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              <strong className="text-[#020817]">AM Design</strong> helps brands build meaningful presence across leading platforms.
            </p>
            <p>
              We create targeted content, manage campaigns, and increase engagement with purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
