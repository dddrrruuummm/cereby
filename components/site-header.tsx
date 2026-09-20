import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-pearl">
      <div className="container-page flex min-h-[76px] items-stretch justify-between">
        <Link href="/" className="flex items-center gap-3 pr-5" aria-label="Cerebry home">
          <span className="relative font-serif text-3xl font-bold">Cerebry<span className="absolute -right-3 top-1 size-2 rounded-full bg-brass" /></span>
          <span className="hidden border-l border-ink/25 pl-3 text-[9px] font-extrabold uppercase leading-4 tracking-[0.14em] sm:block">Workplace<br />Learning Studio</span>
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-bold lg:flex">
          {navItems.slice(0, 3).map((item) => <Link key={item.href} href={item.href} className="decoration-2 underline-offset-8 hover:underline hover:decoration-brass">{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="flex min-w-28 items-center justify-center gap-2 border-l-2 border-ink bg-brass px-4 text-xs font-extrabold uppercase tracking-[0.1em] transition hover:bg-blush sm:min-w-40">
          Talk to us <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
