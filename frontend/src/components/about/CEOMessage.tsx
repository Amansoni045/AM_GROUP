"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CEOMessage() {
  return (
    <section className="bg-[#020817] py-24 px-4 md:px-12 relative overflow-hidden" id="ceo">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6373f2]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Message from the CEO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Leading with Vision,<br /><span className="text-[#d4af37]">Growing with Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              For over <span className="text-[#d4af37] font-bold">25 years</span>, I&apos;ve witnessed the MENA region&apos;s dynamic growth. In 2016, inspired by my father&apos;s entrepreneurial spirit, I founded <span className="text-[#6373f2] font-bold">AM Group</span>&mdash;uniting Consulting, Design, and Accounting under one trusted name.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              At AM, we know every business faces unique challenges. That&apos;s why our multidisciplinary team combines strategy, creativity, and financial expertise to help clients grow, build strong brands, and achieve lasting success.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              What sets us apart is our philosophy: we build <span className="text-[#d4af37] font-bold">partnerships, not transactions</span>&mdash;focusing on open communication, collaboration, and long-term impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, across Bahrain, Saudi Arabia, and Oman, our mission remains clear: to deliver integrated solutions that inspire transformation, drive innovation, and empower businesses for a brighter future.
            </p>
            <div className="pt-4">
              <p className="text-white font-bold text-lg font-heading">Ravi Mehta</p>
              <p className="text-[#d4af37] text-sm font-medium">Chief Executive Officer</p>
            </div>
          </motion.div>

          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center w-full backdrop-blur-sm">
              <div className="w-32 h-32 rounded-full border-4 border-[#d4af37]/40 mx-auto mb-6 overflow-hidden bg-[#d4af37]/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-[#d4af37]">RM</span>
              </div>
              <h3 className="text-white text-xl font-bold font-heading mb-1">Ravi Mehta</h3>
              <p className="text-[#d4af37] text-sm font-medium mb-6">Chief Executive Officer</p>
              <div className="w-12 h-0.5 bg-[#d4af37]/50 mx-auto mb-6" />
              <blockquote className="text-gray-400 text-sm leading-relaxed italic">
                &ldquo;We build partnerships, not transactions, focusing on open communication, collaboration, and long-term impact.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-2xl p-8 text-center"
        >
          <p className="text-[#d4af37] text-lg md:text-xl font-medium italic">
            &ldquo;We build partnerships, not transactions, focusing on open communication, collaboration, and long-term impact.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
