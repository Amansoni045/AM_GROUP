"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Accounting & Bookkeeping",
  "Advisory Services",
  "Application Development",
  "Audit & Compliance",
  "Business Consulting",
  "Data Analytics",
  "Digital Transformation",
  "ESG Consulting",
  "Governance, Risk & Compliance",
  "Marketing & Social Media",
  "VAT Advisory",
  "Website Development",
];

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", service: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", company: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="consultation"
      style={{
        background: "var(--bg-main)",
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
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">Free Consultation</span>
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
                marginBottom: "1.25rem",
              }}
            >
              Book a{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                Strategy Session
              </em>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Fill out the form to book a complimentary 30-minute consultation with our experts. We&apos;ll analyze your business needs and chart the best path forward - with no obligation.
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "30-Minute Strategy Session",
                "Expert Industry Advisors",
                "Tailored Action Plan",
                "No Obligation Whatsoever",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      background: "var(--color-accent-soft)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div
              style={{
                marginTop: "3.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <a
                href="tel:+97333320643"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <div style={{ width: "32px", height: "32px", border: "1px solid var(--border-medium)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                +973 33320643
              </a>
              <a
                href="mailto:info@amgroupbh.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <div style={{ width: "32px", height: "32px", border: "1px solid var(--border-medium)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@amgroupbh.com
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              style={{
                background: "var(--bg-alt)",
                border: "1px solid var(--border-light)",
                padding: "3.5rem",
              }}
              className="consultation-form-card"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "4rem",
                    paddingBottom: "4rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "var(--bg-main)",
                      border: "1px solid var(--border-medium)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Thank You
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    We&apos;ve received your request and will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.5rem",
                    }}
                    className="form-row"
                  >
                    {/* Name */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="am-input"
                      />
                    </div>

                    {/* Company */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="am-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="am-input"
                    />
                  </div>

                  {/* Service */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="am-input"
                      style={{ cursor: "pointer", appearance: "none" }}
                    >
                      <option value="">Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business needs..."
                      className="am-input"
                      style={{ resize: "none" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ marginTop: "0.75rem", width: "100%", justifyContent: "center", padding: "1.25rem" }}
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .consultation-form-card {
            padding: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
