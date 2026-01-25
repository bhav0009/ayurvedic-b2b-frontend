import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ProductsGrid } from "@/components/products/products-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Maharishi Atreya",
  description:
    "Explore our comprehensive range of premium Ayurvedic products including herbs, oils, powders, capsules, and traditional formulations.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Our Products
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                Premium Ayurvedic Products
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover our extensive catalog of traditionally crafted herbal
                products, available for wholesale and export partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <ProductsGrid />
          </div>
        </section>

        <CTASection
          title="Need Custom Formulations?"
          description="We offer private label services and can develop custom products to meet your specific market requirements."
        />
      </main>
      <Footer />
    </>
  );
}
