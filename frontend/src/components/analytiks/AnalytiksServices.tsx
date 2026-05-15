"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, ShieldCheck, LineChart, Database, AlertTriangle, Zap } from "lucide-react";

const services = [
  {
    title: "Predictive & Big Data Analytics",
    desc: "We empower organizations with predictive insights using advanced data models and AI-driven analytics—helping optimize performance and forecast trends.",
    icon: Brain,
    color: "#6373f2",
  },
  {
    title: "GRC Solutions & Services",
    desc: "We provide integrated governance, risk, and compliance frameworks—ensuring effective controls, regulatory adherence, and transparency.",
    icon: ShieldCheck,
    color: "#059669",
  },
  {
    title: "Operations & Finance Analytics",
    desc: "We optimize financial and operational efficiency through deep data insights, process automation, and performance analysis.",
    icon: LineChart,
    color: "#d4af37",
  },
  {
    title: "Data Analytics",
    desc: "We help clients in creating data strategies, through master data management, assisting in cleansing to enable obtaining value from data.",
    icon: Database,
    color: "#8b5cf6",
  },
  {
    title: "Fraud Management",
    desc: "We strengthen your business against risks with intelligent fraud detection, anomaly analysis, and preventive strategies.",
    icon: AlertTriangle,
    color: "#dc2626",
  },
  {
    title: "Digital Transformation",
    desc: "We help clients in developing and implementing the digital transformation strategy especially technology led change and transformation.",
    icon: Zap,
    color: "#0ea5e9",
  }
];

export default function AnalytiksServices() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="analytiks-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-[#d4af37]/5">
            Data Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading">
            Our Data <span className="text-[#6373f2]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.08)", transition: { duration: 0.2, delay: 0 } }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer flex flex-col"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
