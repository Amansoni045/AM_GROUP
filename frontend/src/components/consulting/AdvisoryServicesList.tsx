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
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="advisory-list">
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
            <Link href={service.href} key={i} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" />
                <div className="info-card-icon-wrapper">
                  <service.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="info-card-title">{service.title}</h3>
                <p className="info-card-desc">{service.desc}</p>
                <div className="info-card-link">
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
