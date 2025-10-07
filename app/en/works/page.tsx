import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/section';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { getWorks } from '@/lib/getData';

export const revalidate = 60;

export default async function WorksPageEN() {
  const works = await getWorks();
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-3xl">WORKS</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {works.map((w) => (
          <Link key={w.slug} href={`/en/works/${w.slug}`} className="focus-ring">
            <Card className="card-hover overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image src={w.thumb} alt={`${w.artist} – ${w.title} cover`} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{w.artist} – {w.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
