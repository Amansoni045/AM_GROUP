"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Diamond } from "lucide-react";

const whatWeDo = [
  "Logo & Visual Identity Design",
  "Color Palette, & Typography",
  "Brand Strategy & Positioning",
  "Brand Guidelines & Usage Rules",
  "Print & Packaging Design"
];

const deliverables = [
  "Primary Logo System",
  "Iconography System",
  "Brand Style Guide",
  "Visual Assets & Brand Elements",
  "Secondary Logo & Variations",
  "Branded Templates"
];

export default function BrandingServicesList() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="branding-list">
      <div className="max-w-7xl mx-auto">
        
        {/* What We Do & Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <h3 className="text-3xl font-bold text-[#020817] mb-8 font-heading">What We Do?</h3>
            <ul className="space-y-4">
              {whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Diamond className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
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
            <h3 className="text-3xl font-bold text-[#020817] font-heading">Our Approach</h3>
            <div className="w-16 h-1 bg-[#6373f2] rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              We begin by understanding your business, audience, and market positioning. Then we convert that strategy into a visual system that is memorable, scalable, and built for long-term growth.
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
          <h3 className="text-3xl font-bold text-[#020817] font-heading mb-4">Deliverables You Receive</h3>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group"
            >
              <CheckCircle2 className="w-6 h-6 text-[#6373f2] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#020817]">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
