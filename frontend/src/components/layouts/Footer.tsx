"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const socialIcons = [
  { name: "Facebook", url: "https://facebook.com/amgroup", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
  { name: "WhatsApp", url: "https://wa.me/97333320643", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
  { name: "LinkedIn", url: "https://linkedin.com/company/amgroup", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
];

const companies = [
  { name: "AM Consulting", href: "/consulting" },
  { name: "AM Accounting", href: "/accounting" },
  { name: "AM Design", href: "/design" },
  { name: "AM Analytiks", href: "/analytiks" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/#what-we-do" },
  { name: "Why Choose Us", href: "/#why-us" },
  { name: "Industry Expertise", href: "/#industries" },
  { name: "Our Services", href: "/#services" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.webp" alt="AM Group Logo" className="h-12 w-auto object-contain mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A multidisciplinary firm bringing together Consulting, Design, Accounting and Data Analytics under one trusted name.
            </p>
            {/* Gold divider */}
            <div className="w-12 h-0.5 bg-[#d4af37] mb-6" />
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.name}
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#6373f2] hover:border-[#6373f2] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6373f2] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Companies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-6">Our Companies</h4>
            <ul className="flex flex-col gap-3">
              {companies.map((c, i) => (
                <li key={i}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#6373f2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+973 33320643</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#6373f2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@amgroupbh.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6373f2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Bahrain | Saudi Arabia | Oman</span>
              </li>
            </ul>

            {/* Operating Countries */}
            <div className="flex gap-2 mt-6">
              {[{name: "Bahrain"}, {name: "KSA"}, {name: "Oman"}].map((c) => (
                <div key={c.name} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300 font-medium">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 AM Group. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs">Bahrain | KSA | Oman · Integrated Solutions for the GCC</p>
        </div>
      </div>
    </footer>
  );
}
