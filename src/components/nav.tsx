import Link from "next/link";

import { navigation, profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 mx-auto rounded-[20px] border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="
          relative mx-auto mt-0 flex h-[68px] max-w-6xl
          items-center justify-between overflow-hidden
          rounded-b-[20px]
          border border-white/20 border-t-0
          px-4 sm:px-6
          shadow-[0_8px_30px_rgba(4,25,55,0.18)]
          backdrop-blur-[12px]
        "
      >
        {/* Background image */}
        <div
          className="
            absolute inset-0 -z-20
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/images/nav-background.jpg')",
          }}
        />

        {/* Dark blue glass overlay */}
        <div
          className="
            absolute inset-0 -z-10
            bg-[linear-gradient(
              135deg,
              rgba(8, 16, 29, 0.82),
              rgba(7, 31, 56, 0.68)
            )]
          "
        />

        {/* Subtle glass highlight */}
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-white/[0.03]
          "
        />

        {/* Brand */}
        <Link
          href="/"
          className="relative z-10 flex flex-col leading-none"
          aria-label={`${profile.fullName} — Home`}
        >
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            {profile.fullName}
          </span>

          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
            {profile.role}
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white sm:gap-3">          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
className="relative rounded-full px-4 py-2 text-white transition-all duration-200 hover:bg-white/15 hover:text-white"                   >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}