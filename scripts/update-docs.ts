/**
 * scripts/update-docs.ts
 *
 * Regenerates documentation files from the live codebase tree.
 *
 * Behaviour per document:
 *   SITEMAP.md      → always regenerated from app/ page.tsx discovery
 *   CODEBASE-MAP.md → always regenerated from full tree scan
 *   ROLLBACK.md     → append-only; a new entry is added on each CI run (triggered by push to main)
 *   VERCEL.md       → append-only; a new entry is added only when VERCEL_URL env var is present
 *
 * Run locally:  npx ts-node scripts/update-docs.ts
 * Run in CI:    npm run docs:update
 */

import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();

/* ─── helpers ─────────────────────────────────────────── */

async function readFile(rel: string): Promise<string> {
  return fs.readFile(path.join(ROOT, rel), "utf8");
}

async function writeFile(rel: string, content: string): Promise<void> {
  await fs.writeFile(path.join(ROOT, rel), content, "utf8");
}

/** Recursively collect files matching a predicate. */
async function walk(dir: string, predicate: (p: string) => boolean, results: string[] = []): Promise<string[]> {
  let entries: import("fs").Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const skip = ["node_modules", ".git", ".next", "dist", "out", ".turbo"];
      if (!skip.includes(entry.name)) await walk(full, predicate, results);
    } else if (predicate(full)) {
      results.push(full);
    }
  }
  return results;
}

function rel(p: string): string {
  return path.relative(ROOT, p);
}

function iso(): string {
  return new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
}

/* ─── SITEMAP.md ──────────────────────────────────────── */

async function generateSitemap(): Promise<void> {
  const pageFiles = (await walk(path.join(ROOT, "app"), (f) => f.endsWith("page.tsx"))).sort();

  const toRoute = (absPath: string): string => {
    const r = rel(absPath)
      .replace(/^app/, "")
      .replace(/\/page\.tsx$/, "")
      .replace(/\\/g, "/");
    return r === "" ? "/" : r;
  };

  const lines: string[] = [];
  lines.push("# Ecocan Content Sitemap");
  lines.push("");
  lines.push("> **Auto-generated** by `scripts/update-docs.ts`. Do not edit manually.");
  lines.push(`> Last updated: ${iso()}`);
  lines.push("");
  lines.push("High-level sitemap of the Next.js App Router structure based on the `app/` directory.");
  lines.push("");

  const staticRoutes = pageFiles.filter((f) => !rel(f).includes("["));
  const dynamicRoutes = pageFiles.filter((f) => rel(f).includes("["));

  lines.push("## Top-level routes");
  lines.push("");
  for (const f of staticRoutes) {
    const route = toRoute(f);
    const label = routeLabel(route);
    lines.push(`- \`${route}\` \u2013 ${label} (\`${rel(f)}\`)`);
  }

  if (dynamicRoutes.length > 0) {
    lines.push("");
    lines.push("## Dynamic routes");
    lines.push("");
    for (const f of dynamicRoutes) {
      const route = toRoute(f);
      const label = routeLabel(route);
      lines.push(`- \`${route}\` \u2013 ${label} (\`${rel(f)}\`)`);
    }
  }

  const sectionDirs = await walk(
    path.join(ROOT, "app", "solutions", "sections"),
    (f) => f.endsWith(".tsx") && !f.endsWith("page.tsx") && !f.includes("components")
  ).catch(() => []);
  const sectionNames = [...new Set(
    sectionDirs
      .map((f) => {
        const segments = rel(f).split(path.sep);
        const idx = segments.indexOf("sections");
        return idx !== -1 ? segments[idx + 1] : null;
      })
      .filter(Boolean)
  )];

  if (sectionNames.length > 0) {
    lines.push("");
    lines.push("## Solutions sections");
    lines.push("");
    lines.push("Each section maps to `/solutions/[section]`:");
    lines.push("");
    for (const name of sectionNames.sort()) {
      lines.push(`- \`/solutions/${name}\``);
    }
  }

  const contentDirs = (await fs.readdir(path.join(ROOT, "components", "contents")).catch(() => [])) as string[];
  if (contentDirs.length > 0) {
    lines.push("");
    lines.push("## Content verticals (persona journeys)");
    lines.push("");
    lines.push("These content sections live in `components/contents/` and drive persona-specific pages:");
    lines.push("");
    for (const d of contentDirs.sort()) {
      lines.push(`- \`${d}\``);
    }
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("> For SEO XML sitemaps, create `app/sitemap.ts` and mirror this structure programmatically.");

  await writeFile("SITEMAP.md", lines.join("\n") + "\n");
  console.log("\u2705  SITEMAP.md regenerated");
}

function routeLabel(route: string): string {
  const map: Record<string, string> = {
    "/": "Landing / home page",
    "/about-us": "About Ecocan",
    "/contact": "Contact form and info",
    "/download": "App download",
    "/eco-friendly-cans": "Eco-friendly cans explainer",
    "/ecocan-market": "Ecocan marketplace",
    "/news": "News and blog",
    "/solutions": "Solutions hub",
  };
  if (route in map) return map[route];
  const clean = route.replace(/\[|\]/g, "").replace(/\//g, " \u203a ").trim();
  return `Dynamic \u2013 ${clean}`;
}

/* ─── CODEBASE-MAP.md ─────────────────────────────────── */

async function generateCodebaseMap(): Promise<void> {
  const lines: string[] = [];
  lines.push("# Ecocan Codebase Map");
  lines.push("");
  lines.push("> **Auto-generated** by `scripts/update-docs.ts`. Do not edit manually.");
  lines.push(`> Last updated: ${iso()}`);
  lines.push("");

  let pkg: Record<string, unknown> = {};
  try {
    pkg = JSON.parse(await readFile("package.json"));
  } catch { /* ignore */ }

  const deps = (pkg.dependencies ?? {}) as Record<string, string>;
  const devDeps = (pkg.devDependencies ?? {}) as Record<string, string>;

  lines.push("## Stack overview");
  lines.push("");
  lines.push(`- **Framework**: Next.js \`${deps["next"] ?? "?"}\` with App Router`);
  lines.push(`- **Language**: TypeScript \`${devDeps["typescript"] ?? "?"}\` + React \`${deps["react"] ?? "?"}\``);
  lines.push(`- **Styling**: Tailwind CSS \`${devDeps["tailwindcss"] ?? "?"}\``);
  lines.push("- **UI primitives**: Radix UI headless components, custom `components/ui` and `components/shared`");
  lines.push("- **Animation**: `framer-motion`, `embla-carousel-react`");
  lines.push("- **Forms & validation**: `react-hook-form`, `zod`, `@hookform/resolvers`");
  lines.push("- **Icons**: `lucide-react`");
  lines.push("- **Analytics**: `@vercel/analytics`");
  lines.push("- **Utility**: `clsx`, `tailwind-merge`, `class-variance-authority`");
  lines.push("");

  const pageFiles = (await walk(path.join(ROOT, "app"), (f) => f.endsWith("page.tsx"))).sort();
  lines.push("## App routes (`app/`)");
  lines.push("");
  lines.push("| Route file | URL |");
  lines.push("|---|---|");
  for (const f of pageFiles) {
    const route = rel(f).replace(/^app/, "").replace(/\/page\.tsx$/, "").replace(/\\/g, "/") || "/";
    lines.push(`| \`${rel(f)}\` | \`${route}\` |`);
  }
  lines.push("");

  lines.push("## Components (`components/`)");
  lines.push("");

  const componentSubdirs = (await fs.readdir(path.join(ROOT, "components")).catch(() => [])) as string[];
  for (const subdir of componentSubdirs.sort()) {
    const subdirPath = path.join(ROOT, "components", subdir);
    const stat = await fs.stat(subdirPath).catch(() => null);
    if (!stat?.isDirectory()) continue;

    lines.push(`### \`components/${subdir}/\``);
    lines.push("");

    const files = await walk(subdirPath, (f) => f.endsWith(".tsx") || f.endsWith(".ts"));
    if (files.length === 0) {
      lines.push("_No files found._");
    } else {
      for (const f of files.sort()) {
        lines.push(`- \`${rel(f)}\``);
      }
    }
    lines.push("");
  }

  lines.push("## Lib utilities (`lib/`)");
  lines.push("");
  const libFiles = await walk(path.join(ROOT, "lib"), (f) => f.endsWith(".ts") || f.endsWith(".tsx"));
  for (const f of libFiles.sort()) {
    const name = path.basename(f);
    const description = libDescription(name);
    lines.push(`- \`${rel(f)}\` \u2013 ${description}`);
  }
  lines.push("");

  lines.push("## Types (`types/`)");
  lines.push("");
  const typeFiles = await walk(path.join(ROOT, "types"), (f) => f.endsWith(".ts") || f.endsWith(".tsx"));
  for (const f of typeFiles.sort()) {
    lines.push(`- \`${rel(f)}\``);
  }
  lines.push("");

  lines.push("## Root configuration files");
  lines.push("");
  const configFiles = [
    "next.config.mjs",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "components.json",
    ".eslintrc.json",
    "package.json",
  ];
  for (const cf of configFiles) {
    const exists = await fs.stat(path.join(ROOT, cf)).then(() => true).catch(() => false);
    if (exists) lines.push(`- \`${cf}\``);
  }
  lines.push("");

  lines.push("## Data & content flow");
  lines.push("");
  lines.push("1. Root layout (`app/layout.tsx`) mounts the global navbar, footer, and analytics.");
  lines.push("2. Each page in `app/` composes content from `components/contents/<persona>` and shared blocks.");
  lines.push("3. Solutions use a dynamic `app/solutions/[section]/page.tsx` powered by `types/section.tsx` registry.");
  lines.push("4. Forms use `react-hook-form` + `zod` schemas; shared form components live in `components/shared`.");
  lines.push("5. Utilities and hooks in `lib/` are imported by components as needed (media queries, scroll, image loading).");

  await writeFile("CODEBASE-MAP.md", lines.join("\n") + "\n");
  console.log("\u2705  CODEBASE-MAP.md regenerated");
}

function libDescription(name: string): string {
  const map: Record<string, string> = {
    "imageIndex.ts": "Index of image assets (labels, paths) used by content components",
    "pdfViewer.ts": "Utilities for embedding or viewing PDF documents",
    "tabContent.tsx": "Shared logic and layout for tabbed interfaces",
    "useLoadImages.ts": "React hook for pre-loading and managing image loading state",
    "useMediaQuery.ts": "React hook wrapping CSS media queries for responsive logic",
    "useScroll.ts": "React hook for scroll position and scroll-triggered effects",
    "utils.ts": "General helpers: `cn()` (className composition with clsx + tailwind-merge)",
  };
  return map[name] ?? "Utility module";
}

/* ─── ROLLBACK.md ─────────────────────────────────────── */

async function appendRollbackEntry(): Promise<void> {
  const sha = process.env.GITHUB_SHA ?? "unknown";
  const actor = process.env.GITHUB_ACTOR ?? "unknown";
  const ref = process.env.GITHUB_REF_NAME ?? process.env.GITHUB_REF ?? "unknown";
  const run = process.env.GITHUB_RUN_NUMBER ?? "";
  const repo = process.env.GITHUB_REPOSITORY ?? "rauell1/ecocan";
  const commitUrl = sha !== "unknown" ? `https://github.com/${repo}/commit/${sha}` : null;

  const shortSha = sha.slice(0, 7);
  const entry = `- **${iso()}** | commit [\`${shortSha}\`](${commitUrl ?? "#"}) | branch \`${ref}\` | pushed by \`${actor}\`${run ? ` | run #${run}` : ""}`;

  let content = await readFile("ROLLBACK.md").catch(() => "");

  const anchor = "## Deployment Log";
  const anchorIdx = content.indexOf(anchor);
  if (anchorIdx !== -1) {
    const insertAt = anchorIdx + anchor.length + 1;
    const after = content.slice(insertAt).replace(/^(\n>.*\n)/, "$1");
    const lines = after.split("\n");
    const noteEnd = lines.findIndex((l, i) => i > 0 && !l.startsWith(">") && l.trim() !== "");
    const insertLine = noteEnd !== -1 ? noteEnd : 1;
    lines.splice(insertLine, 0, entry);
    content = content.slice(0, insertAt) + lines.join("\n");
  } else {
    content += `\n${anchor}\n\n${entry}\n`;
  }

  await writeFile("ROLLBACK.md", content);
  console.log("\u2705  ROLLBACK.md entry appended");
}

/* ─── VERCEL.md ───────────────────────────────────────── */

async function appendVercelEntry(): Promise<void> {
  const url = process.env.VERCEL_URL ?? process.env.VERCEL_DEPLOYMENT_URL;
  const sha = process.env.GITHUB_SHA ?? "unknown";
  const env = process.env.VERCEL_ENV ?? "unknown";
  const actor = process.env.GITHUB_ACTOR ?? "unknown";
  const repo = process.env.GITHUB_REPOSITORY ?? "rauell1/ecocan";
  const shortSha = sha.slice(0, 7);
  const commitUrl = sha !== "unknown" ? `https://github.com/${repo}/commit/${sha}` : null;
  const deployUrl = url ? `https://${url}` : null;

  const entry = `- **${iso()}** | env \`${env}\` | commit [\`${shortSha}\`](${commitUrl ?? "#"}) | pushed by \`${actor}\`${deployUrl ? ` | [open deployment](${deployUrl})` : ""}`;

  let content = await readFile("VERCEL.md").catch(() => "");

  const anchor = "## Deployment History";
  const anchorIdx = content.indexOf(anchor);
  if (anchorIdx !== -1) {
    const insertAt = anchorIdx + anchor.length + 1;
    const after = content.slice(insertAt).replace(/^(\n>.*\n)/, "$1");
    const lines = after.split("\n");
    const noteEnd = lines.findIndex((l, i) => i > 0 && !l.startsWith(">") && l.trim() !== "");
    const insertLine = noteEnd !== -1 ? noteEnd : 1;
    lines.splice(insertLine, 0, entry);
    content = content.slice(0, insertAt) + lines.join("\n");
  } else {
    content += `\n${anchor}\n\n${entry}\n`;
  }

  await writeFile("VERCEL.md", content);
  console.log("\u2705  VERCEL.md entry appended");
}

/* ─── main ────────────────────────────────────────────── */

async function main(): Promise<void> {
  const mode = process.env.DOCS_MODE ?? "all";
  // DOCS_MODE=sitemap-codebase  → regenerate SITEMAP + CODEBASE-MAP
  // DOCS_MODE=deployment        → append to ROLLBACK + VERCEL (if VERCEL_URL set)
  // DOCS_MODE=all (default)     → do everything

  if (mode === "sitemap-codebase" || mode === "all") {
    await generateSitemap();
    await generateCodebaseMap();
  }

  if (mode === "deployment" || mode === "all") {
    await appendRollbackEntry();
    if (process.env.VERCEL_URL || process.env.VERCEL_DEPLOYMENT_URL) {
      await appendVercelEntry();
    }
  }

  console.log("\uD83C\uDF89  update-docs complete");
}

main().catch((err) => {
  console.error("update-docs failed:", err);
  process.exit(1);
});
