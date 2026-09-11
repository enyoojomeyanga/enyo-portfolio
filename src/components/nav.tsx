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
        rounded-[18px]
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
          <span className="truncate font-display text-[13px] font-semibold tracking-[-0.025em] text-(--color-ink)">
            {profile.fullName}
          </span>

          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.20em] text-(--color-primary)">
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
                transition-all duration-200
                hover:text-(--color-primary)
                sm:px-4
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                  absolute bottom-2 left-1/2 h-1 w-1
                  -translate-x-1/2 rounded-full
                  bg-(--color-primary)
                  opacity-0 scale-75
                  transition-all duration-200
                  group-hover:scale-100
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