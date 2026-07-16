"use client";
import React from "react";
import { motion } from "framer-motion";
import BacklogHero from "@/components/accounting/BacklogHero";
import BacklogIntro from "@/components/accounting/BacklogIntro";
import BacklogServicesList from "@/components/accounting/BacklogServicesList";

export default function BacklogManagementPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-accounting">
            <BacklogHero />
      <BacklogIntro />
      <BacklogServicesList />
                </main>
  );
}
