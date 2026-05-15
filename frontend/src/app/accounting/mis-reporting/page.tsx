"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import MISHero from "@/components/accounting/MISHero";
import MISIntro from "@/components/accounting/MISIntro";
import MISServicesList from "@/components/accounting/MISServicesList";

export default function MISReportingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <MISHero />
      <MISIntro />
      <MISServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
