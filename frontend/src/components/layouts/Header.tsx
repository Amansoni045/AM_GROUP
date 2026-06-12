"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "AM Consulting", href: "/consulting" },
  { name: "AM Accounting", href: "/accounting" },
  { name: "AM Design", href: "/design" },
  { name: "AM Technology", href: "/technology" },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/amgroupgcc/",
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/amgroup_gcc/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/am-consulting-co-wll/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top bar ── */}
      <div
        style={{
          background: "var(--bg-main)",
          borderBottom: "1px solid var(--border-light)",
          fontFamily: "var(--font-body)",
        }}
        className="w-full"
      >
        <div
          className="container-max section-px flex items-center justify-between"
          style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem" }}
        >
          <a
            href="tel:+97333320643"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +973 33320643
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  color: "var(--text-light)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-light)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.95)" : "var(--bg-main)",
          borderBottom: "1px solid var(--border-light)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          className="container-max section-px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src="/logo.webp"
              alt="AM Group"
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="xl-nav"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: isActive ? "var(--color-primary)" : "var(--text-secondary)",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-primary)";
                    const underline = el.querySelector(".underline") as HTMLElement;
                    if (underline) underline.style.width = "100%";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = isActive ? "var(--color-primary)" : "var(--text-secondary)";
                    const underline = el.querySelector(".underline") as HTMLElement;
                    if (underline) underline.style.width = isActive ? "100%" : "0";
                  }}
                >
                  {item.name}
                  <span
                    className="underline"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "1px",
                      background: "var(--color-primary)",
                      width: isActive ? "100%" : "0",
                      transition: "width 0.3s ease",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="/#consultation"
              className="btn-primary cta-desktop"
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.75rem" }}
              onClick={e => {
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get in Touch
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
                color: "var(--color-primary)",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
              className="hamburger-btn"
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "opacity 0.25s ease",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "var(--bg-main)",
            display: "flex",
            flexDirection: "column",
            paddingTop: "100px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
          onClick={e => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: isActive ? "var(--color-accent)" : "var(--color-primary)",
                    textDecoration: "none",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--border-light)",
                    display: "block",
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="tel:+97333320643"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +973 33320643
            </a>
            <div style={{ display: "flex", gap: "1.25rem", marginTop: "0.5rem" }}>
              {socialLinks.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{ color: "var(--text-light)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .xl-nav { display: flex !important; }
          .cta-desktop { display: inline-flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
