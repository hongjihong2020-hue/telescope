"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "서비스", href: "#service" },
  { label: "콘텐츠", href: "#content" },
  { label: "B2B 도입", href: "#b2b" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: scrolled
          ? "1px solid rgba(34,42,53,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0px 1px 8px rgba(34,42,53,0.06)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 로고 */}
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: 17,
            color: "#111111",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          TELESCOPE
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#111111",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: 6,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-dark" style={{ marginLeft: 8, fontSize: 14, padding: "9px 18px" }}>
            도입 문의 →
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
          aria-label="메뉴"
        >
          <div style={{ width: 22, height: 2, background: "#242424", marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: "#242424", marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: "#242424" }} />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid rgba(34,42,53,0.08)",
            padding: "12px 24px 20px",
          }}
          className="show-mobile"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                color: "#111111",
                textDecoration: "none",
                borderBottom: "1px solid rgba(34,42,53,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-dark"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            도입 문의 →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
