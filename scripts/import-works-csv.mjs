#!/usr/bin/env node
// Import works from a simple CSV into data/works.json
// CSV header: slug,artist,title,roles,releaseDate,thumb,hero
// roles: comma-separated (e.g. "Recording,Mixing")

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const dataPath = path.join(ROOT, 'data', 'works.json');

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  const header = lines[0].split(',').map((h) => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = [];
    let cur = '';
    let inQ = false;
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '"') {
        inQ = !inQ;
      } else if (ch === ',' && !inQ) {
        cols.push(cur.trim());
        cur = '';
      } else {
        cur += ch;
      }
    }
    cols.push(cur.trim());
    const obj = {};
    header.forEach((h, idx) => (obj[h] = (cols[idx] ?? '').replace(/^"|"$/g, '')));
    rows.push(obj);
  }
  return rows;
}

try {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error('Usage: node scripts/import-works-csv.mjs <path/to/works.csv>');
    process.exit(1);
  }
  const csv = await fs.readFile(csvPath, 'utf8');
  const rows = parseCSV(csv);
  const raw = await fs.readFile(dataPath, 'utf8');
  const arr = JSON.parse(raw);
  const bySlug = new Map(arr.map((w) => [w.slug, w]));
  for (const r of rows) {
    if (!r.slug) continue;
    const roles = (r.roles || '').split(',').map((s) => s.trim()).filter(Boolean);
    const entry = {
      slug: r.slug,
      artist: r.artist || '',
      title: r.title || '',
      roles: roles.length ? roles : ['Full Production'],
      ...(r.releaseDate ? { releaseDate: r.releaseDate } : {}),
      ...(r.thumb ? { thumb: r.thumb } : {}),
      ...(r.hero ? { hero: r.hero } : {}),
    };
    bySlug.set(r.slug, { ...(bySlug.get(r.slug) || {}), ...entry });
  }
  const next = Array.from(bySlug.values());
  await fs.writeFile(dataPath, JSON.stringify(next, null, 2) + '\n', 'utf8');
  console.log(`Imported ${rows.length} rows into data/works.json`);
} catch (err) {
  console.error('Failed:', err.message);
  process.exit(1);
}

