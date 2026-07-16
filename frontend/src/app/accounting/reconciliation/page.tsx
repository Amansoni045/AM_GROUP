"use client";
import React from "react";
import { motion } from "framer-motion";
import ReconciliationHero from "@/components/accounting/ReconciliationHero";
import ReconciliationIntro from "@/components/accounting/ReconciliationIntro";
import ReconciliationServicesList from "@/components/accounting/ReconciliationServicesList";

export default function ReconciliationPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-accounting">
            <ReconciliationHero />
      <ReconciliationIntro />
      <ReconciliationServicesList />
                </main>
  );
}
