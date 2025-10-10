import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Work } from '@/types';
import { Reveal } from '@/components/reveal';

export function WorksGrid({ works, hrefPrefix = '' }: { works: Work[]; hrefPrefix?: string }) {
  return (
    <div className="grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
      {works.map((w, idx) => (
        <Reveal key={w.slug} delay={idx * 90}>
          <Link href={`${hrefPrefix}/works/${w.slug}`} className="focus-ring group">
            <Card className="card-hover overflow-hidden shadow-[0_0_14px_rgba(30,108,255,0.12)] transition-shadow hover:shadow-[0_0_20px_rgba(30,108,255,0.20)]">
              <div className="relative aspect-square w-full">
                <Image
                  src={w.thumb}
                  alt={`${w.artist} – ${w.title} のジャケット画像`}
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="card-img-zoom object-cover"
                  loading="eager"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-base leading-snug">{w.artist} – {w.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
