"use client";

import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/ui/Hero";
import AboutSection from "@/components/ui/AboutSection";
import WhatWeDo from "@/components/ui/WhatWeDo";
import IndustryExpertise from "@/components/ui/IndustryExpertise";
import Services from "@/components/ui/Services";
import Clients from "@/components/ui/Clients";
import Testimonials from "@/components/ui/Testimonials";
import ConsultationForm from "@/components/ui/ConsultationForm";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="relative bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <IndustryExpertise />
      <Services />
      <Clients />
      <Testimonials />
      <ConsultationForm />
      <Footer />
      <BackToTop />
    </main>
  );
}
