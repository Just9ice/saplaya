import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ExecutiveTerracesSection } from "@/components/sections/executive-terraces-section";
import { PremiumApartmentsSection } from "@/components/sections/premium-apartments-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ExecutiveTerracesSection />
        <PremiumApartmentsSection />
        <AmenitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
