"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Diamond } from "lucide-react";

const whatWeDo = [
  "Blog Posts, Website Copy & Article Writing",
  "Product/Service Messaging & Positioning",
  "Social Content, Visuals & Creative Assets",
  "Content Strategy & Audience Segmentation",
  "SEO Content Optimization & Refresh",
  "Performance Tracking & Content Analytics"
];

const deliverables = [
  "Content Calendar / Content Publishing Plan",
  "Copywriting + Creative Assets Open Files",
  "Keyword-Aligned & SEO-driven Content"
];

export default function ContentServicesList() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="content-list">
      <div className="max-w-7xl mx-auto">
        
        {/* What We Do & Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-card group p-10"
          >
            <div className="info-card-top-bar" />
            <h3 className="info-card-title mb-8 z-10">What We Do?</h3>
            <ul className="space-y-4 z-10">
              {whatWeDo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Diamond className="w-5 h-5 text-[var(--color-accent)] fill-[var(--color-accent)] shrink-0" />
                  <span className="text-gray-600 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold font-heading" style={{ color: "var(--color-accent)" }}>Our Approach</h3>
            <div className="w-16 h-1 bg-black rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              We craft data-driven content that resonates with your target audience, driving engagement and building long-lasting relationships while elevating your brand&apos;s voice.
            </p>
          </motion.div>
        </div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading mb-4">Deliverables You Receive</h3>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="info-card group flex flex-row items-center gap-4 p-6"
            >
              <div className="info-card-top-bar" />
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform shrink-0 z-10" />
              <span className="font-bold text-[var(--text-primary)] z-10">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
