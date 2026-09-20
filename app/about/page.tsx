import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Studio", description: "Meet Cerebry, a workplace learning and capability design studio based in Wyoming." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-brass py-16"><div className="container-page"><p className="eyebrow text-wine">Studio / About</p><h1 className="mt-5 max-w-5xl font-serif text-6xl font-bold leading-[0.95] sm:text-7xl">We design learning around <span className="bg-white px-2">real work.</span></h1></div></section>
      <section className="paper-lines bg-pearl py-20"><div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="relative mx-auto w-full max-w-xl"><div className="absolute -left-3 -top-3 z-10 bg-blush px-4 py-2 text-xs font-black uppercase tracking-[0.1em]">Field note 02</div><div className="relative aspect-[4/5] overflow-hidden border-2 border-ink shadow-[9px_9px_0_#071c2b]"><Image src="/images/cerebry-learning-studio.png" alt="Learning designer reviewing a capability map" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div></div><div><p className="eyebrow text-wine">Our Point of View</p><h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">The course is only one part of the answer.</h2><p className="mt-6 leading-8 text-ink/68">Cerebry is a Wyoming-based workplace learning studio. We help organizations make expectations clearer, practice more useful, knowledge easier to find, and capability development more connected to daily performance.</p><p className="mt-4 leading-8 text-ink/68">Our work can take the form of a focused workshop, a manager program, a role academy, an onboarding journey, or a broader learning system. The format follows the need.</p><div className="coral-note mt-9 bg-blush p-6"><p className="font-serif text-2xl font-bold">Listen closely. Map the work. Make something useful. Learn from what happens.</p></div><Button href="/contact" className="mt-8">Start a conversation <ArrowRight size={17} /></Button></div></div></section>
    </>
  );
}
