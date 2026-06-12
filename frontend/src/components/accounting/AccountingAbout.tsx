"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AccountingAbout() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="about-accounting">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="eyebrow">About AM Accounting</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8 font-heading">
              Streamlining <span className="text-[var(--color-accent)]">Finance</span>,<br />
              Powering <span className="text-[var(--color-accent)]">Growth</span>
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

          {/* Right Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center p-12 bg-white rounded-3xl border border-[var(--border-light)] shadow-xl shadow-black/5 relative overflow-hidden h-[350px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-soft)] to-transparent opacity-50 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-[40px] -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent-soft)] rounded-full blur-[40px] -z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <img 
                src="/logo.webp" 
                alt="AM Group Logo" 
                className="h-20 w-auto object-contain mb-6 transition-transform duration-500 hover:scale-105" 
              />
              <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-4" />
              <h3 className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                AM <span className="text-[var(--color-accent)]">Accounting</span>
              </h3>
              <p className="font-body text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mt-2">
                Financial Clarity & Compliance
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
