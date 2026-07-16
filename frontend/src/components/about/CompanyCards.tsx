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
    color: "#704b81",
  },
  {
    name: "AM Accounting",
    href: "/accounting",
    icon: Scale,
    desc: "Our experts offer tax planning, financial reporting, audits, and CFO support, empowering businesses to achieve growth, maintain compliance, enhance efficiency, and make informed financial decisions with confidence and clarity.",
    color: "#016abf",
  },
  {
    name: "AM Design",
    href: "/design",
    icon: Palette,
    desc: "We offer graphic design, web design, and branding solutions that combine creativity and strategy to build strong visual identities, elevate brand presence, and deliver consistent, impactful results.",
    color: "#db4319",
  },
  {
    name: "AM Technology",
    href: "/technology",
    icon: Cpu,
    desc: "We deliver data strategy, predictive modeling, visualization, and business intelligence services that transform information into insights, drive smart decisions, and help organizations achieve measurable growth.",
    color: "#0d9488",
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {companies.map((company, i) => (
            <Link href={company.href} key={i} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="info-card group p-4 md:p-6"
                style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div className="info-card-top-bar" style={{ background: company.color }} />
                  <div
                    className="info-card-icon-wrapper w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-5"
                    style={{ background: "var(--color-accent-soft)", color: company.color }}
                  >
                    <company.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="info-card-title text-base md:text-xl mb-1 md:mb-3">{company.name}</h3>
                  <p className="info-card-desc text-xs md:text-sm line-clamp-3 md:line-clamp-none">{company.desc}</p>
                </div>
                <div className="info-card-link text-xs md:text-sm mt-3 md:mt-5" style={{ color: company.color }}>
                  Read more
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
