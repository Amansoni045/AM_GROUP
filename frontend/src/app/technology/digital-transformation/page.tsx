"use client";
import React from "react";
import { motion } from "framer-motion";
import DigitalHero from "@/components/technology/DigitalHero";
import DigitalIntro from "@/components/technology/DigitalIntro";
import DigitalDetails from "@/components/technology/DigitalDetails";

export default function DigitalTransformationPage() {
  return (
    <main className="relative bg-white text-[var(--text-primary)] font-sans scroll-smooth">
      <DigitalHero />
      <DigitalIntro />
      <DigitalDetails />
    </main>
  );
}
