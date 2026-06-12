"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, ShieldCheck, LineChart, Database, AlertTriangle, Zap } from "lucide-react";

const services = [
  {
    title: "Predictive & Big Data Analytics",
    desc: "We empower organizations with predictive insights using advanced data models and AI-driven analytics—helping optimize performance and forecast trends.",
    icon: Brain,
    color: "#6373f2",
    href: "/technology/predictive-and-big-data-analytics"
  },
  {
    title: "GRC Solutions & Services",
    desc: "We provide integrated governance, risk, and compliance frameworks—ensuring effective controls, regulatory adherence, and transparency.",
    icon: ShieldCheck,
    color: "#059669",
    href: "/technology/grc-solutions-and-services"
  },
  {
    title: "Operations & Finance Analytics",
    desc: "We optimize financial and operational efficiency through deep data insights, process automation, and performance analysis.",
    icon: LineChart,
    color: "#d4af37",
    href: "/technology/operations-and-finance-analytics"
  },
  {
    title: "Data Analytics",
    desc: "We help clients in creating data strategies, through master data management, assisting in cleansing to enable obtaining value from data.",
    icon: Database,
    color: "#8b5cf6",
    href: "/technology/data-analytics"
  },
  {
    title: "Fraud Management",
    desc: "We strengthen your business against risks with intelligent fraud detection, anomaly analysis, and preventive strategies.",
    icon: AlertTriangle,
    color: "#dc2626",
    href: "/technology/fraud-management"
  },
  {
    title: "Digital Transformation",
    desc: "We help clients in developing and implementing the digital transformation strategy especially technology led change and transformation.",
    icon: Zap,
    color: "#0ea5e9",
    href: "/technology/digital-transformation"
  }
];

export default function TechnologyServices() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="technology-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Data Intelligence</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Our Data <span className="text-[var(--color-accent)]">Solutions</span>
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
