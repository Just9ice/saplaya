import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { WhySaplayaSection } from "@/components/sections/why-saplaya-section";
import { LocationSection } from "@/components/sections/location-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { ExecutiveTerracesSection } from "@/components/sections/executive-terraces-section";
import { PremiumApartmentsSection } from "@/components/sections/premium-apartments-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <LocationSection />
        <WhySaplayaSection />
        <ExecutiveTerracesSection />
        <PremiumApartmentsSection />
        <AmenitiesSection />
        <InfrastructureSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
