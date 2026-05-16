"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, BarChart3, ShieldCheck, Activity, Target, Workflow, Settings, Zap, Database, Briefcase, ListChecks, PieChart } from "lucide-react";
import Link from "next/link";

const opRiskSteps = [
  { id: "01", title: "Risk Identification", desc: "Identifying potential risks that may disrupt operations, processes, or overall business performance.", icon: Search },
  { id: "02", title: "Risk Assessment", desc: "Evaluating the likelihood and impact of identified risks to determine their severity and priority.", icon: BarChart3 },
  { id: "03", title: "Risk Mitigation", desc: "Implementing targeted strategies and controls to reduce, manage, or eliminate operational risks effectively.", icon: ShieldCheck },
  { id: "04", title: "Risk Monitoring", desc: "Continuously tracking and reviewing risk indicators to ensure effective and ongoing risk management.", icon: Activity }
];

const whatWeDo = [
  {
    title: "Operational Risk Strategy Development",
    desc: "We develop comprehensive operational risk strategies that align with regulatory requirements and long-term business objectives.",
    icon: Target
  },
  {
    title: "Operational Risk Management Frameworks",
    desc: "We assess, design, and implement frameworks that support regulatory compliance, capital requirements, and overall risk governance.",
    icon: Workflow
  },
  {
    title: "Risk Profile & Assessment Methodologies",
    desc: "We create structured operational risk profiles and assessment methodologies to enhance risk identification and measurement.",
    icon: ListChecks
  },
  {
    title: "Operational Risk Appetite Development",
    desc: "We define operational risk appetite levels that reflect your business strategy and acceptable operational exposure.",
    icon: PieChart
  }
];

export default function OperationalRiskManagementPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Operational Risk" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#dc2626]/20 px-4 py-1.5 rounded-full mb-6 border border-[#dc2626]/30">
              <span className="text-[#dc2626] text-sm font-bold uppercase tracking-widest">Risk Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Operational <br />
              <span className="text-[#dc2626]">Risk Management</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Transforming end-to-end risk functions. Connecting data and insights across processes to establish strong controls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-8 font-heading">
                Holistic Operational <span className="text-[#dc2626]">Excellence</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#d4af37] rounded-full mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  AM Consulting helps organizations assess, build, and integrate operational risks into a comprehensive risk management program to strengthen overall capabilities.
                </p>
                <p>
                  Our holistic methodology ensures a structured and practical implementation, combining deep expertise in operational risk with functional and technical knowledge.
                </p>
              </div>
            </motion.div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="absolute inset-0 bg-[#dc2626]/5 rounded-3xl blur-3xl -z-10" />
              {opRiskSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:bg-[#020817] transition-all duration-300"
                >
                  <step.icon className="w-10 h-10 text-[#dc2626] mb-4 group-hover:text-white transition-colors" />
                  <h4 className="font-bold text-[#020817] group-hover:text-white text-sm transition-colors">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our specialized services enable your organization to stay at the leading edge of operational risk management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.03] flex gap-8 items-start group hover:border-[#dc2626]/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#dc2626]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#dc2626] transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-[#dc2626] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[#dc2626] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020817] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Database className="w-16 h-16 text-[#dc2626] mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Leveraging Technology</h2>
            <p className="text-white/70 text-xl leading-relaxed italic">
              "AM Consulting connects data and insights across processes, establishes strong controls, and enables your organization to stay at the leading edge of operational risk management."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#dc2626] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Strengthen Your Operational Resilience</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join the forward-thinking organizations that trust AM Consulting for operational risk excellence.
            </p>
            <Link href="/#consultation">
              <button className="bg-white text-[#dc2626] px-10 py-4 rounded-xl font-bold hover:bg-[#020817] hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
