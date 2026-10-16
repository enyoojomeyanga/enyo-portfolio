"use client";

import { useId, useState } from "react";
import styles from "@/app/contact/contact.module.css";

export function EmailDraft({ email, subject, template, topic }: { email: string; subject: string; template: string; topic: string }) {
  const id = useId();
  const [body, setBody] = useState(template);
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${body}`);
      setMessage("Draft copied. Paste it into your email app.");
    } catch {
      setMessage("Select the message below to copy it manually. The email address and subject are shown above it.");
    }
  }
  return <div className={styles.draft}>
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className={styles.topicAction}>Start an email <span aria-hidden="true">↗</span><span className={styles.srOnly}> about {topic}</span></a>
    <details className={styles.draftDetails}>
      <summary>Preview &amp; edit draft</summary>
      <p className={styles.draftMeta}>To: {email}<br />Subject: {subject}</p>
      <label htmlFor={id}>Your message</label>
      <p id={`${id}-hint`} className={styles.draftHint}>Replace the bracketed details. Your edits stay on this page until you leave or reload it.</p>
      <textarea id={id} aria-describedby={`${id}-hint`} value={body} rows={12} onChange={(event) => { setBody(event.target.value); setMessage(""); }} />
      <button type="button" onClick={copy} className={styles.copyDraft}>Copy draft</button>
      <p role="status" className={styles.draftHint}>{message}</p>
    </details>
  </div>;
}
