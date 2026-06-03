"use client";
import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 50,
        width: "48px",
        height: "48px",
        background: "var(--bg-main)",
        border: "1px solid var(--border-medium)",
        color: "var(--text-primary)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        borderRadius: "50%",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--color-primary)";
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.borderColor = "var(--color-primary)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--bg-main)";
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.borderColor = "var(--border-medium)";
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  ) : null;
}

