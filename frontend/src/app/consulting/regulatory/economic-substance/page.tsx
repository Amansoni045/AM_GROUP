"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Landmark, AlertTriangle, Scale, ClipboardCheck, History, Building2, Gavel } from "lucide-react";
import Link from "next/link";

const cigaActivities = [
  { id: "01", title: "Distribution and Service Centers" },
  { id: "02", title: "Headquarters" },
  { id: "03", title: "Holding Companies" },
  { id: "04", title: "Leasing & Shipping" },
  { id: "05", title: "Financing Companies" },
  { id: "06", title: "Intellectual Property (IP) Holding" },
  { id: "07", title: "Banks & Insurance" },
  { id: "08", title: "Certain Investment Firms" }
];

const esrServices = [
  {
    id: "01",
    title: "ESR Classification and Assessment",
    desc: "We review your business activities, determine ESR applicability, and ensure accurate classification for a clear and compliant approach.",
    icon: ShieldCheck
  },
  {
    id: "02",
    title: "ESR Reporting and Notification",
    desc: "We manage ESR reporting and notifications, ensuring every submission is accurate, timely, and fully aligned with regulatory requirements.",
    icon: FileText
  },
  {
    id: "03",
    title: "ESR Compliance",
    desc: "We create tailored ESR compliance plans designed around your operations, helping your business meet all mandated regulatory expectations smoothly.",
    icon: ClipboardCheck
  },
  {
    id: "04",
    title: "Record-Keeping and Documentation",
    desc: "We maintain organised ESR documentation, ensuring your business stays prepared for regulatory audits, reviews, or compliance-related inquiries anytime.",
    icon: History
  }
];

const consequences = [
  { title: "Warning Notices", desc: "Official notifications regarding compliance gaps." },
  { title: "Suspension of CR", desc: "Temporary or permanent suspension of your Commercial Registration." },
  { title: "Criminal Prosecution", desc: "Legal actions against non-compliant entities and directors." },
  { title: "Financial Penalties", desc: "Penalties of up to BD 1,000 per day for ongoing non-compliance." },
  { title: "Striking off CR", desc: "Complete removal from the Commercial Register." }
];

export default function ESRPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/WhatsApp-Image-2025-09-26-at-18.26.13_23ba2070-1.webp" 
            alt="ESR Services" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="pill-badge mb-6">
              <span className="tracking-[0.2em]">Regulatory Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Strong Substance. <br />
              <span className="text-[var(--color-accent)]">Stronger Standing.</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Expert guidance and end-to-end ESR compliance services to navigate the complexities of Bahrain’s regulatory environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#020817] mb-8 font-heading leading-tight">
                Economic Substance <span className="text-[var(--color-accent)]">Regulations</span> (ESR)
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  In Bahrain, all businesses registered with a Commercial Registration (CR) are required to comply with ESR. These regulations ensure that entities demonstrate substantial economic presence and operations within Bahrain.
                </p>
                <p>
                  Failure to meet these requirements may result in severe penalties, including fines, suspension of commercial registration, or criminal prosecution.
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent-soft)] rounded-[3rem] rotate-3 scale-105 -z-10" />
              <img 
                src="/am-group.webp" 
                alt="Regulatory Advisory" 
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CIGA Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">Core Income-Generating Activities (CIGA)</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Businesses conducting these activities must demonstrate substantial economic presence in Bahrain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cigaActivities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-[var(--color-accent-soft)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--color-accent)] font-bold text-xs">{item.id}</span>
                </div>
                <span className="font-bold text-[#020817] text-sm group-hover:text-[var(--color-accent)] transition-colors">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#020817] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent-soft)] rounded-full blur-[100px] -z-0" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-center">Economic Substance Test Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              {[
                "Conduct relevant Core Income Generating Activities (CIGA) in Bahrain.",
                "Maintain adequate number of qualified full-time employees and physical offices in Bahrain.",
                "Management must be physically present with local Board of Directors meetings.",
                "Board of Directors must possess necessary authority and knowledge for strategic decisions."
              ].map((req, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-white/70 leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#020817] mb-6 font-heading">Our ESR Compliance Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive support to ensure your business stays fully compliant with ESR regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {esrServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f4f3ee] p-10 rounded-[2.5rem] border border-gray-100 flex gap-8 items-start group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[var(--color-accent)] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#020817] mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Authorities Section */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f3ee]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#020817] mb-16 font-heading">Regulatory Authorities</h2>
          <div className="flex flex-wrap justify-center gap-24 items-center">
            <img src="/logo_en-1.webp" alt="Regulatory Authority 1" className="h-28 object-contain" />
            <img src="/حقوق-المستهلكين-2048x1024.webp" alt="Regulatory Authority 2" className="h-28 object-contain" />
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 rounded-[3rem] p-12 md:p-20 border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="w-10 h-10 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#020817] font-heading">Consequences of Non-Compliance</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {consequences.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 flex flex-col gap-2">
                    <h4 className="font-bold text-red-600">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Secure Your Compliance Status</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join the leading companies in Bahrain that trust AM Consulting for their ESR compliance needs.
            </p>
            <Link href="/#consultation" className="btn-white mx-auto">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
