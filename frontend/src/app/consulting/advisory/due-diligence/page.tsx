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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Due Diligence" 
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
              <span className="tracking-[0.2em]">Transaction Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Due <span className="text-[var(--color-accent)]">Diligence</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Informed decision-making through thorough assessment. integrated insights across acquisitions, divestments, and strategic alliances.
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
      <section className="py-24 px-4 md:px-12 bg-[#f9f9f9]">
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
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                    <item.icon className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-black text-gray-200 group-hover:text-[var(--color-accent)]/20 transition-colors">{item.id}</span>
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy-side vs Sell-side Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020817] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-[3rem] border border-white/10"
            >
              <Shield className="w-12 h-12 text-[var(--color-accent)] mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6 font-heading">Buy-side Due Diligence</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Helping investors identify potential risks, uncover hidden liabilities, and validate the target's financial and operational performance before acquisition.
              </p>
              <ul className="space-y-4">
                {["Risk Mitigation", "Performance Validation", "Strategic Alignment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
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
              className="bg-[var(--color-accent-soft)] p-12 rounded-[3rem] border border-[var(--color-accent)]/20"
            >
              <Briefcase className="w-12 h-12 text-[var(--color-accent)] mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6 font-heading">Sell-side (Vendor) Diligence</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Streamlining the transaction process by providing transparent, data-backed insights that build investor confidence and support stronger deal outcomes.
              </p>
              <ul className="space-y-4">
                {["Investor Confidence", "Streamlined Process", "Predictable Outcomes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
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
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Mitigate Risk, Maximize Value</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Our integrated diligence insights help you make informed decisions with confidence.
            </p>
            <Link href="/#consultation" className="btn-white mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
