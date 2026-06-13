"use client";
import React from "react";
import { motion } from "framer-motion";
import ESGHero from "@/components/consulting/ESGHero";
import ESGIntro from "@/components/consulting/ESGIntro";
import ESGServicesList from "@/components/consulting/ESGServicesList";
import ESGReporting from "@/components/consulting/ESGReporting";
import ESGWhyChooseUs from "@/components/consulting/ESGWhyChooseUs";
import ESGFAQ from "@/components/consulting/ESGFAQ";

export default function ESGPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            <ESGHero />
      <ESGIntro />
      <ESGServicesList />
      <ESGReporting />
      <ESGWhyChooseUs />
      <ESGFAQ />
                </main>
  );
}
