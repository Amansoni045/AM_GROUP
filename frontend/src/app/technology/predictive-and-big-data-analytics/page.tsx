"use client";
import React from "react";
import { motion } from "framer-motion";
import PredictiveHero from "@/components/technology/PredictiveHero";
import PredictiveIntro from "@/components/technology/PredictiveIntro";
import PredictiveDetails from "@/components/technology/PredictiveDetails";

export default function PredictiveAnalyticsPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-technology">
      <PredictiveHero />
      <PredictiveIntro />
      <PredictiveDetails />
    </main>
  );
}
