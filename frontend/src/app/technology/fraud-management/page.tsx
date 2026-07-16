"use client";
import React from "react";
import { motion } from "framer-motion";
import FraudHero from "@/components/technology/FraudHero";
import FraudIntro from "@/components/technology/FraudIntro";
import FraudDetails from "@/components/technology/FraudDetails";

export default function FraudManagementPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-technology">
      <FraudHero />
      <FraudIntro />
      <FraudDetails />
    </main>
  );
}
