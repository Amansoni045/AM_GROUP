"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Target, BarChart3, Briefcase } from "lucide-react";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Target Identification",
    desc: "Use data-driven diagnostics and benchmarking methods to identify, evaluate, and select the most suitable acquisition or partnership opportunities that align with your company’s strategic objectives."
  },
  {
    number: "02",
    title: "Deal Structuring",
    desc: "Assist you in designing and structuring M&A deals by ensuring regulatory, financial, and legal frameworks are properly implemented for successful transactions."
  },
  {
    number: "03",
    title: "Equity Story and Exit Value",
    desc: "Craft the right narrative and communication strategy to enhance your company’s market perception, attract investors, and maximize valuation and exit opportunities effectively."
  },
  {
    number: "04",
    title: "Valuation Analysis",
    desc: "Deliver precise company valuations by analyzing market trends, analyzing financial performance, and future growth potential to support informed strategic and investment decisions."
  },
  {
    number: "05",
    title: "Negotiation Support",
    desc: "Provide expert guidance during deal negotiations, ensuring alignment between strategic goals and business objectives while maintaining value creation and minimizing transactional risks."
  },
  {
    number: "06",
    title: "Due Diligence",
    desc: "Conduct comprehensive financial, legal, and commercial due diligence to evaluate potential risks, validate assumptions, and ensure sound decision-making for every transaction."
  }
];

const differentiators = [
  {
    title: "One-Stop Destination",
    desc: "We provide end-to-end support for any M&A. Our services are designed to enhance execution capabilities and create value."
  },
  {
    title: "Deep Industry Expertise",
    desc: "Our team is experienced and have worked on various M&A transactions in varied industries both in regional and international markets."
  },
  {
    title: "Comprehensive Understanding",
    desc: "We can provide support in any type of transaction — sell-side, buy-side, or restructuring — through a deep understanding of the process."
  }
];

export default function MergersAcquisitionsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="M&A" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[var(--color-primary)]/5">
              <span className="tracking-[0.2em]">Advisory Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Mergers & <span className="text-[var(--color-accent)]">Acquisitions</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Excellence in Financial Analysis. AM Consulting supports businesses through every stage of mergers, acquisitions, joint ventures, and strategic alliances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-8 font-heading">
                Strategic Guidance for Complex Transactions
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We help you evaluate opportunities, define the right growth strategy, and determine whether a merger, acquisition, or joint venture aligns with your business objectives.
                </p>
                <p>
                  Once the direction is established, our team assists with deal sourcing, due diligence, business valuation, and end-to-end transaction management, ensuring a structured and seamless process.
                </p>
                <p>
                  Our M&A experts adhere to the highest standards of professionalism, best-practice methodologies, and ethical conduct. We work closely with our clients to deliver sustainable value and outcomes.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#f4f3ee] p-10 rounded-3xl border border-gray-100 shadow-xl shadow-black/5"
            >
              <h3 className="text-2xl font-bold text-[#020817] mb-8 font-heading">Our Core Expertise</h3>
              <ul className="space-y-4">
                {[
                  "Deal Sourcing & Strategy",
                  "Comprehensive Due Diligence",
                  "Precise Business Valuation",
                  "Transaction Management",
                  "Integration Support",
                  "Exit Strategy Planning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid (01-06) */}
      <section className="py-24 px-4 md:px-12 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Our Process</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-5xl font-black text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors mb-6 font-heading">
                  {feature.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f4f3ee] rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-gray-100 shadow-2xl shadow-black/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent-soft)] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#020817] mb-10 font-heading">
                Support for Investment Banks & Advisors
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Financial modelling forms the foundation of strategic financial decision-making, enabling detailed valuation analysis to assess a company’s worth accurately. 
                  </p>
                  <p>
                    The process involves transaction screening, buyer screening and research, and target screening and research to identify and evaluate the most suitable opportunities.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Comparative Analysis", icon: Target },
                    { label: "Financial Benchmarking", icon: BarChart3 },
                    { label: "Information Memorandums", icon: Briefcase },
                    { label: "Transaction Screening", icon: TrendingUp }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                      <item.icon className="w-8 h-8 text-[var(--color-accent)]" />
                      <span className="font-bold text-[#020817]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="py-24 px-4 md:px-12 bg-[#020817] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 font-heading">How We Are <span className="text-[var(--color-accent)]">Different</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-20 h-20 bg-[var(--color-accent)] rounded-3xl mx-auto mb-8 flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                  <span className="text-white text-3xl font-bold">0{i+1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{item.title}</h3>
                <p className="text-white/60 leading-relaxed italic">
                  "{item.desc}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-primary)] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Connect with our M&A experts to discuss how we can help you achieve your strategic growth objectives.
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
