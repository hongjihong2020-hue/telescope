import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | (주)텔레스코프",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* 상단 바 */}
      <div style={{ borderBottom: "1px solid rgba(34,42,53,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 16, color: "#111111", textDecoration: "none", letterSpacing: "0.04em" }}>
          TELESCOPE
        </Link>
        <Link href="/" style={{ fontSize: 13, color: "#898989", textDecoration: "none" }}>
          ← 홈으로
        </Link>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em", marginBottom: 8 }}>
          개인정보처리방침
        </h1>
        <p style={{ fontSize: 14, color: "#898989", marginBottom: 48 }}>시행일: 2025년 1월 1일</p>

        {[
          {
            title: "1. 개인정보 수집 항목 및 목적",
            content: "(주)텔레스코프(이하 '회사')는 서비스 제공, B2B 도입 문의 처리 및 고객 응대를 위해 다음과 같은 개인정보를 수집합니다.\n\n수집 항목: 이름, 이메일 주소, 소속 회사명, 연락처\n수집 목적: 도입 문의 처리, 서비스 안내, 계약 관련 소통",
          },
          {
            title: "2. 개인정보 보유 및 이용 기간",
            content: "수집된 개인정보는 문의 처리 완료 후 1년간 보관하며, 계약 체결 시 계약 종료 후 5년간 보관합니다. 정보 주체가 삭제를 요청하는 경우 지체 없이 파기합니다.",
          },
          {
            title: "3. 개인정보 제3자 제공",
            content: "회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 의거하거나 이용자의 동의가 있는 경우 예외적으로 제공할 수 있습니다.",
          },
          {
            title: "4. 개인정보 처리 위탁",
            content: "회사는 서비스 제공을 위해 필요한 경우 개인정보 처리를 외부 업체에 위탁할 수 있으며, 위탁 시 관련 법령에 따라 안전하게 관리합니다.",
          },
          {
            title: "5. 정보 주체의 권리",
            content: "이용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래 연락처로 문의해 주시기 바랍니다.",
          },
          {
            title: "6. 개인정보 보호 책임자",
            content: "개인정보 처리에 관한 문의사항은 아래로 연락주시기 바랍니다.\n\n책임자: 이현지 (대표)\n이메일: artoftravel2026@gmail.com\n주소: 서울시 강남구 테헤란로 79길 6, 3층",
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111111", marginBottom: 12, letterSpacing: "-0.01em" }}>
              {section.title}
            </h2>
            <div
              style={{
                fontSize: 15,
                color: "#898989",
                lineHeight: 1.8,
                fontWeight: 300,
                whiteSpace: "pre-line",
                paddingLeft: 0,
              }}
            >
              {section.content}
            </div>
            <div style={{ height: 1, background: "rgba(34,42,53,0.06)", marginTop: 32 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
