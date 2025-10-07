import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { getWorkBySlug, getWorks } from '@/lib/getData';
import { formatDate } from '@/lib/utils';

export const revalidate = 60;

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = await getWorkBySlug(params.slug);
  return {
    title: work ? `${work.artist} – ${work.title}` : 'WORK',
    alternates: { canonical: `/en/works/${params.slug}`, languages: { 'ja-JP': `/works/${params.slug}` } }
  };
}

export default async function WorkDetailEN({ params }: { params: { slug: string } }) {
  const works = await getWorks();
  const idx = works.findIndex((w) => w.slug === params.slug);
  const work = works[idx];
  if (!work) return notFound();

  const prev = works[idx - 1];
  const next = works[idx + 1];

  return (
    <>
      <Section className="pb-6">
        <nav className="mb-3 text-sm text-foreground/70" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/en/works" className="underline underline-offset-4">WORKS</Link></li>
            <li>/</li>
            <li aria-current="page">{work.artist} – {work.title}</li>
          </ol>
        </nav>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border">
            <Image src={work.hero || work.thumb} alt={`${work.artist} – ${work.title} cover`} fill className="object-cover" />
          </div>
          <div>
            <h1 className="heading-condensed mb-2 text-3xl">{work.title}</h1>
            <p className="mb-4 text-foreground/80">{work.artist}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {work.roles.map((r) => (<Badge key={r}>{r}</Badge>))}
            </div>
            <p className="mb-4 text-sm text-foreground/70">{formatDate(work.releaseDate)}</p>
            {work.body && <p className="mb-4 text-foreground/90">{work.body}</p>}
            {Array.isArray(work.tracks) && work.tracks.length > 0 && (
              <section className="mb-6">
                <h2 className="heading-condensed mb-2 text-xl">TRACKS</h2>
                <ol className="grid gap-2">
                  {work.tracks.map((t, i) => (
                    <li key={t.title + i} className="rounded-lg border border-border/60">
                      <details>
                        <summary className="cursor-pointer select-none px-3 py-2 text-sm">
                          <span className="mr-1 text-foreground/70">{String(i + 1).padStart(2, '0')}.</span>
                          <span className="font-medium">{t.title}</span>
                        </summary>
                        <div className="space-y-3 px-3 pb-3 text-sm">
                          {t.description && <p className="text-foreground/85">{t.description}</p>}
                          {t.youtubeId && (
                            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border/60">
                              <iframe
                                src={`https://www.youtube.com/embed/${t.youtubeId}`}
                                title={`YouTube: ${t.title}`}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          )}
                          {!t.youtubeId && t.url && (
                            <div>
                              <a href={t.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">Open reference link</a>
                            </div>
                          )}
                        </div>
                      </details>
                    </li>
                  ))}
                </ol>
              </section>
            )}
            {work.links && (
              <ul className="mb-6 list-inside list-disc text-sm">
                {work.links.map((l) => (
                  <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">{l.label}</a></li>
                ))}
              </ul>
            )}
            {work.youtubeId && (
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg border border-border">
                <iframe src={`https://www.youtube.com/embed/${work.youtubeId}`} title="YouTube video" className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4 text-sm">
            {prev ? (<Link href={`/en/works/${prev.slug}`} className="underline underline-offset-4">← {prev.artist} – {prev.title}</Link>) : (<span className="text-foreground/50">First</span>)}
            {next ? (<Link href={`/en/works/${next.slug}`} className="underline underline-offset-4">{next.artist} – {next.title} →</Link>) : (<span className="text-foreground/50">Last</span>)}
          </div>
          <Link href="/en/works" className="underline underline-offset-4">Back to list</Link>
        </div>
      </Section>
    </>
  );
}
