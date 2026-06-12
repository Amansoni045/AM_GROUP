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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Business Risk Management" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[var(--color-primary)]/5">
              <span className="tracking-[0.2em]">Risk Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Business Risk <br />
              <span className="text-[var(--color-accent)]">Management</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Excellence in Risk Advisory. A top-down approach focused on preparing your organization for threats, hazards, and uncertainties.
            </p>
          </motion.div>
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
      <section className="py-24 px-4 md:px-12 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Our Framework Approach</h2>
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
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <step.icon className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                </div>
                <div className="text-5xl font-black text-white/5 group-hover:text-[var(--color-accent)]/20 transition-colors mb-6 font-heading">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
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
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Secure Your Business Future</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Start building a robust risk management framework that empowers your organization to make proactive, informed decisions.
            </p>
            <Link href="/#consultation" className="btn-white mx-auto">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
