"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ayurveda.jpg"
          alt="Ayurvedic herbal products arrangement"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Cinematic gradient overlay (important) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">

        {/* Overline (like Atharva shirorekha feeling) */}
        <div className="mb-3 h-[2px] w-80 bg-[#e8d8b7]/70" />

        {/* Brand Title */}
        <h1
          className={`${cinzel.className} text-6xl sm:text-7xl lg:text-8xl text-[#f3e6c9]`}
          style={{
            letterSpacing: "0.08em",
            lineHeight: "1.15",
            textTransform: "lowercase",
            textShadow: `
              0 2px 6px rgba(0,0,0,0.7),
              0 0 12px rgba(255,230,180,0.25)
            `,
          }}
        >
          maharishi atreya
        </h1>

        {/* Tagline */}
        <p
          className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-[#f3e6c9]/95 sm:text-xl"
          style={{
            textShadow: "0 3px 10px rgba(0,0,0,0.6)",
          }}
        >
          Bridging ancient Ayurvedic wisdom with modern quality standards.
          Your trusted partner for herbal products, serving distributors,
          wholesalers, and healthcare professionals in over 50 countries.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          
          <Button asChild size="lg" className="font-semibold">
            <Link href="/contact">
              Request Inquiry
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#f3e6c9]/40 bg-transparent text-[#f3e6c9] hover:bg-[#f3e6c9]/10 hover:text-[#f3e6c9]"
          >
            <Link href="/products">Explore Products</Link>
          </Button>

        </div>
      </div>
    </section>
  );
}