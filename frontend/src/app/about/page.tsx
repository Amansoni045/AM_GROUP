"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AboutHero from "@/components/about/AboutHero";
import CompanyCards from "@/components/about/CompanyCards";
import MissionVision from "@/components/about/MissionVision";
import CEOMessage from "@/components/about/CEOMessage";
import TeamSection from "@/components/about/TeamSection";
import AboutFAQ from "@/components/about/AboutFAQ";
import Clients from "@/components/ui/Clients";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <AboutHero />
      <CompanyCards />
      <MissionVision />
      <Clients />
      <CEOMessage />
      <TeamSection />
      <AboutFAQ />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
