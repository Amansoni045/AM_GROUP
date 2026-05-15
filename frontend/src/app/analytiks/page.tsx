"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AnalytiksHero from "@/components/analytiks/AnalytiksHero";
import AnalytiksAbout from "@/components/analytiks/AnalytiksAbout";
import AnalytiksServices from "@/components/analytiks/AnalytiksServices";
import AnalytiksTestimonials from "@/components/analytiks/AnalytiksTestimonials";

export default function AnalytiksPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <AnalytiksHero />
      <AnalytiksAbout />
      <AnalytiksServices />
      <AnalytiksTestimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
