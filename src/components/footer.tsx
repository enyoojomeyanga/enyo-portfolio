import Link from "next/link";
import { SocialIcon } from "./social-icon";
import styles from "./footer.module.css";
import { profile } from "@/content/profile";

const socialProfiles = [
  { platform: "x", label: "X" },
  { platform: "instagram", label: "Instagram" },
  { platform: "facebook", label: "Facebook" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.message}>
            <p className={styles.statement}>Still building. Still learning.<br />Still moving forward.</p>
            <p className={styles.disciplines}>Engineering / visual communication / digital visibility</p>
          </div>
          <Link href="/contact" className={styles.cta}>
            <span>Have a problem worth solving?</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.bottom}>
          <div className={styles.identity}>
            <p className={styles.name}>{profile.fullName}</p>
            <p className={styles.details}>{profile.role} · Abuja, Nigeria · © {year}</p>
          </div>
          <nav className={styles.socials} aria-label="Personal social profiles">
            {socialProfiles.map(({ platform, label }) => profile.links[platform] && (
              <a key={platform} href={profile.links[platform]} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} title={label}>
                <SocialIcon platform={platform} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
