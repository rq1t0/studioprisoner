import { Section } from '@/components/section';
import { getTestimonials } from '@/lib/getData';

export const metadata = { title: 'TESTIMONIALS' };

export default async function TestimonialsPage() {
  const list = await getTestimonials();
  return (
    <Section>
      <h1 className="heading-condensed mb-8 text-3xl">TESTIMONIALS</h1>
      <div className="space-y-6">
        {list.map((t, i) => (
          <article key={i} className="rounded-lg border border-border bg-[#111216] p-6">
            <header className="mb-2">
              <h2 className="text-lg font-medium">{t.name}</h2>
              <p className="text-sm text-foreground/70">{t.role}</p>
            </header>
            <div className="space-y-3 text-foreground/90">
              {t.body.map((p, idx) => (<p key={idx}>{p}</p>))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

