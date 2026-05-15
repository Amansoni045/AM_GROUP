"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01.",
    title: "Review of Past Transactions",
    desc: "We perform a thorough review of your past financial transactions, including income, expenses, sales, and purchases, to ensure that everything is accurately documented. This review allows us to identify any gaps or discrepancies in your financial records."
  },
  {
    num: "02.",
    title: "Reconstruction of Financial Statements",
    desc: "For businesses with incomplete or missing financial data, we assist in the reconstruction of financial statements. We compile all available information to create accurate balance sheets, income statements, and cash flow statements for the relevant periods."
  },
  {
    num: "03.",
    title: "Bank Reconciliation for Past Periods",
    desc: "As part of our backlog accounting services, we conduct bank reconciliation for past periods to ensure that your bank statements match your financial records. This helps to resolve any discrepancies and ensure the accuracy of your financial data."
  },
  {
    num: "04.",
    title: "Correction of Errors",
    desc: "If your previous accounting records contain errors or omissions, our team will identify and correct them, ensuring that your financial records are accurate and compliant. This includes fixing incorrect journal entries, misclassifications, and other discrepancies."
  }
];

export default function BacklogServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="backlog-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#6373f2]">Backlog Accounting</span> Services Include
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-[20px] transition-all duration-500 group-hover:bg-[#d4af37]/10 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#d4af37] font-heading mb-6">
                  {service.num}
                </div>
                <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[#6373f2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
