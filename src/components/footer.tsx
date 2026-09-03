import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-(--color-border)">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="max-w-md font-display text-base font-medium leading-relaxed tracking-tight text-(--color-ink-muted)">
              Still building. Still learning. Still moving forward.
            </p>

            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
              Engineering record / {year}
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2
                font-mono text-xs uppercase
                tracking-[0.16em] text-(--color-primary)
                transition-colors duration-180
                hover:text-(--color-primary-hover)
              "
            >
              Get in touch
              <span className="transition-transform duration-180 group-hover:translate-x-1">
                →
              </span>
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