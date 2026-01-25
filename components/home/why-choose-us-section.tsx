import React from "react"
import { ShieldCheck, Award, Leaf, Globe } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  leaf: <Leaf className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
};

export function WhyChooseUsSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Advantage
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Why Partner with Maharishi Atreya
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We combine traditional expertise with modern business practices to
            deliver exceptional value
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                {iconMap[item.icon]}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
