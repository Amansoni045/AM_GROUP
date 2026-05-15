"use client";
import React from "react";
import { motion } from "framer-motion";

const clients = [
  "9 Origins Coffee", "All Care Pet Clinic", "Ibtisama Dental Clinic",
  "Al Rawabi School", "GFH", "AM Terminale", "Viacloud",
  "CNT", "Life Co.", "Saud Bahwan", "Oman Tel", "Haji Hassan",
  "RWAQ", "MOJ Oman", "Supreme Council", "Elm", "Nama Group"
];

export default function Clients() {
  const row1 = [...clients, ...clients, ...clients];
  const row2 = [...[...clients].reverse(), ...[...clients].reverse(), ...clients];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="clients">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-3 font-heading">
            Join Over <span className="text-[#6373f2]">200+</span> Companies with AM Group
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-4" />
        </motion.div>
      </div>

      {/* Row 1 - Forward */}
      <div className="relative flex flex-col gap-0">
        <div className="border-y border-gray-200 overflow-hidden">
          <div className="flex animate-marquee border-l border-gray-200">
            {row1.map((client, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 w-[200px] border-r border-gray-200 px-6 py-6 flex flex-col items-center justify-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-400 h-[110px] group"
              >
                {/* Placeholder logo icon */}
                <div className="w-8 h-8 bg-gray-200 rounded-lg group-hover:bg-[#6373f2] transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 group-hover:text-[#020817] text-center uppercase transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="border-b border-gray-200 overflow-hidden">
          <div className="flex animate-marquee-reverse border-l border-gray-200">
            {row2.map((client, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 w-[200px] border-r border-gray-200 px-6 py-6 flex flex-col items-center justify-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-400 h-[110px] group"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-lg group-hover:bg-[#d4af37] transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 group-hover:text-[#020817] text-center uppercase transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
