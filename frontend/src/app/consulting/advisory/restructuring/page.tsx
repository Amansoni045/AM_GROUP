"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RefreshCw, BarChart, Zap, Handshake, Workflow, Search, Repeat, MessageSquare, Scale, Landmark } from "lucide-react";
import Link from "next/link";

const businessRestructuringAreas = [
  "Working capital optimization",
  "Financial risk analysis",
  "Operational stabilization",
  "Workflow optimization",
  "Stakeholder management",
  "Change implementation guidance",
  "Debt restructuring"
];

const debtRestructuringSteps = [
  {
    icon: Search,
    title: "Assess",
    desc: "We assess the company’s debt position and conduct a detailed review of financial statements, performance and obligations."
  },
  {
    icon: BarChart,
    title: "Review",
    desc: "We review existing financing facilities, including loan structures, interest rates, repayment schedules, and covenant requirements."
  },
  {
    icon: MessageSquare,
    title: "Communicate",
    desc: "We develop a clear communication strategy for discussions with banks and financial institutions to ensure alignment."
  },
  {
    icon: Handshake,
    title: "Negotiate",
    desc: "We support negotiations with lenders to achieve balanced, win-win solutions for all stakeholders involved."
  }
];

export default function RestructuringServicesPage() {
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
            Turnaround Advisory
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
            Restructuring <span style={{ color: "#B4975A" }}>Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#475569", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 0" }}
          >
            Excellence in Financial Analysis. Supporting businesses in Bahrain, Saudi Arabia, Oman, and UAE to adapt, evolve, and thrive in changing economic conditions.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-8 font-heading">
                Adapt. Streamline. <span className="text-[var(--color-accent)]">Recover.</span>
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  AM Consulting supports businesses that have strong market presence but need to adapt to evolving challenges. Our focus is on improving financial stability and streamlining operations.
                </p>
                <p>
                  We work closely with management teams to identify inefficiencies and implement practical strategies that support sustainable recovery and long-term performance.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-[#f4f3ee] p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <Workflow className="w-10 h-10 text-[var(--color-accent)] mb-6" />
                  <h3 className="text-xl font-bold text-[#020817] mb-4 font-heading">Business Restructuring</h3>
                  <p className="text-gray-600 text-sm">Reorganizing models and management structures to enhance efficiency.</p>
                </div>
                <div className="bg-[#f4f3ee] p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <Landmark className="w-10 h-10 text-[var(--color-accent)] mb-6" />
                  <h3 className="text-xl font-bold text-[#020817] mb-4 font-heading">Debt Restructuring</h3>
                  <p className="text-gray-600 text-sm">Negotiating terms and improving cash flow to restore creditworthiness.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--bg-alt)] p-10 md:p-14 rounded-[3rem] text-[var(--text-primary)] border border-[var(--border-light)] shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-soft)] rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-10 font-heading text-[var(--color-accent)]">Key Focus Areas</h3>
              <ul className="space-y-6">
                {businessRestructuringAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-[var(--text-secondary)] font-medium group-hover:text-[var(--color-primary)] transition-colors">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Debt Restructuring Process */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">Our Debt Restructuring Process</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A structured four-step approach to restore financial health and operational continuity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {debtRestructuringSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" />
                <div className="info-card-icon-wrapper">
                  <step.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-bold text-[var(--color-accent)] mb-2">0{i+1}</div>
                <h3 className="info-card-title">
                  {step.title}
                </h3>
                <p className="info-card-desc">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Growth Section */}
      <section className="py-24 px-4 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-[3rem] p-12 md:p-20 relative text-[var(--text-primary)] border border-[var(--border-light)] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading leading-tight">
                  Driving Sustainable <span className="text-[var(--color-accent)]">Value</span> & Recovery
                </h2>
                <div className="w-16 h-1 bg-[var(--color-accent)] mb-8" />
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                  We specialize in helping businesses regain their competitive edge through cost optimization, resource allocation, and strategic redesign.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Cost Structure Analysis",
                    "Strategic Redesign",
                    "Resource Optimization",
                    "Market Resilience"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="font-medium text-sm text-[var(--text-primary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-[var(--color-accent-soft)] rounded-full flex items-center justify-center p-10 border border-[var(--color-accent)]/20">
                  <div className="aspect-square bg-[var(--color-accent-soft)]/20 rounded-full flex items-center justify-center p-10 w-full border border-[var(--color-accent)]/20">
                    <RefreshCw className="w-32 h-32 text-[var(--color-accent)] animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-3xl p-12 text-center border border-[var(--border-light)] shadow-xl relative overflow-hidden text-[var(--text-primary)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(180,151,90,0.08)_0,transparent_65%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Secure Your Financial Future</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
              Speak with our corporate recovery experts in Bahrain to explore your restructuring options.
            </p>
            <Link href="/#consultation" className="btn-primary mx-auto">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
