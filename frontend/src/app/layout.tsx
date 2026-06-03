import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM Group | Consulting, Design, Accounting & Analytics",
  description: "AM Group unites consulting, design, accounting, and analytics to deliver integrated solutions that drive sustainable business growth across the GCC.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
