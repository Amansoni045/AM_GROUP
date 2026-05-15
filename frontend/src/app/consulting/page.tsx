"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ConsultingHero from "@/components/consulting/ConsultingHero";
import ConsultingAbout from "@/components/consulting/ConsultingAbout";
import ConsultingServices from "@/components/consulting/ConsultingServices";
import ConsultingTestimonials from "@/components/consulting/ConsultingTestimonials";

export default function ConsultingPage() {
  return (
    <main className="relative bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <ConsultingHero />
      <ConsultingAbout />
      <ConsultingServices />
      <ConsultingTestimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
