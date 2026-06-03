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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Policies & Procedures" 
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
              <span className="tracking-[0.2em]">Risk Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Policies & <span className="text-[var(--color-accent)]">Procedures</span> (SOPs)
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Strong Substance. Stronger Standing. Building a clear roadmap for day-to-day operations and organizational success.
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
            
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent-soft)] rounded-[3rem] rotate-3 scale-105 -z-10" />
              <img 
                src="/am-group.webp" 
                alt="Risk Strategy" 
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f9f9f9]">
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
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.03] group hover:bg-[var(--color-primary)] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500">
                  <step.icon className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>
                <div className="text-sm font-black text-[var(--color-accent)]/20 mb-2 group-hover:text-white/30 transition-colors">{step.id}</div>
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

      {/* Key Policies Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#020817] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
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
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300"
                >
                  <policy.icon className="w-10 h-10 text-[var(--color-accent)] mb-6 group-hover:text-white transition-colors" />
                  <span className="font-bold text-sm text-white/90 group-hover:text-white">{policy.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Build Your Foundation for Success</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Connect with our risk advisory experts to develop robust policies and procedures tailored to your organization’s goals.
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
