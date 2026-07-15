"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DesignAbout() {
  return (
    <section className="bg-[var(--bg-main)] compact-section px-4 md:px-12 py-24 relative overflow-hidden" id="about-design">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="eyebrow">About AM Design</span>
              <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8 font-heading">
              Transforming <span className="text-[var(--color-accent)]">Ideas</span> into <br />
              Visual <span className="text-[var(--color-accent)]">Excellence</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                AM Design is a creative studio dedicated to building meaningful visual identities that help brands stand out and connect with their audiences. We specialize in branding, marketing design, and web design, delivering creative solutions that are both visually compelling and strategically driven.
              </p>
              <p>
                Every project begins with understanding our client’s goals, audience, and vision. Our experienced design team works closely with each client to translate ideas into impactful designs that strengthen brand presence and support business growth.
              </p>
            </div>
          </motion.div>

          {/* Right Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center p-12 bg-white rounded-3xl border border-[var(--border-light)] shadow-xl shadow-black/5 relative overflow-hidden h-[350px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-soft)] to-transparent opacity-50 -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-[40px] -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent-soft)] rounded-full blur-[40px] -z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <img 
                src="/logo.webp" 
                alt="AM Group Logo" 
                className="h-20 w-auto object-contain mb-6 transition-transform duration-500 hover:scale-105" 
              />
              <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-4" />
              <h3 className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                AM <span className="text-[var(--color-accent)]">Design</span>
              </h3>
              <p className="font-body text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mt-2">
                Brand Identity & Creative Direction
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
