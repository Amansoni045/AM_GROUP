"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ESGHero from "@/components/consulting/ESGHero";
import ESGIntro from "@/components/consulting/ESGIntro";
import ESGServicesList from "@/components/consulting/ESGServicesList";
import ESGReporting from "@/components/consulting/ESGReporting";
import ESGWhyChooseUs from "@/components/consulting/ESGWhyChooseUs";
import ESGFAQ from "@/components/consulting/ESGFAQ";

export default function ESGPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <ESGHero />
      <ESGIntro />
      <ESGServicesList />
      <ESGReporting />
      <ESGWhyChooseUs />
      <ESGFAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}
