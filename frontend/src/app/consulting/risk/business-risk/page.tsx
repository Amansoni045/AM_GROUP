"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Cpu, LayoutDashboard, BarChart3, AlertTriangle, Scale, ShieldAlert } from "lucide-react";
import Link from "next/link";

const frameworkSteps = [
  {
    id: "01",
    title: "Risk Strategy and Appetite",
    desc: "We align risk strategy with organizational goals, define risk appetite, and establish clear success criteria for strategic risk decisions.",
    icon: Target
  },
  {
    id: "02",
    title: "Tailored, Practical Solutions",
    desc: "We conduct comprehensive risk assessments across business units, evaluating profitability impact, loss exposure, and interdependencies.",
    icon: ShieldCheck
  },
  {
    id: "03",
    title: "Technology-Enabled Approach",
    desc: "We develop robust risk reporting structures and governance policies supported by tools that enhance executive oversight.",
    icon: Cpu
  },
  {
    id: "04",
    title: "Regulatory Compliance & Resilience",
    desc: "We create dashboards, define KRIs and KPIs, and set action thresholds to monitor risks effectively and ensure necessary mitigation.",
    icon: LayoutDashboard
  }
];

export default function BusinessRiskManagementPage() {
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
            Risk Advisory
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
            Business Risk <span style={{ color: "#B4975A" }}>Management</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#475569", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 0" }}
          >
            Excellence in Risk Advisory. A top-down approach focused on preparing your organization for threats, hazards, and uncertainties.
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
                Mitigate Risk. <span className="text-[var(--color-accent)]">Maximize</span> Resilience.
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  AM Consulting helps organizations design and implement effective Business Risk Management frameworks. This approach focuses on reducing both the likelihood of risks occurring and the severity of their impact.
                </p>
                <p>
                  We work with you to build a comprehensive framework that targets the most critical strategic risks, evaluates their potential impact, and enables proactive decision-making.
                </p>
              </div>
            </motion.div>
            
            <div className="bg-[#f4f3ee] p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-soft)] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <ShieldAlert className="w-16 h-16 text-[var(--color-accent)] mb-8" />
              <h3 className="text-2xl font-bold text-[#020817] mb-6 font-heading">The Strategic Advantage</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "When implemented properly, Business Risk Management helps reduce loss exposure and strengthens your organization's ability to navigate uncertainties successfully."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Grid */}
      <section className="py-24 px-4 md:px-12 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-heading">Our Framework Approach</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, i) => (
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
                <div className="text-sm font-bold text-[var(--color-accent)] mb-2">{step.id}</div>
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

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-3xl p-12 text-center border border-[var(--border-light)] shadow-xl relative overflow-hidden text-[var(--text-primary)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(180,151,90,0.08)_0,transparent_65%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Secure Your Business Future</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
              Start building a robust risk management framework that empowers your organization to make proactive, informed decisions.
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
