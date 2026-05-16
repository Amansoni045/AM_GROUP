"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Briefcase, Cpu, ShieldCheck, Database } from "lucide-react";

const services = [
  {
    title: "Finance & Accounting Outsourcing",
    desc: "Optimize financial operations, ensure accurate reporting, and free up resources for strategic priorities.",
    icon: Calculator,
    number: "01"
  },
  {
    title: "HR & Payroll Management",
    desc: "Manage payroll, employee records, and HR processes efficiently while maintaining compliance.",
    icon: Users,
    number: "02"
  },
  {
    title: "Administrative & Operational",
    desc: "Delegate routine administrative tasks to focus on core business functions and improve productivity.",
    icon: Briefcase,
    number: "03"
  },
  {
    title: "Process Automation & Integration",
    desc: "Leverage advanced tools and automation to simplify workflows, reduce errors, and enhance operational efficiency.",
    icon: Cpu,
    number: "04"
  },
  {
    title: "Compliance & Regulatory Support",
    desc: "Ensure processes meet regulatory standards while mitigating operational and compliance risks enterprise-wide.",
    icon: ShieldCheck,
    number: "05"
  },
  {
    title: "Data Management & Analytics",
    desc: "Enable data-driven decision-making through structured data management and actionable insights.",
    icon: Database,
    number: "06"
  }
];

export default function OutsourcingServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="outsourcing-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-4 font-heading">
            Our <span className="text-[#6373f2]">Outsourcing</span> Services
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
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-gray-100 text-7xl font-black opacity-30 group-hover:text-[#6373f2]/10 transition-colors select-none pointer-events-none">
                {service.number}
              </div>
              <div className="w-16 h-16 bg-[#6373f2]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#6373f2] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#6373f2] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[#6373f2] transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
