"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does AM Group provide?",
    a: "We offer integrated solutions across four core areas: business consulting (AM Consulting), creative design & branding (AM Design), accounting & financial services (AM Accounting), and data analytics & digital transformation (AM Analytiks). This allows our clients to benefit from a one-stop partner for strategy, growth, and operational success.",
  },
  {
    q: "In which countries do you operate?",
    a: "AM Group operates primarily across the GCC, with a strong presence in Bahrain, Saudi Arabia, and Oman. We combine international standards with deep regional expertise to serve businesses across the Gulf region.",
  },
  {
    q: "Who are your typical clients?",
    a: "We serve a diverse range of clients including startups, SMEs, and large enterprises across industries such as banking, real estate, healthcare, retail, and more. Our tailored approach ensures solutions that fit the unique context of each client.",
  },
  {
    q: "How is AM Group different from other firms?",
    a: "What sets us apart is our integrated, multidisciplinary approach. Rather than outsourcing to multiple agencies, clients work with a single trusted partner for consulting, design, accounting, and data analytics. Our philosophy is simple: we build partnerships, not transactions.",
  },
  {
    q: "How can I get started with your services?",
    a: "Getting started is easy. Simply reach out via our contact form, call us at +973 33320643, or book a free 30-minute consultation with our team. We will analyze your business needs and recommend the best path forward.",
  },
];

export default function AboutFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#020817] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5">
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading mb-4">
            Need Help? <span className="text-[#6373f2]">Start Here.</span>
          </h2>
          <p className="text-gray-500 text-lg">At the forefront of change, we turn challenges into opportunities for growth.</p>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left group"
              >
                <span className={`font-bold text-base transition-colors duration-200 ${open === i ? "text-[#6373f2]" : "text-[#020817] group-hover:text-[#6373f2]"}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-[#6373f2] text-white" : "bg-gray-100 text-gray-400"}`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-5">Still have questions? We&apos;d love to hear from you.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/#consultation"
            className="inline-flex items-center gap-3 bg-[#020817] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6373f2] transition-all duration-300"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
