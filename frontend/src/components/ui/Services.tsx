"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  { label: "Advisory Services",                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Business Consulting",               icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "ESG Consulting",                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Accounting & Bookkeeping",          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "VAT Advisory",                      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "Audit & Compliance",                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Marketing & Social Media",          icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
  { label: "Website Development",               icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { label: "Application Development",           icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { label: "Data Analytics",                    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
  { label: "Governance, Risk & Compliance",     icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Digital Transformation",            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--bg-alt)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px"
    >
      <div className="container-max">
        {/* Services for Every Business Need Section */}
        <div style={{ marginBottom: "5.5rem" }} className="services-block-1">
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                maxWidth: "500px",
              }}
            >
              Services for <br />
              Every <span style={{ color: "var(--color-accent)" }}>Business Need</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "460px",
              }}
            >
              Whether you need one service or all four, we scale to fit your business - with no unnecessary complexity and no wasted time.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mobile-2col">
            {[
              {
                title: "AM Consulting",
                color: "#704b81",
                soft: "rgba(112,75,129,0.1)",
                items: [
                  "Advisory Services",
                  "Business Consulting",
                  "ESG & Sustainability",
                  "Governance, Risk & Compliance",
                  "Market Entry Strategy"
                ]
              },
              {
                title: "AM Accounting",
                color: "#016abf",
                soft: "rgba(1,106,191,0.1)",
                items: [
                  "Accounting & Bookkeeping",
                  "VAT Advisory & Filing",
                  "Audit & Compliance",
                  "Financial Reporting",
                  "Tamkeen & Government Programs"
                ]
              },
              {
                title: "AM Design",
                color: "#db4319",
                soft: "rgba(219,67,25,0.1)",
                items: [
                  "Brand Identity & Logo Design",
                  "Website Design & Development",
                  "Social Media Management",
                  "Marketing Collateral",
                  "Application Development"
                ]
              },
              {
                title: "AM Technology",
                color: "#0d9488",
                soft: "rgba(13,148,136,0.1)",
                items: [
                  "Data Analytics & Business Intelligence",
                  "Digital Transformation",
                  "Performance Dashboards",
                  "Automation & Integration",
                  "Technology Advisory"
                ]
              }
            ].map((div, idx) => (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" style={{ background: div.color }} />
                <div className="flex items-center gap-3 border-b border-[var(--border-light)] pb-3 mb-4">
                  <span
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.6rem",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: div.soft,
                      color: div.color,
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1,
                    }}
                  >
                    AM
                  </span>
                  <h3 className="info-card-title" style={{ margin: 0, color: div.color }}>
                    {div.title.replace("AM ", "")}
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem", flexGrow: 1 }}>
                  {div.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: div.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div
          style={{
            height: "1px",
            background: "var(--border-light)",
            margin: "5.5rem 0 5rem",
            width: "100%",
          }}
          className="services-divider"
        />

        {/* Original Grid: Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="eyebrow">What We Offer</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "2rem",
              justifyContent: "space-between",
            }}
          >
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
              Our Services
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "440px",
              }}
            >
              At AM Group, we are passionate about creating real impact - delivering measurable results through strategies built on insight, innovation, and excellence.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            border: "1px solid var(--border-light)",
            background: "var(--bg-main)",
          }}
          className="services-grid"
        >
          {services.map((service, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  cursor: "default",
                  transition: "background 0.3s ease",
                }}
                className="service-item"
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    border: "1px solid var(--border-medium)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-main)",
                    transition: "all 0.3s ease",
                  }}
                  className="service-icon"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ color: "var(--color-primary)", transition: "color 0.3s ease" }}
                    className="service-svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>

                {/* Label */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {service.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Default: 2 cols on mobile */
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .service-item {
          border-right: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .services-grid > div:nth-child(2n) {
          border-right: none;
        }
        .services-grid > div:nth-last-child(-n+2) {
          border-bottom: none;
        }
        .service-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 639px) {
          .service-item {
            padding: 0.875rem 0.75rem !important;
            gap: 0.75rem !important;
          }
          .service-item p {
            font-size: 0.8rem !important;
          }
          .service-icon {
            width: 36px !important;
            height: 36px !important;
          }
          .service-svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .service-item {
            border-right: 1px solid var(--border-light) !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
          .services-grid > div:nth-child(2n) {
            border-right: 1px solid var(--border-light) !important;
          }
          .services-grid > div:nth-child(3n) {
            border-right: none !important;
          }
          .services-grid > div:nth-last-child(-n+3) {
            border-bottom: none !important;
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .service-item {
            border-right: 1px solid var(--border-light) !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
          .services-grid > div:nth-child(3n) {
            border-right: 1px solid var(--border-light) !important;
          }
          .services-grid > div:nth-child(4n) {
            border-right: none !important;
          }
          .services-grid > div:nth-last-child(-n+4) {
            border-bottom: none !important;
          }
        }

        .service-item:hover {
          background: var(--bg-alt) !important;
        }
        .service-item:hover .service-icon {
          border-color: var(--color-accent) !important;
          background: var(--color-accent-soft) !important;
        }
        .service-item:hover .service-svg {
          color: var(--color-accent) !important;
        }
        @media (max-width: 767px) {
          .services-block-1 {
            margin-bottom: 2rem !important;
          }
          .services-divider {
            margin: 2rem 0 1.5rem !important;
          }
          /* Truncate brand card service lists to 3 items on mobile */
          .services-block-1 .info-card ul li:nth-child(n+4) {
            display: none !important;
          }
          .services-block-1 .info-card ul {
            gap: 0.5rem !important;
          }
          .services-block-1 .info-card ul li {
            font-size: 0.78rem !important;
          }
          .services-block-1 .info-card h3 {
            font-size: 0.95rem !important;
            padding-bottom: 0.5rem !important;
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
