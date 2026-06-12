"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BookOpen, BarChart3, Rewind, CheckSquare, Receipt } from "lucide-react";

const services = [
  {
    title: "CFO Services",
    desc: "We provide affordable CFO services tailored for businesses of all sizes, from startups to small enterprises.",
    icon: TrendingUp,
    color: "#6373f2",
    href: "/accounting/cfo-services"
  },
  {
    title: "Bookkeeping",
    desc: "We prepare comprehensive financial records for our clients, analyzing invoices, receipts, bills, vouchers.",
    icon: BookOpen,
    color: "#059669",
    href: "/accounting/bookkeeping"
  },
  {
    title: "MIS Reporting",
    desc: "We provide comprehensive MIS reports with detailed financial statements and data-driven recommendations.",
    icon: BarChart3,
    color: "#d4af37",
    href: "/accounting/mis-reporting"
  },
  {
    title: "Backlog Management",
    desc: "Our team efficiently updates and streamlines your backlog accounts for financial reporting.",
    icon: Rewind,
    color: "#8b5cf6",
    href: "/accounting/backlog-management"
  },
  {
    title: "Reconciliation",
    desc: "Our team reconciles accounts to identify and resolve discrepancies, ensuring financial integrity.",
    icon: CheckSquare,
    color: "#dc2626",
    href: "/accounting/reconciliation"
  },
  {
    title: "VAT Services",
    desc: "Our experts ensure seamless VAT registration, offering expert guidance and support.",
    icon: Receipt,
    color: "#0ea5e9",
    href: "/accounting/vat-services"
  }
];

export default function AccountingServices() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="accounting-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-[var(--color-primary)]/5">
            Core Expertise
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
              <div className="info-card-top-bar" style={{ background: service.color }} />
              <div
                className="info-card-icon-wrapper"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                <service.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="info-card-title">{service.title}</h3>
              <p className="info-card-desc">{service.desc}</p>
              
              <div className="info-card-link" style={{ color: service.color }}>
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
