"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    client: "9 Origins Coffee",
    quote: "Working with AM Consulting has been a turning point for us at 9 Origins Coffee. Their team conducted a deep analysis of our marketing and business strategies, helping us completely revive our operations and reestablish a clear growth path. Thanks to their hands-on consulting and practical recommendations, we’ve seen remarkable improvement in both customer engagement and overall profitability."
  },
  {
    client: "Horizon Logistics",
    quote: "The AM Consulting team brought a level of clarity and direction that transformed our business. They assessed our operations, identified inefficiencies, and implemented measurable performance frameworks that improved productivity across departments. What impressed us most was their ability to understand our challenges and deliver real, actionable solutions - not just reports. Their partnership has truly been a catalyst for our long-term success."
  },
  {
    client: "Noor Education Group",
    quote: "AM Consulting played a vital role in helping us develop a scalable growth strategy. From financial planning to process optimization, their consultants worked closely with our leadership team to create a practical roadmap for expansion. They bring a unique blend of deep industry knowledge and a personal approach - we never felt like just another client. Their input continues to guide many of our strategic decisions today."
  },
  {
    client: "Al Jazeera Contracting",
    quote: "Our collaboration with AM Consulting helped us restructure our business operations and implement stronger governance practices. Their strategic guidance and local expertise were invaluable in navigating complex regulatory processes in Bahrain. The team’s professionalism, dedication, and ability to deliver actionable insights have made them one of our most trusted advisors. With their support, we’ve built a more efficient and future-ready organization."
  }
];

const slideVariants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? 40 : -40,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? -40 : 40,
    opacity: 0
  })
};

export default function ConsultingTestimonials() {
  const [activeList, setActiveList] = useState(testimonials);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const handleNext = () => {
    setDirection("next");
    setActiveList(prev => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  const handlePrev = () => {
    setDirection("prev");
    setActiveList(prev => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualNext = () => {
    handleNext();
    startTimer();
  };

  const handleManualPrev = () => {
    handlePrev();
    startTimer();
  };

  const visibleTestimonials = activeList.slice(0, 3);

  return (
    <section
      id="consulting-testimonials"
      style={{
        background: "var(--bg-main)",
        paddingTop: "3rem",
        paddingBottom: "var(--section-py)",
      }}
      className="section-px relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--bg-alt)]/5 -z-0" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Original Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Client Success</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Client <span className="text-[var(--color-accent)]">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        {/* 3-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="testimonial-grid"
        >
          {[0, 1, 2].map((idx) => {
            const t = visibleTestimonials[idx];
            if (!t) return null;
            return (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100%",
                  gridTemplateRows: "100%",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={t.client}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", ease: "easeInOut", duration: 0.5 },
                      opacity: { duration: 0.4 }
                    }}
                    className="info-card"
                    style={{
                      gridArea: "1 / 1 / 2 / 2",
                      padding: "3rem 2.5rem",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    {/* Gold Quote Mark */}
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "3rem",
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        marginBottom: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      &ldquo;
                    </div>

                    {/* Quote Text */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.8,
                        marginBottom: "2.5rem",
                        flexGrow: 1,
                      }}
                    >
                      {t.quote}
                    </p>

                    {/* Separator */}
                    <div
                      style={{
                        width: "24px",
                        height: "2px",
                        background: "var(--color-accent)",
                        marginBottom: "1.5rem",
                      }}
                    />

                    {/* Author Details */}
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {t.client}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Partner with AM Consulting
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12 relative z-10">
          <button
            onClick={handleManualPrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-colors duration-300 cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleManualNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-colors duration-300 cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
