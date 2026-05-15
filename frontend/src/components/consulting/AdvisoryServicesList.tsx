"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Scale, Calculator, RefreshCw, Bell } from "lucide-react";

const advisoryServices = [
  {
    title: "Mergers & Acquisitions",
    desc: "Strategy, target identification, deal structuring, valuation, negotiation, and diligence",
    icon: Scale,
  },
  {
    title: "Business Valuations",
    desc: "Valuation advisory using DCF, Comparable Company, NAV methods, and financial analysis++.",
    icon: Calculator,
  },
  {
    title: "Restructuring Services",
    desc: "Business & debt restructuring, working capital optimization, and stakeholder management.",
    icon: RefreshCw,
  },
  {
    title: "Due Diligence",
    desc: "Due diligence across financial, commercial, tax, operations, and vendors for decisions. AI",
    icon: Bell,
  },
];

export default function AdvisoryServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="advisory-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#6373f2]">Financial</span> Advisory Services
          </h2>
          <p className="text-[#d4af37] text-2xl font-bold tracking-widest uppercase mb-12">
            Restructure. Invest. Rise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisoryServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2, delay: 0 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#d4af37] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[#6373f2] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-[#d4af37] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
