"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SEOIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="seo-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#020817] mb-8 font-heading"
          >
            Be Seen. Be Found. <span className="text-[#d4af37]">Be Chosen.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              We help brands improve visibility through search-engine optimization that increases organic traffic and ranking over time, without shortcuts or spam tactics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
