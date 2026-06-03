"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Scale, Calculator, RefreshCw, Bell } from "lucide-react";
import Link from "next/link";

const advisoryServices = [
  {
    title: "Mergers & Acquisitions",
    desc: "Strategy, target identification, deal structuring, valuation, negotiation, and diligence",
    icon: Scale,
    href: "/consulting/advisory/mergers-and-acquisitions"
  },
  {
    title: "Business Valuations",
    desc: "Valuation advisory using DCF, Comparable Company, NAV methods, and financial analysis++.",
    icon: Calculator,
    href: "/consulting/advisory/business-valuations"
  },
  {
    title: "Restructuring Services",
    desc: "Business & debt restructuring, working capital optimization, and stakeholder management.",
    icon: RefreshCw,
    href: "/consulting/advisory/restructuring"
  },
  {
    title: "Due Diligence",
    desc: "Due diligence across financial, commercial, tax, operations, and vendors for decisions. AI",
    icon: Bell,
    href: "/consulting/advisory/due-diligence"
  },
];

export default function AdvisoryServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="advisory-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our <span className="text-[var(--color-accent)]">Financial</span> Advisory Services
          </h2>
          <p className="text-[var(--color-accent)] text-2xl font-bold tracking-widest uppercase mb-12">
            Restructure. Invest. Rise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisoryServices.map((service, i) => (
            <Link href={service.href} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
                className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--text-primary)] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn more
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
