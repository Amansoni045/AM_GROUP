"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Leaf, Shield, Users, LineChart } from "lucide-react";

const services = [
  {
    title: "Advisory Services",
    desc: "We guide businesses through valuations, restructuring, due diligence, and feasibility studies to support informed decision-making for startups and established organizations.",
    icon: TrendingUp,
    href: "/consulting/advisory"
  },
  {
    title: "ESG Services",
    desc: "We support businesses in advancing their sustainability goals through ESG reporting, risk assessments, and certification support aligned with global standards.",
    icon: Leaf,
    href: "/consulting/esg"
  },
  {
    title: "Regulatory Services",
    desc: "We assist businesses in meeting regulatory requirements through expert guidance on ESR, AML, and risk management frameworks.",
    icon: Shield,
    href: "/consulting/regulatory"
  },
  {
    title: "Corporate Outsourcing",
    desc: "We enable businesses to streamline operations through professional HR, payroll, and taxation solutions for efficient workforce management.",
    icon: Users,
    href: "/consulting/outsourcing"
  },
  {
    title: "Business Risk Services",
    desc: "We help businesses strengthen internal controls through audits, governance frameworks, and risk analytics to enhance compliance and operational efficiency.",
    icon: LineChart,
    href: "/consulting/risk"
  }
];

export default function ConsultingServices() {
  return (
    <section className="bg-[var(--bg-alt)] pt-16 pb-8 px-4 md:px-12" id="consulting-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Core Expertise</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Our Consulting <span className="text-[var(--color-accent)]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link key={i} href={service.href} className="block h-full" target="_blank" rel="noopener noreferrer">
              <motion.div
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
              </motion.div>
            </Link>
          ))}
          
          {/* CTA Card */}
          <Link href="/#consultation" className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="info-card group text-center h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, var(--bg-surface) 0%, rgba(180, 151, 90, 0.08) 100%)",
                borderColor: "var(--color-accent)",
                borderWidth: "1.5px",
                color: "var(--text-primary)",
                boxShadow: "0 10px 30px rgba(180, 151, 90, 0.08)",
              }}
            >
              <div className="info-card-top-bar" style={{ background: "var(--color-accent)" }} />
              <div>
                <div
                  className="info-card-icon-wrapper"
                  style={{
                    margin: "0 auto 1.5rem",
                    background: "rgba(180, 151, 90, 0.15)",
                    color: "var(--color-accent)",
                  }}
                >
                  <ArrowUpRight className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="info-card-title text-lg">Ready to transform your business?</h3>
                <p className="info-card-desc mb-8">Book a free consultation with our advisory experts today.</p>
              </div>
              <div className="info-card-link justify-center mt-auto" style={{ color: "var(--color-accent)" }}>
                Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
