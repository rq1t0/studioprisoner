import Link from 'next/link';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCaseStudies } from '@/lib/getData';

export const metadata = { title: 'CASE STUDIES' };

export default async function CaseStudiesPage() {
  const list = await getCaseStudies();
  return (
    <Section>
      <h1 className="heading-condensed mb-8 text-3xl">CASE STUDIES</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="focus-ring">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>{c.client} — {c.industry}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{c.challenge}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

