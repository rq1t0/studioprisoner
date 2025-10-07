import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Work } from '@/types';

export function WorksGrid({ works, hrefPrefix = '' }: { works: Work[]; hrefPrefix?: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {works.map((w) => (
        <Link key={w.slug} href={`${hrefPrefix}/works/${w.slug}`} className="focus-ring group">
          <Card className="card-hover overflow-hidden shadow-[0_0_18px_rgba(30,108,255,0.15)] transition-shadow hover:shadow-[0_0_24px_rgba(30,108,255,0.25)]">
            <div className="relative aspect-square w-full">
              <Image src={w.thumb} alt={`${w.artist} – ${w.title} のジャケット`} fill className="card-img-zoom object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-base">{w.artist} – {w.title}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
