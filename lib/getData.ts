import fs from 'fs/promises';
import path from 'path';
import { Work, Voice, Media, Faq, CaseStudy, Epk, Testimonial } from '@/types';

const dataDir = path.join(process.cwd(), 'data');

async function readJson<T>(file: string): Promise<T> {
  const p = path.join(dataDir, file);
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw) as T;
}

export async function getWorks(): Promise<Work[]> {
  const works = await readJson<Work[]>('works.json');
  // Sort by releaseDate desc if available; otherwise keep original order
  const sorted = works.slice().sort((a, b) => {
    const da = a.releaseDate ? Date.parse(a.releaseDate) : NaN;
    const db = b.releaseDate ? Date.parse(b.releaseDate) : NaN;
    const aValid = !Number.isNaN(da);
    const bValid = !Number.isNaN(db);
    if (aValid && bValid) return db - da; // newer first
    if (aValid && !bValid) return -1; // dated items before undated
    if (!aValid && bValid) return 1;
    return 0;
  });
  return sorted;
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const works = await getWorks();
  return works.find((w) => w.slug === slug) ?? null;
}

export async function getVoices(): Promise<Voice[]> {
  return readJson<Voice[]>('voices.json');
}

export async function getMedia(): Promise<Media[]> {
  return readJson<Media[]>('media.json');
}

export async function getFaq(): Promise<Faq[]> {
  return readJson<Faq[]>('faq.json');
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return readJson<CaseStudy[]>('caseStudies.json');
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const list = await getCaseStudies();
  return list.find((c) => c.slug === slug) ?? null;
}

export async function getEpk(): Promise<Epk> {
  return readJson<Epk>('epk.json');
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return readJson<Testimonial[]>('testimonials.json');
}
