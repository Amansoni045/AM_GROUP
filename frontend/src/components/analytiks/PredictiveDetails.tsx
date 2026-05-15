"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PredictiveDetails() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-4 md:px-12" id="predictive-details">
      <div className="max-w-7xl mx-auto">
        
        {/* Handling Large Datasets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#020817] font-heading">Handling Large Datasets</h3>
            <div className="w-16 h-1 bg-[#6373f2] rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Big data analytics is the process of examining large data sets to uncover hidden patterns, unknown correlations, market trends, customer preferences and other useful business information. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The analytical findings can lead to more effective marketing strategies, building new revenue opportunities, rendering better customer service, improved operational efficiency so as to secure competitive advantages over rival organizations and dial into other business benefits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-[#020817] mb-6 font-heading">Predictive Analytics</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Predictive Analytics is a next major development to Big Data Analytics wherein, technologies that are capable of handling large data sets can generate business interest trigger points that delve into the calculations used for predicting any future decisions.
            </p>
            <h4 className="font-bold text-[#020817] mb-4">Applied areas of Predictive Analytics:</h4>
            <div className="flex gap-4 flex-wrap">
              {['Insurance', 'Telecom', 'Wind-Mill'].map((area, idx) => (
                <div key={idx} className="bg-[#d4af37]/10 text-[#d4af37] px-4 py-2 rounded-lg font-bold">
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
