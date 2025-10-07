import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { getWorks } from '@/lib/getData';

export const revalidate = 60;

export default async function WorksPage() {
  const works = await getWorks();
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-3xl">WORKS</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {works.map((w) => (
          <Link key={w.slug} href={`/works/${w.slug}`} className="focus-ring">
            <Card className="card-hover overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image src={w.thumb} alt={`${w.artist} – ${w.title} のジャケット`} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{w.artist} – {w.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline">もっと見る（サンプル）</Button>
      </div>
    </Section>
  );
}
