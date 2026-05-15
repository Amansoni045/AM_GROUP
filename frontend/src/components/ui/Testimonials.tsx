"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Working with AM Consulting has been a turning point for us at 9 Origins Coffee. Their team analyzed our marketing and business strategies in depth, helping us revive operations and define a clear growth path. With their hands-on consulting and practical recommendations, we've seen great improvement in customer engagement and profitability. They truly understand what it takes to help a business grow sustainably and remain a trusted partner in our success journey.",
    company: "9 Origins Coffee",
    role: "CEO",
    initial: "9",
    color: "#6373f2"
  },
  {
    quote: "We partnered with AM Accounting to bring structure and clarity to our financial management. Their team helped us set up proper systems, streamline reporting, and establish strong internal procedures. This made our operations smoother and gave us complete confidence in our financial accuracy. They've been professional, responsive, and a valuable part of our clinic's continued growth, helping us maintain stability and focus on what truly matters—our patients and our services.",
    company: "All Care Pet Clinic",
    role: "Marketing Director",
    initial: "A",
    color: "#059669"
  },
  {
    quote: "AM Accounting has been our trusted partner for quite some time. They've done an excellent job maintaining our books, managing compliance, and guiding us through the Tamkeen support process. Their attention to detail and proactive guidance have been a huge asset for us. The team is professional, reliable, and always available for support. Highly recommended for any business looking for accuracy, structure, and dependable financial expertise without any financial concerns.",
    company: "Ibtisama Aesthetic Dental Clinic",
    role: "Doctor",
    initial: "I",
    color: "#d4af37"
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-28 px-4 md:px-12 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#6373f2]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#6373f2] text-sm font-bold uppercase tracking-widest">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#020817] mb-4 font-heading">Hear From Our Customers</h2>
          <div className="w-20 h-1 bg-[#d4af37] rounded mx-auto" />
        </motion.div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`relative bg-white rounded-2xl p-8 border shadow-lg cursor-pointer transition-all duration-300 overflow-hidden group
                ${i === current ? "border-[#6373f2] shadow-[#6373f2]/20 shadow-xl" : "border-gray-100 hover:border-gray-200 hover:shadow-md"}`}
            >
              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500"
                style={{ background: i === current ? t.color : "#e5e7eb" }}
              />

              {/* Large gold quote mark */}
              <div className="text-7xl font-black leading-none mb-4" style={{ color: `${t.color}30` }}>&ldquo;&rdquo;</div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-5">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: t.color }}>{t.company}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#6373f2] hover:text-[#6373f2] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-3 bg-[#6373f2]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#6373f2] hover:text-[#6373f2] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
