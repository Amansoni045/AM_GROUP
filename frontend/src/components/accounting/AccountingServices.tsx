"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BookOpen, BarChart3, Rewind, CheckSquare, Receipt } from "lucide-react";

const services = [
  {
    title: "CFO Services",
    desc: "We provide affordable CFO services tailored for businesses of all sizes, from startups to small enterprises.",
    icon: TrendingUp,
    color: "#6373f2",
  },
  {
    title: "Bookkeeping",
    desc: "We prepare comprehensive financial records for our clients, analyzing invoices, receipts, bills, vouchers.",
    icon: BookOpen,
    color: "#059669",
  },
  {
    title: "MIS Reporting",
    desc: "We provide comprehensive MIS reports with detailed financial statements and data-driven recommendations.",
    icon: BarChart3,
    color: "#d4af37",
  },
  {
    title: "Backlog Management",
    desc: "Our team efficiently updates and streamlines your backlog accounts for financial reporting.",
    icon: Rewind,
    color: "#8b5cf6",
  },
  {
    title: "Reconciliation",
    desc: "Our team reconciles accounts to identify and resolve discrepancies, ensuring financial integrity.",
    icon: CheckSquare,
    color: "#dc2626",
  },
  {
    title: "VAT Services",
    desc: "Our experts ensure seamless VAT registration, offering expert guidance and support.",
    icon: Receipt,
    color: "#0ea5e9",
  }
];

export default function AccountingServices() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="accounting-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-[#d4af37]/5">
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading">
            Our Accounting <span className="text-[#6373f2]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.08)", transition: { duration: 0.2, delay: 0 } }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: service.color }} />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 font-bold text-sm" style={{ color: service.color }}>
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
