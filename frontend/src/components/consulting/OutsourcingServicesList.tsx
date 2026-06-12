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
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="outsourcing-list">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our <span className="text-[var(--color-accent)]">Outsourcing</span> Services
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="info-card group"
            >
              <div className="absolute top-6 right-8 text-[var(--text-secondary)] text-7xl font-black opacity-30 group-hover:text-[var(--color-accent)]/10 transition-colors select-none pointer-events-none z-10">
                {service.number}
              </div>
              <div className="info-card-top-bar" />
              <div className="info-card-icon-wrapper">
                <service.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="info-card-title z-10">{service.title}</h3>
              <p className="info-card-desc z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
