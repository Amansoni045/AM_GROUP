"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import DataAnalyticsHero from "@/components/analytiks/DataAnalyticsHero";
import DataAnalyticsIntro from "@/components/analytiks/DataAnalyticsIntro";
import DataAnalyticsDetails from "@/components/analytiks/DataAnalyticsDetails";

export default function DataAnalyticsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <DataAnalyticsHero />
      <DataAnalyticsIntro />
      <DataAnalyticsDetails />
      <Footer />
      <BackToTop />
    </main>
  );
}
