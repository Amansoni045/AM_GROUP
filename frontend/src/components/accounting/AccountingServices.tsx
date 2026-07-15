"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BookOpen, BarChart3, Rewind, CheckSquare, Receipt } from "lucide-react";

const services = [
  {
    title: "CFO Services",
    desc: "We provide affordable CFO services tailored for businesses of all sizes, from startups to small enterprises.",
    icon: TrendingUp,
    href: "/accounting/cfo-services"
  },
  {
    title: "Bookkeeping",
    desc: "We prepare comprehensive financial records for our clients, analyzing invoices, receipts, bills, vouchers.",
    icon: BookOpen,
    href: "/accounting/bookkeeping"
  },
  {
    title: "MIS Reporting",
    desc: "We provide comprehensive MIS reports with detailed financial statements and data-driven recommendations.",
    icon: BarChart3,
    href: "/accounting/mis-reporting"
  },
  {
    title: "Backlog Management",
    desc: "Our team efficiently updates and streamlines your backlog accounts for financial reporting.",
    icon: Rewind,
    href: "/accounting/backlog-management"
  },
  {
    title: "Reconciliation",
    desc: "Our team reconciles accounts to identify and resolve discrepancies, ensuring financial integrity.",
    icon: CheckSquare,
    href: "/accounting/reconciliation"
  },
  {
    title: "VAT Services",
    desc: "Our experts ensure seamless VAT registration, offering expert guidance and support.",
    icon: Receipt,
    href: "/accounting/vat-services"
  }
];

export default function AccountingServices() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="accounting-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Core Expertise</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Our Accounting <span className="text-[var(--color-accent)]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
