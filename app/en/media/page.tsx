import { Section } from '@/components/section';
import { getMedia } from '@/lib/getData';

export const revalidate = 60;
export const metadata = { title: 'MEDIA' };

export default async function MediaPageEN() {
  const media = await getMedia();
  return (
    <Section>
      <h1 className="heading-condensed mb-8 text-3xl">MEDIA</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {media.map((m, i) => (
          <article key={i} className="overflow-hidden rounded-lg border border-border bg-[#111216]">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${m.youtubeId}`}
                title={m.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">{m.title}</h2>
              {m.description && <p className="text-sm text-foreground/80">{m.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

