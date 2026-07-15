import React from "react";
import Hero from "@/components/ui/Hero";
import WhatWeDo from "@/components/ui/WhatWeDo";
import IndustryExpertise from "@/components/ui/IndustryExpertise";
import Services from "@/components/ui/Services";
import Clients from "@/components/ui/Clients";
import ConsultationForm from "@/components/ui/ConsultationForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Services />
      <IndustryExpertise />
      <Clients />
      <ConsultationForm />
    </main>
  );
}
