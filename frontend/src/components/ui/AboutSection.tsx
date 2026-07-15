"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function useCountUp(target: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

const stats = [
  { value: 105, suffix: "+", label: "Projects Completed" },
  { value: 10,  suffix: "+", label: "Years of Experience" },
  { value: 210, suffix: "+", label: "Clients Served" },
  { value: 4,   suffix: "",  label: "Operating Countries" },
];

function StatCounter({ value, suffix, label, animate }: {
  value: number; suffix: string; label: string; animate: boolean;
}) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          fontWeight: 600,
          color: "var(--color-accent)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginTop: "0.5rem",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateStats(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "var(--bg-main)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px"
    >
      <div className="container-max">
        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
            marginBottom: "3rem",
          }}
          className="about-grid"
        >
          {/* Left — Image & Mission/Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            <div style={{ position: "relative", maxWidth: "480px", width: "100%" }} className="about-img-wrap">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                }}
              >
                <img
                  src="/am-group.webp"
                  alt="AM Group Team"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                {/* Soft gold corner accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "40%",
                    height: "40%",
                    borderBottom: "4px solid var(--color-accent)",
                    borderRight: "4px solid var(--color-accent)",
                    zIndex: 2,
                  }}
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "0",
                  background: "var(--bg-main)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "var(--bg-alt)",
                    border: "1px solid var(--border-medium)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--color-primary)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-primary)" }}>
                    Trusted Since 2016
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    10+ Years of Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginTop: "2rem" }} className="mv-grid">
              <div className="bg-[var(--bg-alt)] rounded-xl p-5 border border-[var(--border-light)] shadow-sm">
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-heading">Our Mission</h3>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  To deliver tailored consulting, design, accounting and technical solutions that foster sustainable growth, operational efficiency, and market relevance for businesses across the Gulf region.
                </p>
              </div>
              <div className="bg-[var(--bg-alt)] rounded-xl p-5 border border-[var(--border-light)] shadow-sm">
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-heading">Our Vision</h3>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  To be the leading consultancy in Bahrain, Saudi Arabia, Oman, and UAE, empowering businesses with strategy, creative design, and financial expertise while upholding innovation, integrity and excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="about-right-col"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span className="eyebrow">About Us</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Driven by{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Excellence</em>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              AM Group is a multidisciplinary firm bringing together{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Consulting, Advisory, Accounting, Design, Social Media Management, and Data Analytics
              </strong>{" "}
              under one trusted name. Founded with a vision to empower businesses across the GCC, we provide integrated solutions for today's complex challenges.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Whether guiding a startup, supporting an established enterprise, or enabling expansion into new markets - we stand by our clients every step of the way with a commitment to creating true value.
            </p>

            <Link
              href="/#services"
              className="btn-primary"
              onClick={e => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "var(--bg-alt)",
            border: "1px solid var(--border-light)",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0",
            marginTop: "3rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 1.5rem",
                borderRight: (i % 2 === 0) ? "1px solid var(--border-light)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
              }}
              className="stat-cell"
            >
              <StatCounter {...stat} animate={animateStats} />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
            align-items: start !important;
          }
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .stats-grid > div {
            border-right: 1px solid var(--border-light) !important;
            border-bottom: none !important;
          }
          .stats-grid > div:last-child {
            border-right: none !important;
          }
        }
        @media (max-width: 767px) {
          .mv-grid {
            grid-template-columns: 1fr !important;
          }
          .about-img-wrap {
            max-width: 100% !important;
          }
          .about-grid {
            margin-bottom: 2rem !important;
          }
          .stat-cell {
            padding: 1.5rem 1rem !important;
          }
          .stats-grid {
            margin-top: 2rem !important;
          }
        }
        @media (min-width: 1024px) {
          .about-right-col {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
