"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    title: "Your Partner\nin Growth",
    desc: "Empowering businesses across the GCC with integrated consulting, accounting, and strategic solutions.",
    image: "/WhatsApp-Image-2025-10-05-at-19.49.59-1.webp",
  },
  {
    title: "Success in\nthe Middle East",
    desc: "Bridging traditional values with modern expertise to drive sustainable, long-term growth.",
    image: "/WhatsApp-Image-2025-09-26-at-18.26.13_23ba2070-1.webp",
  },
  {
    title: "Transform\nYour Vision",
    desc: "Turning ambitious ideas into measurable impact with expert design and data intelligence.",
    image: "/shutterstock_2302318791-1-scaled-1024x683-1.webp",
  },
  {
    title: "Heritage Meets\nInnovation",
    desc: "Your trusted advisor for financial excellence and operational efficiency across Bahrain, KSA, and Oman.",
    image: "/WhatsApp-Image-2025-09-26-at-18.30.32_83b14124 (1).webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Full-page Background Images with crossfade */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Dark overlay — ensures text is ALWAYS visible */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.55) 60%, rgba(10,20,40,0.30) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content — z-index above the overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
        className="section-px"
      >
        <div className="container-max" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#B4975A",
              }}
            >
              AM Group — Partner in Growth
            </span>
            <span style={{ display: "block", width: "40px", height: "1px", background: "#B4975A", flexShrink: 0 }} />
          </motion.div>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${current}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.2rem, 6.5vw, 6rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                whiteSpace: "pre-line",
                maxWidth: "700px",
              }}
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "500px",
              }}
            >
              {slide.desc}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            <a
              href="/#consultation"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "#B4975A",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "0.9rem 2rem",
                border: "1px solid #B4975A",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B4975A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#B4975A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
              }}
            >
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#services"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "0.9rem 2rem",
                border: "1px solid rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFFFFF";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "flex-start",
          paddingBottom: "3rem",
        }}
        className="section-px"
      >
        <div className="container-max" style={{ display: "flex", gap: "0.5rem" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                background: i === current ? "#B4975A" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                height: "2px",
                width: i === current ? "48px" : "24px",
                padding: 0,
                transition: "width 0.4s ease, background 0.3s ease",
                borderRadius: "1px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
