"use client";
import React from "react";
import { motion } from "framer-motion";
import VATHero from "@/components/accounting/VATHero";
import VATIntro from "@/components/accounting/VATIntro";
import VATServicesList from "@/components/accounting/VATServicesList";

export default function VATServicesPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-accounting">
            <VATHero />
      <VATIntro />
      <VATServicesList />
                </main>
  );
}
