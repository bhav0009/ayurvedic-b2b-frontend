import React from "react"
import Link from "next/link";
import { Leaf, Droplet, Sparkles, Pill, FlaskConical } from "lucide-react";
import { categories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="h-8 w-8" />,
  droplet: <Droplet className="h-8 w-8" />,
  sparkles: <Sparkles className="h-8 w-8" />,
  pill: <Pill className="h-8 w-8" />,
  flask: <FlaskConical className="h-8 w-8" />,
};

export function CategoriesSection() {
  return (
    <section className="bg-secondary/50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Range
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Product Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive range of Ayurvedic products to meet diverse market
            demands
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[category.icon]}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
