"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    num: "01.",
    title: "Reduce Overheads",
    desc: "Save on recruitment, training, equipment, and employee-related costs by outsourcing your accounting and bookkeeping to our experienced team."
  },
  {
    num: "02.",
    title: "Cost-Effective Solutions",
    desc: "We deliver efficient and cost-effective accounting services while proactively improving your financial processes."
  },
  {
    num: "03.",
    title: "Save Time",
    desc: "Accounting can be time-consuming. Our services remove it from your to-do list so you can focus on running and growing your business."
  },
  {
    num: "04.",
    title: "Reduce Stress",
    desc: "With AM Accounting as your extended team, you avoid the challenges of staff absences and workload, while ensuring consistent accuracy."
  }
];

export default function AccountingWhyChoose() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="why-accounting">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Why Choose <span className="text-[var(--color-accent)]">AM Accounting</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="info-card group flex flex-row gap-6 items-start"
            >
              <div className="info-card-top-bar" />
              <div className="text-3xl font-bold text-[var(--color-accent)] font-heading opacity-80 mt-1 transition-transform duration-300 group-hover:scale-105">
                {reason.num}
              </div>
              <div className="flex-grow">
                <h4 className="info-card-title mb-3">{reason.title}</h4>
                <p className="info-card-desc">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
