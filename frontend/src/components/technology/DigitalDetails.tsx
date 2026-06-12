"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01.",
    title: "Intelligent Data Capture",
    desc: "Capture business content intelligently and automate routine processes to reduce human errors. Improve data accuracy, strengthen security, and accelerate overall operational speed with streamlined digital workflows."
  },
  {
    num: "02.",
    title: "Business Process Automation",
    desc: "Automate repetitive manual data-entry tasks to save valuable time. Increase team productivity, reduce operational delays, and shift focus toward more strategic, innovative, and revenue-generating business activities."
  },
  {
    num: "03.",
    title: "Accounts Payable Automation",
    desc: "Automate accounts payable processes to streamline invoice management, minimise costly errors, enhance accuracy, and significantly improve operational efficiency while saving expenses across your financial workflows."
  },
  {
    num: "04.",
    title: "Digital Forms for Business",
    desc: "Eliminate traditional paper forms and expensive multi-part documents. Digital forms accelerate processing, support faster approvals, and improve cash flow while delivering a modern, efficient experience."
  }
];

export default function DigitalDetails() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="digital-details">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our Digital Transformation <span className="text-[var(--color-accent)]">Services</span>
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
              <div className="info-card-icon-wrapper font-heading font-bold text-lg">
                {service.num}
              </div>
              <h3 className="info-card-title">{service.title}</h3>
              <p className="info-card-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
