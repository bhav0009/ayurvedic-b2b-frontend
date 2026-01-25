"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@maharishiatreya.com</span>
              </div>
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Trusted by 500+ Healthcare Professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Leaf className="h-10 w-10 text-primary transition-transform group-hover:scale-110" aria-hidden="true" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Maharishi Atreya
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                PREMIUM HERBAL PRODUCTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-muted-foreground transition-all hover:text-primary group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Get Quote</div>
              <div className="text-sm font-bold text-primary">24/7 Support</div>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-lg">
              <Link href="/contact">Request Inquiry</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
            <div className="space-y-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2 px-4 py-2 text-sm text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-green-600">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Inquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
