import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Quality Standards", href: "/about#quality" },
    { label: "Certifications", href: "/about#certifications" },
  ],
  products: [
    { label: "Herbs", href: "/products?category=herbs" },
    { label: "Oils", href: "/products?category=oils" },
    { label: "Powders", href: "/products?category=powders" },
    { label: "Capsules", href: "/products?category=capsules" },
    { label: "Formulations", href: "/products?category=formulations" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="font-serif text-xl font-semibold text-foreground">
                Maharishi Atreya
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Leading manufacturer and global exporter of premium Ayurvedic
              herbal products. Trusted by healthcare professionals and
              distributors worldwide.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+917011166857"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91-7011166857
              </a>
              <a
                href="tel:+919416463399"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                9416463399
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  MAHARISHI ATREYA AYURVEDIC PHARMACY
                  <br />
                  M-11 Industrial Area, Sonepat 131001
                  <br />
                  Haryana, India
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Maharishi Atreya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
