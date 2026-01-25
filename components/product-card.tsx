import Link from "next/link";
import type { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/optimized-image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <OptimizedImage
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          priority={true}
          loading="eager"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 capitalize">
          {product.category}
        </Badge>
        <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
