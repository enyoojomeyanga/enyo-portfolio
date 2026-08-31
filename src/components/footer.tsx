import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-(--color-ink-faint)">
          © {year} {profile.fullName}
        </p>
        <Link
          href="/contact"
          className="font-mono text-xs uppercase tracking-wide text-(--color-primary) hover:text-(--color-primary-hover)"
        >
          Get in touch →
        </Link>
      </div>
    </footer>
  );
}
