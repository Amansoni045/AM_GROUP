"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 60%, #faf7f0 100%)",
      }}
    >
      {/* Decorative gold accent top-left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle at top left, rgba(180,151,90,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Decorative accent bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "400px",
          height: "300px",
          background: "radial-gradient(circle at bottom right, rgba(180,151,90,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "860px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              display: "inline-block",
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
              padding: "0.375rem 1.25rem",
              borderRadius: "999px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
              fontFamily: "var(--font-body)",
            }}
          >
            About AM Group
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Driving Innovation &<br />
            <span style={{ color: "var(--color-accent)" }}>Growth Globally</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            AM Group is a multidisciplinary firm uniting Consulting, Design, Accounting
            and Data Analytics under one trusted name across the GCC.
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-accent)",
              margin: "2rem auto 0",
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </section>
  );
}
