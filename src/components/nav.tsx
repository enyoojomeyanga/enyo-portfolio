import Link from "next/link";
import { navigation, profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className="
          glass-nav
          pointer-events-auto
          mx-auto flex h-[68px] max-w-[1180px]
          items-center justify-between
          rounded-[20px]
          px-4
          sm:px-6
        "
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-none"
          aria-label={`${profile.fullName} — Home`}
        >
          <span className="truncate font-display text-sm font-semibold tracking-[-0.02em] text-(--color-ink)">
            {profile.fullName}
          </span>

          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-ink-faint)">
            {profile.role}
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.13em] sm:gap-1 sm:text-[11px]">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="
                  group relative
                  inline-flex min-h-11 items-center
                  rounded-full px-3
                  text-(--color-ink-muted)
                  transition-colors duration-180
                  hover:text-(--color-ink)
                  sm:px-4
                "
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-2 left-1/2 h-1 w-1
                    -translate-x-1/2 rounded-full
                    bg-(--color-primary)
                    opacity-0 transition-opacity duration-180
                    group-hover:opacity-100
                  "
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}