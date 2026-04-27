"use client";

export default function ContactFooter() {
  return (
    <>
      {/* Contact 섹션 */}
      <section id="contact" className="section-padding" style={{ background: "#111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 16 }}>
            CONTACT
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            콘텐츠 도입 ·
            <br />
            제휴 문의
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 48 }}>
            무상 PoC부터 시작하세요.
            <br />
            4주 후 비용을 결정합니다.
          </p>

          {/* 연락처 카드 3개 */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            {[
              { label: "이메일", value: "artoftravel2026@gmail.com", href: "mailto:artoftravel2026@gmail.com" },
              { label: "웹사이트", value: "www.tel-co.net", href: "https://www.tel-co.net" },
              { label: "앱", value: "여행의기술", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: "20px 28px",
                  minWidth: 200,
                  textDecoration: "none",
                  boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.10)",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.10)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)"; }}
              >
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 6, fontWeight: 500 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#ffffff" }}>{c.value}</div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2025 (주)텔레스코프. All rights reserved.
          </div>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.15)" }}>
            서울시 강남구 테헤란로 79길 6, 3층
          </span>
        </div>
      </footer>
    </>
  );
}
