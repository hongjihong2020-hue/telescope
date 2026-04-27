"use client";

import Image from "next/image";
import { useState } from "react";

const STATS = [
  { value: "15,000+", label: "POI 스팟" },
  { value: "963", label: "큐레이션 스토리" },
  { value: "4주", label: "도입 기간" },
];

export default function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      style={{
        paddingTop: 144,
        paddingBottom: 96,
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* 좌측 텍스트 */}
          <div>
            {/* 배지 */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 9999,
                boxShadow:
                  "0px 0px 0px 1px rgba(34,42,53,0.10), 0px 1px 4px rgba(34,42,53,0.05)",
                marginBottom: 28,
                fontSize: 13,
                fontWeight: 500,
                color: "#242424",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#242424",
                  display: "inline-block",
                }}
              />
              여행 콘텐츠 B2B 전문기업
            </div>

            {/* 헤드라인 — Cal.com style: tight, bold */}
            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#111111",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              한국·일본
              <br />
              여행 콘텐츠를
              <br />
              당신의 플랫폼에
            </h1>

            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "#898989",
                lineHeight: 1.6,
                marginBottom: 40,
                maxWidth: 440,
              }}
            >
              15,000개 이상의 검증된 POI 데이터를 API 하나로 연결하세요.
              <br />
              4주 안에 서비스 오픈이 가능합니다.
            </p>

            {/* CTA 버튼 */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-dark">
                도입 문의하기 →
              </a>
              <a href="#b2b" className="btn-ghost">
                무료 PoC 신청
              </a>
            </div>

            {/* KPI 수치 */}
            <div
              style={{
                display: "flex",
                gap: 32,
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px solid rgba(34,42,53,0.08)",
              }}
              className="hero-stats"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#111111",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#898989", fontWeight: 400 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 우측 앱 스크린샷 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 280,
                height: 560,
                borderRadius: 32,
                boxShadow:
                  "0px 4px 40px -8px rgba(19,19,22,0.25), 0px 0px 0px 1px rgba(34,42,53,0.10)",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
              className="phone-frame"
            >
              {/* 실제 스크린샷이 있으면 보여주고, 없으면 placeholder */}
              <Image
                src="/images/screenshots/hero.png"
                alt="여행의기술 앱 스크린샷"
                fill
                style={{ objectFit: "cover" }}
                onLoad={() => setImgLoaded(true)}
              />
              {/* Placeholder — 이미지 로드 완료 시 숨김 */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: imgLoaded ? "none" : "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "#f5f5f5",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "#242424",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 26 }}>✈</span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#898989",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  여행의기술 앱
                  <br />
                  스크린샷 등록
                  <br />
                  <span style={{ fontSize: 11 }}>
                    /public/images/screenshots/hero.png
                  </span>
                </p>
              </div>
            </div>

            {/* 배경 장식 원 */}
            <div
              style={{
                position: "absolute",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(34,42,53,0.04) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .phone-frame {
            width: 220px !important;
            height: 440px !important;
          }
          .hero-stats {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
