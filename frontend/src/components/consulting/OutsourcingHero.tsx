"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OutsourcingHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/slider-1.webp"
          alt="Corporate Outsourcing"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#020817]/70 to-[#020817]" />
      </div>
            <div className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-12 text-center py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="inline-block border border-[#6373f2]/50 text-[#6373f2] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[#6373f2]/10 backdrop-blur-sm"
          >
            Excellence in Consulting
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 font-heading"
          >
            Corporate <br className="hidden md:block" />
            <span className="text-[#d4af37]">Outsourcing</span>
          </motion.h1>
          <div className="w-20 h-1 bg-[#6373f2] mx-auto rounded-full shadow-[0_0_15px_rgba(99,115,242,0.5)]" />
        </div>
      </div>
    </section>
  );
}
