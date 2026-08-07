import type { Metadata } from "next";


import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://saplaya.vercel.app"),
  title: "Saplaya Residency | Mediterranean Life on the Lagos Waterfront",
  description:
    "60 premium apartments and executive terraces in Apapa, Lagos. Designed for professionals, investors, and corporate tenants.",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Saplaya Residency",
    description: "Mediterranean Life on the Lagos Waterfront",
    url: "https://saplaya.vercel.app",
    siteName: "Saplaya Residency",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Saplaya Residency Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saplaya Residency",
    description: "Mediterranean Life on the Lagos Waterfront",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-cream font-sans text-ink">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
