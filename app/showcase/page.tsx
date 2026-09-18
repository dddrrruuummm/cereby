import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore Cerebry focus areas across strategy, operations, innovation, market intelligence, and commercial development."
};

export default function ShowcasePage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <p className="eyebrow text-wine">Focus Areas</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">A flexible set of lenses for modern business opportunity.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-ink/70">
          This showcase presents strategic focus areas rather than fixed client claims. Visuals and descriptions are intentionally modular, so they can be refined around approved services, industry context, and future programs as the business develops.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
