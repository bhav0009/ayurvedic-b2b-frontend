import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ErrorBoundary } from '@/components/error-boundary'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: false
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://maharishiatreya.com'),
  title: {
    default: 'Maharishi Atreya | Premium B2B Ayurvedic Products Manufacturer',
    template: '%s | Maharishi Atreya',
  },
  description: 'Leading manufacturer and exporter of premium Ayurvedic herbal products. GMP certified, ISO compliant. Trusted by distributors, wholesalers, and healthcare professionals worldwide.',
  keywords: 'ayurvedic products, herbal products, B2B ayurveda, ayurvedic manufacturer, herbal exporter, wholesale herbs, GMP certified, ISO certified',
  generator: 'Next.js',
  applicationName: 'Maharishi Atreya',
  authors: [{ name: 'Maharishi Atreya' }],
  creator: 'Maharishi Atreya',
  publisher: 'Maharishi Atreya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://maharishiatreya.com',
    title: 'Maharishi Atreya | Premium B2B Ayurvedic Products',
    description: 'Leading manufacturer and exporter of premium Ayurvedic herbal products. GMP certified, ISO compliant.',
    siteName: 'Maharishi Atreya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maharishi Atreya | Premium B2B Ayurvedic Products',
    description: 'Leading manufacturer and exporter of premium Ayurvedic herbal products.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#2d5a3d" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics debug={false} />
      </body>
    </html>
  )
}
