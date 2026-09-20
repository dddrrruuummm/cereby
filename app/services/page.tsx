import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "How We Work", description: "See how Cerebry discovers, designs, pilots, and improves workplace learning programs." };

export default function ServicesPage() {
  return (
    <main className="bg-pearl">
      <section className="border-b-2 border-ink bg-ink py-16 text-white"><div className="container-page"><p className="eyebrow text-brass">Method / Four Verbs</p><h1 className="mt-5 max-w-5xl font-serif text-6xl font-bold leading-[0.95] sm:text-7xl">A practical way to make learning <span className="text-brass">useful.</span></h1></div></section>
      <section className="paper-lines py-20"><div className="container-page"><div className="border-t-2 border-ink">{services.map((service, index) => <article key={service.step} className="grid gap-5 border-b-2 border-ink py-8 sm:grid-cols-[100px_220px_1fr]"><span className="font-serif text-5xl font-bold text-wine">0{index + 1}</span><h2 className="font-serif text-3xl font-bold">{service.step}</h2><p className="max-w-2xl leading-7 text-ink/65">{service.detail}</p></article>)}</div></div></section>
      <section className="bg-brass py-16"><div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-wine">What We Can Make</p><h2 className="mt-4 font-serif text-4xl font-bold">The format follows the performance need.</h2></div><div className="grid gap-3 sm:grid-cols-2">{["Role-based learning journeys","Leadership and manager programs","Facilitated workshops and labs","Onboarding and readiness systems","Digital modules and practice tools","Knowledge libraries and job aids","Facilitator and manager guides","Measurement and pilot plans"].map((item) => <div key={item} className="flex gap-3 border-b border-ink/30 py-3 text-sm font-bold"><Check size={17} className="shrink-0" />{item}</div>)}</div><Button href="/contact" className="lg:col-start-2">Discuss a learning need <ArrowRight size={17} /></Button></div></section>
    </main>
  );
}
