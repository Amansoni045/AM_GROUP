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
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="bookkeeping-list">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((service, i) => (
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

        {/* Why Choose Us Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-4 font-heading">
              Why Choose <span className="text-[#6373f2]">AM Accounting</span>
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex gap-6 items-start"
              >
                <div className="text-3xl font-bold text-[#d4af37] font-heading opacity-80 mt-1">
                  {reason.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#020817] mb-3 font-heading">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
