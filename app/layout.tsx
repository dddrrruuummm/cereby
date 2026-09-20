import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cerebry | Workplace Learning & Capability Design",
    template: "%s | Cerebry"
  },
  description: "Cerebry designs practical workplace learning systems, role academies, leadership programs, and team capability experiences.",
  keywords: ["workplace learning design", "corporate training programs", "leadership development", "employee onboarding", "learning strategy", "Cerebry Inc"],
  openGraph: {
    title: "Cerebry | Workplace Learning & Capability Design",
    description: "Practical learning systems designed around the real work people need to do.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/cerebry-learning-hero.png", width: 1536, height: 1024, alt: "Cerebry workplace learning design studio" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerebry | Workplace Learning & Capability Design",
    description: "Practical learning systems designed around the real work people need to do.",
    images: ["/images/cerebry-learning-hero.png"]
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
    description: "Workplace learning and capability design studio serving organizations across the United States.",
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
