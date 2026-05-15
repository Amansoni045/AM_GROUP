"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import DesignHero from "@/components/design/DesignHero";
import DesignAbout from "@/components/design/DesignAbout";
import DesignServices from "@/components/design/DesignServices";
import DesignTestimonials from "@/components/design/DesignTestimonials";

export default function DesignPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <DesignHero />
      <DesignAbout />
      <DesignServices />
      <DesignTestimonials />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
