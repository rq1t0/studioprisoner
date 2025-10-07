import type { MetadataRoute } from 'next';
import { getWorks } from '@/lib/getData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://example.com';
  const works = await getWorks();
  const now = new Date();
  const staticPaths = [
    '', '/about', '/services', '/works', '/case-studies', '/epk', '/testimonials', '/media', '/faq', '/privacy', '/terms',
    '/en', '/en/about', '/en/services', '/en/works', '/en/voice', '/en/case-studies', '/en/epk', '/en/media', '/en/faq'
  ];
  const entries = staticPaths.map((p) => ({ url: base + p, lastModified: now }));
  const workEntries = works.flatMap((w) => [
    { url: `${base}/works/${w.slug}`, lastModified: now },
    { url: `${base}/en/works/${w.slug}`, lastModified: now }
  ]);
  return [...entries, ...workEntries];
}
