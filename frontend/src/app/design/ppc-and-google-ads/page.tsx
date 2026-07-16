"use client";
import React from "react";
import { motion } from "framer-motion";
import PPCHero from "@/components/design/PPCHero";
import PPCIntro from "@/components/design/PPCIntro";
import PPCServicesList from "@/components/design/PPCServicesList";

export default function PPCAndGoogleAdsPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-design">
            <PPCHero />
      <PPCIntro />
      <PPCServicesList />
                </main>
  );
}
