"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OpsDetails() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="ops-details">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Insight & Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading">Create Insight, Impact & Innovation for Financial Services</h3>
            <div className="w-16 h-1 bg-[var(--color-accent-soft)] rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              The promise of Big Data and analytics for CFOs is addressed in scrubbing financial transactions which are aligned to cleanly capture and benefit from more advanced analysis to finding oddities and patterns. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              For example, although individual payment transactions may each appear appropriate, advanced analytics can help identify areas that may represent fraud, which can then be investigated further. Similarly, credit risk can be better predicted by looking at large amounts of data and more efficient analysis tools that can help audit more transactions and even utilize unstructured data to identify potential outliers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-card group"
          >
            <div className="info-card-top-bar" />
            <h3 className="info-card-title mb-6">The Outsourcing Advantage</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Like many other advocates for financial analytics, experts say you don't have to bring analytics expertise in-house, with all its hiring and training pressures.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              That's where the outsourcing services segment steps in. An outside firm that also has a strong history as a system integrator can provide the integration and analytics, which ERP systems often lack, especially on the financial side.
            </p>
            <div className="bg-[var(--color-primary)]/10 border-l-4 border-[var(--color-accent)] p-6 rounded-r-xl">
              <p className="font-bold text-[var(--text-primary)]">
                SSPL offers both. The solutions and services are well designed for the clients that cater into delivering the best optimized and customized proposals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefits Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="info-card group md:p-16"
        >
          <div className="info-card-top-bar" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="info-card-title text-3xl mb-6 text-center">Streamlining Financial Operations</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              Its services and solutions help and support the users to save much more, both in terms of timely reporting and financial savings. The processes are automated to reduce dependency on manpower and solutions work from Intranet to mobile computing. Users being placed anywhere on the globe can access the reports/dashboards via a dependable internet connection, and also get around making editions w.r.t their individual requirements.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
