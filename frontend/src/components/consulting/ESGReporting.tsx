"use client";
import React from "react";
import { motion } from "framer-motion";

const reportingSteps = [
  {
    number: "01",
    title: "Materiality Assessment",
    desc: "Identify key ESG factors relevant to your business and stakeholders, ensuring focused and impactful sustainability strategies."
  },
  {
    number: "02",
    title: "ESG Metrics & KPI Development",
    desc: "Develop measurable metrics and KPIs to track, monitor, and improve your environmental, social, and governance performance."
  },
  {
    number: "03",
    title: "Sustainability Reporting",
    desc: "Expert reporting services aligned with GRI, SASB, and TCFD standards to ensure transparency and compliance."
  },
  {
    number: "04",
    title: "Stakeholder Engagement & Communication",
    desc: "Build trust and transparency through strategic stakeholder engagement and effective sustainability communication."
  },
  {
    number: "05",
    title: "Annual & Integrated ESG Reports",
    desc: "Comprehensive annual and integrated reports that showcase your ESG journey and commitment to sustainable practices."
  }
];

export default function ESGReporting() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative" id="esg-reporting">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading"
          >
            ESG Reporting – <span className="text-[#d4af37]">Transparency</span> that Builds Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-3xl mx-auto"
          >
            We help businesses prepare clear, reliable, and compliant ESG reports that communicate their sustainability performance to stakeholders.
          </motion.p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {reportingSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6 bg-[#f9f9f9] p-8 rounded-3xl border border-gray-100 group hover:bg-[#020817] transition-all duration-500 cursor-pointer"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-3xl font-bold text-[#059669] shadow-sm group-hover:bg-[#059669] group-hover:text-white transition-all duration-500">
                {step.number}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#020817] mb-2 font-heading group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
