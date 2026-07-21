"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AccountingAbout() {
  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="about-accounting">
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

          {/* Right Highlights Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="p-8 md:p-10 bg-white rounded-3xl border border-[var(--border-light)] shadow-xl shadow-black/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-soft)] to-transparent opacity-50 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-[40px] -z-0" />

            <div className="relative z-10">
              <p className="font-body text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase font-bold mb-6">Why AM Accounting</p>
              <div className="space-y-6">
                {[
                  { t: "Financial Accuracy", d: "Books, VAT and reporting handled with precision." },
                  { t: "Full Compliance", d: "Always aligned with local regulatory standards." },
                  { t: "Growth Support", d: "Guidance through Tamkeen and government programs." },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] leading-tight">{item.t}</h3>
                      <p className="font-body text-sm text-[var(--text-secondary)] mt-0.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
