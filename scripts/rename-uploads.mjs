#!/usr/bin/env node
// Rename existing image files with opaque names to clean, slug-based names.
// This is a one-time migration helper for the current repository contents.

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const uploads = path.join(ROOT, 'public', 'images', 'works', 'uploads');

const moves = [
  // works/uploads
  ['51YBRWEk2AL.jpg', 'ex-51ybrwek2al.jpg'],
  ['912fLwNEwvL._SL1500_-1024x1024-1.jpg', 'ex-912flwnewvl.jpg'],
  ['A1yFVaTWEzL._SL1500_.jpg', 'ex-a1yfvatwezl.jpg'],
  ['CHANGE-OF-GENERATION.jpg', 'change-of-generation.jpg'],
  ['DAY-OF-SALVATION.jpg', 'day-of-salvation.jpg'],
  ['Infernally-Revulsed.jpg', 'infernally-revulsed.jpg'],
  ['WHITEOUT初回限定盤.jpg', 'whiteout-limited.jpg'],
  ['ZeTeS.jpg', 'zetes.jpg']
];

const singles = [
  // single images
  [path.join(ROOT, 'public', 'images', 'about_top_v5.jpg'), path.join(ROOT, 'public', 'images', 'about-hero.jpg')]
];

async function renameIfExists(from, to) {
  try {
    await fs.access(from);
  } catch {
    return false;
  }
  try {
    await fs.rename(from, to);
    console.log('renamed:', path.relative(ROOT, from), '->', path.relative(ROOT, to));
    return true;
  } catch (err) {
    console.error('rename failed:', err.message);
    return false;
  }
}

// Works uploads
for (const [oldName, newName] of moves) {
  const from = path.join(uploads, oldName);
  const to = path.join(uploads, newName);
  // skip if destination already exists
  try {
    await fs.access(to);
    continue;
  } catch {}
  await renameIfExists(from, to);
}

// Singles
for (const [from, to] of singles) {
  // skip if destination already exists
  try {
    await fs.access(to);
    continue;
  } catch {}
  await renameIfExists(from, to);
}

console.log('Done.');

