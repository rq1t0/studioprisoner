import Link from 'next/link';
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { getWorks } from '@/lib/getData';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'WORKS',
  description: 'STUDIO PRISONERが手がけた音楽作品の一覧。レコーディング、ミキシング、マスタリングまで一貫したサウンドプロダクションを提供。',
  openGraph: {
    title: 'WORKS | STUDIO PRISONER',
    description: 'STUDIO PRISONERが手がけた音楽作品の一覧。レコーディング、ミキシング、マスタリングまで一貫したサウンドプロダクションを提供。',
    type: 'website',
  },
};

export default async function WorksPage() {
  const base = path.join(process.cwd(), 'public');
  const src = await getWorks();
  const withTime = await Promise.all(
    src.map(async (w) => {
      // 1) addedAt（ISO）優先、2) 画像ファイルのmtime、3) releaseDate の順で新しさを判定
      if (w.addedAt) {
        const t = Date.parse(w.addedAt);
        if (!Number.isNaN(t)) return { w, t };
      }
      try {
        const p = path.join(base, w.thumb.startsWith('/') ? w.thumb.slice(1) : w.thumb);
        const st = await fs.stat(p);
        return { w, t: st.mtimeMs };
      } catch {
        const t = w.releaseDate ? Date.parse(w.releaseDate) : 0;
        return { w, t: Number.isNaN(t) ? 0 : t };
      }
    })
  );
  const works = withTime.sort((a, b) => b.t - a.t).map((x) => x.w);
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">WORKS</h1>
      <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {works.map((w) => (
          <Link key={w.slug} href={`/works/${w.slug}`} className="focus-ring">
            <Card className="card-hover overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image 
                  src={w.thumb} 
                  alt={`${w.artist} – ${w.title} のジャケット`} 
                  fill 
                  className="object-cover" 
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <CardHeader>
                <CardTitle className="text-sm sm:text-base md:text-lg">{w.artist} – {w.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {/* 全件表示のため、追加ロードUIは不要 */}
    </Section>
  );
}
