"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does financial advisory cover?",
    answer: "It covers strategic planning, restructuring, investment guidance, cost optimization, and performance improvement tailored to business needs."
  },
  {
    question: "How can financial advisory improve business performance?",
    answer: "By analyzing financial data, identifying operational inefficiencies, and implementing strategic frameworks, we help businesses improve profitability, manage cash flows, and achieve scalable growth."
  },
  {
    question: "Do you only work with large companies?",
    answer: "No, we work with organizations of all sizes—from ambitious startups looking for growth strategies to established global enterprises requiring complex restructuring and ESG compliance."
  },
  {
    question: "How do you ensure confidentiality of financial data?",
    answer: "We employ industry-leading security protocols and strict non-disclosure agreements. Our internal systems are audited regularly to ensure that all sensitive financial and strategic data remains strictly confidential."
  }
];

export default function ESGFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="esg-faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent-soft)] text-[var(--color-accent)] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4" /> FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading mb-6">
            Frequently <span className="text-[var(--color-accent)]">Asked</span> Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--bg-alt)] rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-[var(--color-accent)]' : 'text-[var(--text-primary)] group-hover:text-[var(--color-accent)]'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[var(--color-accent-soft)] text-[var(--text-primary)] rotate-180' : 'bg-white text-[var(--text-secondary)] group-hover:text-[var(--color-accent)]'}`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-[var(--border-light)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
