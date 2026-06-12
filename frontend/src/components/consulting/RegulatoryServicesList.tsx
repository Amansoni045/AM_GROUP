"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FileText, Gavel } from "lucide-react";

const regulatoryServices = [
  {
    title: "Economic Substance Regulation (ESR)",
    desc: "We guide businesses in meeting Bahrain’s ESR requirements through accurate classification, reporting, and full compliance support. Stay compliant, avoid penalties, and strengthen your regulatory standing.",
    icon: FileText,
    href: "/consulting/regulatory/economic-substance"
  },
  {
    title: "AML/CFT Compliance Services",
    desc: "We help organisations meet AML/CFT obligations with risk assessments, policies, and effective controls. Strengthen compliance, reduce risks, and stay aligned with evolving regulations.",
    icon: Gavel,
    href: "/consulting/regulatory/aml-cft"
  },
];

export default function RegulatoryServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="regulatory-list">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our <span className="text-[var(--color-accent)]">Regulatory</span> Advisory Services
          </h2>
          <p className="text-[var(--color-accent)] text-2xl font-bold tracking-widest uppercase mb-12">
            Comply. Strengthen. Succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regulatoryServices.map((service, i) => (
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
