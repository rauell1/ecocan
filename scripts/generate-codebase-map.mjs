#!/usr/bin/env node
/**
 * generate-codebase-map.mjs
 * EcoCan Self-Updating Codebase Map Generator
 *
 * Usage:
 *   node scripts/generate-codebase-map.mjs          # full run
 *   node scripts/generate-codebase-map.mjs --dry-run # preview only
 *   node scripts/generate-codebase-map.mjs --incremental # only if significant changes
 *
 * Outputs:
 *   docs/codebase-map.md   (human-readable)
 *   docs/codebase-map.json (machine-readable)
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync, readdirSync } from 'fs';
import { join, relative, extname } from 'path';

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const MAP_MD = join(DOCS_DIR, 'codebase-map.md');
const MAP_JSON = join(DOCS_DIR, 'codebase-map.json');

const DRY_RUN = process.argv.includes('--dry-run');
const INCREMENTAL = process.argv.includes('--incremental');

// ─── Helpers ──────────────────────────────────────────────────────────────────

function git(cmd) {
  try {
    return execSync(`git ${cmd}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch {
    return '';
  }
}

function getShortHash() {
  return git('rev-parse --short HEAD') || 'unknown';
}

function getBranch() {
  return git('rev-parse --abbrev-ref HEAD') || 'unknown';
}

function getChangedFiles() {
  const raw = git('diff --name-status HEAD~1 HEAD');
  if (!raw) return [];
  return raw.split('\n').map(line => {
    const [status, ...parts] = line.split('\t');
    return { status: status.trim(), file: parts[0]?.trim() };
  }).filter(x => x.file);
}

function getFileHash(filepath) {
  try {
    const abs = join(ROOT, filepath);
    if (!existsSync(abs)) return null;
    return git(`hash-object "${abs}"`);
  } catch {
    return null;
  }
}

// Significant change = affects app logic, components, config, or deps
const SIGNIFICANT_PATTERNS = [
  /^app\/.+\.(tsx?|css)$/,
  /^components\/.+\.tsx?$/,
  /^lib\/.+\.tsx?$/,
  /^types\/.+\.tsx?$/,
  /^package\.json$/,
  /^tailwind\.config\.(ts|js)$/,
  /^next\.config\.mjs$/,
  /^tsconfig\.json$/,
  /^app\/globals\.css$/,
];

const EXCLUDED_PATTERNS = [
  /^docs\//,
  /^__tests__\//,
  /^pnpm-lock/,
  /^package-lock/,
  /\.md$/,
];

function isSignificantChange(file) {
  if (!file) return false;
  if (EXCLUDED_PATTERNS.some(p => p.test(file))) return false;
  return SIGNIFICANT_PATTERNS.some(p => p.test(file));
}

// ─── File tree scanner ────────────────────────────────────────────────────────

const SCAN_DIRS = ['app', 'components', 'lib', 'types', 'scripts', 'public'];
const SKIP_DIRS = ['node_modules', '.next', '.git', 'dist', '.vercel'];
const RISK_MAP = {
  'app/layout.tsx': 'critical',
  'app/page.tsx': 'critical',
  'app/globals.css': 'medium',
  'components/shared/heros': 'critical',
  'components/shared/navbar': 'high',
  'tailwind.config.ts': 'medium',
  'next.config.mjs': 'critical',
  'lib/utils.ts': 'high',
};

function getRisk(filepath) {
  for (const [pattern, risk] of Object.entries(RISK_MAP)) {
    if (filepath.includes(pattern)) return risk;
  }
  if (filepath.startsWith('app/') && filepath.endsWith('page.tsx')) return 'medium';
  if (filepath.startsWith('components/shared/')) return 'medium';
  return 'low';
}

function scanDir(dir, depth = 0, maxDepth = 4) {
  if (depth > maxDepth) return [];
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const entries = [];
  try {
    const items = readdirSync(abs, { withFileTypes: true });
    for (const item of items) {
      if (SKIP_DIRS.includes(item.name)) continue;
      const relPath = join(dir, item.name);
      if (item.isDirectory()) {
        entries.push({ type: 'dir', path: relPath, children: scanDir(relPath, depth + 1, maxDepth) });
      } else {
        const ext = extname(item.name);
        if (['.ts', '.tsx', '.mjs', '.js', '.css', '.json', '.md', '.yaml', '.sh'].includes(ext) || item.name === '.env.example') {
          entries.push({ type: 'file', path: relPath, risk: getRisk(relPath), hash: getFileHash(relPath) });
        }
      }
    }
  } catch {}
  return entries;
}

function buildFileHashMap(entries, map = {}) {
  for (const entry of entries) {
    if (entry.type === 'file' && entry.hash) map[entry.path] = entry.hash;
    if (entry.children) buildFileHashMap(entry.children, map);
  }
  return map;
}

// ─── Load previous state ───────────────────────────────────────────────────────

function loadPreviousMap() {
  try {
    if (existsSync(MAP_JSON)) {
      return JSON.parse(readFileSync(MAP_JSON, 'utf-8'));
    }
  } catch {}
  return null;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🗺️  EcoCan Codebase Map Generator');
  console.log('   Mode:', INCREMENTAL ? 'incremental' : 'full', DRY_RUN ? '(dry-run)' : '');

  const hash = getShortHash();
  const branch = getBranch();
  const now = new Date().toISOString();
  const changedFiles = getChangedFiles();
  const significantChanges = changedFiles.filter(c => isSignificantChange(c.file));

  if (INCREMENTAL && significantChanges.length === 0) {
    console.log('⏭️  No significant changes detected — skipping map regeneration.');
    process.exit(0);
  }

  console.log(`📂 Scanning ${SCAN_DIRS.join(', ')}...`);
  const tree = {};
  const allHashes = {};
  for (const dir of SCAN_DIRS) {
    tree[dir] = scanDir(dir);
    buildFileHashMap(tree[dir], allHashes);
  }

  // Also hash core config files
  const coreFiles = ['app/layout.tsx', 'app/page.tsx', 'app/globals.css', 'package.json', 'tailwind.config.ts', 'next.config.mjs', 'tsconfig.json'];
  for (const f of coreFiles) {
    if (!allHashes[f]) allHashes[f] = getFileHash(f);
  }

  const prev = loadPreviousMap();
  const prevVersion = prev?.meta?.version || null;

  const changeDescriptions = significantChanges.map(c => {
    const statusMap = { A: 'Added', D: 'Deleted', M: 'Modified', R: 'Renamed' };
    return `${statusMap[c.status] || c.status}: ${c.file}`;
  });
  if (changeDescriptions.length === 0) changeDescriptions.push('Full map regeneration');

  // ─── Build JSON output ───────────────────────────────────────────────────────

  const hotspots = [
    { file: 'components/shared/heros/HeroSection.tsx', risk: 'critical', reason: 'GSAP + Lenis + scroll animation orchestration' },
    { file: 'app/page.tsx', risk: 'critical', reason: 'Homepage section orchestrator' },
    { file: 'app/layout.tsx', risk: 'critical', reason: 'Root layout — all routes' },
    { file: 'components/shared/navbar/', risk: 'high', reason: 'Global nav — all routes' },
    { file: 'tailwind.config.ts', risk: 'medium', reason: 'Theme tokens cascade everywhere' },
    { file: 'app/globals.css', risk: 'medium', reason: 'CSS custom properties' },
  ];

  // Flag newly affected hotspots
  const affectedHotspots = hotspots.filter(h =>
    significantChanges.some(c => c.file && c.file.includes(h.file.replace('/', '')))
  );

  const jsonOutput = {
    meta: { version: hash, generatedAt: now, branch, previousVersion: prevVersion, generator: 'scripts/generate-codebase-map.mjs', framework: 'Next.js 14', packageManager: 'pnpm' },
    changes: changeDescriptions,
    affectedHotspots,
    routes: [
      { path: '/', file: 'app/page.tsx', risk: 'critical' },
      { path: '/about-us', file: 'app/about-us/page.tsx', risk: 'low' },
      { path: '/contact', file: 'app/contact/page.tsx', risk: 'medium' },
      { path: '/download', file: 'app/download/page.tsx', risk: 'low' },
      { path: '/eco-friendly-cans', file: 'app/eco-friendly-cans/page.tsx', risk: 'low' },
      { path: '/ecocan-market', file: 'app/ecocan-market/page.tsx', risk: 'low' },
      { path: '/news', file: 'app/news/page.tsx', risk: 'low' },
      { path: '/solutions', file: 'app/solutions/page.tsx', risk: 'low' },
    ],
    hotspots,
    risks: [
      { id: 'R1', severity: 'critical', description: 'No API routes — forms have no server-side handler' },
      { id: 'R2', severity: 'critical', description: 'No error boundaries or error.tsx in route segments' },
      { id: 'R3', severity: 'high', description: 'Lenis init tightly coupled to HeroSection onTransitionComplete' },
      { id: 'R4', severity: 'high', description: 'No loading.tsx — no Suspense-based loading states' },
      { id: 'R5', severity: 'medium', description: 'Three animation libraries (GSAP, Lenis, Framer Motion) — potential conflicts' },
      { id: 'R6', severity: 'low', description: 'Typo: eligble-popup.tsx should be eligible-popup.tsx' },
    ],
    fileHashes: allHashes,
    changelog: [
      ...(prev?.changelog || []),
      { version: hash, date: now, branch, changes: changeDescriptions },
    ].slice(-20), // keep last 20 entries
  };

  // ─── Build MD output ─────────────────────────────────────────────────────────

  const affectedWarning = affectedHotspots.length > 0
    ? `\n> ⚠️ **This commit affected ${affectedHotspots.length} hotspot(s):** ${affectedHotspots.map(h => `\`${h.file}\``).join(', ')}\n`
    : '';

  const changelogTable = jsonOutput.changelog.slice().reverse().map(entry =>
    `| \`${entry.version}\` | ${entry.date.split('T')[0]} | ${entry.branch} | ${entry.changes.join('; ')} |`
  ).join('\n');

  const mdOutput = `<!--
  Auto-generated by scripts/generate-codebase-map.mjs
  DO NOT EDIT MANUALLY
-->

# 🗺️ EcoCan Codebase Map

> **Version:** \`${hash}\`
> **Generated:** ${now}
> **Branch:** \`${branch}\`
> **Previous:** \`${prevVersion || 'none'}\`
${affectedWarning}
## Changes Since Last Version

${changeDescriptions.map(c => `- ${c}`).join('\n')}

---

## Hotspot Risk Summary

| File | Risk | Reason |
|---|---|---|
${hotspots.map(h => `| \`${h.file}\` | ${h.risk === 'critical' ? '🔴' : h.risk === 'high' ? '🟠' : '🟡'} ${h.risk} | ${h.reason} |`).join('\n')}

---

## Routes

| Route | File | Risk |
|---|---|---|
${jsonOutput.routes.map(r => `| \`${r.path}\` | \`${r.file}\` | ${r.risk} |`).join('\n')}

---

## Architectural Risks

${jsonOutput.risks.map(r => `- **[${r.id}]** \`${r.severity.toUpperCase()}\` — ${r.description}`).join('\n')}

---

## Changelog (last 20)

| Version | Date | Branch | Changes |
|---|---|---|---|
${changelogTable}

---

*Full annotated map: see [docs/codebase-map.md](./codebase-map.md) for the complete tree, interaction map, and improvement recommendations.*
`;

  if (DRY_RUN) {
    console.log('\n--- DRY RUN: MD Output Preview ---');
    console.log(mdOutput.slice(0, 1000) + '...');
    console.log('--- DRY RUN complete (no files written) ---');
    process.exit(0);
  }

  mkdirSync(DOCS_DIR, { recursive: true });
  writeFileSync(MAP_MD, mdOutput, 'utf-8');
  writeFileSync(MAP_JSON, JSON.stringify(jsonOutput, null, 2), 'utf-8');

  console.log(`✅ Map updated: docs/codebase-map.md + docs/codebase-map.json`);
  console.log(`   Version: ${hash} on ${branch}`);
  if (affectedHotspots.length > 0) {
    console.log(`   ⚠️  Hotspot alert: ${affectedHotspots.map(h => h.file).join(', ')}`);
  }
}

main().catch(err => {
  console.error('❌ Map generation failed:', err);
  process.exit(1);
});
