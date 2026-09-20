import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-pearl">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
        <div><p className="font-serif text-4xl font-bold">Cerebry<span className="text-wine">.</span></p><p className="mt-4 max-w-md text-sm leading-6 text-ink/60">Workplace learning systems designed around the real work people need to do.</p></div>
        <div><p className="eyebrow">Browse</p><div className="mt-4 grid gap-2 text-sm">{navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-wine">{item.label}</Link>)}<Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
        <div><p className="eyebrow">Start a conversation</p><a href={`mailto:${site.email}`} className="mt-4 flex items-center justify-between border-b-2 border-ink pb-3 text-lg font-bold hover:text-wine">{site.email}<ArrowUpRight size={18} /></a><p className="mt-4 text-sm text-ink/55">Wyoming, United States</p></div>
      </div>
      <div className="border-t border-ink/20 py-5"><div className="container-page flex flex-wrap justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45"><span>© 2026 CEREBRY INC</span><span>Learn / Practice / Perform</span></div></div>
    </footer>
  );
}
