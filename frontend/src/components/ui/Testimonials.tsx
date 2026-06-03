"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Working with AM Consulting has been a turning point for us at 9 Origins Coffee. Their team analyzed our marketing and business strategies in depth, helping us revive operations and define a clear growth path. With their hands-on consulting and practical recommendations, we've seen great improvement in customer engagement and profitability. They truly understand what it takes to help a business grow sustainably and remain a trusted partner in our success journey.",
    company: "9 Origins Coffee",
    role: "Chief Executive Officer",
    initial: "9",
  },
  {
    quote: "We partnered with AM Accounting to bring structure and clarity to our financial management. Their team helped us set up proper systems, streamline reporting, and establish strong internal procedures. This made our operations smoother and gave us complete confidence in our financial accuracy. They've been professional, responsive, and a valuable part of our clinic's continued growth.",
    company: "All Care Pet Clinic",
    role: "Marketing Director",
    initial: "A",
  },
  {
    quote: "AM Accounting has been our trusted partner for quite some time. They've done an excellent job maintaining our books, managing compliance, and guiding us through the Tamkeen support process. Their attention to detail and proactive guidance have been a huge asset for us. The team is professional, reliable, and always available for support. Highly recommended.",
    company: "Ibtisama Aesthetic Dental Clinic",
    role: "Clinic Director",
    initial: "I",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="testimonial-layout"
        >
          {/* Left — heading & nav */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">Client Stories</span>
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
                marginBottom: "2.5rem",
              }}
            >
              What Our{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                Clients Say
              </em>
            </h2>

            {/* Navigation */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
              <button
                onClick={prev}
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1px solid var(--border-medium)",
                  background: "var(--bg-main)",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  borderRadius: "50%",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--color-primary)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-main)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-medium)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                }}
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1px solid var(--border-medium)",
                  background: "var(--bg-main)",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  borderRadius: "50%",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--color-primary)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-main)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-medium)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                }}
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    height: "3px",
                    width: i === current ? "48px" : "24px",
                    background: i === current ? "var(--color-primary)" : "var(--border-medium)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.4s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — testimonial card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  background: "var(--bg-main)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 10px 40px rgba(15, 23, 42, 0.04)",
                  padding: "4rem",
                  position: "relative",
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "6rem",
                    lineHeight: 0.8,
                    color: "var(--color-accent-soft)",
                    position: "absolute",
                    top: "2.5rem",
                    left: "2.5rem",
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                    marginBottom: "3rem",
                    position: "relative",
                    zIndex: 2,
                    marginTop: "1.5rem",
                  }}
                >
                  {t.quote}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "var(--bg-alt)",
                      border: "1px solid var(--border-medium)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      flexShrink: 0,
                      borderRadius: "50%",
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {t.company}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: "0.125rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .testimonial-layout {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </section>
  );
}
