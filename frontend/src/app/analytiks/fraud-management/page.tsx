"use client";
import React from "react";
import { motion } from "framer-motion";
import FraudHero from "@/components/analytiks/FraudHero";
import FraudIntro from "@/components/analytiks/FraudIntro";
import FraudDetails from "@/components/analytiks/FraudDetails";

export default function FraudManagementPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <FraudHero />
      <FraudIntro />
      <FraudDetails />
                </main>
  );
}
