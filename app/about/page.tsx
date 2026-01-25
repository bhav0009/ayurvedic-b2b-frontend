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
  "In-house analytical laboratory with HPLC, GC-MS, and microbiology testing",
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
                Our Story
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Founded with a vision to share the healing wisdom of Ayurveda
                with the world, Maharishi Atreya has grown from a small family business
                to a global leader in premium herbal products.
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
                    Established in 1991, we, Maharishi Atreya is amongst the
                    foremost names, indulged in manufacturing an extensive range of
                    Ayurvedic Syrups, Tablets, Capsules, malt, Powders and Herbal
                    Cosmetics etc. The offered products are extensively employed by
                    patrons for their longer shelf life, rich taste and easy to digest.
                    These products are available in different packing options that
                    meet on patrons demand.
                  </p>
                  <p className="leading-relaxed">
                    Exceptional quality is the foundation of our company, and is the
                    driving force behind all decisions; whether it's which materials
                    to purchase or the best way to serve our customers.
                  </p>
                  <p className="leading-relaxed font-semibold text-primary">
                    Our commitment to quality guarantees our success and your satisfaction.
                  </p>
                  <p className="leading-relaxed">
                    Today, Maharishi Atreya operates state-of-the-art manufacturing
                    facilities that blend traditional Ayurvedic knowledge with
                    modern scientific rigor. Our team of Ayurvedic practitioners,
                    botanists, and quality specialists work together to create
                    products that honor ancient formulations while meeting
                    contemporary standards.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/about-manufacturing.jpg"
                  alt="Maharishi Atreya manufacturing facility"
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
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
            <div className="grid items-start gap-12 lg:grid-cols-2">
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
              <div
                id="certifications"
                className="rounded-lg border border-border bg-card p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Our Certifications
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Internationally recognized certifications ensuring compliance
                  for global markets
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-md bg-secondary/50 p-3"
                    >
                      <BadgeCheck
                        className="h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          {cert.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
