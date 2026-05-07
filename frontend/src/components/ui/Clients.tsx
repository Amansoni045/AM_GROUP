import React from "react";

export default function Clients() {
  const clients = [
    'SAUD BAHWAN', 'OMAN TEL', 'OYO', 'LILOU', 'HAJI HASSAN', 
    'THYROCA', 'MOJ OMAN', 'MIM', 'RWAQ', 'MUSANDAM',
    'MINISTRY OF JUSTICE', 'SULTANATE OF OMAN', 'BAHRAIN GOV', 'KSA VISION',
    'NAMA GROUP', 'OMAN POST', 'ELM', 'SUPREME COUNCIL', 'UNIVERSITY TECH'
  ];

  // Split clients into two rows for variety
  const row1 = [...clients, ...clients];
  const row2 = [...[...clients].reverse(), ...clients];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden" id="clients">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Client</h2>
        </div>
        
        <div className="relative flex flex-col gap-12">
          {/* Row 1: Marquee Forward */}
          <div className="flex animate-marquee border-l border-gray-400">
            {row1.map((client, i) => (
              <div 
                key={`row1-${i}`} 
                className="flex-shrink-0 w-[180px] border-r border-t border-b border-gray-400 p-6 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 h-[150px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 text-center uppercase">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Marquee Reverse */}
          <div className="flex animate-marquee-reverse border-l border-gray-400">
            {row2.map((client, i) => (
              <div 
                key={`row2-${i}`} 
                className="flex-shrink-0 w-[180px] border-r border-t border-b border-gray-400 p-6 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 h-[150px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 text-center uppercase">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
