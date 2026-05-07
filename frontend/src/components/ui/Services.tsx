import React from "react";
import { Globe, Cpu, Smartphone, ArrowUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 px-4 md:px-20 bg-[#f3f4f6] relative overflow-hidden" id="services">
      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-[2%] w-64 h-64 bg-white/60 rounded-[60px] -z-0"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-40 right-[12%] w-32 h-32 bg-[#6373f2]/80 rounded-[30px] -z-0"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#c5e17a] px-5 py-2 mb-8 relative"
          >
             <span className="text-black text-[14px] font-bold uppercase tracking-wider relative z-10">
              Our Area Of Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-[#1a1a1a] max-w-4xl leading-[1.1] tracking-tight font-heading"
          >
            We Provide Innovative,<br />
            Technology-driven Services
          </motion.h2>
        </div>

        {/* Stepped Services Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-24 md:gap-0"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-start gap-8 max-w-2xl transition-all duration-700 ${service.offset}`}
            >
              {/* Icon & Background Card */}
              <div className="relative flex-shrink-0 group">
                <div className="absolute top-4 left-6 w-32 h-32 bg-white/80 rounded-[40px] -z-10 group-hover:bg-white transition-colors duration-500"></div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-[#6373f2] rounded-[24px] flex items-center justify-center shadow-lg shadow-[#6373f2]/20 relative z-10 cursor-pointer"
                >
                  <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-6 pl-4">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] font-heading">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[17px] font-medium max-w-sm">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Right Back to Top Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute bottom-10 right-10"
      >
        <a href="#hero" className="w-12 h-12 border-2 border-[#6373f2]/20 rounded-full flex items-center justify-center text-[#6373f2] hover:bg-[#6373f2] hover:text-white transition-all duration-300">
           <ArrowUp className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}



