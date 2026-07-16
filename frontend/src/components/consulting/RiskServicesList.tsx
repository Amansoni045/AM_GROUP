"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FileText, ShieldAlert, Activity } from "lucide-react";

const riskServices = [
  {
    title: "Policies & Procedures (SOPs)",
    desc: "Governance frameworks, process mapping, departmental policies, and compliance tools to ensure operational consistency.",
    icon: FileText,
    href: "/consulting/risk/policies-procedures"
  },
  {
    title: "Business Risk Management",
    desc: "Enterprise risk frameworks aligned with strategy, appetite, and operational resilience for long-term stability.",
    icon: ShieldAlert,
    href: "/consulting/risk/business-risk"
  },
  {
    title: "Operational Risk Management",
    desc: "Frameworks, mitigation approaches, IT/health/safety risks, and continuity planning to safeguard your business.",
    icon: Activity,
    href: "/consulting/risk/operational-risk"
  },
];

export default function RiskServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="risk-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our <span className="text-[var(--color-accent)]">Risk Advisory</span> Services
          </h2>
          <p className="text-[var(--color-accent)] text-2xl font-bold tracking-widest uppercase mb-12">
            Clarity. Confidence. Compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mobile-2col">
          {riskServices.map((service, i) => (
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
                  Learn More
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
