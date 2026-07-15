"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const divisions = [
  {
    name: "AM Consulting",
    tagline: "Strategic Advisory & Growth",
    desc: "Expert consulting services, corporate advisory, market entry strategy, and ESG solutions for sustainable growth across the GCC.",
    href: "/consulting",
    number: "01",
  },
  {
    name: "AM Accounting",
    tagline: "Financial Clarity & Compliance",
    desc: "Comprehensive accounting, bookkeeping, VAT advisory, audit support, and financial reporting to keep your business in order.",
    href: "/accounting",
    number: "02",
  },
  {
    name: "AM Design",
    tagline: "Brand Identity & Creative Direction",
    desc: "Visual identity, branding, web design, and social media management that positions your business with clarity and distinction.",
    href: "/design",
    number: "03",
  },
  {
    name: "AM Technology",
    tagline: "Data Intelligence & Digital Transformation",
    desc: "Advanced data analytics, automation, digital transformation, and app development to accelerate operational excellence.",
    href: "/technology",
    number: "04",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      style={{
        background: "var(--bg-alt)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px w-full"
    >
      <div className="container-max w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="eyebrow">Our Divisions</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                maxWidth: "500px",
                letterSpacing: "-0.01em",
              }}
            >
              One Partner.{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                Endless Possibilities.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "420px",
              }}
            >
              We bring together four specialised divisions under one trusted name - delivering integrated solutions that address the full spectrum of business needs.
            </p>
          </div>
        </motion.div>

        {/* Divisions Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
            border: "1px solid var(--border-light)",
            background: "var(--bg-main)",
          }}
          className="divisions-grid"
        >
          {divisions.map((div, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <Link
                href={div.href}
                style={{
                  display: "block",
                  padding: "3rem 2.5rem",
                  borderBottom: i < divisions.length - 1 ? "1px solid var(--border-light)" : "none",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                className="division-card"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      paddingTop: "0.2rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {div.number}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.75rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            lineHeight: 1.2,
                            marginBottom: "0.25rem",
                          }}
                        >
                          {div.name}
                        </h3>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-accent)",
                            fontWeight: 500,
                          }}
                        >
                          {div.tagline}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          border: "1px solid var(--border-medium)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-primary)",
                          flexShrink: 0,
                          transition: "all 0.3s ease",
                        }}
                        className="division-arrow"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "40px",
                        height: "1px",
                        background: "var(--border-medium)",
                        margin: "1.5rem 0",
                      }}
                    />

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                      }}
                    >
                      {div.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Operating Presence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: "4rem",
            width: "100%",
          }}
          className="presence-block"
        >
          {/* Eyebrow */}
          <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
            <span className="eyebrow">Our Presence</span>
          </div>

          {/* Heading */}
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            Operating Across <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>the Gulf Region</span>
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "720px",
              margin: "0 auto 3.5rem",
              textAlign: "center",
            }}
          >
            From our headquarters in Bahrain, we serve clients in Saudi Arabia, Oman, and UAE - navigating each market&apos;s unique regulatory, cultural, and commercial landscape.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Bahrain",
                flag: "🇧🇭",
                status: "HEADQUARTERS",
                desc: "Headquartered in Bahrain, we partner with businesses at every stage of their journey, providing practical support across strategic, financial, regulatory, and technology matters."
              },
              {
                name: "Saudi Arabia",
                flag: "🇸🇦",
                status: "ACTIVE OPERATIONS",
                desc: "Supporting businesses across the Kingdom with market entry, compliance, financial advisory, and technology-driven transformation aligned with Vision 2030."
              },
              {
                name: "Oman",
                flag: "🇴🇲",
                status: "ACTIVE OPERATIONS",
                desc: "Partnering with businesses across Muscat to provide strategic guidance, regulatory support, financial expertise, operational improvement, and digital transformation."
              },
              {
                name: "UAE",
                flag: "🇦🇪",
                status: "ACTIVE OPERATIONS",
                desc: "From market entry to business growth and ongoing operations, we work alongside our clients as a trusted partner, providing support on strategic, regulatory, and operational matters."
              }
            ].map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="info-card group"
              >
                <div className="info-card-top-bar" />
                <div style={{ fontSize: "2rem", marginBottom: "1.25rem", display: "inline-block" }}>
                  {country.flag}
                </div>
                <h4 className="info-card-title" style={{ marginBottom: "0.25rem" }}>
                  {country.name}
                </h4>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                  }}
                >
                  {country.status}
                </div>
                <p className="info-card-desc" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {country.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .divisions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .divisions-grid > div:nth-child(odd) > a {
            border-right: 1px solid var(--border-light);
          }
          .divisions-grid > div:nth-child(1) > a,
          .divisions-grid > div:nth-child(2) > a {
            border-bottom: 1px solid var(--border-light) !important;
          }
          .divisions-grid > div:nth-child(3) > a,
          .divisions-grid > div:nth-child(4) > a {
            border-bottom: none !important;
          }
        }
        @media (max-width: 767px) {
          .division-card {
            padding: 1.5rem 1.25rem !important;
          }
          .presence-block {
            margin-top: 3rem !important;
          }
        }
        .division-card:hover {
          background: #FFFFFF !important;
        }
        .division-card:hover .division-arrow {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: white;
          transform: rotate(-45deg);
        }
      `}</style>
    </section>
  );
}
