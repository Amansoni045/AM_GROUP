"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import OutsourcingHero from "@/components/consulting/OutsourcingHero";
import OutsourcingIntro from "@/components/consulting/OutsourcingIntro";
import OutsourcingServicesList from "@/components/consulting/OutsourcingServicesList";
import OutsourcingWhyChoose from "@/components/consulting/OutsourcingWhyChoose";

export default function OutsourcingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <OutsourcingHero />
      <OutsourcingIntro />
      <OutsourcingServicesList />
      <OutsourcingWhyChoose />
      <Footer />
      <BackToTop />
    </main>
  );
}
