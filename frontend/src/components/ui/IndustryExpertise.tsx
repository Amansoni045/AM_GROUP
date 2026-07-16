"use client";
import React from "react";
import { motion } from "framer-motion";

const industries = [
  "Banking & Financial Services",
  "Real Estate & Construction",
  "Oil & Gas",
  "Energy & Utilities",
  "Healthcare & Pharmaceuticals",
  "Education & Training",
  "Hospitality & Tourism",
  "Transportation & Logistics",
  "Retail & Consumer Goods",
  "Manufacturing & Industrial",
  "Telecommunications & IT",
  "Media & Entertainment",
];

export default function IndustryExpertise() {
  return (
    <section
      id="industries"
      style={{
        background: "var(--bg-alt)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px"
    >
      <div className="container-max">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="industry-layout"
        >
          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <span className="eyebrow">Sectors We Serve</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              }}
            >
              Industry{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Expertise</em>
            </h2>

            {/* Long paragraph — hidden on mobile via CSS */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
              className="industry-desc"
            >
              From the very beginning, we have been committed to guiding businesses across diverse industries with strategic insights, practical solutions, and sustainable growth strategies. Our experience spans multiple sectors, enabling us to deliver tailored advisory and consulting services that drive measurable results.
            </p>

            {/* Stats badge — full on desktop, compact inline on mobile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                border: "1px solid var(--border-light)",
                background: "var(--bg-main)",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.03)",
              }}
              className="industry-badge"
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  12+ Industries
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginTop: "0.2rem",
                    fontWeight: 500,
                  }}
                >
                  Sectors Served Across the GCC
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — industry list */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "1px solid var(--border-light)",
                background: "var(--bg-main)",
              }}
              className="industry-list-grid"
            >
              {industries.map((industry, i) => {
                const isRight = i % 2 !== 0;
                const isLastRow = i >= industries.length - 2;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    style={{
                      padding: "1.25rem 1.5rem",
                      borderRight: !isRight ? "1px solid var(--border-light)" : "none",
                      borderBottom: !isLastRow ? "1px solid var(--border-light)" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      transition: "background 0.3s ease",
                      cursor: "default",
                    }}
                    className="industry-row"
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "var(--color-accent)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {industry}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .industry-layout {
            grid-template-columns: 1fr 1.2fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 767px) {
          .industry-layout {
            gap: 1.25rem !important;
          }
          /* Hide long paragraph on mobile — too tall */
          .industry-desc {
            display: none !important;
          }
          /* Compact badge */
          .industry-badge {
            padding: 0.75rem 1rem !important;
            gap: 0.75rem !important;
            margin-bottom: 0 !important;
          }
          .industry-badge > div:first-child {
            width: 36px !important;
            height: 36px !important;
          }
          /* Industry list rows */
          .industry-row {
            padding: 0.65rem 0.75rem !important;
            gap: 0.5rem !important;
          }
          .industry-row span {
            font-size: 0.78rem !important;
          }
          .industry-list-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          /* Compact heading */
          .industry-layout h2 {
            margin-bottom: 0.75rem !important;
          }
        }
        .industry-row:hover {
          background: var(--bg-alt) !important;
        }
      `}</style>
    </section>
  );
}
