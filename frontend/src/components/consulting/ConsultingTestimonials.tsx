"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    client: "9 Origins Coffee",
    quote: "Working with AM Consulting has been a turning point for us at 9 Origins Coffee. Their team conducted a deep analysis of our marketing and business strategies, helping us completely revive our operations and reestablish a clear growth path. Thanks to their hands-on consulting and practical recommendations, we’ve seen remarkable improvement in both customer engagement and overall profitability.",
    rating: 5
  },
  {
    client: "Horizon Logistics",
    quote: "The AM Consulting team brought a level of clarity and direction that transformed our business. They assessed our operations, identified inefficiencies, and implemented measurable performance frameworks that improved productivity across departments. What impressed us most was their ability to understand our challenges and deliver real, actionable solutions — not just reports. Their partnership has truly been a catalyst for our long-term success.",
    rating: 5
  },
  {
    client: "Noor Education Group",
    quote: "AM Consulting played a vital role in helping us develop a scalable growth strategy. From financial planning to process optimization, their consultants worked closely with our leadership team to create a practical roadmap for expansion. They bring a unique blend of deep industry knowledge and a personal approach — we never felt like just another client. Their input continues to guide many of our strategic decisions today.",
    rating: 5
  },
  {
    client: "Al Jazeera Contracting",
    quote: "Our collaboration with AM Consulting helped us restructure our business operations and implement stronger governance practices. Their strategic guidance and local expertise were invaluable in navigating complex regulatory processes in Bahrain. The team’s professionalism, dedication, and ability to deliver actionable insights have made them one of our most trusted advisors. With their support, we’ve built a more efficient and future-ready organization.",
    rating: 5
  }
];

export default function ConsultingTestimonials() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="consulting-testimonials">
      <div className="absolute top-0 left-0 w-full h-full bg-[#020817]/5 -z-0" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
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
                  <p className="text-sm text-gray-500">Partner with AM Consulting</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
