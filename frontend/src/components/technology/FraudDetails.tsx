"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function FraudDetails() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="fraud-details">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Using Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading">Using Analytics to Protect Yourself</h3>
            <div className="w-16 h-1 bg-[var(--color-accent-soft)] rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Departments such as internal audit and compliance can play a critical role in FCPA compliance by implementing effective monitoring techniques. This shines a light on potential violations and helps develop a culture in which employees know their activities will be reviewed for possible ethical breaches.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              One way to monitor for FCPA violations is through use of data analytics, which allow for complete, comprehensive testing of all corporate transactions. Companies can meet FCPA accounting provisions by employing assureBI to repeatedly test the effectiveness of internal controls and highlight specific transactions that appear suspicious.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-card group"
          >
            <div className="info-card-top-bar" />
            <h3 className="info-card-title mb-6">Key Elements Uncovered by Software</h3>
            <div className="space-y-4">
              {[
                "Payments to vendors on watch lists or government contractors require strict review to prevent compliance or fraud risks.",
                "Payments made through foreign accounts must be monitored closely to detect unauthorized transfers or money laundering.",
                "Hiring new consultants or attorneys without prior ties needs verification to avoid unethical or fraudulent engagements.",
                "Transactions labeled vaguely like 'services rendered' or 'gifts' may indicate fraud or improper financial activities.",
                "Issuing checks to 'cash' increases misuse risk and reduces financial traceability within accounting systems.",
                "Cash or government-related payments need scrutiny to confirm legitimacy and compliance with financial regulations."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-1" />
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Video Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading mb-4">Educational Resources</h3>
            <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/2hZpOLwHYHI" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dyTiiRq8vA8" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/PpL3adU0YaM" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
