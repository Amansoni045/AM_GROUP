"use client";
import React from "react";
import { motion } from "framer-motion";
import PredictiveHero from "@/components/analytiks/PredictiveHero";
import PredictiveIntro from "@/components/analytiks/PredictiveIntro";
import PredictiveDetails from "@/components/analytiks/PredictiveDetails";

export default function PredictiveAnalyticsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <PredictiveHero />
      <PredictiveIntro />
      <PredictiveDetails />
                </main>
  );
}
