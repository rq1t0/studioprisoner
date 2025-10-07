import { Section } from '@/components/section';
import { getVoices } from '@/lib/getData';

export const revalidate = 60;
export const metadata = { title: 'VOICE' };

export default async function VoicePage() {
  const voices = await getVoices();
  return (
    <Section>
      <h1 className="heading-condensed mb-8 text-3xl">VOICE</h1>
      <div className="space-y-6">
        {voices.map((v, i) => (
          <article key={i} className="rounded-lg border border-border bg-[#111216] p-6">
            <header className="mb-2">
              <h2 className="text-lg font-medium">{v.name}</h2>
              <p className="text-sm text-foreground/70">{v.role}</p>
            </header>
            <div className="space-y-3 text-foreground/90">
              {v.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

