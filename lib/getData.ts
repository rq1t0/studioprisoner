import fs from 'fs/promises';
import path from 'path';
import { Work, Voice, Media, Faq, CaseStudy, Epk, Testimonial } from '@/types';

const dataDir = path.join(process.cwd(), 'data');

async function readJson<T>(file: string): Promise<T> {
  try {
    const p = path.join(dataDir, file);
    const raw = await fs.readFile(p, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(`Error reading ${file}:`, error);
    throw new Error(`Failed to read data file: ${file}`);
  }
}

export async function getWorks(): Promise<Work[]> {
  const works = await readJson<Work[]>('works.json');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Normalize: fill defaults so data can be simpler to write
  const normalized = works.map((w) => {
    const slug = w.slug;
    const thumb = w.thumb ? `${basePath}${w.thumb}` : `${basePath}/images/works/uploads/${slug}.jpg`;
    const hero = w.hero ? `${basePath}${w.hero}` : thumb;
    const roles = (w.roles && w.roles.length > 0) ? w.roles : ['Full Production'];
    return { ...w, thumb, hero, roles } as Work;
  });
  // Sort by releaseDate desc if available; otherwise keep original order
  const sorted = normalized.slice().sort((a, b) => {
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

export async function getTopWorks(limit = 8): Promise<Work[]> {
  const works = await getWorks();
  // 1) home-works.json（ファイル名の並びで優先）
  let manualOrder: string[] = [];
  try {
    manualOrder = await readJson<string[]>('home-works.json');
  } catch {}
  const byFile: Work[] = [];
  if (Array.isArray(manualOrder) && manualOrder.length > 0) {
    const map = new Map(works.map((w) => [w.slug, w]));
    const taken = new Set<string>();
    manualOrder.forEach((fname) => {
      const w = works.find((x) => x.thumb && x.thumb.split('/').pop() === fname);
      if (w && !taken.has(w.slug)) {
        byFile.push(w);
        taken.add(w.slug);
      }
    });
    if (byFile.length >= limit) return byFile.slice(0, limit);
    const rest = works.filter((w) => !taken.has(w.slug));
    // releaseDate 降順で補完
    rest.sort((a, b) => {
      const da = a.releaseDate ? Date.parse(a.releaseDate) : NaN;
      const db = b.releaseDate ? Date.parse(b.releaseDate) : NaN;
      if (!Number.isNaN(da) && !Number.isNaN(db)) return db - da;
      if (!Number.isNaN(da) && Number.isNaN(db)) return -1;
      if (Number.isNaN(da) && !Number.isNaN(db)) return 1;
      return 0;
    });
    return [...byFile, ...rest].slice(0, limit);
  }
  // 2) homeOrder（数値）
  const prioritized = works
    .filter((w) => typeof w.homeOrder === 'number' && isFinite(w.homeOrder as number))
    .sort((a, b) => (a.homeOrder as number) - (b.homeOrder as number));
  if (prioritized.length >= limit) return prioritized.slice(0, limit);
  const used = new Set(prioritized.map((w) => w.slug));
  const rest = works.filter((w) => !used.has(w.slug));
  return [...prioritized, ...rest].slice(0, limit);
}

export async function getVoices(locale?: 'ja' | 'en'): Promise<Voice[]> {
  const file = locale === 'en' ? 'voices.en.json' : 'voices.json';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  try {
    const voices = await readJson<Voice[]>(file);
    return voices.map(v => ({
      ...v,
      image: v.image ? `${basePath}${v.image}` : v.image
    }));
  } catch {
    const voices = await readJson<Voice[]>('voices.json');
    return voices.map(v => ({
      ...v,
      image: v.image ? `${basePath}${v.image}` : v.image
    }));
  }
}

export async function getMedia(): Promise<(Media & { youtubeId: string })[]> {
  const listRaw = await readJson<Media[]>('media.json');
  // Normalize: allow url to be pasted instead of youtubeId
  const extractYouTubeId = (url?: string): string | undefined => {
    if (!url) return undefined;
    try {
      const u = new URL(url);
      const vParam = u.searchParams.get('v');
      if (vParam) return vParam;
      const path = u.pathname;
      // /embed/{id}, /shorts/{id}, youtu.be/{id}
      const parts = path.split('/').filter(Boolean);
      if (u.hostname.includes('youtu.be') && parts[0]) return parts[0];
      const embedIdx = parts.indexOf('embed');
      if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];
      const shortsIdx = parts.indexOf('shorts');
      if (shortsIdx >= 0 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];
    } catch {}
    return undefined;
  };
  const list: (Media & { youtubeId: string })[] = listRaw
    .map((m) => {
      const id = m.youtubeId || extractYouTubeId((m as any).url);
      return { ...m, youtubeId: id || '' } as Media & { youtubeId: string };
    })
    .filter((m) => typeof m.youtubeId === 'string' && (m.youtubeId as string).length > 0);
  // 1) media-order.json（YouTube ID の並びで最優先）
  try {
    const manual = await readJson<string[]>('media-order.json');
    if (Array.isArray(manual) && manual.length > 0) {
      const taken = new Set<string>();
      const byFile: (Media & { youtubeId: string })[] = [];
      manual.forEach((id) => {
        const m = list.find((x) => x.youtubeId === id);
        if (m && !taken.has(m.youtubeId)) {
          byFile.push(m);
          taken.add(m.youtubeId);
        }
      });
      const rest = list.filter((m) => !taken.has(m.youtubeId));
      return [...byFile, ...rest];
    }
  } catch {}
  // 2) order（数値）が付与されていれば昇順で並べ替え
  const hasOrder = list.some((m) => typeof (m as any).order === 'number' && isFinite((m as any).order));
  if (hasOrder) {
    return list.slice().sort((a, b) => {
      const ao = (a as any).order;
      const bo = (b as any).order;
      const aValid = typeof ao === 'number' && isFinite(ao);
      const bValid = typeof bo === 'number' && isFinite(bo);
      if (aValid && bValid) return ao - bo;
      if (aValid && !bValid) return -1;
      if (!aValid && bValid) return 1;
      return 0;
    });
  }
  // 3) 何も無ければファイルの記述順
  return list;
}

export async function getFaq(locale?: 'ja' | 'en'): Promise<Faq[]> {
  const file = locale === 'en' ? 'faq.en.json' : 'faq.json';
  try {
    return await readJson<Faq[]>(file);
  } catch (e) {
    // フォールバック（英語が無ければ日本語を返す）
    return readJson<Faq[]>('faq.json');
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return readJson<CaseStudy[]>('caseStudies.json');
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const list = await getCaseStudies();
  return list.find((c) => c.slug === slug) ?? null;
}

export async function getEpk(): Promise<Epk> {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const epk = await readJson<Epk>('epk.json');
  return {
    ...epk,
    hero: epk.hero ? `${basePath}${epk.hero}` : epk.hero,
    photos: epk.photos ? epk.photos.map(p => `${basePath}${p}`) : epk.photos
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return readJson<Testimonial[]>('testimonials.json');
}
