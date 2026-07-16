"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Rocket, Globe } from "lucide-react";

const reasons = [
  {
    number: "01.",
    title: "Proven Expertise",
    desc: "2500+ valuations, 100% client satisfaction.",
    icon: Award,
  },
  {
    number: "02.",
    title: "Skilled Team",
    desc: "50+ years’ combined experience from top firms.",
    icon: Users,
  },
  {
    number: "03.",
    title: "Strategic Support",
    desc: "Tailored solutions for every business need.",
    icon: Rocket,
  },
  {
    number: "04.",
    title: "Unified Approach",
    desc: "Global standards with strict quality control.",
    icon: Globe,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}
          >
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Award className="w-4 h-4" /> Why choose us
            </span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading"
          >
            Shaping businesses with <span className="text-[var(--color-accent)]">proven excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mobile-2col">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group pt-8"
            >
              <div className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-black/5 group-hover:-translate-y-4 transition-transform duration-500">
                {/* Number inside card at top-right */}
                <div className="absolute top-8 right-8 text-[var(--color-accent)] text-3xl font-heading font-black opacity-40 select-none group-hover:opacity-100 transition-all duration-300">
                  {reason.number}
                </div>

                <div className="w-14 h-14 bg-[var(--bg-alt)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-soft)] transition-colors">
                  <reason.icon className="w-7 h-7 text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-0">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
