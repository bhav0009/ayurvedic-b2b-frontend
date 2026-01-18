import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "centered";
}

export function CTASection({
  title = "Ready to Partner with Us?",
  description = "Connect with our team to discuss bulk orders, custom formulations, and export opportunities.",
  buttonText = "Request Inquiry",
  buttonHref = "/contact",
  variant = "default",
}: CTASectionProps) {
  if (variant === "centered") {
    return (
      <section className="bg-primary px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border bg-secondary/30 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
