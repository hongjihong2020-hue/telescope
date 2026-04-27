import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ContentSection from "@/components/ContentSection";
import B2BSection from "@/components/B2BSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ServiceSection />
        <ContentSection />
        <B2BSection />
      </main>
      <ContactFooter />
    </>
  );
}
