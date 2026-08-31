import Link from "next/link";
import { navigation, profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="border-b border-(--color-border) bg-(--color-surface)/80 backdrop-blur supports-[backdrop-filter]:bg-(--color-surface)/60 sticky top-0 z-40">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-(--color-ink)"
        >
          {profile.fullName}
        </Link>
        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-wide text-(--color-ink-muted)">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-(--color-primary)"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
