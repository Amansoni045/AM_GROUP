"use client";
import React from "react";
import { motion } from "framer-motion";
import DataAnalyticsHero from "@/components/technology/DataAnalyticsHero";
import DataAnalyticsIntro from "@/components/technology/DataAnalyticsIntro";
import DataAnalyticsDetails from "@/components/technology/DataAnalyticsDetails";

export default function DataAnalyticsPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
      <DataAnalyticsHero />
      <DataAnalyticsIntro />
      <DataAnalyticsDetails />
    </main>
  );
}
