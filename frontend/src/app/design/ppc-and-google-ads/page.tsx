"use client";
import React from "react";
import { motion } from "framer-motion";
import PPCHero from "@/components/design/PPCHero";
import PPCIntro from "@/components/design/PPCIntro";
import PPCServicesList from "@/components/design/PPCServicesList";

export default function PPCAndGoogleAdsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <PPCHero />
      <PPCIntro />
      <PPCServicesList />
                </main>
  );
}
