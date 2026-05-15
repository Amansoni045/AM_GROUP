"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01.",
    title: "Bank reconciliation",
    desc: "We match your internal records with your bank statements to ensure that all transactions are properly recorded to identify correct discrepancies."
  },
  {
    num: "02.",
    title: "Credit card reconciliation",
    desc: "We review and reconcile your credit card statements, ensuring that all business expenses are accounted for and recorded accurately in your books in line with accounting standards."
  },
  {
    num: "03.",
    title: "Accounts reconciliation",
    desc: "Our team ensures that all invoices and payments are correctly tracked, helping you avoid issues such as late payments, double payments, or missed receipts through robust internal controls."
  },
  {
    num: "04.",
    title: "Inventory reconciliation",
    desc: "For retail businesses, we reconcile your inventory records with actual stock levels, ensuring that your inventory management systems are accurate and up-to-date."
  },
  {
    num: "05.",
    title: "Petty cash reconciliation",
    desc: "We help you track, monitor and reconcile petty cash expenditures, ensuring all small transactions are accounted for and no funds go untracked."
  }
];

export default function ReconciliationServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="reconciliation-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#6373f2]">Reconciliation</span> Services Include
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
