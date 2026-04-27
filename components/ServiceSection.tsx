"use client";

const TRENDS = [
  {
    num: "01",
    title: "개인화",
    stat: "FIT 비중 70% 돌파",
    desc: "패키지에서 자유여행으로 전환이 가속되고 있습니다. 나만의 맞춤 여행 수요가 급증하고 있습니다.",
  },
  {
    num: "02",
    title: "소도시",
    stat: "재방문율·체류기간 증가",
    desc: "대도시 1회 방문에서 소도시 N회 방문으로 여행 패턴이 변화하고 있습니다.",
  },
  {
    num: "03",
    title: "경험 중심",
    stat: "미식·드라이브·로컬 체험",
    desc: "단순 관광을 넘어 로컬 라이프스타일 콘텐츠가 여행의 핵심이 되고 있습니다.",
  },
  {
    num: "04",
    title: "콘텐츠가 결정",
    stat: "SNS·유튜브 → 예약",
    desc: "OTA 검색 전에 유튜브·SNS에서 여행지 의사결정이 완료됩니다.",
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="section-padding" style={{ background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* 섹션 헤더 */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#898989", letterSpacing: "0.1em", marginBottom: 16 }}>
            WHY NOW
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
            여행의 무게중심이
            <br />
            바뀌고 있습니다
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: "#898989", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            예약 플랫폼 중심에서 콘텐츠 중심으로.
            <br />
            의사결정의 시작점이 달라졌습니다.
          </p>
        </div>

        {/* 트렌드 카드 그리드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="trend-grid"
        >
          {TRENDS.map((t) => (
            <div
              key={t.num}
              className="card-shadow"
              style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: 28,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#898989",
                  letterSpacing: "0.08em",
                  marginBottom: 12,
                }}
              >
                {t.num}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.title}
              </h3>
              <div
                style={{
                  display: "inline-block",
                  background: "#242424",
                  color: "#ffffff",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 9999,
                  marginBottom: 14,
                }}
              >
                {t.stat}
              </div>
              <p style={{ fontSize: 14, color: "#898989", lineHeight: 1.6, fontWeight: 300 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trend-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .trend-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
