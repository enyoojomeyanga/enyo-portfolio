"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { navigation, profile } from "@/content/profile";
import { siteContent } from "@/content/site-content";

export function Nav() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const isCurrent = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!menuOpen) return;
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuPath(null);
        menuButton.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setMenuPath(null);
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    function resize() { if (desktop.matches) setMenuPath(null); }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [menuOpen]);

  return (
    <header className="enyo-header" ref={header} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenuPath(null);
    }}>
      <nav className="enyo-nav" aria-label="Primary navigation">
        <Link href="/" className="enyo-brand" aria-label={`${profile.fullName}, home`} onClick={() => setMenuPath(null)}>
          <span className="enyo-brand-mark" aria-hidden="true">
            {siteContent.brandLogo?.src ? (
              <Image
                src={siteContent.brandLogo.src}
                alt=""
                width={46}
                height={46}
                className="enyo-brand-logo-image enyo-brand-logo-light"
                unoptimized={siteContent.brandLogo.src.startsWith("http://") || siteContent.brandLogo.src.startsWith("https://")}
                priority
              />
            ) : (
              <span className="enyo-brand-temporary-mark">EM</span>
            )}
            {siteContent.brandLogo?.src && siteContent.brandLogoDark?.src && (
              <Image
                src={siteContent.brandLogoDark.src}
                alt=""
                width={46}
                height={46}
                className="enyo-brand-logo-image enyo-brand-logo-dark"
                unoptimized={siteContent.brandLogoDark.src.startsWith("http://") || siteContent.brandLogoDark.src.startsWith("https://")}
              />
            )}
          </span>
          <span className="enyo-brand-copy">
            <span className="enyo-brand-name">{profile.fullName}</span>
            <span className="enyo-brand-caption">{profile.role}</span>
          </span>
        </Link>

        <div className="enyo-nav-links">
          {navigation.map((item) => {
            const current = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`enyo-nav-link ${current ? "is-current" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="enyo-nav-actions">
        <ThemeToggle />
        <Link href="/contact" className="enyo-nav-cta">
          Let&apos;s talk <span aria-hidden="true">→</span>
        </Link>

        <button
          ref={menuButton}
          className="enyo-mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="enyo-mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          {menuOpen ? <span aria-hidden="true">✕</span> : <span aria-hidden="true">☰</span>}
        </button>
        </div>
      </nav>
      {menuOpen && (
        <div ref={menu} className="enyo-mobile-navigation" id="enyo-mobile-navigation" role="navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setMenuPath(null)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuPath(null)}>Let&apos;s talk →</Link>
        </div>
      )}
    </header>
  );
}
