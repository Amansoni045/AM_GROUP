"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AccountingAbout() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="about-accounting">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#020817] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              About AM Accounting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#020817] leading-tight mb-8 font-heading">
              Streamlining <span className="text-[#6373f2]">Finance</span>,<br />
              Powering <span className="text-[#d4af37]">Growth</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At AM Accounting, our team is more than a group of consultants. We are a collaborative team of professionals bringing diverse industry expertise to every engagement.
              </p>
              <p>
                We foster a culture of open communication and knowledge sharing, ensuring our clients have direct access to dedicated experts who are invested in their long-term success.
              </p>
            </div>
          </motion.div>

          {/* Right Stats Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <div className="bg-[#f9f9f9] rounded-3xl p-10 border border-gray-100 shadow-md group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-[40px] -z-0 group-hover:bg-[#d4af37]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-[#020817] font-heading">15</span>
                  <span className="text-4xl font-bold text-[#d4af37]">+</span>
                </div>
                <div className="w-12 h-1 bg-[#6373f2] rounded mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Years of Experience</h3>
                <p className="text-gray-500 text-sm mt-2">Delivering trusted financial management in the GCC.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#020817] rounded-3xl p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden sm:translate-y-8">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6373f2]/20 rounded-full blur-[40px] -z-0 group-hover:bg-[#6373f2]/30 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-white font-heading">83</span>
                  <span className="text-4xl font-bold text-[#d4af37]">+</span>
                </div>
                <div className="w-12 h-1 bg-[#d4af37] rounded mb-4" />
                <h3 className="text-xl font-bold text-white">Projects</h3>
                <p className="text-gray-400 text-sm mt-2">Successfully completed across various industries.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
