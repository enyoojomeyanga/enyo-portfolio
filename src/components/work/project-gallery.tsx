import Image from "next/image";
import type { ProjectScreenshot } from "@/content/project-model";
import styles from "@/app/work/work.module.css";

export function ProjectGallery({ images }: { images: ProjectScreenshot[] }) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <figure key={image.id} className={styles.screenshot}>
          <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 380px" className={styles.screenshotImage} unoptimized={image.src.startsWith("https://")} />
          </a>
          <figcaption>{image.caption && <span>{image.caption}</span>}<a href={image.src} target="_blank" rel="noopener noreferrer">Open full size <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      ))}
    </div>
  );
}
