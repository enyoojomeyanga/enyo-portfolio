"use client";

import { useState } from "react";
import type { ProjectDemo } from "@/content/project-model";
import styles from "@/app/work/work.module.css";

export function InteractiveDemo({ demo }: { demo: ProjectDemo }) {
  const [launched, setLaunched] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sandbox, setSandbox] = useState("allow-scripts allow-forms allow-popups");
  function launch() {
    // Same-origin demos retain an opaque origin; external demos can use their
    // own origin/storage while remaining restricted by the iframe sandbox.
    setSandbox(new URL(demo.url).origin === window.location.origin ? "allow-scripts allow-forms allow-popups" : "allow-scripts allow-forms allow-popups allow-same-origin");
    setLaunched(true);
  }
  return (
    <div className={styles.demoPanel}>
      {demo.description && <p className={styles.demoDescription}>{demo.description}</p>}
      {!launched ? (
        <div className={styles.demoPlaceholder}>
          <h3>{demo.title}</h3>
          <button type="button" className={styles.primary} onClick={launch}>Launch demo <span aria-hidden="true">→</span></button>
        </div>
      ) : (
        <div className={styles.demoFrameWrap}>
          {!loaded && <p className={styles.demoLoading} role="status">Loading demo…</p>}
          <iframe src={demo.url} title={demo.title} loading="lazy" referrerPolicy="no-referrer" sandbox={sandbox} className={styles.demoFrame} onLoad={() => setLoaded(true)} />
        </div>
      )}
      <div className={styles.demoFooter}>
        {launched && <button className={styles.reset} type="button" onClick={() => { setLaunched(false); setLoaded(false); }}>Close demo</button>}
        <a href={demo.url} target="_blank" rel="noopener noreferrer">Open demo in a new tab <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}
