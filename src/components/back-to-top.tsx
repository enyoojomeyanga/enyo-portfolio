"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToPageTop } from "./scroll-to-top";
import styles from "./navigation-refinement.module.css";

export function BackToTop({ menuOpen }: { menuOpen: boolean }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    function update() { frame = 0; setVisible(window.scrollY > Math.max(400, window.innerHeight * .65)); }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [pathname]);
  if (!visible || menuOpen) return null;
  return <button type="button" className={styles.backToTop} onClick={() => scrollToPageTop(true)} aria-label="Back to top">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20V4m-6 6 6-6 6 6" /></svg>
    <span>Top</span>
  </button>;
}
