"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OpsIntro() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="ops-intro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 font-heading"
          >
            Can CFOs really use <span className="text-[var(--color-accent)]">Big Data</span> for Finance Analytics?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              With rare exceptions, until now the closest that Big Data has come to the CFO's office has been via the well-publicized examples involving the enormous consumer databases of credit card vendors, who use them to identify pertinent information, and then sell data on the buying patterns, credit worthiness of the customer pool, among other things. 
            </p>
            <p>
              The typical finance department hardly encounters anything close to the size of those terabyte-scale databases when closing the books, preparing budgets and forecasting revenues.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
