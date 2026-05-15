"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import GRCHero from "@/components/analytiks/GRCHero";
import GRCIntro from "@/components/analytiks/GRCIntro";
import GRCDetails from "@/components/analytiks/GRCDetails";

export default function GRCSolutionsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <GRCHero />
      <GRCIntro />
      <GRCDetails />
      <Footer />
      <BackToTop />
    </main>
  );
}
