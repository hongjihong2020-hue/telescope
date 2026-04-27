"use client";

import Image from "next/image";

const KPIS = [
  { value: "15,000+", label: "전체 POI 스팟" },
  { value: "963", label: "큐레이션 스토리" },
  { value: "8,449", label: "맛집 데이터" },
  { value: "3,147", label: "여행지 스팟" },
];

const CATEGORIES = [
  {
    id: "story",
    title: "스토리",
    desc: "지역별 테마, 영화·드라마 촬영지, 유튜버 투어 등 큐레이션 스토리",
    filename: "story.png",
  },
  {
    id: "place",
    title: "여행지",
    desc: "관광명소, 랜드마크, 테마파크, 기념관. 이미지·지도·영상을 한 번에",
    filename: "place.png",
  },
  {
    id: "restaurant",
    title: "맛집",
    desc: "유튜버·방송 소개 맛집, AI 리뷰. 광고 없는 현지 찐 맛집",
    filename: "restaurant.png",
  },
  {
    id: "cafe",
    title: "카페",
    desc: "뷰 맛집, 빵 맛집, 브런치 카페. 대한민국 제과 명장 빵집 포함",
    filename: "cafe.png",
  },
  {
    id: "shopping",
    title: "쇼핑·체험",
    desc: "전통시장, 쇼핑스팟, 지역별 체험 스팟 정보",
    filename: "shopping.png",
  },
  {
    id: "youtube",
    title: "유튜버 투어",
    desc: "여행·미식 유튜브 영상과 POI 스팟을 한 번에 연결",
    filename: "youtube.png",
  },
];

export default function ContentSection() {
  return (
    <section id="content" className="section-padding" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* 헤더 */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#898989", letterSpacing: "0.1em", marginBottom: 16 }}>
            CONTENT
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
            한국 전 지역 +
            <br />
            일본 14개 도시
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: "#898989", lineHeight: 1.6 }}>
            지속적으로 확장 중인 검증된 여행 콘텐츠 데이터베이스
          </p>
        </div>

        {/* KPI 4개 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 64,
          }}
          className="kpi-grid"
        >
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="card-shadow"
              style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {k.value}
              </div>
              <div style={{ fontSize: 14, color: "#898989", fontWeight: 400 }}>{k.label}</div>
            </div>
          ))}
        </div>

        {/* 6 카테고리 그리드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="category-grid"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="card-shadow"
              style={{
                background: "#ffffff",
                borderRadius: 12,
                overflow: "hidden",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* 스크린샷 영역 */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#f5f5f5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`/images/screenshots/${cat.filename}`}
                  alt={`${cat.title} 스크린샷`}
                  fill
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "#f5f5f5",
                  }}
                  className="screenshot-placeholder"
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "#898989",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    스크린샷 등록
                    <br />
                    <span style={{ color: "#bbb" }}>
                      screenshots/{cat.filename}
                    </span>
                  </div>
                </div>
              </div>

              {/* 텍스트 */}
              <div style={{ padding: "20px 24px 24px" }}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: 14, color: "#898989", lineHeight: 1.6, fontWeight: 300 }}>
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .category-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
