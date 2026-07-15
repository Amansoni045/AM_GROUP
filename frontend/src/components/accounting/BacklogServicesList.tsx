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
    <section className="bg-[var(--bg-alt)] pt-12 pb-24 px-4 md:px-12" id="backlog-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our <span className="text-[var(--color-accent)]">Backlog Accounting</span> Services Include
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="info-card group"
            >
              <div className="info-card-top-bar" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[var(--color-accent)] font-heading mb-6 transition-transform duration-300 group-hover:scale-105">
                  {service.num}
                </div>
                <h3 className="info-card-title">{service.title}</h3>
                <p className="info-card-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
