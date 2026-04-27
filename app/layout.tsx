import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)텔레스코프 | 여행 콘텐츠 큐레이션·유통 전문기업",
  description:
    "한국·일본 15,000+ POI 여행 콘텐츠를 API로 제공하는 B2B 전문기업. 4주 안에 도입 가능한 여행의기술 콘텐츠.",
  keywords: "여행 콘텐츠, B2B API, 여행의기술, 텔레스코프, 한국여행, 일본여행, POI",
  openGraph: {
    title: "(주)텔레스코프",
    description: "여행 콘텐츠 큐레이션·유통 전문기업",
    siteName: "텔레스코프",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
