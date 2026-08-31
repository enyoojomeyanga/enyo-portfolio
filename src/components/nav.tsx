import Link from "next/link";
import { navigation, profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-(--color-bg)/90 backdrop-blur supports-[backdrop-filter]:bg-(--color-bg)/75">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label={`${profile.fullName} — Home`}
        >
          <span className="font-display text-sm font-semibold tracking-tight text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
            {profile.fullName}
          </span>

          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-ink-faint)">
            {profile.role}
          </span>
        </Link>

        <ul className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-ink-muted) sm:gap-7">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative py-2 transition-colors duration-200 hover:text-(--color-primary)"
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