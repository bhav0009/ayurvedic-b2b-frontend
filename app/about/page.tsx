import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { certifications } from "@/lib/data";
import { BadgeCheck, Target, Heart, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Maharishi Atreya",
  description:
    "Learn about Maharishi Atreya - our story, Ayurvedic values, manufacturing standards, and commitment to quality herbal products.",
};

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Authenticity",
    description:
      "We source herbs from their traditional growing regions to ensure authentic therapeutic properties.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Sustainability",
    description:
      "Our practices support local farming communities and protect natural ecosystems for future generations.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Excellence",
    description:
      "Every product undergoes rigorous testing to meet international quality and safety standards.",
  },
];

const qualityStandards = [
  "Complete traceability from farm to finished product",
  "Climate-controlled storage and processing facilities",
  "Standardized extraction processes for consistent potency",
  "Heavy metal and pesticide residue testing on all batches",
  "Stability testing to ensure product shelf life",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/50 px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                About Maharishi Atreya
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                About Maharishi Atreya Ayurvedic Pharmacy
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Established in 1991, Maharishi Atreya Ayurvedic Pharmacy is a trusted Ayurvedic manufacturer based in Sonipat, Haryana, India — dedicated to preserving the rich heritage of Ayurveda while integrating it with modern manufacturing practices.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                  About Our Company
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Maharishi Atreya Ayurvedic Pharmacy, established in 1991, is a trusted Ayurvedic manufacturer based in Sonipat, Haryana, India. With over three decades of experience, the company is dedicated to preserving the rich heritage of Ayurveda while integrating it with modern manufacturing practices to deliver high-quality herbal healthcare products.
                  </p>
                  <p className="leading-relaxed">
                    At the heart of Maharishi Atreya's philosophy is a deep respect for nature. The pharmacy believes in sourcing herbs from their natural habitats and extracting their therapeutic properties using traditional Ayurvedic methods enhanced by modern manufacturing technology. This unique approach helps preserve the authenticity, purity, and efficacy of every formulation while ensuring consistent quality and safety.
                  </p>
                  <p className="leading-relaxed">
                    The company manufactures a comprehensive range of Ayurvedic proprietary medicines, classical formulations, herbal syrups, capsules, tablets, powders, oils, cosmetics, and personal care products, carefully crafted using authentic herbs and time-tested Ayurvedic principles. Every product is developed with a strong commitment to purity, quality, and effectiveness, supporting holistic health and natural wellness.
                  </p>
                  <p className="leading-relaxed">
                    With stringent quality control standards and ethically sourced raw materials, Maharishi Atreya serves healthcare professionals, distributors, wholesalers, and consumers across India and international markets. Every formulation reflects the company's dedication to excellence, innovation, and the timeless wisdom of Ayurveda.
                  </p>
                  <p className="leading-relaxed font-semibold text-primary">
                    For more than 30 years, Maharishi Atreya Ayurvedic Pharmacy has remained committed to its mission of promoting natural healing through authentic Ayurveda — combining the wisdom of traditional herbal medicine with modern scientific manufacturing to provide safe, reliable, and effective healthcare solutions for generations to come.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.jpeg"
                  alt="Maharishi Atreya Ayurvedic Pharmacy"
                  fill
                  priority
                  loading="eager"
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border bg-secondary/30 px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Our Principles
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Ayurvedic Values We Live By
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section id="quality" className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Quality Assurance
                </p>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                  Manufacturing Excellence
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our commitment to quality is unwavering. Every step of our
                  production process is designed to preserve the natural
                  integrity of our ingredients while ensuring safety and
                  efficacy.
                </p>
                <ul className="mt-8 space-y-3">
                  {qualityStandards.map((standard, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BadgeCheck
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Interested in Partnership?"
          description="Let's discuss how Maharishi Atreya can support your business with premium Ayurvedic products."
          variant="centered"
        />
      </main>
      <Footer />
    </>
  );
}
