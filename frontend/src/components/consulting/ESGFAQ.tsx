"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is ESG and why is it important for businesses?",
    answer: "ESG stands for Environmental, Social, and Governance. It is a framework used to assess an organization's business practices and performance on various sustainability and ethical issues. Implementing ESG practices helps businesses comply with regional regulations, manage risks, improve brand reputation, and attract investors."
  },
  {
    question: "Does my business in Bahrain or Saudi Arabia need ESG reporting?",
    answer: "Yes, key regulators in the GCC region, including the Bahrain Bourse and Saudi Exchange (Tadawul), have introduced ESG reporting guidelines for listed companies. Many other businesses are adopting ESG to meet supplier compliance mandates and international client expectations."
  },
  {
    question: "How does AM Consulting assist with ESG compliance?",
    answer: "We provide materiality assessments, carbon footprint calculations, sustainability reporting alignments (GRI, TCFD, ISSB), ESG risk identification, and strategic roadmaps to ensure your business meets GCC and global standards."
  },
  {
    question: "What is an ESG Materiality Assessment?",
    answer: "It is a process to identify and prioritize the ESG topics that have the most significant impact on your business operations and are of the highest importance to your stakeholders. This forms the foundation of any credible ESG strategy and report."
  }
];

export default function ESGFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="esg-faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <HelpCircle className="w-4 h-4" /> FAQ
            </span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
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
