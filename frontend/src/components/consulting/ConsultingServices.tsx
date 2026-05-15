"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Leaf, Shield, Users, LineChart } from "lucide-react";

const services = [
  {
    title: "Advisory Services",
    desc: "We guide businesses through valuations, restructuring, due diligence, and feasibility studies to support informed decision-making for startups and established organizations.",
    icon: TrendingUp,
    color: "#6373f2",
    href: "/consulting/advisory"
  },
  {
    title: "ESG Services",
    desc: "We support businesses in advancing their sustainability goals through ESG reporting, risk assessments, and certification support aligned with global standards.",
    icon: Leaf,
    color: "#059669",
    href: "/consulting/esg"
  },
  {
    title: "Regulatory Services",
    desc: "We assist businesses in meeting regulatory requirements through expert guidance on ESR, AML, and risk management frameworks.",
    icon: Shield,
    color: "#d4af37",
    href: "/consulting/regulatory"
  },
  {
    title: "Corporate Outsourcing",
    desc: "We enable businesses to streamline operations through professional HR, payroll, and taxation solutions for efficient workforce management.",
    icon: Users,
    color: "#8b5cf6",
    href: "/consulting/outsourcing"
  },
  {
    title: "Business Risk Services",
    desc: "We help businesses strengthen internal controls through audits, governance frameworks, and risk analytics to enhance compliance and operational efficiency.",
    icon: LineChart,
    color: "#dc2626",
    href: "/consulting/risk"
  }
];

export default function ConsultingServices() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="consulting-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-[#d4af37]/5">
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading">
            Our Consulting <span className="text-[#6373f2]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.08)", transition: { duration: 0.2, delay: 0 } }}
              className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer flex flex-col ${i >= 3 && services.length === 5 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: service.color }} />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#020817] mb-3 font-heading">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 font-bold text-sm" style={{ color: service.color }}>
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
          
          {/* CTA Card to balance the grid if 5 items */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#020817] rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/20 rounded-full blur-[50px] -z-0" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6373f2]/20 rounded-full blur-[50px] -z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Ready to transform your business?</h3>
              <p className="text-gray-400 text-sm mb-8">Book a free consultation with our advisory experts today.</p>
              <a href="/#consultation" className="inline-flex items-center gap-2 bg-[#d4af37] text-[#020817] px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors">
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
