import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] transition",
    variant === "primary" && "bg-brass text-ink hover:bg-blush",
    variant === "secondary" && "bg-white text-ink hover:bg-ink hover:text-white",
    variant === "ghost" && "text-ink hover:text-wine",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
