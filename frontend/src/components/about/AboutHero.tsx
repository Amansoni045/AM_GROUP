"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layouts/Header";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col bg-[#040b1e] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/WhatsApp-Image-2025-10-05-at-19.49.59-1.webp"
          alt="AM Group About"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040b1e]/60 via-[#040b1e]/50 to-[#040b1e]/90" />
      </div>
      <Header />
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-12 text-center py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            About AM Group
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 font-heading"
          >
            Driving Innovation &<br />
            <span className="text-[#d4af37]">Growth Globally</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            AM Group is a multidisciplinary firm uniting Consulting, Design, Accounting and Data Analytics under one trusted name across the GCC.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
