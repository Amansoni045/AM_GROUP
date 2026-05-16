"use client";
import React from "react";
import { motion } from "framer-motion";
import BrandingHero from "@/components/design/BrandingHero";
import BrandingIntro from "@/components/design/BrandingIntro";
import BrandingServicesList from "@/components/design/BrandingServicesList";

export default function BrandingAndDesignPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <BrandingHero />
      <BrandingIntro />
      <BrandingServicesList />
                </main>
  );
}
