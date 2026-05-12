"use client";

function CategoryCard({ cat }: { cat: { id: string; title: string; desc: string; filename: string } }) {
  return (
    <div
      className="card-shadow"
      style={{ background: "#ffffff", borderRadius: 12, overflow: "hidden", transition: "transform 0.2s ease" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
    >
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111111", marginBottom: 8, letterSpacing: "-0.01em" }}>{cat.title}</h3>
        <p style={{ fontSize: 14, color: "#898989", lineHeight: 1.6, fontWeight: 300 }}>{cat.desc}</p>
      </div>
    </div>
  );
}

const KPIS = [
  { value: "15,000+", label: "전체 POI 스팟" },
  { value: "963", label: "큐레이션 스토리" },
  { value: "8,449", label: "맛집 데이터" },
  { value: "3,147", label: "여행지 스팟" },
];

const CATEGORIES = [
  {
    id: "place",
    title: "여행지",
    desc: "관광명소, 랜드마크, 테마파크, 기념관. 이미지·주소·지도·영상을 한 화면에서",
    filename: "place.png",
  },
  {
    id: "restaurant",
    title: "맛집",
    desc: "흑백요리사·허영만 백반기행 등 TV 방송, 성시경·풍자·쯔양 등 유튜버, 미쉐린·블루리본 기관인증 큐레이션",
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
    desc: "지역별 쇼핑 스팟, 전통시장, 체험 프로그램을 한눈에",
    filename: "shopping.png",
  },
  {
    id: "kcontent",
    title: "K-콘텐츠 투어",
    desc: "영화·드라마 촬영지, K-스타 성지. 케이팝데몬헌터스, 기생충, 폭싹속았수다, BTS 촬영지 등",
    filename: "story.png",
  },
  {
    id: "youtube",
    title: "유튜버 투어",
    desc: "빠니보틀, 곽튜브, 할명수 등 인기 여행 유튜버의 코스를 영상과 스팟 정보를 함께",
    filename: "youtube.png",
  },
  {
    id: "theme",
    title: "테마 투어",
    desc: "부산 근현대사, 대전 빵지순례, 경주 신라역사, 대한민국 100대 명산, 유네스코 투어 등",
    filename: "theme.png",
  },
  {
    id: "ai",
    title: "AI 리뷰",
    desc: "구글·네이버·카카오 등 다양한 플랫폼 후기를 AI가 요약. 스팟 상세 페이지에서 바로 확인",
    filename: "ai.png",
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
            대한민국 전 지역
            <br />
            소도시 & 스토리
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: "#898989", lineHeight: 1.6 }}>
            제주, 부산, 경주, 강릉 등 전국 소도시의 검증된 여행 콘텐츠 데이터베이스
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
            <CategoryCard key={cat.id} cat={cat} />
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
