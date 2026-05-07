import React from "react";
import { Globe, Cpu, Smartphone, ArrowUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Smart Cities",
      desc: "We are building a smart city where innovation, sustainability, and technology come together to create a better future for all.",
      icon: Globe,
      offset: "md:ml-0 md:mt-0"
    },
    {
      title: "Digital Transformation",
      desc: "We are leading the digital transformation journey, empowering businesses with innovative technology for a smarter and more connected future.",
      icon: Cpu,
      offset: "md:ml-[30%] md:mt-16"
    },
    {
      title: "Smart Building",
      desc: "We are shaping the future with smart buildings that integrate technology, efficiency, and comfort for smarter living and working environments.",
      icon: Smartphone,
      offset: "md:ml-[60%] md:mt-16"
    }
  ];

  return (
    <section className="py-32 px-4 md:px-20 bg-[#f3f4f6] relative overflow-hidden" id="services">
      {/* Background Decorative Elements - Rounded Squares from Image */}
      <div className="absolute top-10 right-[2%] w-64 h-64 bg-white/60 rounded-[60px] -z-0"></div>
      <div className="absolute top-40 right-[12%] w-32 h-32 bg-[#6373f2]/80 rounded-[30px] -z-0"></div>
      <div className="absolute top-[50%] right-[15%] w-48 h-48 bg-white/40 rounded-[50px] -z-0"></div>
      <div className="absolute top-[20%] right-[20%] w-40 h-40 bg-white/40 rounded-[40px] -z-0"></div>
      <div className="absolute bottom-[10%] right-[5%] w-32 h-32 bg-white/60 rounded-[30px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-32">
          <div className="inline-block bg-[#c5e17a] px-5 py-2 mb-8 relative">
             <span className="text-black text-[14px] font-bold uppercase tracking-wider relative z-10">
              Our Area Of Services
            </span>
            {/* Tag effect if needed, but the image shows a simple rectangle with slight offset maybe? 
                Actually, it looks like a simple rectangle. */}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] max-w-4xl leading-[1.1] tracking-tight font-heading">
            We Provide Innovative,<br />
            Technology-driven Services
          </h2>
        </div>

        {/* Stepped Services Layout */}
        <div className="flex flex-col gap-24 md:gap-0">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-start gap-8 max-w-2xl transition-all duration-700 ${service.offset}`}
            >
              {/* Icon & Background Card */}
              <div className="relative flex-shrink-0 group">
                {/* Rounded background card */}
                <div className="absolute top-4 left-6 w-32 h-32 bg-white/80 rounded-[40px] -z-10 group-hover:bg-white transition-colors duration-500"></div>
                
                {/* Blue Icon Square */}
                <div className="w-20 h-20 bg-[#6373f2] rounded-[24px] flex items-center justify-center shadow-lg shadow-[#6373f2]/20 relative z-10">
                  <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6 pl-4">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] font-heading">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[17px] font-medium max-w-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right Back to Top Button from Image */}
      <div className="absolute bottom-10 right-10">
        <a href="#hero" className="w-12 h-12 border-2 border-[#6373f2]/20 rounded-full flex items-center justify-center text-[#6373f2] hover:bg-[#6373f2] hover:text-white transition-all duration-300">
           <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}


