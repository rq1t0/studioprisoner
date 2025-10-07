#!/usr/bin/env node
// Import a work image from an arbitrary path and add it to data/works.json
// Usage:
//   node scripts/import-work.mjs /path/to/image.jpg "Artist" "Title" 2025-01-23 "Recording,Mixing"
// Notes:
//   - The image will be copied to public/images/works/<slug><ext>
//   - slug is generated from artist + title (lowercase, hyphen)
//   - Roles default to Full Production

import fs from 'node:fs/promises';
import path from 'node:path';

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const root = process.cwd();
const dataPath = path.join(root, 'data', 'works.json');
const publicDir = path.join(root, 'public', 'images', 'works');

const [srcPath, artist, title, dateArg, rolesArg] = process.argv.slice(2);
if (!srcPath || !artist || !title) {
  console.log('Usage: node scripts/import-work.mjs <imagePath> "Artist" "Title" [YYYY-MM-DD] [RolesCommaSeparated]');
  process.exit(1);
}

const ext = path.extname(srcPath) || '.jpg';
const slug = slugify(`${artist}-${title}`) || slugify(title) || 'work';
const destName = `${slug}${ext}`;
const destPath = path.join(publicDir, destName);
const releaseDate = dateArg || new Date().toISOString().slice(0, 10);
const roles = (rolesArg || 'Full Production').split(',').map((s) => s.trim());

try {
  await fs.mkdir(publicDir, { recursive: true });
  await fs.copyFile(srcPath, destPath);

  const raw = await fs.readFile(dataPath, 'utf8');
  const arr = JSON.parse(raw);
  const thumb = `/images/works/${destName}`;
  const entry = { slug, artist, title, roles, releaseDate, thumb, hero: thumb };
  // Add or update if slug exists
  const i = arr.findIndex((w) => w.slug === slug);
  const next = i >= 0 ? [...arr.slice(0, i), entry, ...arr.slice(i + 1)] : [entry, ...arr];
  await fs.writeFile(dataPath, JSON.stringify(next, null, 2) + '\n', 'utf8');
  console.log(`✔ Imported and added: ${artist} – ${title}`);
  console.log(`  Image: ${destPath}`);
  console.log(`  JSON : data/works.json (sorted by date on render)`);
} catch (err) {
  console.error('✖ Failed:', err.message);
  process.exit(1);
}

