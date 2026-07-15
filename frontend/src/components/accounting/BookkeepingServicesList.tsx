"use client";
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    num: "01.",
    title: "Maintain Supplier Relationships",
    desc: "Our bookkeepers ensure timely updates and payments to your suppliers, helping you maintain strong and reliable supply chain relationships."
  },
  {
    num: "02.",
    title: "Maximize Cash Flow",
    desc: "Stay on top of receivables and reduce aged debt to better manage liquidity and available funds."
  },
  {
    num: "03.",
    title: "Meet Regulatory Deadlines",
    desc: "We help you stay compliant by maintaining up-to-date records for audits, VAT filings, and other statutory requirements, ensuring you never miss a deadline."
  }
];

const reasons = [
  {
    num: "01.",
    title: "Reduce Overheads",
    desc: "Save on recruitment, training, equipment, and employee-related costs by outsourcing your bookkeeping to our experienced team."
  },
  {
    num: "02.",
    title: "Cost-Effective Solutions",
    desc: "We deliver efficient and cost-effective bookkeeping services while proactively improving your accounting processes."
  },
  {
    num: "03.",
    title: "Save Time",
    desc: "Bookkeeping can be time-consuming. Our services remove it from your to-do list so you can focus on running and growing your business."
  },
  {
    num: "04.",
    title: "Reduce Stress",
    desc: "With AM Accounting as your extended team, you avoid the challenges of staff absences and workload, while ensuring consistent accuracy."
  }
];

export default function BookkeepingServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="bookkeeping-list">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((service, i) => (
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
