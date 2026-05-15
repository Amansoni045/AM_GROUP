"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, ShieldAlert, Activity } from "lucide-react";

const riskServices = [
  {
    title: "Policies & Procedures (SOPs)",
    desc: "Governance frameworks, process mapping, departmental policies, and compliance tools to ensure operational consistency.",
    icon: FileText,
  },
  {
    title: "Business Risk Management",
    desc: "Enterprise risk frameworks aligned with strategy, appetite, and operational resilience for long-term stability.",
    icon: ShieldAlert,
  },
  {
    title: "Operational Risk Management",
    desc: "Frameworks, mitigation approaches, IT/health/safety risks, and continuity planning to safeguard your business.",
    icon: Activity,
  },
];

export default function RiskServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="risk-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#dc2626]">Risk Advisory</span> Services
          </h2>
          <p className="text-[#d4af37] text-2xl font-bold tracking-widest uppercase mb-12">
            Clarity. Confidence. Compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {riskServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#dc2626]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#dc2626] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#dc2626] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[#dc2626] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-[#d4af37] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Read More
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
