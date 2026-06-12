"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Search, Users, Scale, ClipboardCheck, History, Landmark, AlertTriangle, Gavel, BarChart3, Activity, ListChecks } from "lucide-react";
import Link from "next/link";

const amlServices = [
  { id: "01", title: "AML/CFT Gap Analysis", desc: "We assess AML compliance gaps, identify risks, and recommend actions for regulatory alignment.", icon: Search },
  { id: "02", title: "KYC / EDD Reviews", desc: "We strengthen KYC and EDD processes to ensure accurate client verification and compliance.", icon: Users },
  { id: "03", title: "Design AML Compliance", desc: "We build customised AML/CFT frameworks with policies, SOPs, and manuals for your business.", icon: Scale },
  { id: "04", title: "Customer Due Diligence", desc: "We deliver robust CDD and EDD procedures ensuring transparency for higher-risk customer segments.", icon: ShieldCheck },
  { id: "05", title: "Sanctions Screening", desc: "We perform thorough sanctions checks to prevent dealings with restricted individuals or entities.", icon: Gavel },
  { id: "06", title: "AML Policy & Procedure", desc: "We design and implement AML policies aligned with your operational and requirements.", icon: FileText },
  { id: "07", title: "Historical Transaction Reviews", desc: "We analyse past transactions to detect compliance violations, anomalies, or suspicious activities.", icon: History },
  { id: "08", title: "Independent Testing", desc: "We conduct independent AML compliance testing to verify effectiveness and adherence.", icon: ListChecks },
  { id: "09", title: "Transaction Monitoring Design", desc: "We design and deploy monitoring systems identifying suspicious activities across operations.", icon: Activity }
];

const benefits = [
  { title: "Enhance Compliance", desc: "Ensure your organization meets regulatory requirements effectively." },
  { title: "Identify Gaps", desc: "Detect weaknesses in existing AML/CFT policies and procedures." },
  { title: "Align with Risk Profile", desc: "Improve AML/CFT measures to reflect your organization’s specific risk exposure." },
  { title: "Increase Awareness", desc: "Raise understanding of AML/CFT risks, control gaps, and mitigation strategies." },
  { title: "Support Strategic Decisions", desc: "Provide actionable insights to guide informed business and compliance decisions." }
];

const riskApproach = [
  "Record Keeping",
  "Risk Identification",
  "Risk Assesment",
  "Control Identification",
  "Implementation of Controls",
  "Monitoring & Health check"
];

export default function AMLCFTPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="AML Compliance" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[var(--color-primary)]/5">
              <span className="tracking-[0.2em]">Regulatory Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              AML/CFT <span className="text-[var(--color-accent)]">Compliance</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Excellence in Regulatory Advisory. safeguard your business and build stakeholder confidence with our comprehensive AML/CFT services.
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
                Your Trusted Partner for <span className="text-[var(--color-accent)]">Financial</span> Integrity
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  In today’s dynamic regulatory environment, maintaining compliance with financial regulations is essential. AM Consulting serves as your trusted partner for Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) compliance.
                </p>
                <p>
                  We provide organizations with tailored solutions, including risk assessments, policy development, and implementation of robust controls.
                </p>
                <p>
                  Our proactive approach ensures that your business not only meets current regulatory requirements but is also prepared for future legislative changes.
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent-soft)] rounded-[3rem] rotate-3 scale-105 -z-10" />
              <img 
                src="/am-group.webp" 
                alt="AML Team" 
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">Comprehensive AML Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              End-to-end support for Anti-Money Laundering and Counter-Financing of Terrorism compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amlServices.map((service, i) => (
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
                    <service.icon className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-black text-gray-200 group-hover:text-[var(--color-accent)]/20 transition-colors">{service.id}</span>
                </div>
                <h3 className="text-xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Based Approach Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020817] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-10 font-heading">Risk Based Approach to AML</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {riskApproach.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent)] transition-colors">
                      <span className="text-[var(--color-accent)] font-bold group-hover:text-white transition-colors">{i+1}</span>
                    </div>
                    <span className="font-bold text-white/90">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-accent-soft)] p-12 rounded-[3rem] border border-[var(--color-accent)]/20"
            >
              <h3 className="text-2xl font-bold mb-8 font-heading text-[var(--color-accent)]">Benefits of Assessing AML/CFT Risk</h3>
              <div className="space-y-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-white/60 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Safeguard Your Business</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Maintain compliance and build stakeholder confidence with our expert AML services.
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
