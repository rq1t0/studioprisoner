import { Section } from '@/components/section';
import { Accordion } from '@/components/ui/accordion';
import { getFaq } from '@/lib/getData';

export const revalidate = 60;
export const metadata = { title: 'FAQ' };

export default async function FaqPage() {
  const faqs = await getFaq();
  return (
    <Section>
      <h1 className="heading-condensed mb-8 text-3xl">FAQ</h1>
      <Accordion
        items={faqs.map((f, i) => ({ id: `q${i}`, header: f.q, content: <p>{f.a}</p> }))}
      />
    </Section>
  );
}

