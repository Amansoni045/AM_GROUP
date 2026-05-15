"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    client: "All Care Pet Clinic",
    quote: "We partnered with AM Accounting to bring structure and clarity to our financial management. Their team helped us set up proper accounting systems, streamline reporting, and establish efficient internal procedures. It has made day-to-day operations much smoother and given us complete confidence in our financial accuracy. They’ve been professional, responsive, and an invaluable part of our clinic’s continued growth.",
    rating: 5
  },
  {
    client: "Al Dar Trading Co.",
    quote: "Working with AM Accounting has brought complete clarity and confidence to our financial operations. Their team set up a robust accounting system, streamlined our reporting, and helped us maintain full compliance with local regulations. What truly stands out is their responsiveness and genuine care for our business — they go beyond numbers to ensure we’re financially strong and future-ready. A reliable partner we can always count on.",
    rating: 5
  },
  {
    client: "Ibtisama Asthetic Dental clinic",
    quote: "AM Accounting has been our trusted accounting partner for quite some time now. They’ve done an excellent job in maintaining our books, managing compliance, and guiding us through the Tamkeen support process. Their expertise and attention to detail have been a huge asset for us, and we’re very happy with the ongoing collaboration. Highly recommended for any business seeking reliable accounting and advisory support.",
    rating: 5
  },
  {
    client: "Serenity Wellness Spa",
    quote: "AM Accounting has been instrumental in organizing our finances and ensuring everything runs smoothly. From VAT submissions to monthly bookkeeping, they’ve handled every detail with precision and professionalism. Their team is approachable, transparent, and always ready with practical advice. We now have complete visibility into our accounts — and peace of mind knowing that experts are managing them.",
    rating: 5
  }
];

export default function AccountingTestimonials() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="accounting-testimonials">
      <div className="absolute top-0 left-0 w-full h-full bg-[#020817]/5 -z-0" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#6373f2]/10 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#6373f2] mb-5">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020817] font-heading">
            Client <span className="text-[#6373f2]">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded mx-auto mt-6" />
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
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-[20px] transition-all duration-500 group-hover:bg-[#d4af37]/10 group-hover:scale-150" />
              
              <Quote className="w-12 h-12 text-[#6373f2]/20 mb-6 relative z-10" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testi.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic mb-8 relative z-10 text-[15px]">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-[#020817] rounded-full flex items-center justify-center text-white font-bold font-heading">
                  {testi.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#020817]">{testi.client}</h4>
                  <p className="text-sm text-gray-500">Partner with AM Accounting</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
