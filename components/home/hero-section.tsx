import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ayurveda.jpg"
          alt="Ayurvedic herbal products arrangement"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          Trusted by Partners Worldwide
        </p>
        <h1 className="mt-4 max-w-4xl text-balance font-serif text-4xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
          Premium Ayurvedic Products for Global Distribution
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
          Bridging ancient Ayurvedic wisdom with modern quality standards. Your
          trusted partner for herbal products, serving distributors, wholesalers,
          and healthcare professionals in over 50 countries.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
