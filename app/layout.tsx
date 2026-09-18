import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cerebry | Business Solutions & Strategic Partnerships",
    template: "%s | Cerebry"
  },
  description: "CEREBRY INC is a Wyoming corporation presenting a modern platform for business solutions, strategic conversations, and commercial partnerships.",
  keywords: ["business solutions Wyoming", "strategic partnerships", "digital operations", "business innovation", "Cerebry Inc"],
  openGraph: {
    title: "Cerebry | Business Solutions & Strategic Partnerships",
    description: "A modern starting point for business solutions, strategic conversations, and commercial partnerships.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/cerebry-hero.png", width: 1680, height: 1120, alt: "Cerebry modern business solutions workspace" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerebry | Business Solutions & Strategic Partnerships",
    description: "A modern starting point for business solutions, strategic conversations, and commercial partnerships.",
    images: ["/images/cerebry-hero.png"]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: "Wyoming corporation positioned for business solutions, strategic conversations, and commercial partnerships.",
    areaServed: "United States"
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
