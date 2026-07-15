"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with AM Consulting was a genuine turning point for our business. They went deep on our strategy, identified what wasn't working, and helped us rebuild with a clear growth path. Customer engagement and profitability have both improved significantly since we started working together.",
    company: "9 Origins Coffee",
    role: "CHIEF EXECUTIVE OFFICER",
  },
  {
    quote: "AM Accounting gave us the financial structure we didn't know we needed. They set up our reporting systems, handled our VAT compliance, and gave us complete confidence in our numbers. Professional, proactive, and always available when we need them.",
    company: "All Care Pet Clinic",
    role: "MARKETING DIRECTOR",
  },
  {
    quote: "We've been with AM Accounting for years and the consistency is remarkable. Our books are always in order, compliance is handled without stress, and they even guided us through the Tamkeen process. For any clinic or SME looking for reliable financial expertise - look no further.",
    company: "Ibtisama Aesthetic Dental",
    role: "DOCTOR & PRACTICE OWNER",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--bg-alt)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px"
    >
      <div className="container-max">
        {/* Header layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
          }}
          className="testimonial-header"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">Client Testimonials</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              What Our{" "}
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                Clients Say
              </em>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "500px",
              }}
            >
              Don&apos;t take our word for it. Here&apos;s what business owners across Bahrain and the GCC say about working with AM Group.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="testimonial-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="info-card testimonial-card"
              style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column" }}
            >
              {/* Gold Quote Mark */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                &ldquo;
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  flexGrow: 1,
                }}
              >
                {t.quote}
              </p>

              {/* Separator */}
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: "var(--color-accent)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Author Details */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.company}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .testimonial-header {
            grid-template-columns: 1fr 1fr !important;
          }
          .testimonial-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .testimonial-card {
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
