"use client";
import React from "react";
import { motion } from "framer-motion";
import ConsultingHero from "@/components/consulting/ConsultingHero";
import ConsultingAbout from "@/components/consulting/ConsultingAbout";
import ConsultingServices from "@/components/consulting/ConsultingServices";
import ConsultingTestimonials from "@/components/consulting/ConsultingTestimonials";

export default function ConsultingPage() {
  return (
    <main className="relative bg-[#f4f3ee] text-[#1a1a1a] font-sans scroll-smooth brand-consulting">
            <ConsultingHero />
      <ConsultingAbout />
      <ConsultingServices />
      <ConsultingTestimonials />
                </main>
  );
}
