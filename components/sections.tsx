import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, Layers3, MessageSquareText, PenTool, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, services, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-pearl">
      <Image src="/images/cerebry-learning-hero.png" alt="Team designing a workplace learning program" fill priority sizes="100vw" className="object-cover object-[62%_center] opacity-25 sm:opacity-100" />
      <div className="container-page relative flex min-h-[760px] items-center py-20">
        <div className="max-w-2xl">
          <div className="inline-flex -rotate-2 items-center gap-2 bg-blush px-4 py-2 text-xs font-black uppercase tracking-[0.12em]"><PenTool size={15} />Workplace learning studio</div>
          <h1 className="mt-7 font-serif text-6xl font-bold leading-[0.94] sm:text-7xl lg:text-[88px]">Build capability that <span className="highlight">shows up</span> at work.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">Cerebry designs practical learning systems, team academies, and role-based programs around what people actually need to do.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/showcase">Explore programs <ArrowRight size={17} /></Button><Button href="/contact" variant="secondary">Discuss a learning need</Button></div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 hidden border-2 border-ink bg-white px-5 py-4 shadow-[5px_5px_0_#071c2b] md:block"><p className="eyebrow text-wine">Studio note 01</p><p className="mt-1 font-serif text-lg font-bold">Start with the work, not the course.</p></div>
    </section>
  );
}

export function TrustBand() {
  const items = [
    { icon: BookOpen, title: "Role relevant", text: "Learning built around real decisions, tasks, and moments of need." },
    { icon: Layers3, title: "Designed as a system", text: "Programs, tools, managers, and knowledge resources working together." },
    { icon: MessageSquareText, title: "Made for practice", text: "Less passive content. More discussion, application, and useful feedback." },
  ];
  return <section className="border-y-2 border-ink bg-ink text-white"><div className="container-page grid md:grid-cols-3">{items.map((item, index) => <div key={item.title} className={`flex gap-4 py-7 md:px-7 ${index ? "border-t border-white/20 md:border-l md:border-t-0" : ""}`}><item.icon className="shrink-0 text-brass" size={25} /><div><h3 className="font-serif text-xl font-bold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-white/60">{item.text}</p></div></div>)}</div></section>;
}

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return (
    <section className="paper-lines bg-pearl py-20">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="eyebrow text-wine">Program Library / 2026</p><h2 className="mt-4 max-w-3xl font-serif text-5xl font-bold leading-[0.98] sm:text-6xl">Learning designed for the moments that matter.</h2></div><div><p className="leading-7 text-ink/65">Choose a proven starting point or combine modules into a role academy. Every program is shaped around the audience, work context, and outcomes that matter.</p><Button href="/showcase" variant="ghost" className="mt-3 px-0">Open the full library <ArrowUpRight size={17} /></Button></div></div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <ProductCard key={item.code} product={item} />)}</div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div><p className="eyebrow text-wine">Our Working Method</p><h2 className="mt-4 font-serif text-5xl font-bold leading-none">Four verbs keep the work honest.</h2><p className="mt-6 leading-7 text-ink/65">We stay close to the work, build with the people involved, and use evidence from pilots to make each program stronger.</p><Button href="/services" className="mt-7">See how we work <ArrowRight size={17} /></Button></div>
        <div className="border-t-2 border-ink">{services.map((service, index) => <article key={service.step} className="grid grid-cols-[64px_1fr] gap-5 border-b border-ink/25 py-6 sm:grid-cols-[80px_180px_1fr]"><span className="font-serif text-4xl font-bold text-wine">0{index + 1}</span><h3 className="font-serif text-2xl font-bold">{service.step}</h3><p className="col-start-2 text-sm leading-6 text-ink/60 sm:col-start-auto">{service.detail}</p></article>)}</div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-blush py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="eyebrow">Project Note / New</p><h2 className="mt-4 font-serif text-5xl font-bold leading-[0.95] sm:text-6xl">What should people be able to do better?</h2><p className="mt-6 max-w-md leading-7 text-ink/70">Share the audience, business need, current challenge, and timing. That is enough to begin a useful conversation.</p><a href={`mailto:${site.email}`} className="mt-8 block border-b-2 border-ink pb-3 text-xl font-bold">{site.email}</a><a href={`tel:${site.phoneHref}`} className="mt-3 flex items-center gap-2 text-sm font-bold"><Phone size={17} />{site.phone}</a></div>
        <form className="border-2 border-ink bg-pearl p-6 shadow-[8px_8px_0_#071c2b] sm:p-8"><div className="flex items-center justify-between border-b-2 border-ink pb-4"><p className="eyebrow">Learning brief</p><span className="rounded-full bg-brass px-3 py-1 text-[10px] font-black">01</span></div><div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-bold">Name<input className="focus-ring min-h-12 border-2 border-ink bg-white px-3 text-base font-normal" placeholder="Your name" /></label><label className="grid gap-2 text-xs font-bold">Business email<input className="focus-ring min-h-12 border-2 border-ink bg-white px-3 text-base font-normal" placeholder="you@company.com" /></label></div><label className="mt-5 grid gap-2 text-xs font-bold">Audience or team<input className="focus-ring min-h-12 border-2 border-ink bg-white px-3 text-base font-normal" placeholder="Managers, sales team, new hires..." /></label><label className="mt-5 grid gap-2 text-xs font-bold">What needs to change?<textarea className="focus-ring min-h-32 border-2 border-ink bg-white p-3 text-base font-normal" placeholder="Tell us about the work, gap, and timing." /></label><Button href={`mailto:${site.email}?subject=Cerebry%20Learning%20Brief`} className="mt-6 w-full">Send learning brief <ArrowUpRight size={17} /></Button></form>
      </div>
    </section>
  );
}
