"use client";
import React from "react";
import { motion } from "framer-motion";
import MISHero from "@/components/accounting/MISHero";
import MISIntro from "@/components/accounting/MISIntro";
import MISServicesList from "@/components/accounting/MISServicesList";

export default function MISReportingPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            <MISHero />
      <MISIntro />
      <MISServicesList />
                </main>
  );
}
