"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    client: "GlobalTech Solutions",
    quote: "Partnering with AM Technology has completely transformed how we make business decisions. Their team implemented advanced Power BI dashboards that gave us real-time visibility into operations and performance metrics. For the first time, we could identify trends instantly and act faster. Their expertise in translating raw data into meaningful insights has helped us operate smarter, not harder.",
    rating: 5
  },
  {
    client: "RoyalMed Healthcare",
    quote: "With AM Technology, we finally bridged the gap between data collection and real insight. Their team designed automated dashboards that streamlined our performance tracking, reduced manual errors, and saved countless hours. They didn’t just provide tools — they empowered our team to make smarter, evidence-based decisions every day. A true partner in digital transformation.",
    rating: 5
  },
  {
    client: "FinEdge Investments",
    quote: "AM Technology helped us develop a powerful data reporting framework using Arbutus and Power BI. Their analytical precision and understanding of financial systems have given us unmatched control over our risk and compliance functions. What stood out most was their attention to detail and ability to simplify complex datasets into clear, actionable insights. They’ve become an essential part of our data-driven strategy.",
    rating: 5
  },
  {
    client: "BrightPath Logistics",
    quote: "Working with AM Technology gave us a completely new perspective on our business performance. Their team built a comprehensive analytics system that revealed inefficiencies we never noticed before. With their guidance, we’ve optimized routes, reduced costs, and improved turnaround times. Their blend of technical expertise and strategic understanding is what truly sets them apart.",
    rating: 5
  }
];

export default function TechnologyTestimonials() {
  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12 relative overflow-hidden" id="technology-testimonials">
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--bg-alt)]/5 -z-0" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[var(--color-accent-soft)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Client <span className="text-[var(--color-accent)]">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-[20px] transition-all duration-500 group-hover:bg-[var(--color-primary)]/10 group-hover:scale-150" />
              
              <Quote className="w-12 h-12 text-[var(--color-accent)]/20 mb-6 relative z-10" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testi.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#d4af37] text-[var(--color-accent)]" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10 text-[15px]">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-[var(--bg-alt)] rounded-full flex items-center justify-center text-[var(--text-primary)] font-bold font-heading">
                  {testi.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">{testi.client}</h4>
                  <p className="text-sm text-gray-500">Partner with AM Technology</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
