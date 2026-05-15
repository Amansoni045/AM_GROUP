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
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="digital-details">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-4 font-heading">
            Our Digital Transformation <span className="text-[#6373f2]">Services</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
