"use client";
import React from "react";
import { motion } from "framer-motion";
import OpsHero from "@/components/technology/OpsHero";
import OpsIntro from "@/components/technology/OpsIntro";
import OpsDetails from "@/components/technology/OpsDetails";

export default function OperationsFinanceAnalyticsPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-technology">
      <OpsHero />
      <OpsIntro />
      <OpsDetails />
    </main>
  );
}
