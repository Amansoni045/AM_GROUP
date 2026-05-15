"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const vatCategories = [
  {
    title: "VAT Advisory",
    items: [
      "Recommendations on transaction structuring to optimize VAT costs",
      "Review of business documentation to assess VAT implications",
      "Advice on VAT-related issues and queries"
    ]
  },
  {
    title: "VAT Compliance",
    items: [
      "Review of VAT-related documents, reports, and reconciliations",
      "Assistance with VAT registration with the National Bureau of Revenue (NBR), Bahrain",
      "Assistance with VAT deregistration for business closure",
      "Preparation and filing of VAT returns"
    ]
  },
  {
    title: "VAT Training & Refund Assistance",
    desc: "We provide VAT training to client teams to build internal capacity for handling VAT compliance and related matters effectively.",
    items: [
      "Review of transactions and eligibility for VAT refunds",
      "Review of invoices to ensure VAT compliance",
      "Preparation and documentation of refund applications",
      "Coordination with authorities to support refund processing"
    ]
  },
  {
    title: "VAT Audits & Representation",
    desc: "As a registered VAT Agent in Bahrain, we represent taxpayers before the National Bureau of Revenue and assist with:",
    items: [
      "Preparation of documentation related to penalties or fines",
      "Liaison with authorities during VAT audits",
      "Filing appeals and resolving VAT-related issues",
      "Support in VAT litigation and dispute resolution"
    ]
  }
];

export default function VATServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="vat-list">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vatCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-[20px] transition-all duration-500 group-hover:bg-[#d4af37]/10" />
              
              <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading border-b border-gray-100 pb-4">
                {category.title}
              </h3>
              
              {category.desc && (
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {category.desc}
                </p>
              )}
              
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
