#!/usr/bin/env node
// Minimal helper to add a new Work entry to data/works.json
// Usage:
//   node scripts/add-work.mjs slug "Artist" "Title" [roles] [releaseDate] [thumb] [hero]
// Examples:
//   node scripts/add-work.mjs echoes-of-night "Mira K." "Echoes of Night" "Full Production" 2024-08-01
//   node scripts/add-work.mjs silver-lines "The Gridlines" "Silver Lines" "Recording,Mixing" 2024-05-30 /images/works/silver.jpg

import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dataPath = path.join(root, 'data', 'works.json');

function usage() {
  console.log('Usage: node scripts/add-work.mjs slug "Artist" "Title" [roles] [releaseDate] [thumb] [hero]');
  process.exit(1);
}

const [slug, artist, title, rolesArg, releaseDate, thumbArg, heroArg] = process.argv.slice(2);
if (!slug || !artist || !title) usage();

const roles = (rolesArg || '').split(',').map((s) => s.trim()).filter(Boolean);
const thumb = thumbArg || `/images/works/${slug}.jpg`;
const hero = heroArg || thumb;

try {
  const raw = await fs.readFile(dataPath, 'utf8');
  const arr = JSON.parse(raw);
  if (!Array.isArray(arr)) throw new Error('works.json is not an array');
  if (arr.some((w) => w.slug === slug)) {
    console.error(`✖ Work with slug "${slug}" already exists.`);
    process.exit(2);
  }
  const entry = {
    slug,
    artist,
    title,
    roles: roles.length ? roles : ["Full Production"],
    ...(releaseDate ? { releaseDate } : {}),
    thumb,
    ...(hero ? { hero } : {})
  };
  // Add to the top (newest first)
  const next = [entry, ...arr];
  await fs.writeFile(dataPath, JSON.stringify(next, null, 2) + '\n', 'utf8');
  console.log(`✔ Added: ${artist} – ${title} (${slug})`);
  console.log(`  thumb: ${thumb}`);
  console.log('Note: place the image under public/images/works (1:1 recommended).');
} catch (err) {
  console.error('Failed to update works.json:', err.message);
  process.exit(1);
}

