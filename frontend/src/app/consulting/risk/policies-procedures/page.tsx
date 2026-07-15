"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, ClipboardList, Settings, Search, Users, BarChart3, GraduationCap, Map, Workflow, Gavel, Briefcase, HeartPulse, ShieldAlert, Database, Lock, RotateCcw } from "lucide-react";
import Link from "next/link";

const helpSteps = [
  {
    id: "01",
    title: "Governance Framework Development",
    desc: "We design governance frameworks that strengthen internal controls, align with strategic goals, and support informed decision-making while maintaining compliance.",
    icon: ShieldCheck
  },
  {
    id: "02",
    title: "Departmental & Functional Policies",
    desc: "We create structured departmental and functional policies that establish clear standards, streamline operations, and ensure consistent, compliant practices.",
    icon: FileText
  },
  {
    id: "03",
    title: "Process Management Tools",
    desc: "We recommend and implement tailored process management tools and technologies that enhance efficiency and simplify workflows.",
    icon: Settings
  },
  {
    id: "04",
    title: "Business Process Mapping",
    desc: "We develop detailed process maps and operating procedures defining workflows and responsibilities, ensuring efficient task execution.",
    icon: Map
  },
  {
    id: "05",
    title: "Assessment & Improvement",
    desc: "We conduct thorough assessments to identify improvement opportunities and implement best practices for long-term competitiveness.",
    icon: Search
  },
  {
    id: "06",
    title: "Setup & Training",
    desc: "We establish effective process management functions and train stakeholders, enabling your team to sustain continuous improvement.",
    icon: GraduationCap
  }
];

const keyPolicies = [
  { name: "Purchasing Policy", icon: Briefcase },
  { name: "HR Policy", icon: Users },
  { name: "Sales Policy", icon: BarChart3 },
  { name: "Accounting Policy", icon: ClipboardList },
  { name: "Delegation of Authority", icon: Gavel },
  { name: "Health and Safety Policy", icon: HeartPulse },
  { name: "Whistle blowing Policy", icon: ShieldAlert },
  { name: "Risk Management Policy", icon: ShieldCheck },
  { name: "IT Policy", icon: Database },
  { name: "Retention Policy", icon: RotateCcw }
];

export default function PoliciesProceduresPage() {
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
            Policies & <span style={{ color: "#B4975A" }}>Procedures</span> (SOPs)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#475569", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 0" }}
          >
            Strong Substance. Stronger Standing. Building a clear roadmap for day-to-day operations and organizational success.
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
                The Backbone of a <span className="text-[var(--color-accent)]">Successful</span> Organization
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At AM Consulting, we recognize that well-defined policies and procedures are the foundation for consistent and efficient operations.
                </p>
                <p>
                  By building policies that reflect your organization’s goals, we help you operate efficiently, remain compliant, and establish a foundation for long-term success.
                </p>
                <p>
                  Our tailored approach ensures that your roadmap is grounded in rigorous analysis and informed by data-driven insights.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#f4f3ee] p-10 rounded-3xl border border-gray-100 shadow-xl shadow-black/5"
            >
              <h3 className="text-2xl font-bold text-[#020817] mb-8 font-heading">Our Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "Corporate Governance Frameworks",
                  "Standard Operating Procedures (SOPs)",
                  "Compliance & Ethics Manuals",
                  "Financial Control Policies",
                  "Risk Management Guidelines",
                  "Operations & Workflow Manuals"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">How We Can Help</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              End-to-end support in developing and implementing robust governance frameworks and operational procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpSteps.map((step, i) => (
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

      {/* Key Policies Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-[3rem] p-12 md:p-20 text-[var(--text-primary)] border border-[var(--border-light)] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent-soft)] rounded-full blur-[100px] -z-0" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-16 font-heading text-center">Type of Key <span className="text-[var(--color-accent)]">Policies</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {keyPolicies.map((policy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-[var(--border-light)] p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm"
                >
                  <policy.icon className="w-10 h-10 text-[var(--color-accent)] mb-6 group-hover:text-white transition-colors" />
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-white">{policy.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--bg-alt)] rounded-3xl p-12 text-center border border-[var(--border-light)] shadow-xl relative overflow-hidden text-[var(--text-primary)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(180,151,90,0.08)_0,transparent_65%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Build Your Foundation for Success</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
              Connect with our risk advisory experts to develop robust policies and procedures tailored to your organization’s goals.
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
