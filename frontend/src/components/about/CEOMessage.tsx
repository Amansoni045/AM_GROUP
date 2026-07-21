"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CEOMessage() {
  return (
    <section className="bg-[var(--bg-alt)] pt-24 pb-28 px-4 md:px-12 relative overflow-hidden" id="ceo">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent-soft)] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Message from the CEO</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Leading with Vision,<br /><span className="text-[var(--color-accent)]">Growing with Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              For over <span className="text-[var(--color-accent)] font-bold">25 years</span>, I&apos;ve witnessed the MENA region&apos;s dynamic growth. In 2016, inspired by my father&apos;s entrepreneurial spirit, I founded <span className="text-[var(--color-accent)] font-bold">AM Group</span> - uniting Consulting, Design, and Accounting under one trusted name.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              At AM, we know every business faces unique challenges. That&apos;s why our multidisciplinary team combines strategy, creativity, and financial expertise to help clients grow, build strong brands, and achieve lasting success.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              What sets us apart is our philosophy: we build <span className="text-[var(--color-accent)] font-bold">partnerships, not transactions</span> - focusing on open communication, collaboration, and long-term impact.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Today, across Bahrain, Saudi Arabia, Oman, and UAE, our mission remains clear: to deliver integrated solutions that inspire transformation, drive innovation, and empower businesses for a brighter future.
            </p>
            <div className="pt-4">
              <p
                className="text-[var(--color-primary)] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "2.25rem", lineHeight: 1 }}
              >
                Ravi Mehta
              </p>
              <p className="text-[var(--text-primary)] font-bold text-lg font-heading">Ravi Mehta</p>
              <p className="text-[var(--color-accent)] text-sm font-medium">Chief Executive Officer</p>
            </div>
          </motion.div>

          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, x: 40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="bg-white border border-[var(--border-light)] rounded-3xl p-8 text-center w-full shadow-lg shadow-black/5">
              <div className="w-48 h-48 rounded-full border-[6px] border-[var(--color-accent)] mx-auto mb-6 overflow-hidden bg-[var(--color-primary)]/10 flex items-center justify-center shadow-md">
                <span className="text-6xl font-bold text-[var(--color-accent)]">RM</span>
              </div>
              <p
                className="text-[var(--color-primary)]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "1.75rem", lineHeight: 1 }}
              >
                Ravi Mehta
              </p>
              <h3 className="text-[var(--text-primary)] text-2xl font-bold font-heading mt-2 mb-1">Ravi Mehta</h3>
              <p className="text-[var(--color-accent)] text-md font-medium">Chief Executive Officer</p>
              <div className="w-12 h-[1px] bg-[var(--color-accent)] mx-auto my-5" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[var(--color-primary)] text-2xl font-bold font-heading">25+</p>
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-[var(--color-primary)] text-2xl font-bold font-heading">2016</p>
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mt-1">Founded AM Group</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
