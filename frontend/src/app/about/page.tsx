"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import CompanyCards from "@/components/about/CompanyCards";
import MissionVision from "@/components/about/MissionVision";
import CEOMessage from "@/components/about/CEOMessage";
import TeamSection from "@/components/about/TeamSection";
import AboutFAQ from "@/components/about/AboutFAQ";
import Clients from "@/components/ui/Clients";

export default function AboutPage() {
  return (
    <main className="relative bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth">
            <AboutHero />
      <CompanyCards />
      <MissionVision />
      <Clients />
      <CEOMessage />
      <TeamSection />
      <AboutFAQ />
                </main>
  );
}
