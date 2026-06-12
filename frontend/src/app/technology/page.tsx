"use client";
import React from "react";
import { motion } from "framer-motion";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyAbout from "@/components/technology/TechnologyAbout";
import TechnologyServices from "@/components/technology/TechnologyServices";
import TechnologyTestimonials from "@/components/technology/TechnologyTestimonials";

export default function TechnologyPage() {
  return (
    <main className="relative bg-white text-[var(--text-primary)] font-sans scroll-smooth">
      <TechnologyHero />
      <TechnologyAbout />
      <TechnologyServices />
      <TechnologyTestimonials />
    </main>
  );
}
