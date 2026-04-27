"use client";

const EFFECTS = [
  { icon: "💰", title: "비용 절감", desc: "자체 콘텐츠 구축 대비 시간·비용 대폭 절감" },
  { icon: "⏱", title: "4주 도입", desc: "계약 후 4주 이내 서비스 오픈 가능" },
  { icon: "📈", title: "체류시간 증가", desc: "풍부한 콘텐츠로 페이지 체류 시간 향상" },
  { icon: "🎯", title: "전환율 개선", desc: "정보 신뢰도 상승으로 예약 전환율 개선" },
];

const STEPS = [
  { n: "01", label: "문의·상담" },
  { n: "02", label: "무상 PoC\n(4주)" },
  { n: "03", label: "비용 협의·계약" },
  { n: "04", label: "개발 연동" },
  { n: "05", label: "서비스 오픈" },
];

const PLANS = [
  { name: "Starter", price: "1,200만원~", sub: "연간", desc: "기본 콘텐츠 범위", highlight: false },
  { name: "Standard", price: "협의", sub: "콘텐츠 범위 확장", desc: "API 호출량 기준", highlight: true },
  { name: "Enterprise", price: "최대\n6,000만원", sub: "연간", desc: "전체 API 무제한", highlight: false },
];

export default function B2BSection() {
  return (
    <section id="b2b" className="section-padding" style={{ background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* 헤더 */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#898989", letterSpacing: "0.1em", marginBottom: 16 }}>
            B2B
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#111111",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            4주 안에 여행 콘텐츠를
            <br />
            서비스하세요
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: "#898989", lineHeight: 1.6 }}>
            REST API 또는 웹뷰 방식으로 빠르게 연동
          </p>
        </div>

        {/* 도입 효과 4개 */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}
          className="effect-grid"
        >
          {EFFECTS.map((e) => (
            <div
              key={e.title}
              className="card-shadow"
              style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: "28px 24px",
                textAlign: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(el) => { (el.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(el) => { (el.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{e.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#111111", marginBottom: 8 }}>{e.title}</div>
              <div style={{ fontSize: 13, color: "#898989", lineHeight: 1.5, fontWeight: 300 }}>{e.desc}</div>
            </div>
          ))}
        </div>

        {/* 무상 PoC 배너 */}
        <div
          style={{
            background: "#242424",
            borderRadius: 12,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>
              무상 PoC 제공
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
              4주 체험 후 비용을 결정하세요. 부담 없이 시작할 수 있습니다.
            </div>
          </div>
          <a href="#contact" className="btn-dark" style={{ background: "#ffffff", color: "#242424", flexShrink: 0 }}>
            무료 PoC 신청 →
          </a>
        </div>

        {/* 요금 플랜 + 연동 방식 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="b2b-bottom-grid">
          {/* 요금 */}
          <div className="card-shadow" style={{ background: "#ffffff", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: "#111111", padding: "16px 24px" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>
                PRICING
              </div>
            </div>
            <div style={{ padding: "8px 0" }}>
              {PLANS.map((p, i) => (
                <div
                  key={p.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 24px",
                    background: p.highlight ? "#f5f5f5" : "transparent",
                    borderBottom: i < PLANS.length - 1 ? "1px solid rgba(34,42,53,0.06)" : "none",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#111111" }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: "#898989", marginTop: 2 }}>{p.desc}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#111111", whiteSpace: "pre-line" }}>{p.price}</div>
                    <div style={{ fontSize: 11, color: "#898989" }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 연동 방식 + 도입 프로세스 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* 연동 방식 */}
            <div className="card-shadow" style={{ background: "#ffffff", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ background: "#111111", padding: "16px 24px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>
                  INTEGRATION
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {[
                  { t: "REST API", d: "완전한 UX 커스터마이징" },
                  { t: "웹 뷰", d: "최소 리소스, 즉시 도입" },
                ].map((m, i) => (
                  <div
                    key={m.t}
                    style={{
                      padding: "20px 20px",
                      borderRight: i === 0 ? "1px solid rgba(34,42,53,0.06)" : "none",
                    }}
                  >
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#111111", marginBottom: 4 }}>{m.t}</div>
                    <div style={{ fontSize: 12, color: "#898989", fontWeight: 300 }}>{m.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 도입 프로세스 */}
            <div className="card-shadow" style={{ background: "#ffffff", borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#898989", letterSpacing: "0.08em", marginBottom: 16 }}>
                PROCESS
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
                {STEPS.map((s, i) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: i === 0 || i === 4 ? "#242424" : "#f5f5f5",
                          color: i === 0 || i === 4 ? "#ffffff" : "#898989",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                          margin: "0 auto 6px",
                        }}
                      >
                        {s.n}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#242424",
                          fontWeight: 500,
                          whiteSpace: "pre-line",
                          textAlign: "center",
                          lineHeight: 1.3,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div style={{ width: 20, height: 1, background: "rgba(34,42,53,0.15)", margin: "0 4px 18px" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .effect-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .b2b-bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .effect-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
