"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import DigitalHero from "@/components/analytiks/DigitalHero";
import DigitalIntro from "@/components/analytiks/DigitalIntro";
import DigitalDetails from "@/components/analytiks/DigitalDetails";

export default function DigitalTransformationPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <DigitalHero />
      <DigitalIntro />
      <DigitalDetails />
      <Footer />
      <BackToTop />
    </main>
  );
}
