import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-(--color-border)">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="max-w-md font-display text-xm font-medium leading-relaxed tracking-tight text-(--color-ink-muted) sm:text-base">
  Still building. Still learning. Still moving forward.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-[0.16em] text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
            >
              Get in touch →
            </Link>

            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--color-ink-faint)">
              © {year} {profile.fullName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}