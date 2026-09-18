import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CEREBRY INC, a Wyoming corporation presenting a modern platform for business solutions and strategic partnerships."
};

export default function AboutPage() {
  return (
    <section className="bg-pearl py-16">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-wine">About Cerebry</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">A clear corporate base for better business conversations.</h1>
          <p className="mt-6 leading-8 text-ink/70">
            CEREBRY INC is a Wyoming corporation. Its formation records establish the corporate entity but do not define a required industry or product category, so this website presents a flexible foundation for business solutions, strategic conversations, and commercial partnerships.
          </p>
          <p className="mt-4 leading-8 text-ink/70">
            Our website presents a professional starting point for organizations and partners to begin a qualified discussion around business needs, operating questions, innovation, and commercial opportunity.
          </p>
          <Button href="/contact" className="mt-7">Contact the Company</Button>
        </div>
        <div className="grid gap-4 rounded-md border border-ink/10 bg-white p-7 shadow-soft"><p className="eyebrow text-wine">Operating Focus</p><p className="text-3xl font-bold leading-tight">Business solutions. Strategic clarity. Practical partnerships.</p><div className="grid gap-4 border-t border-ink/10 pt-6 text-sm leading-6 text-ink/65"><p>Built for commercial, operating, innovation, and partnership conversations.</p><p>Initial discussions can be tailored around the strategic question, business context, program needs, and desired next step.</p></div></div>
      </div>
    </section>
  );
}
