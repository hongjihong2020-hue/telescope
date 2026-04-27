"use client";

const EFFECTS = [
  { icon: "💰", title: "비용 절감", desc: "자체 콘텐츠 구축 대비 시간·비용 대폭 절감" },
  { icon: "⏱", title: "4주 도입", desc: "계약 후 4주 이내 서비스 오픈 가능" },
  { icon: "📈", title: "체류시간 증가", desc: "풍부한 콘텐츠로 페이지 체류 시간 향상" },
  { icon: "🎯", title: "전환율 개선", desc: "정보 신뢰도 상승으로 예약 전환율 개선" },
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

      </div>

      <style>{`
        @media (max-width: 900px) {
          .effect-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .effect-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
