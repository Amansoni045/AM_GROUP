"use client";
import React from "react";
import { motion } from "framer-motion";

const clients = [
  "9 Origins Coffee", "All Care Pet Clinic", "Ibtisama Dental Clinic",
  "Al Rawabi School", "GFH", "AM Terminale", "Viacloud",
  "CNT", "Life Co.", "Saud Bahwan", "OMANTEL", "Haji Hassan",
  "RWAQ", "MOJ Oman", "Supreme Council", "Elm", "Nama Group", "CBO",
];

export default function Clients() {
  const row1 = [...clients, ...clients, ...clients];
  const row2 = [...[...clients].reverse(), ...[...clients].reverse(), ...clients];

  return (
    <section
      id="clients"
      style={{
        background: "var(--bg-main)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        overflow: "hidden",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      {/* Section title */}
      <div
        className="section-px"
        style={{ marginBottom: "3.5rem" }}
      >
        <div className="container-max" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">Trusted By</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Over{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>200+</em>{" "}
              Companies Trust AM Group
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "400px",
            }}
          >
            From startups to established enterprises across the GCC — our clients trust us as their long-term growth partner.
          </motion.div>
        </div>
      </div>

      {/* Marquee rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {/* Row 1 */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            borderBottom: "1px solid var(--border-light)",
            background: "var(--bg-alt)",
            overflow: "hidden",
          }}
        >
          <div className="animate-marquee">
            {row1.map((client, i) => (
              <div
                key={`r1-${i}`}
                style={{
                  flexShrink: 0,
                  width: "220px",
                  borderRight: "1px solid var(--border-light)",
                  padding: "2rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{
            borderBottom: "1px solid var(--border-light)",
            background: "var(--bg-main)",
            overflow: "hidden",
          }}
        >
          <div className="animate-marquee-reverse">
            {row2.map((client, i) => (
              <div
                key={`r2-${i}`}
                style={{
                  flexShrink: 0,
                  width: "220px",
                  borderRight: "1px solid var(--border-light)",
                  padding: "2rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
