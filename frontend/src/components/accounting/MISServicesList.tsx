"use client";
import React from "react";
import { motion } from "framer-motion";

const components = [
  { num: "01.", title: "Balance Sheet" },
  { num: "02.", title: "Profit & Loss" },
  { num: "03.", title: "Cash Flow" },
  { num: "04.", title: "Budget vs Actual" },
  { num: "05.", title: "Financial Ratios" },
  { num: "06.", title: "Cost and Revenue Analysis" }
];

export default function MISServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="mis-list">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] font-heading">
              Our MIS Report Service
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent-soft)] rounded" />
            <p className="text-gray-600 leading-relaxed mt-6">
              We understand that every organisation has its own unique needs and challenges. That's why we offer an all-inclusive suite of MIS reporting services, customised to address your specific requirements and help you with the insights needed to achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 font-heading text-center">
                What Is Included in the MIS Report?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {components.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-[var(--bg-alt)] p-4 rounded-xl border border-gray-100 group"
                  >
                    <span className="text-xl font-bold text-[var(--color-accent)] font-heading opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.num}
                    </span>
                    <span className="font-bold text-[var(--text-primary)]">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
