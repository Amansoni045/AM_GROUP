"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calculator, BarChart4, PieChart, Landmark, FileText, Search, Presentation, Globe } from "lucide-react";
import Link from "next/link";

const valuationPoints = [
  { id: "01", title: "Discount for Lack of Marketability" },
  { id: "02", title: "Standards of Value" },
  { id: "03", title: "Premise of Value" },
  { id: "04", title: "Financial Statement Analysis" },
  { id: "05", title: "Discount for Lack of Control" },
  { id: "06", title: "Valuation of Approaches" },
  { id: "07", title: "Management Interview" },
  { id: "08", title: "Company Analysis" },
  { id: "09", title: "Economic Analysis" }
];

const reportInclusions = [
  { icon: FileText, title: "Company Profile", desc: "Detailed overview of business operations and history." },
  { icon: Globe, title: "Economic Outlook", desc: "Analysis of market conditions and industry trends." },
  { icon: Calculator, title: "Methodologies", desc: "DCF, Net Asset Value, Comparable Company Analysis." },
  { icon: BarChart4, title: "Cost of Capital", desc: "Rigorous calculation of WACC and risk premiums." },
  { icon: Landmark, title: "Financial Forecasts", desc: "Projected performance based on key assumptions." },
  { icon: Search, title: "Detailed Appendix", desc: "Comprehensive data and supporting documentation." }
];

export default function BusinessValuationsPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#040b1e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] to-transparent z-10" />
          <img 
            src="/shutterstock_2302318791-1-scaled-1024x683-1.webp" 
            alt="Business Valuations" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-[var(--color-primary)]/5">
              <span className="tracking-[0.2em]">Financial Advisory</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading leading-tight">
              Business <span className="text-[var(--color-accent)]">Valuations</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-10">
              Leading business valuation firm in Bahrain and Saudi Arabia, supporting clients in determining the fair value of their businesses.
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
                Accurate, Reliable, and <span className="text-[var(--color-accent)]">Defensible</span> Valuations
              </h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] rounded mb-8" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Business valuation is the process of assessing the economic value of a business and is often required for strategic decision-making. 
                </p>
                <p>
                  Organizations may need a valuation when considering a sale or acquisition, resolving legal disputes, facilitating partner exits, or restructuring capital. It also helps business owners gain a clear understanding of their company’s worth.
                </p>
                <p>
                  Our services follow a structured and rigorous approach, analyzing internal financial data, industry benchmarks, and market intelligence to deliver results aligned with international best practices.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {valuationPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="text-[var(--color-accent)] font-black text-xl block mb-2 opacity-40 group-hover:opacity-100 transition-opacity">{point.id}</span>
                  <p className="font-bold text-[#020817] text-sm leading-tight">{point.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">What Our Valuation Report Includes</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We prepare comprehensive reports that provide a clear and well-supported assessment of your business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportInclusions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[var(--color-accent)]/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[var(--color-accent-soft)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <item.icon className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-24 px-4 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f9f9f9] rounded-[3rem] p-12 md:p-20 border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent-soft)] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#020817] mb-8 font-heading">Advanced Valuation Methodologies</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Depending on the engagement, our valuations incorporate globally recognized methods to ensure the highest degree of accuracy and defensibility.
                </p>
                <div className="space-y-4">
                  {[
                    "Net Asset Value (NAV)",
                    "Discounted Cash Flow (DCF)",
                    "Comparable Company Analysis",
                    "Capitalization of Earnings"
                  ].map((method, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                      <span className="font-bold text-[#020817]">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative bg-[#020817] p-12 rounded-[2rem] text-white shadow-2xl">
                <PieChart className="w-16 h-16 text-[var(--color-accent)] mb-8" />
                <h3 className="text-2xl font-bold mb-6 font-heading">Comprehensive Disclosures</h3>
                <p className="text-white/70 leading-relaxed italic mb-8">
                  "Our reports also include detailed financial forecasts, key assumptions, and an exhaustive appendix to meet specific regulatory and stakeholder requirements."
                </p>
                <Link href="/#consultation">
                  <button className="flex items-center gap-2 text-[var(--color-accent)] font-bold hover:gap-3 transition-all">
                    Request Sample Report <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#020817] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Determine Your Business Worth</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Get an accurate and defensible valuation report from the leading firm in Bahrain and Saudi Arabia.
            </p>
            <Link href="/#consultation" className="btn-gold mx-auto">
              Get Valuation Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
