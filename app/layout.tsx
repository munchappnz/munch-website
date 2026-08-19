import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

// Self-hosted Poppins (SIL Open Font License) — a modern, rounded geometric
// sans that complements the Munch wordmark. Self-hosting avoids a runtime
// dependency on Google Fonts and keeps the site fast.
const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
});

const siteUrl = siteConfig.siteUrl || "https://munch.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Munch | Food & Drink Deals Near You",
    template: "%s | Munch",
  },
  description:
    "Discover limited-time deals from restaurants, cafés and bars near you with Munch. Find a deal, claim it and munch better.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Munch | Food & Drink Deals Near You",
    description:
      "Discover limited-time deals from restaurants, cafés and bars near you with Munch. Find a deal, claim it and munch better.",
    url: siteUrl,
    siteName: "Munch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Munch — Eat more. Spend less. Munch better.",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munch | Food & Drink Deals Near You",
    description:
      "Discover limited-time deals from restaurants, cafés and bars near you with Munch.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Munch",
  description:
    "Munch helps people discover limited-time food and drink deals from nearby restaurants, cafés and bars.",
  applicationCategory: "FoodEstablishment",
  operatingSystem: "iOS, Android",
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-munch-cream text-munch-black">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
