import { certifications } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function CertificationsSection() {
  return (
    <section className="border-t border-border bg-secondary/30 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Trust & Compliance
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Globally Certified Quality
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our products meet stringent international standards, ensuring
            compliance for markets worldwide
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
