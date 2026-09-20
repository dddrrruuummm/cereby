import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative border-2 border-ink bg-white p-3 shadow-[5px_5px_0_#071c2b]">
      <div className="absolute -top-3 right-5 z-10 bg-brass px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em]">Module {product.code}</div>
      <div className="relative aspect-[4/3] overflow-hidden bg-mist"><Image src={product.image} alt={`${product.name} workplace learning program`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
      <div className="px-2 pb-2 pt-5"><p className="text-[10px] font-black uppercase tracking-[0.12em] text-wine">{product.category}</p><div className="mt-2 flex items-start justify-between gap-3"><h3 className="font-serif text-2xl font-bold leading-tight">{product.name}</h3><ArrowUpRight size={18} className="mt-1 shrink-0" /></div><p className="mt-3 text-sm leading-6 text-ink/65">{product.description}</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-ink/20 pt-3 text-[10px] font-bold uppercase tracking-[0.08em]">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
    </article>
  );
}
