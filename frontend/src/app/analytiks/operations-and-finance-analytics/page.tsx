"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import OpsHero from "@/components/analytiks/OpsHero";
import OpsIntro from "@/components/analytiks/OpsIntro";
import OpsDetails from "@/components/analytiks/OpsDetails";

export default function OperationsFinanceAnalyticsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <OpsHero />
      <OpsIntro />
      <OpsDetails />
      <Footer />
      <BackToTop />
    </main>
  );
}
