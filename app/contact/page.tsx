import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Maharishi Atreya",
  description:
    "Get in touch with Maharishi Atreya for B2B inquiries, bulk orders, export partnerships, and custom formulations.",
};

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "export@maharishiatreya.com",
    href: "mailto:export@maharishiatreya.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+91 123 456 7890",
    href: "https://wa.me/911234567890",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Address",
    value: "Industrial Area, Haridwar, Uttarakhand, India 249401",
    href: null,
  },
];

const partnershipTypes = [
  "Distribution Partnerships",
  "Wholesale Orders",
  "Private Label / White Label",
  "Custom Formulations",
  "Export Inquiries",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Contact Us
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Whether you&apos;re looking for distribution partnerships, bulk
                orders, or custom formulations, our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Send Us an Inquiry
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and our export team will respond within
                  24-48 business hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2">
                <div className="rounded-lg border border-border bg-card p-8">
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                    Business Contact
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Reach out directly to our export and sales team.
                  </p>

                  <div className="mt-8 space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-card-foreground hover:text-primary"
                              target={
                                item.href.startsWith("http") ? "_blank" : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-card-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Partnership Types */}
                  <div className="mt-10 border-t border-border pt-8">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h3 className="font-semibold text-card-foreground">
                        Partnership Opportunities
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {partnershipTypes.map((type, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
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
