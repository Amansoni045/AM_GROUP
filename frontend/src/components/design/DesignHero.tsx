"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DesignHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f4f3ee 0%, #fff 55%, #faf7f0 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Color-matched ambient washes */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "460px", height: "460px", background: "radial-gradient(circle at top left, var(--color-accent-soft) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "460px", height: "460px", background: "radial-gradient(circle at bottom right, var(--color-accent-soft) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Color-matched decorative side rings */}
      <div aria-hidden className="hero-deco" style={{ position: "absolute", top: "50%", left: "-110px", transform: "translateY(-50%)", width: "300px", height: "300px", border: "1px solid var(--color-accent)", borderRadius: "50%", opacity: 0.14, pointerEvents: "none" }} />
      <div aria-hidden className="hero-deco" style={{ position: "absolute", top: "50%", left: "-40px", transform: "translateY(-50%)", width: "160px", height: "160px", border: "1px solid var(--color-accent)", borderRadius: "50%", opacity: 0.2, pointerEvents: "none" }} />
      <div aria-hidden className="hero-deco" style={{ position: "absolute", top: "50%", right: "-110px", transform: "translateY(-50%)", width: "300px", height: "300px", border: "1px solid var(--color-accent)", borderRadius: "50%", opacity: 0.14, pointerEvents: "none" }} />
      <div aria-hidden className="hero-deco" style={{ position: "absolute", top: "50%", right: "-40px", transform: "translateY(-50%)", width: "160px", height: "160px", border: "1px solid var(--color-accent)", borderRadius: "50%", opacity: 0.2, pointerEvents: "none" }} />
      <style>{`@media (max-width: 767px) { .hero-deco { display: none !important; } }`}</style>

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "clamp(3rem,5vw,6rem) clamp(1rem,3vw,2rem) clamp(2rem,3.5vw,4rem)", minHeight: "auto" }}>
        <div style={{ maxWidth: "820px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pill-badge mb-6"
          >
            AM Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", fontWeight: 600, color: "#0F172A", lineHeight: 1.05, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}
          >
            Creative Branding &<br /><span style={{ color: "var(--color-accent)" }}>Digital Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "#475569", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto" }}
          >
            Building powerful brands and digital experiences that captivate audiences and elevate businesses across the GCC.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ width: "48px", height: "2px", background: "var(--color-accent)", margin: "1.75rem auto 0", transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Marquee */}
      <div style={{ borderTop: "1px solid #E2E8F0", background: "#f4f3ee", overflow: "hidden", padding: "0.9rem 0", position: "relative", zIndex: 1 }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {["Branding","Web Design","Social Media","SEO","PPC","Content","Digital Marketing","Branding","Web Design","Social Media","SEO","PPC","Content","Digital Marketing"].map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", margin: "0 1.75rem" }}>
              <span style={{ color: "var(--color-accent)", marginRight: "1.25rem", fontSize: "0.65rem" }}>✦</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748B" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
