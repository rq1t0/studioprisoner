import { notFound } from 'next/navigation';
import { Section } from '@/components/section';
import { getCaseStudy, getCaseStudies } from '@/lib/getData';

export async function generateStaticParams() {
  const list = await getCaseStudies();
  return list.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailEN({ params }: { params: { slug: string } }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) return notFound();
  return (
    <Section>
      <h1 className="heading-condensed mb-2 text-3xl">{cs.client}</h1>
      <p className="mb-6 text-foreground/70">{cs.industry} · Locale: {cs.locale}</p>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="heading-condensed mb-2 text-xl">Challenge</h2>
            <p className="text-foreground/85">{cs.challenge}</p>
          </div>
          <div>
            <h2 className="heading-condensed mb-2 text-xl">Approach</h2>
            <ul className="list-inside list-disc space-y-1 text-foreground/85">
              {cs.approach.map((a, i) => (<li key={i}>{a}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="heading-condensed mb-2 text-xl">Results</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {cs.results.kpis.map((k, i) => (<li key={i} className="rounded border border-bluee-500/40 px-2 py-1">{k}</li>))}
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          {cs.testimonial && (
            <blockquote className="rounded-lg border border-border p-4 text-sm text-foreground/80">“{cs.testimonial}”</blockquote>
          )}
          {cs.cta && (
            <a href={cs.cta} className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-black">Start a Project</a>
          )}
        </aside>
      </div>
    </Section>
  );
}

