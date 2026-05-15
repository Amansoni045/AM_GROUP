"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    client: "Maison Al Noor Interiors",
    quote: "Partnering with AM Design completely redefined our brand identity. Their team understood our aesthetic vision from the very beginning and helped us translate it into a stunning visual language — from our logo and packaging to our online presence. The creativity, attention to detail, and professionalism they brought to every stage of the project were truly exceptional. Our clients now instantly recognize our brand, and that’s the power of great design.",
    rating: 5
  },
  {
    client: "Vertex Technologies",
    quote: "Our collaboration with AM Design went beyond visuals — it was about clarity, purpose, and impact. They built a complete brand system for us, aligning our visual identity with our company values and future goals. The result? A brand that looks global and communicates with confidence. The team’s creativity, responsiveness, and strategic input made them a true extension of our internal marketing team.",
    rating: 5
  },
  {
    client: "Bloom Café",
    quote: "AM Design helped us create a warm, welcoming, and modern identity that perfectly reflects our café’s personality. From concept to execution, every detail was thoughtfully handled — menus, interiors, and digital branding all came together seamlessly. We’ve received incredible feedback from customers, and our brand presence feels stronger than ever. They didn’t just design for us — they designed with us.",
    rating: 5
  },
  {
    client: "La Verne Skincare",
    quote: "The AM Design team transformed our skincare brand into something truly elegant and aspirational. They helped us develop our packaging, brand story, and digital presence with a clear understanding of our audience. The design aesthetics elevated our brand perception overnight — customers instantly noticed the difference. AM Design doesn’t just create visuals — they create value.",
    rating: 5
  }
];

export default function DesignTestimonials() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="design-testimonials">
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
                  <p className="text-sm text-gray-500">Partner with AM Design</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
