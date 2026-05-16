"use client";
import React from "react";
import { motion } from "framer-motion";
import DigitalHero from "@/components/analytiks/DigitalHero";
import DigitalIntro from "@/components/analytiks/DigitalIntro";
import DigitalDetails from "@/components/analytiks/DigitalDetails";

export default function DigitalTransformationPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <DigitalHero />
      <DigitalIntro />
      <DigitalDetails />
                </main>
  );
}
