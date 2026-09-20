import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Learning Programs", description: "Explore ten workplace learning and capability program directions from Cerebry." };

export default function ShowcasePage() {
  return (
    <main className="paper-lines bg-pearl pb-20">
      <section className="border-b-2 border-ink bg-wine py-16 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><p className="eyebrow text-brass">Program Library / 01-10</p><h1 className="mt-5 font-serif text-6xl font-bold leading-[0.95] sm:text-7xl">Start with a module.<br />Build a system.</h1></div><p className="max-w-lg border-l-2 border-white/30 pl-6 leading-7 text-white/70">These program directions can stand alone or become part of a role academy, onboarding journey, leadership curriculum, or broader capability system.</p></div></section>
      <section className="container-page pt-14"><div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4 text-[10px] font-black uppercase tracking-[0.13em]"><span>Cerebry workplace learning studio</span><span>Ten program directions</span></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.code} product={product} />)}</div></section>
    </main>
  );
}
