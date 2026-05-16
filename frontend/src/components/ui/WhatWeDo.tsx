"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe2, BarChart3, Palette, Briefcase, LineChart } from "lucide-react";

const companies = [
  { name: "AM Consulting", desc: "Strategic advisory & business growth solutions", color: "#6373f2", Icon: BarChart3, href: "/consulting" },
  { name: "AM Accounting", desc: "Financial clarity & compliance expertise", color: "#059669", Icon: Briefcase, href: "/accounting" },
  { name: "AM Analytiks", desc: "Data-driven insights & digital transformation", color: "#dc2626", Icon: LineChart, href: "/analytiks" },
  { name: "AM Design", desc: "Creative branding & visual identity excellence", color: "#d4af37", Icon: Palette, href: "/design" },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#f9f9f9] py-28 px-4 md:px-12 overflow-hidden" id="what-we-do">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#020817] mb-4 font-heading">What we do?</h2>
          <p className="text-[#6373f2] text-xl font-semibold mb-6">One Partner. Endless Possibilities.</p>
          {/* Gold divider */}
          <div className="w-20 h-1 bg-[#d4af37] rounded mx-auto" />
        </motion.div>

        {/* Two-column text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
            At AM Group, we bring together{" "}
            <span className="font-bold text-[#020817]">Consulting, Advisory, Accounting, Design, Social Media Management, and Data Automation and Analytics</span>{" "}
            to deliver integrated solutions that help businesses thrive in today&#39;s competitive landscape. Our multidisciplinary expertise ensures that clients receive strategic guidance, creative branding, and financial clarity&#8212;all under one trusted name.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
            We work closely with entrepreneurs, SMEs, and large organizations across the GCC, providing end-to-end support that covers corporate advisory, market entry, compliance, and performance improvement.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            With a commitment to excellence, innovation, and measurable results, we transform challenges into opportunities and ideas into impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companies.map((company, i) => (
            <Link href={company.href} key={i} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                whileHover={{ y: -4, 
                  boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                  transition: { duration: 0.2, delay: 0 }
                }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-black/5 cursor-pointer group relative overflow-hidden h-full flex flex-col"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: company.color }} />
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl" style={{ background: `${company.color}15` }}>
                  <company.Icon className="w-7 h-7" style={{ color: company.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-2 font-heading">{company.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{company.desc}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-sm" style={{ color: company.color }}>
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Global Firm Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#020817] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6373f2]/10 rounded-full blur-[120px] -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px] -z-0" />

          <div className="relative z-10 flex-shrink-0">
            <div className="w-20 h-20 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center border border-[#d4af37]/30">
              <Globe2 className="w-10 h-10 text-[#d4af37]" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
              Global Firm with Local Expertise
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              We combine international standards with in-depth regional knowledge—helping businesses succeed in <strong className="text-white">Bahrain, Saudi Arabia,</strong> and across the GCC. Our deep roots in the region give us an unparalleled understanding of local market dynamics.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <div className="flex gap-3">
              {["BH", "KSA", "OM"].map((country) => (
                <div key={country} className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white font-bold text-sm">
                  {country}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
