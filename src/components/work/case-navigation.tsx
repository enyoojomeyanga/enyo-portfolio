"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "@/app/work/work.module.css";

type SectionLink = { id: string; label: string };
export function CaseNavigation({ sections }: { sections: SectionLink[] }) {
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [stickyTop, setStickyTop] = useState(96);

  function readingOffset() {
    const headerBottom = document.querySelector(".enyo-header")?.getBoundingClientRect().bottom ?? 84;
    return headerBottom + (window.matchMedia("(max-width: 900px)").matches ? 12 + (nav.current?.offsetHeight ?? 80) + 16 : 24);
  }

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const headerBottom = document.querySelector(".enyo-header")?.getBoundingClientRect().bottom ?? 84;
      setStickyTop(Math.ceil(headerBottom + 12));
      const readingLine = headerBottom + (window.matchMedia("(max-width: 900px)").matches ? 12 + (nav.current?.offsetHeight ?? 80) + 16 : 24);
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= readingLine + 4) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = sections.at(-1)?.id ?? current;
      setActive(current);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    const observer = new ResizeObserver(schedule);
    const header = document.querySelector(".enyo-header");
    if (header) observer.observe(header);
    if (nav.current) observer.observe(nav.current);
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLAnchorElement>("a[aria-current='location']")?.focus();
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    }
    function resize() { if (window.matchMedia("(min-width: 901px)").matches) setOpen(false); }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  function jump(id: string) {
    setOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - readingOffset()), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    element.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
    setActive(id);
  }
  return (
    <nav ref={nav} className={styles.caseNav} style={{ top: stickyTop }} aria-label="In this project" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <p className={styles.caseTitle}>In this project</p>
      <div className={styles.mobileCaseControls}>
        <button ref={toggle} type="button" className={styles.caseToggle} aria-expanded={open} aria-controls={menuId} aria-label={`Current section: ${sections.find((section) => section.id === active)?.label ?? ""}. Choose a section`} onClick={() => setOpen((value) => !value)}>
          <span>{sections.find((section) => section.id === active)?.label}</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={open ? styles.chevronOpen : undefined}><path d="m6 9 6 6 6-6" /></svg>
        </button>
        {open && <div ref={menu} id={menuId} className={styles.caseMenu}>
          {sections.map((section) => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={(event) => { event.preventDefault(); jump(section.id); }}>{section.label}</a>)}
        </div>}
      </div>
      <div className={styles.desktopCaseLinks}>
        {sections.map((section) => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={(event) => { event.preventDefault(); jump(section.id); }}>{section.label}</a>)}
      </div>
      <noscript><div className={styles.noScriptLinks}>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</div></noscript>
    </nav>
  );
}
