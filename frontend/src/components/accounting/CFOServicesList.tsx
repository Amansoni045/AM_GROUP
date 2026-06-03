"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01.",
    title: "Fractional CFO",
    desc: "Part-time CFOs provide high-level financial oversight, ideal for scaling businesses seeking strategic expertise without the cost of a full-time executive."
  },
  {
    num: "02.",
    title: "Virtual CFO",
    desc: "Remote CFOs deliver expert financial support, helping businesses manage growth, cash flow, and transactions efficiently."
  },
  {
    num: "03.",
    title: "External CFO",
    desc: "Flexible financial leadership that guides capital raises, transactions, and growth initiatives."
  },
  {
    num: "04.",
    title: "Interim CFO",
    desc: "Temporary CFO support to stabilize and optimize finances during periods of transition."
  }
];

export default function CFOServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="cfo-list">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-[20px] transition-all duration-500 group-hover:bg-[var(--color-primary)]/10 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[var(--color-accent)] font-heading mb-6">
                  {service.num}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Solutions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading">
              Customized CFO Services Tailored to Your Needs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We design our CFO services to match your unique challenges, opportunities, and goals. Whether full-time, part-time, fractional, or interim, AM Group works alongside your team to strengthen your organization and enhance agility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[var(--color-accent)] font-heading">
              Comprehensive CFO Solutions
            </h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Our CFO services cover a wide range of financial and operational strategies, including financial forecasting to support informed decision-making, maximizing profitability through effective cost and revenue management, and operational optimization to enhance efficiency.
              </p>
              <p>
                We assist in resolving cash flow challenges, provide robust financial reporting and audit support, and offer strategic guidance on mergers and acquisitions. In addition, we strengthen inventory management practices and internal controls to ensure financial stability, transparency, and sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
