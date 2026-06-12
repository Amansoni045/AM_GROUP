"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    badge: "BAHRAIN · SAUDI ARABIA · OMAN · UAE",
    titlePrefix: "The GCC's",
    titleAccent: "Integrated",
    titleSuffix: "Growth Partner",
    desc: "One firm. Four disciplines. Unlimited potential. AM Group brings together consulting, accounting, design, and technology so your business gets expert support at every stage — without juggling multiple agencies.",
    image: "/WhatsApp-Image-2025-09-26-at-18.30.32_83b14124 (1).webp", // Riyadh skyline background
  },
  {
    badge: "EXPERT CONSULTING & ADVISORY",
    titlePrefix: "Success in",
    titleAccent: "Middle East",
    titleSuffix: "Markets",
    desc: "Bridging traditional values with modern expertise to drive sustainable, long-term growth across regional economies.",
    image: "/WhatsApp-Image-2025-09-26-at-18.26.13_23ba2070-1.webp",
  },
  {
    badge: "DESIGN & TECHNOLOGY SOLUTIONS",
    titlePrefix: "Transform Your",
    titleAccent: "Corporate",
    titleSuffix: "Vision",
    desc: "Turning ambitious ideas into measurable impact with premium brand styling and advanced data intelligence.",
    image: "/shutterstock_2302318791-1-scaled-1024x683-1.webp",
  },
  {
    badge: "FINANCIAL & OPERATIONAL VALUE",
    titlePrefix: "Heritage Meets",
    titleAccent: "Operational",
    titleSuffix: "Innovation",
    desc: "Your trusted advisor for financial excellence and process efficiency across Bahrain, KSA, Oman, and UAE.",
    image: "/WhatsApp-Image-2025-10-05-at-19.49.59-1.webp",
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
        minHeight: "95vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Full-page Background Images with crossfade */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          <img
            src={slide.image}
            alt={slide.titleAccent}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Dark gradient overlay — ensures left-aligned text is ALWAYS readable while revealing right-side background details */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.7) 45%, rgba(15,23,42,0.2) 100%)",
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
        <div
          className="container-max"
          style={{
            paddingTop: "6rem",
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            width: "100%",
          }}
        >
          {/* Transition container to prevent height/layout shifts */}
          <div
            style={{
              width: "100%",
              minHeight: "clamp(440px, 44vw, 520px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                {/* Pill Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(15,23,42,0.5)",
                    borderRadius: "9999px",
                    padding: "0.45rem 1.25rem",
                    marginBottom: "2rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#B4975A",
                      marginRight: "0.6rem",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {slide.badge}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.8rem, 6.2vw, 5.2rem)",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    marginBottom: "1.75rem",
                    letterSpacing: "-0.01em",
                    maxWidth: "850px",
                    textAlign: "left",
                  }}
                >
                  {slide.titlePrefix && <span style={{ display: "block" }}>{slide.titlePrefix}</span>}
                  {slide.titleAccent && (
                    <span style={{ display: "block", color: "#B4975A", fontStyle: "italic", fontWeight: 400 }}>
                      {slide.titleAccent}
                    </span>
                  )}
                  {slide.titleSuffix && <span style={{ display: "block" }}>{slide.titleSuffix}</span>}
                </h1>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.85,
                    marginBottom: "2.5rem",
                    maxWidth: "560px",
                    textAlign: "left",
                    minHeight: "8.5rem",
                  }}
                >
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "flex-start" }}
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
                background: "#B4975A",
                color: "#0F172A",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "0.95rem 2.2rem",
                border: "1px solid #B4975A",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B4975A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#B4975A";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0F172A";
              }}
            >
              Book a Free Consultation
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
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                padding: "0.95rem 2.2rem",
                border: "1px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFFFFF";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Explore Our Services
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
          paddingBottom: "3.5rem",
        }}
        className="section-px"
      >
        <div className="container-max" style={{ display: "flex", gap: "0.5rem", width: "100%", justifyContent: "flex-start" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                background: i === current ? "#B4975A" : "rgba(255,255,255,0.35)",
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
