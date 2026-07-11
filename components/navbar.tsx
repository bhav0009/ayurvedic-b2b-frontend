"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-primary">
              <Mail className="h-4 w-4" />
              <span className="font-medium">info@maharishiatreya.com</span>
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
          <div className="flex items-center gap-3 group">
            <button
              type="button"
              className="relative h-12 w-12 overflow-hidden rounded-full cursor-pointer flex-shrink-0"
              onClick={() => setLogoOpen(true)}
            >
              <Image
                src="/images/logo.jpeg"
                alt="Maharishi Atreya Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </button>
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Maharishi Atreya
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                PREMIUM HERBAL PRODUCTS
              </span>
            </Link>
          </div>

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
            <Button asChild className="bg-[#1e3a5f] hover:bg-[#162d4a] text-white">
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
              <div className="pt-4">
                <Button asChild className="w-full bg-[#1e3a5f] hover:bg-[#162d4a] text-white">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Inquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      {logoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
          onClick={() => setLogoOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
              onClick={() => setLogoOpen(false)}
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
            <img
              src="/images/logo.jpeg"
              alt="Maharishi Atreya Logo"
              className="max-h-[80vh] max-w-[80vw] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
