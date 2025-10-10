#!/usr/bin/env node
// Rename images to kebab-case and normalize extension to lowercase (jpg/jpeg/png/svg)
// NOTE: 形式変換は行いません（.png→.jpg などは sips/ImageMagick を使用してください）

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const targets = [
  path.join(ROOT, 'public', 'images'),
  path.join(ROOT, 'public', 'images', 'works', 'uploads')
];

function kebabify(name) {
  return name
    .replace(/\s+/g, '-')
    .replace(/[_]+/g, '-')
    .replace(/[^a-zA-Z0-9.-]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

async function normalizeDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await normalizeDir(p);
      continue;
    }
    const ext = path.extname(e.name).toLowerCase();
    const base = path.basename(e.name, path.extname(e.name));
    const targetExt = ext === '.jpeg' ? '.jpg' : ext; // .jpeg -> .jpg に統一
    const targetName = kebabify(base) + targetExt;
    if (targetName !== e.name) {
      const dest = path.join(dir, targetName);
      try {
        await fs.rename(p, dest);
        console.log('renamed:', e.name, '->', targetName);
      } catch (err) {
        console.warn('skip:', e.name, err.message);
      }
    }
  }
}

for (const t of targets) {
  normalizeDir(t).catch((e) => console.error('normalize failed:', t, e.message));
}

