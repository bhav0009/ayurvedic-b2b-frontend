import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <CategoriesSection />
        <WhyChooseUsSection />
        <CertificationsSection />
        <CTASection variant="centered" />
      </main>
      <Footer />
    </>
  );
}
