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
    color: "var(--color-accent)",
  },
  {
    name: "AM Accounting",
    href: "/accounting",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Our experts offer tax planning, financial reporting, audits, and CFO support, empowering businesses to achieve growth, maintain compliance, enhance efficiency, and make informed financial decisions with confidence and clarity.",
    color: "var(--color-accent)",
  },
  {
    name: "AM Design",
    href: "/design",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    desc: "We offer graphic design, web design, and branding solutions that combine creativity and strategy to build strong visual identities, elevate brand presence, and deliver consistent, impactful results.",
    color: "var(--color-accent)",
  },
  {
    name: "AM Technology",
    href: "/technology",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
    desc: "We deliver data strategy, predictive modeling, visualization, and business intelligence services that transform information into insights, drive smart decisions, and help organizations achieve measurable growth.",
    color: "var(--color-accent)",
  },
];

export default function CompanyCards() {
  return (
    <section style={{ background: "var(--bg-alt)" }} className="py-24 px-4 md:px-12" id="companies">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[var(--color-accent-soft)] px-4 py-1.5 rounded-full mb-4">
            <span className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-widest">Our Companies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            One Group. Four <span className="text-[var(--color-accent)]">Powerful</span> Companies.
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <Link href={company.href} key={i} className="block" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" style={{ background: company.color }} />
                <div
                  className="info-card-icon-wrapper"
                  style={{ background: "var(--color-accent-soft)", color: company.color }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={company.icon} />
                  </svg>
                </div>
                <h3 className="info-card-title">{company.name}</h3>
                <p className="info-card-desc">{company.desc}</p>
                <div className="info-card-link" style={{ color: company.color }}>
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
