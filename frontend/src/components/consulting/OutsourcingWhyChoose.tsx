"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, BarChart3, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Operational Agility",
    desc: "Respond quickly to changing business needs.",
    icon: Zap
  },
  {
    title: "Focused Leadership",
    desc: "Allow decision-makers to prioritize strategic objectives.",
    icon: Target
  },
  {
    title: "Enhanced Performance",
    desc: "Combine expertise, technology, and process excellence for measurable impact.",
    icon: BarChart3
  },
  {
    title: "Competitive Advantage",
    desc: "Turn optimized operations into a driver of growth and innovation.",
    icon: TrendingUp
  }
];

export default function OutsourcingWhyChoose() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="outsourcing-why">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading">
              Why Outsource with <br />
              <span className="text-[var(--color-accent)]">AM Consulting</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Outsourcing is more than a cost-saving measure, it’s a strategic tool for business transformation. By partnering with AM Consulting, your organization gains the specialized expertise and operational efficiency needed to excel in a competitive market.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--bg-alt)] p-8 rounded-3xl border border-gray-100 hover:bg-[var(--bg-alt)] hover:text-[var(--text-primary)] transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-accent-soft)] transition-colors">
                  <benefit.icon className="w-6 h-6 text-[var(--color-accent)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 group-hover:text-[var(--text-secondary)] text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
