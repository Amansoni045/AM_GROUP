"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, Map, ShieldCheck, Zap, Users2 } from "lucide-react";

const esgServices = [
  {
    title: "ESG Materiality Assessment",
    desc: "Identify the most relevant environmental, social, and governance factors that impact your business and stakeholders.",
    icon: Search,
  },
  {
    title: "ESG Reporting & Disclosure",
    desc: "Prepare transparent and compliant ESG reports aligned with global standards (GRI, SASB, TCFD) to build trust and attract investors.",
    icon: FileText,
  },
  {
    title: "ESG Risk Identification & Mapping",
    desc: "Detect climate, social, and governance risks across your operations and supply chains, and prioritize them effectively.",
    icon: Map,
  },
  {
    title: "Compliance & Regulatory Alignment",
    desc: "Ensure your ESG strategy meets Bahrain, GCC, and international sustainability requirements to avoid penalties and enhance reputation.",
    icon: ShieldCheck,
  },
  {
    title: "Risk Mitigation & Sustainability Roadmap",
    desc: "Develop actionable strategies to minimize ESG risks while turning sustainability into a competitive advantage.",
    icon: Zap,
  },
  {
    title: "Stakeholder Engagement & Communication",
    desc: "Strengthen relationships with investors, employees, customers, and regulators through transparent ESG practices and reporting.",
    icon: Users2,
  },
];

export default function ESGServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="esg-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#059669]">ESG</span> Services
          </h2>
          <p className="text-[#d4af37] text-2xl font-bold tracking-widest uppercase mb-12">
            Restructure. Reinvent. Rise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {esgServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group"
            >
              <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#059669] transition-all duration-300 transform group-hover:rotate-6">
                <service.icon className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading leading-tight group-hover:text-[#059669] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">ESG Excellence</span>
                <div className="w-8 h-1 bg-[#d4af37] rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
