// Only real, disclosed work goes here. Do not add speculative,
// invented, or "coming soon" projects with fabricated details.
// Status reflects actual state: "built" | "building" | "exploring".

export type ProjectStatus = "built" | "building" | "exploring";

// Controls which placeholder thumbnail is rendered on the homepage
// "Selected work" list until real screenshots are supplied.
export type ThumbnailVariant = "terminal" | "portrait" | "app-mockup";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  learned: string;
  improve: string;
  // TODO(confirm): add real repo link when ready to share
  repoUrl: string | null;
  thumbnail: ThumbnailVariant;
};

export const projects: Project[] = [
    // TODO(confirm): update this entry as the project develops.
{
  slug: "portfolio-website",

  title: "Portfolio Website",

  status: "building",

  stack: ["Next.js", "TypeScript"],

  summary:
    "An Undertaking to document my work; what I'm learning, and what I'm actually capable of.",

  problem:
    "I didn't want another portfolio full of polished words and projects I can't explain. I needed a place that shows what I've built, what I'm still figuring out, and how I'm improving.",

  approach:
    "Built with Next.js, React, TypeScript, and Tailwind CSS, with custom CSS for the visual details. I also use Git and GitHub to track changes as the site evolves.",

  implementation:
    "Still building. I've been working through the layout, navigation, project structure, content, and visual system while learning what makes a portfolio feel personal instead of looking like another template.",

  result:
    "A live portfolio that is still changing as I learn and build. Some work is finished, some is in progress, and I'm keeping that distinction visible.",

  learned:
    "I'm learning that building a portfolio isn't just about making things look good. I have to be able to explain what I built, why I built it, and what I still need to improve.",

  improve:
    "I'll keep tightening the design and content as the projects become stronger. The goal isn't to make the site look finished before the work is.",
    
  repoUrl: "https://github.com/enyoojomeyanga/enyo-portfolio.git",

  thumbnail: "app-mockup",
},

  {
    slug: "ascii-art-generator",
    title: "ASCII-Art Generator",
    status: "built",
    stack: ["Go"],
    summary:
      "A command-line tool that renders input text as ASCII art using different letter banners.",
    problem:
      "Wanted a project that combined file I/O, string manipulation, and a bit of creative output — something more visual than a typical CLI exercise.",
    approach:
      "Parsed banner font files into character maps, then mapped input strings onto those characters line by line to build the final output.",
    implementation:
      "Handled multi-line rendering, newline characters in input, and different banner styles selectable via command-line flags.",
    result:
      "A functioning generator that renders text in multiple ASCII banner styles from the terminal.",
    learned:
      "Practiced working with file parsing and 2D character grids, and thinking carefully about how input variations (like newlines) affect output.",
    improve:
      "Would add support for custom banner files and clearer error messages for invalid input.",
    repoUrl: null,
    thumbnail: "portrait",
  },

  {
    slug: "go-reloaded",
    title: "Go-Reloaded",
    status: "built",
    stack: ["Go"],
    summary:
      "A text-transformation tool built to practice string parsing, tokenization, and command handling in Go.",
    problem:
      "Learning Go by reading isn't the same as learning it by building something that has to handle real edge cases in text input.",
    approach:
      "Built a program that reads a text file and applies a set of transformation commands (case changes, number formatting, punctuation fixes) using Go's standard library rather than external parsing packages.",
    implementation:
      "Implemented tokenization and rule-based text processing, working through edge cases like punctuation spacing and command ordering by hand.",
    result:
      "A working command-line tool that correctly applies the required transformations. No performance benchmarks were measured — this was a learning-stage project.",
    learned:
      "Got comfortable with Go's approach to strings, slices, and error handling, and with reading a spec closely enough to catch edge cases before they became bugs.",
    improve:
      "Would restructure the parsing logic into smaller, independently testable functions, and add unit tests rather than relying on manual verification.",
    repoUrl: "https://github.com/enyoojomeyanga/go-reloaded.git",
    thumbnail: "terminal",
  },
  // TODO(confirm): update this entry as the project develops — details below
  // are an honest snapshot of a project still in progress, not a finished
  // case study.
  {
    slug: "ai-study-companion",
    title: "AI Study Companion",
    status: "building",
    stack: ["Python", "AI", "In Progress"],
    summary:
      "An AI-powered assistant that helps learners study smarter and stay consistent.",
    problem:
      "Studying effectively is hard to sustain alone — people lose track of what to review, when, and whether they're actually retaining it.",
    approach:
      "Building an assistant that turns study material into structured review sessions and nudges the learner to stay consistent over time.",
    implementation:
      "Work in progress — currently building the core study-session and review logic in Python.",
    result:
      "Not yet complete. No results to report while the core functionality is still being built.",
    learned:
      "Still early, but already learning a lot about structuring an AI-assisted workflow around a real, recurring habit.",
    improve:
      "Too early to say — will revisit once the first working version is in daily use.",
    repoUrl: null,
    thumbnail: "app-mockup",
  },

];