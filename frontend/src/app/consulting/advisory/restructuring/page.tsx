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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Restructuring Services" 
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="pill-badge mb-6">
              <span className="tracking-[0.2em]">Turnaround Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Restructuring <span className="text-[var(--color-accent)]">Services</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Excellence in Financial Analysis. Supporting businesses in Bahrain, Saudi Arabia, Oman, and UAE to adapt, evolve, and thrive in changing economic conditions.
            </p>
          </motion.div>
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
              className="bg-[#020817] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-10 font-heading text-[var(--color-accent)]">Key Focus Areas</h3>
              <ul className="space-y-6">
                {businessRestructuringAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-white/80 font-medium group-hover:text-white transition-colors">{area}</span>
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
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.03] group hover:bg-[var(--color-primary)] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500">
                  <step.icon className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-black text-[var(--color-accent)]/20 mb-2 group-hover:text-white/30 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
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
          <div className="bg-[#020817] rounded-[3rem] p-12 md:p-20 relative text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading leading-tight">
                  Driving Sustainable <span className="text-[var(--color-accent)]">Value</span> & Recovery
                </h2>
                <div className="w-16 h-1 bg-[var(--color-accent)] mb-8" />
                <p className="text-white/70 text-lg leading-relaxed mb-8">
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
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-[var(--color-accent-soft)] rounded-full flex items-center justify-center p-10 border border-white/10">
                  <div className="aspect-square bg-[var(--color-accent-soft)]/20 rounded-full flex items-center justify-center p-10 w-full border border-white/10">
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
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Regain Your Competitive Edge</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Let our restructuring experts help you navigate economic challenges and build a resilient future for your business.
            </p>
            <Link href="/#consultation" className="btn-white mx-auto">
              Discuss Your Situation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
