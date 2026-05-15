"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BacklogIntro() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="backlog-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#020817] mb-8 font-heading"
          >
            How Is an <span className="text-[#d4af37]">Accounting Backlog</span> Completed?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            <p>
              <strong className="text-[#020817]">AM Accounting Services</strong> understands that, at times, businesses may be unable to maintain proper books of accounts or financial reports over extended periods. This can create challenges and hinder business progress. Maintaining accurate and up-to-date accounting records is a fundamental requirement for the smooth execution of business operations.
            </p>
            <p>
              Our experienced accountants assist businesses in catching up on accounting backlogs by updating, preparing, and reconciling outstanding accounts. We work systematically to restore accurate financial records, ensure compliance, and provide clarity for informed decision-making.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
