"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CFOIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="cfo-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#020817] mb-8 font-heading"
          >
            Customized <span className="text-[#d4af37]">Financial</span> Leadership
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              Our CFO services provide customized financial leadership to support organizational transitions, capital-raising initiatives, and strategic growth.
            </p>
            <p>
              With <strong className="text-[#020817]">AM Consulting</strong>, you gain access to a team with extensive, proven expertise. If you have the vision, we have the capability to bring it to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
