"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/ui/AboutSection";
import CompanyCards from "@/components/about/CompanyCards";
import CEOMessage from "@/components/about/CEOMessage";
import TeamSection from "@/components/about/TeamSection";
import AboutFAQ from "@/components/about/AboutFAQ";

export default function AboutPage() {
  return (
    <main className="relative bg-[#f4f3ee] text-[#1a1a1a] font-sans scroll-smooth">
      <AboutHero />
      <AboutSection />
      <CompanyCards />
      <CEOMessage />
      <TeamSection />
      <AboutFAQ />
    </main>
  );
}
