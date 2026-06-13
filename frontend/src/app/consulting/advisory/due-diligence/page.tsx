"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Search, BarChart3, Calculator, Landmark, FileCheck, Users2, Briefcase, FileText, Gavel } from "lucide-react";
import Link from "next/link";

const diligenceTypes = [
  {
    id: "01",
    title: "Commercial Due Diligence",
    icon: BarChart3,
    desc: "Assess market position, growth potential, and competitive landscape to ensure strategic decisions are data-backed."
  },
  {
    id: "02",
    title: "Financial Due Diligence",
    icon: Calculator,
    desc: "In-depth assessment of financial statements, cash flow, and earnings quality to validate performance and detect irregularities."
  },
  {
    id: "03",
    title: "Tax Due Diligence",
    icon: Landmark,
    desc: "Evaluate earnings, tax positions, compliance practices, and benchmarking methods to identify potential exposures."
  },
  {
    id: "04",
    title: "Operational Due Diligence",
    icon: Search,
    desc: "Assess operational capabilities, processes, systems, and scalability to identify risks and inefficiencies."
  },
  {
    id: "05",
    title: "Vendor Due Diligence (VDD)",
    icon: Users2,
    desc: "Provide transparent insights into business performance to build investor confidence and streamline sales."
  },
  {
    id: "06",
    title: "Contracts & Closing",
    icon: FileText,
    desc: "Guide you through structuring contract terms, negotiating clauses, and establishing clear closing mechanisms."
  },
  {
    id: "07",
    title: "Regulatory Due Diligence",
    icon: Gavel,
    desc: "Evaluate compliance with laws, licenses, and industry regulations to detect risks involving penalties or liabilities."
  }
];

export default function DueDiligencePage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f4f3ee 0%, #fff 55%, #faf7f0 100%)",
          minHeight: "46vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "7.5rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px", background: "radial-gradient(circle at top left, rgba(180,151,90,0.12) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle at bottom right, rgba(180,151,90,0.08) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: "820px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pill-badge mb-6"
          >
            Transaction Advisory
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Due <span style={{ color: "#B4975A" }}>Diligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#475569", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 0" }}
          >
            Informed decision-making through thorough assessment. integrated insights across acquisitions, divestments, and strategic alliances.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ width: "48px", height: "2px", background: "#B4975A", margin: "1.75rem auto 0", transformOrigin: "center" }}
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#020817] mb-8 font-heading leading-tight">
                Quality and Depth for <span className="text-[var(--color-accent)]">Successful</span> Acquisitions
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  The success of any acquisition depends largely on the quality and depth of due diligence. At AM Consulting, we provide comprehensive services from both buy-side and sell-side perspectives.
                </p>
                <p>
                  Our approach enables informed decision-making through a thorough assessment of the target company’s assets, liabilities, financial position, and overall performance.
                </p>
                <p>
                  Each engagement is tailored to the client’s specific objectives to help maximize value and mitigate risk throughout the transaction lifecycle.
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent-soft)] rounded-[3rem] rotate-3 scale-105 -z-10" />
              <img 
                src="/am-group.webp" 
                alt="Due Diligence Team" 
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diligence Types Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">Comprehensive Diligence Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Integrated financial, commercial, tax, legal, and operational insights to protect your investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diligenceTypes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" />
                <div className="flex justify-between items-start mb-6">
                  <div className="info-card-icon-wrapper mb-0">
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-[var(--color-accent)]/40">{item.id}</span>
                </div>
                <h3 className="info-card-title">
                  {item.title}
                </h3>
                <p className="info-card-desc">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy-side vs Sell-side Section */}
      <section className="py-24 px-4 md:px-12 bg-[var(--bg-alt)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm"
            >
              <Shield className="w-12 h-12 text-[var(--color-accent)] mb-8" />
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 font-heading">Buy-side Due Diligence</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                Helping investors identify potential risks, uncover hidden liabilities, and validate the target's financial and operational performance before acquisition.
              </p>
              <ul className="space-y-4">
                {["Risk Mitigation", "Performance Validation", "Strategic Alignment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-accent-soft)] p-12 rounded-[3rem] border border-[var(--color-accent)]/20 shadow-sm"
            >
              <Briefcase className="w-12 h-12 text-[var(--color-accent)] mb-8" />
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 font-heading">Sell-side (Vendor) Diligence</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Streamlining the transaction process by providing transparent, data-backed insights that build investor confidence and support stronger deal outcomes.
              </p>
              <ul className="space-y-4">
                {["Investor Confidence", "Streamlined Process", "Predictable Outcomes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-3xl p-12 text-center border border-[var(--border-light)] shadow-xl relative overflow-hidden text-[var(--text-primary)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(180,151,90,0.08)_0,transparent_65%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Mitigate Risk, Maximize Value</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
              Our integrated diligence insights help you make informed decisions with confidence.
            </p>
            <Link href="/#consultation" className="btn-primary mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
