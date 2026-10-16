import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { getProjects } from "@/content/project-source";
import { exploringTopics } from "@/content/exploring";
import { HomeProjects } from "@/components/home/home-projects";
import { disciplines } from "@/content/disciplines";
import { siteContent } from "@/content/site-content";

function ServiceIcon({ type }: { type: "cpu" | "palette" | "pin" }) {
  if (type === "cpu") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5.5" y="5.5" width="13" height="13" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>
      <path d="M9 2v3.5M15 2v3.5M9 18.5V22M15 18.5V22M2 9h3.5M2 15h3.5M18.5 9H22M18.5 15H22"/>
    </svg>
  );
  if (type === "palette") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 20 4.5-1 10-10a2.6 2.6 0 0 0-3.7-3.7L4.8 15.3 4 20Z"/><path d="m13 7 4 4"/><path d="M5 5c1.2-1.8 3-2.5 5.2-2.2M19 16a4.5 4.5 0 0 1 1.5 2.8"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function ApproachIcon({ number }: { number: number }) {
  if (number === 1) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6m-5 3h4m-6-6a7 7 0 1 1 8 0c-.9.7-1 1.5-1 2H9c0-.5-.1-1.3-1-2Z"/></svg>;
  if (number === 2) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5ZM3 7v10l9 5 9-5V7M12 12v10"/></svg>;
  if (number === 3) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V12h4v8H4Zm6 0V7h4v13h-4Zm6 0V3h4v17h-4Z"/></svg>;
}

const approach = [
  { step: "01", title: "Understand", description: "Start with the real problem." },
  { step: "02", title: "Design", description: "Find a clear, useful solution." },
  { step: "03", title: "Build", description: "Turn ideas into working tools." },
  { step: "04", title: "Improve", description: "Test, learn, and iterate." },
];

export default async function Home() {
  const projects = await getProjects();
  const built = projects.filter((project) => project.status === "built");
  const building = projects.filter((project) => project.status === "building");
  const nameParts = profile.fullName.trim().split(/\s+/);
  const leadName = nameParts[0] ?? profile.fullName;
  const remainingName = nameParts.slice(1).join(" ");
  const projectCount = projects.length;
  const exploringCount = exploringTopics.length;
  return (
    <div className="enyo-home">
      <div className="enyo-home-ambient" aria-hidden="true" />
      <section className="enyo-hero" aria-labelledby="home-heading">
        <div className="enyo-hero-copy">
          <p className="enyo-eyebrow enyo-hero-eyebrow"><span/> AI Engineer <b>·</b> Designer <b>·</b> Visibility Partner</p>
          <h1 id="home-heading" className="enyo-hero-heading enyo-hero-name-heading">
            <span>{leadName}</span>{remainingName && <em>{remainingName}</em>}
          </h1>
          {siteContent.heroIntro.trim() && (
            <p className="enyo-hero-intro">{siteContent.heroIntro}</p>
          )}
          <div className="enyo-hero-actions">
            <Link className="enyo-home-primary" href="/work">View my work <span aria-hidden="true">→</span></Link>
            <Link className="enyo-home-secondary" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="enyo-hero-stat-row" aria-label="Portfolio overview">
            <div><strong>{String(projectCount).padStart(2, "0")}</strong><span>Recorded projects</span></div>
            <div><strong className="enyo-stat-focus">{profile.role}</strong><span>Primary focus</span></div>
            <div><strong>{String(exploringCount).padStart(2, "0")}</strong><span>Topics exploring</span></div>
          </div>
        </div>
        <div className="enyo-hero-visual">
          <div className="enyo-hero-halo" aria-hidden="true" />
          <div className="enyo-skyline" aria-hidden="true">
            <svg viewBox="0 0 650 270" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="cityBlue" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#4D8CFF" stopOpacity=".27"/><stop offset="1" stopColor="#0038FF" stopOpacity=".44"/></linearGradient></defs><g fill="url(#cityBlue)" stroke="#2B70FF" strokeOpacity=".15"><path d="M0 168h26v102H0zM23 135h24v135H23zM44 176h25v94H44zM66 109h43v161H66zM112 155h24v115h-24zM138 95h36v175h-36zM172 178h19v92h-19zM193 140h39v130h-39zM234 174h20v96h-20zM258 117h35v153h-35zM300 187h23v83h-23zM326 140h41v130h-41zM369 167h26v103h-26zM399 94h38v176h-38zM441 167h31v103h-31zM475 127h40v143h-40zM518 179h21v91h-21zM541 113h46v157h-46zM591 162h28v108h-28zM621 149h29v121h-29z"/><path d="M152 95V55M410 94V20M562 113V67" fill="none" strokeWidth="2"/></g><g stroke="#fff" strokeOpacity=".28" strokeWidth="1"><path d="M76 136h26m-26 15h26m-26 16h26m-26 16h26M145 124h22m-22 16h22m-22 16h22M401 117h28m-28 20h28m-28 20h28M551 143h28m-28 19h28"/></g></svg>
          </div>
          <div className="enyo-portrait-frame">
            <Image
              src="/images/Excel.jpg"
              alt="Portrait of Enyo-ojo Excel Meyanga"
              fill
              priority
              sizes="(max-width: 760px) 85vw, (max-width: 1200px) 43vw, 550px"
              className="enyo-portrait-image"
            />
          </div>
          <div className="enyo-hero-idea-card" aria-label="Ideas, design, build, impact">
            <span className="enyo-idea-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="18" width="4" height="9" rx="1"/><rect x="14" y="12" width="4" height="15" rx="1"/><rect x="23" y="5" width="4" height="22" rx="1"/></svg></span>
            <div className="enyo-idea-stages"><span>Ideas</span><span>Design</span><span>Build</span><span>Impact</span></div>
          </div>
        </div>
      </section>

      <section className="enyo-services-section enyo-home-width" aria-labelledby="services-heading">
        <div className="enyo-eyebrow"><span /> Areas of work</div>
        <h2 className="enyo-section-title" id="services-heading">Different disciplines. Practical solutions.</h2>
        <div className="enyo-services">
        {disciplines.map((service) => (
          <Link key={service.slug} href={`/work?discipline=${service.slug}`} className="enyo-service-card">
            <div className="enyo-service-top">
              <div className={`enyo-service-icon enyo-service-icon-${service.color}`}><ServiceIcon type={service.icon}/></div>
              <span className="enyo-service-explore">Explore <span className="enyo-arrow" aria-hidden="true">→</span></span>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="enyo-service-evidence">{projects.filter((project) => project.discipline === service.slug).length ? `${projects.filter((project) => project.discipline === service.slug).length} published projects` : "Scope & enquiries · case studies coming later"}</span>
          </Link>
        ))}
        </div>
      </section>

      <section className="enyo-selected-work enyo-home-width" id="selected-work" aria-label="Selected work">
        <HomeProjects projects={[
          ...projects.filter((project) => project.slug === "go-reloaded"),
          ...projects.filter((project) => project.slug === "portfolio-website"),
          ...projects.filter((project) => project.slug === "ai-study-companion"),
          ...projects.filter((project) => project.slug === "ascii-art-generator"),
          ...projects.filter((project) => !["go-reloaded", "portfolio-website", "ai-study-companion", "ascii-art-generator"].includes(project.slug)),
        ]}/>
      </section>

      <section className="enyo-current-section enyo-home-width" aria-labelledby="current-heading">
        <div className="enyo-current-heading">
          <div>
            <div className="enyo-eyebrow"><span/> Current state</div>
            <h2 className="enyo-section-title" id="current-heading">What I&apos;m working on<br/>right now.</h2>
          </div>
          <Link className="enyo-view-work" href="/work">View all work <span aria-hidden="true">→</span></Link>
        </div>
        <div className="enyo-current-grid">
          <div className="enyo-current-card enyo-current-card-built">
            <div className="enyo-current-card-heading"><span className="enyo-current-card-icon" aria-hidden="true">✓</span><h3>Built <span className="enyo-current-count">{built.length} {built.length === 1 ? "project" : "projects"}</span></h3></div>
            <ul>{built.length ? built.map((project) => <li key={project.slug}><span aria-hidden="true">→</span>{project.title}</li>) : <li>No completed projects listed yet.</li>}</ul>
          </div>
          <div className="enyo-current-card enyo-current-card-building">
            <div className="enyo-current-card-heading"><span className="enyo-current-card-icon" aria-hidden="true">✦</span><h3>Building <span className="enyo-current-count">{building.length} {building.length === 1 ? "project" : "projects"}</span></h3></div>
            <ul>{building.length ? building.map((project) => <li key={project.slug}><span aria-hidden="true">→</span>{project.title}</li>) : <li>No active projects listed yet.</li>}</ul>
          </div>
          <div className="enyo-current-card enyo-current-card-exploring">
            <div className="enyo-current-card-heading"><span className="enyo-current-card-icon" aria-hidden="true">◎</span><h3>Exploring <span className="enyo-current-count">{exploringCount} {exploringCount === 1 ? "topic" : "topics"}</span></h3></div>
            <ul>{exploringTopics.map((topic) => <li key={topic.title}><span aria-hidden="true">→</span>{topic.title}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="enyo-approach-section" aria-labelledby="approach-heading">
        <div className="enyo-home-width enyo-approach-layout">
          <div className="enyo-approach-heading">
            <div className="enyo-eyebrow"><span/> My approach</div>
            <h2 className="enyo-section-title" id="approach-heading">From curiosity<br/>to real impact.</h2>
            <p>I combine engineering, design, and real-world thinking to create solutions that are useful, accessible, and people-focused.</p>
          </div>
          <div className="enyo-approach-grid">
            {approach.map((item, index) => (
              <div className="enyo-approach-card" key={item.step}>
                <div className="enyo-approach-top"><span>{item.step}</span><ApproachIcon number={index+1}/></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
