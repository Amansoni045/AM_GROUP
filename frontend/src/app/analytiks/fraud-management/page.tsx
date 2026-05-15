"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import FraudHero from "@/components/analytiks/FraudHero";
import FraudIntro from "@/components/analytiks/FraudIntro";
import FraudDetails from "@/components/analytiks/FraudDetails";

export default function FraudManagementPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <FraudHero />
      <FraudIntro />
      <FraudDetails />
      <Footer />
      <BackToTop />
    </main>
  );
}
