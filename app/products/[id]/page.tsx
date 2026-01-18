import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Maharishi Ayurveda",
    };
  }

  return {
    title: `${product.name} | Maharishi Ayurveda`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <section className="border-b border-border bg-secondary/30 px-4 py-4">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Products
            </Link>
          </div>
        </section>

        {/* Product Details */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Product Info */}
              <div>
                <Badge variant="secondary" className="capitalize">
                  {product.category}
                </Badge>
                <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="mt-8">
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    Ingredients
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mt-8">
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    Benefits
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div className="mt-8">
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    Suggested Usage
                  </h2>
                  <p className="mt-3 text-muted-foreground">{product.usage}</p>
                </div>

                {/* CTA */}
                <div className="mt-10 rounded-lg border border-border bg-secondary/30 p-6">
                  <h3 className="font-semibold text-foreground">
                    Interested in this product?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Contact our sales team for bulk pricing, custom packaging,
                    and export documentation.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href={`/contact?product=${product.id}`}>
                      Request B2B Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
