"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "Branding", "Creativity", "Graphics", "Visuals",
  "Branding", "Creativity", "Graphics", "Visuals",
  "Branding", "Creativity", "Graphics", "Visuals"
];

export default function DesignHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/design-hero.png"
          alt="AM Design Hero"
          className="w-full h-full object-cover opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/60 to-[#020817]" />
      </div>
            
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 md:px-12 text-center py-20 mt-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="inline-block border border-[#6373f2]/50 text-[#6373f2] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[#6373f2]/10 backdrop-blur-sm"
          >
            AM Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 font-heading"
          >
            Creative <br />
            <span className="text-[#d4af37]">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Building meaningful visual identities and digital experiences that help brands stand out and connect with their audiences.
          </motion.p>
        </div>
      </div>

      {/* Marquee at the bottom of hero */}
      <div className="relative z-10 w-full border-y border-white/10 bg-white/5 backdrop-blur-md overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center mx-6 group">
              <span className="text-[#d4af37] mr-6">✦</span>
              <span className="text-white/70 font-bold uppercase tracking-[0.15em] text-sm group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
