"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TechnologyHero() {
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
      <div style={{ position: "absolute", top: 0, left: 0, width: "400px", height: "400px", background: "radial-gradient(circle at top left, rgba(180,151,90,0.11) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(circle at bottom right, rgba(180,151,90,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "6rem 2rem 4rem", minHeight: "62vh" }}>
        <div style={{ maxWidth: "820px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pill-badge mb-6"
          >
            AM Technology
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", fontWeight: 600, color: "#0F172A", lineHeight: 1.05, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}
          >
            Data Intelligence &<br /><span style={{ color: "#B4975A" }}>Digital Transformation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "#475569", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto" }}
          >
            Advanced analytics, predictive modeling and digital transformation solutions to accelerate business excellence.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ width: "48px", height: "2px", background: "#B4975A", margin: "1.75rem auto 0", transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Marquee */}
      <div style={{ borderTop: "1px solid #E2E8F0", background: "#f4f3ee", overflow: "hidden", padding: "0.9rem 0", position: "relative", zIndex: 1 }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {["Data Analytics","Predictive Models","Digital Transformation","Business Intelligence","Automation","GRC","Data Analytics","Predictive Models","Digital Transformation","Business Intelligence","Automation","GRC"].map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", margin: "0 1.75rem" }}>
              <span style={{ color: "#B4975A", marginRight: "1.25rem", fontSize: "0.65rem" }}>✦</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748B" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
