"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import AboutSection from "@/components/ui/AboutSection";
import WhatWeDo from "@/components/ui/WhatWeDo";
import IndustryExpertise from "@/components/ui/IndustryExpertise";
import Services from "@/components/ui/Services";
import Clients from "@/components/ui/Clients";
import Testimonials from "@/components/ui/Testimonials";
import ConsultationForm from "@/components/ui/ConsultationForm";

export default function Home() {
  return (
    <main className="relative bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth">
            <Hero />
      <AboutSection />
      <WhatWeDo />
      <IndustryExpertise />
      <Services />
      <Clients />
      <Testimonials />
      <ConsultationForm />
                </main>
  );
}
