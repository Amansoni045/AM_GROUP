"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const companies = [
  {
    name: "AM Consulting",
    href: "/consulting",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    desc: "We provide business restructuring, financial planning, tax advisory, mergers and acquisitions, and risk management solutions, helping organizations enhance performance, improve efficiency, and safeguard against cybersecurity threats.",
    color: "#6373f2",
  },
  {
    name: "AM Accounting",
    href: "/accounting",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Our experts offer tax planning, financial reporting, audits, and CFO support, empowering businesses to achieve growth, maintain compliance, enhance efficiency, and make informed financial decisions with confidence and clarity.",
    color: "#059669",
  },
  {
    name: "AM Design",
    href: "/design",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    desc: "We offer graphic design, web design, and branding solutions that combine creativity and strategy to build strong visual identities, elevate brand presence, and deliver consistent, impactful results.",
    color: "#d4af37",
  },
  {
    name: "AM Data Analytiks",
    href: "/analytiks",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
    desc: "We deliver data strategy, predictive modeling, visualization, and business intelligence services that transform information into insights, drive smart decisions, and help organizations achieve measurable growth.",
    color: "#dc2626",
  },
];

export default function CompanyCards() {
  return (
    <section className="bg-white py-24 px-4 md:px-12" id="companies">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#6373f2]/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[#6373f2] text-sm font-bold uppercase tracking-widest">Our Companies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading">
            One Group. Four <span className="text-[#6373f2]">Powerful</span> Companies.
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <Link href={company.href} key={i} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.2, delay: 0 } }}
                className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: company.color }} />
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: `${company.color}15` }}
                >
                  <svg className="w-7 h-7" fill="none" stroke={company.color} strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={company.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">{company.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{company.desc}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-sm" style={{ color: company.color }}>
                  Read more
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
