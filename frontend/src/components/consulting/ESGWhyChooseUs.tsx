"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Rocket, Globe } from "lucide-react";

const reasons = [
  {
    number: "01.",
    title: "Proven Expertise",
    desc: "2500+ valuations, 100% client satisfaction.",
    icon: Award,
  },
  {
    number: "02.",
    title: "Skilled Team",
    desc: "50+ years’ combined experience from top firms.",
    icon: Users,
  },
  {
    number: "03.",
    title: "Strategic Support",
    desc: "Tailored solutions for every business need.",
    icon: Rocket,
  },
  {
    number: "04.",
    title: "Unified Approach",
    desc: "Global standards with strict quality control.",
    icon: Globe,
  }
];

export default function ESGWhyChooseUs() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12 relative overflow-hidden" id="esg-why-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#d4af37] text-white px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Award className="w-4 h-4" /> Why choose us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#020817] font-heading"
          >
            Shaping businesses with <span className="text-[#6373f2]">proven excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group pt-8"
            >
              <div className="absolute top-0 left-0 text-gray-100 text-6xl font-black -z-0 select-none group-hover:text-[#d4af37]/10 transition-colors">
                {reason.number}
              </div>
              <div className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-black/5 group-hover:-translate-y-4 transition-transform duration-500">
                <div className="w-14 h-14 bg-[#f9f9f9] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6373f2] transition-colors">
                  <reason.icon className="w-7 h-7 text-[#020817] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {reason.desc}
                </p>
                <Link href="/about">
                  <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-widest cursor-pointer group-hover:gap-3 transition-all">
                    Learn more <Rocket className="w-3 h-3" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
