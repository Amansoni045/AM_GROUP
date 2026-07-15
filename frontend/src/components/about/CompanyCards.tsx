"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Scale, Palette, Cpu } from "lucide-react";
import Link from "next/link";

const companies = [
  {
    name: "AM Consulting",
    href: "/consulting",
    icon: Compass,
    desc: "We provide business restructuring, financial planning, tax advisory, mergers and acquisitions, and risk management solutions, helping organizations enhance performance, improve efficiency, and safeguard against cybersecurity threats.",
    color: "var(--color-accent)",
  },
  {
    name: "AM Accounting",
    href: "/accounting",
    icon: Scale,
    desc: "Our experts offer tax planning, financial reporting, audits, and CFO support, empowering businesses to achieve growth, maintain compliance, enhance efficiency, and make informed financial decisions with confidence and clarity.",
    color: "var(--color-accent)",
  },
  {
    name: "AM Design",
    href: "/design",
    icon: Palette,
    desc: "We offer graphic design, web design, and branding solutions that combine creativity and strategy to build strong visual identities, elevate brand presence, and deliver consistent, impactful results.",
    color: "var(--color-accent)",
  },
  {
    name: "AM Technology",
    href: "/technology",
    icon: Cpu,
    desc: "We deliver data strategy, predictive modeling, visualization, and business intelligence services that transform information into insights, drive smart decisions, and help organizations achieve measurable growth.",
    color: "var(--color-accent)",
  },
];

export default function CompanyCards() {
  return (
    <section style={{ background: "var(--bg-alt)" }} className="compact-section px-4 md:px-12 py-24" id="companies">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Our Companies</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            One Group. Four <span className="text-[var(--color-accent)]">Powerful</span> Companies.
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <Link href={company.href} key={i} className="block">
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
                  <company.icon className="w-7 h-7" strokeWidth={1.5} />
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
