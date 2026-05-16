import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM GROUP",
  description: "Empowering businesses through expert consulting, comprehensive accounting, and innovative design.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

import TopBar from "@/components/layouts/TopBar";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased flex flex-col min-h-screen relative">
        <div className="absolute top-0 w-full z-50">
          <TopBar />
          <Header />
        </div>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
