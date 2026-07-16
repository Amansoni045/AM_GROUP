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
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-consulting">
            
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f4f3ee 0%, #fff 55%, #faf7f0 100%)",
          minHeight: "46vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "7.5rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px", background: "radial-gradient(circle at top left, rgba(180,151,90,0.12) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle at bottom right, rgba(180,151,90,0.08) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: "820px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pill-badge mb-6"
          >
            Financial Advisory
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Business <span style={{ color: "#B4975A" }}>Valuations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#475569", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 0" }}
          >
            Leading business valuation firm in Bahrain, Saudi Arabia, Oman, and UAE, supporting clients in determining the fair value of their businesses.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ width: "48px", height: "2px", background: "#B4975A", margin: "1.75rem auto 0", transformOrigin: "center" }}
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
                  className="info-card group p-6 shadow-sm"
                >
                  <div className="info-card-top-bar" />
                  <span className="text-[var(--color-accent)] font-black text-xl block mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{point.id}</span>
                  <p className="info-card-title text-sm leading-tight mb-0">{point.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-24 px-4 md:px-12 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-heading">What Our Valuation Report Includes</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
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
                className="info-card group"
              >
                <div className="info-card-top-bar" />
                <div className="info-card-icon-wrapper mb-6">
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="info-card-title">
                  {item.title}
                </h3>
                <p className="info-card-desc">
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
          <div className="bg-[#f4f3ee] rounded-[3rem] p-12 md:p-20 border border-gray-100 relative">
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
              <div className="relative bg-white p-12 rounded-[2rem] text-[var(--text-primary)] border border-[var(--border-light)] shadow-xl">
                <PieChart className="w-16 h-16 text-[var(--color-accent)] mb-8" />
                <h3 className="text-2xl font-bold mb-6 font-heading">Comprehensive Disclosures</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed italic mb-8">
                  "Our reports also include detailed financial forecasts, key assumptions, and an exhaustive appendix to meet specific regulatory and stakeholder requirements."
                </p>
                <Link href="/#consultation">
                  <button className="flex items-center gap-2 text-[var(--color-accent)] font-bold hover:gap-3 transition-all cursor-pointer">
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
          <div className="bg-[var(--bg-alt)] rounded-3xl p-12 text-center border border-[var(--border-light)] shadow-xl relative overflow-hidden text-[var(--text-primary)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(180,151,90,0.08)_0,transparent_65%)] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Determine Your Business Worth</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto font-medium">
              Get an accurate and defensible valuation report from the leading firm in Bahrain, Saudi Arabia, Oman, and UAE.
            </p>
            <Link href="/#consultation" className="btn-primary mx-auto">
              Get Valuation Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

                </main>
  );
}
