"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, profile } from "@/content/profile";
import { siteContent } from "@/content/site-content";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="enyo-header">
      <nav className="enyo-nav" aria-label="Primary navigation">
        <Link href="/" className="enyo-brand" aria-label={`${profile.fullName}, home`} onClick={() => setMenuOpen(false)}>
          <span className="enyo-brand-mark" aria-hidden="true">
            {siteContent.brandLogo?.src ? (
              <Image
                src={siteContent.brandLogo.src}
                alt=""
                width={46}
                height={46}
                className="enyo-brand-logo-image"
                unoptimized={siteContent.brandLogo.src.startsWith("http://") || siteContent.brandLogo.src.startsWith("https://")}
                priority
              />
            ) : (
              <span className="enyo-brand-temporary-mark">E</span>
            )}
          </span>
          <span className="enyo-brand-copy">
            <span className="enyo-brand-name">{profile.fullName}</span>
            <span className="enyo-brand-caption">{profile.role}</span>
          </span>
        </Link>

        <div className="enyo-nav-links">
          {navigation.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
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

        <Link href="/contact" className="enyo-nav-cta">
          Let&apos;s talk <span aria-hidden="true">→</span>
        </Link>

        <button
          className="enyo-mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="enyo-mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <span aria-hidden="true">✕</span> : <span aria-hidden="true">☰</span>}
        </button>
      </nav>
      {menuOpen && (
        <div className="enyo-mobile-navigation" id="enyo-mobile-navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk →</Link>
        </div>
      )}
    </header>
  );
}
