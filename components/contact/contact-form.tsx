"use client";

import React from "react"

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const inquiryTypes = [
  { value: "distribution", label: "Distribution Partnership" },
  { value: "wholesale", label: "Wholesale Order" },
  { value: "private-label", label: "Private Label / White Label" },
  { value: "custom", label: "Custom Formulation" },
  { value: "export", label: "Export Inquiry" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: productId
      ? `I am interested in learning more about product: ${productId}`
      : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-border bg-secondary/30 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
          Thank You for Your Inquiry
        </h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message and will respond within 24-48 business
          hours. Our export team will contact you at the email address provided.
        </p>
        <Button
          variant="outline"
          className="mt-6 bg-transparent"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">Type of Inquiry *</Label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) =>
            setFormData({ ...formData, inquiryType: value })
          }
          required
        >
          <SelectTrigger id="inquiryType">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please describe your requirements, including product interests, quantities, and any specific certifications needed..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit Inquiry
      </Button>
    </form>
  );
}
