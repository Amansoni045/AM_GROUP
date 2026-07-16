"use client";
import React from "react";
import { motion } from "framer-motion";
import RiskHero from "@/components/consulting/RiskHero";
import RiskIntro from "@/components/consulting/RiskIntro";
import RiskServicesList from "@/components/consulting/RiskServicesList";

export default function RiskPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-consulting">
            <RiskHero />
      <RiskIntro />
      <RiskServicesList />
                </main>
  );
}
