import { Accordion } from '@/components/ui/accordion';
import { CONTACT_EMAIL } from '@/lib/utils';
import { getFaq } from '@/lib/getData';

export const revalidate = 60;
export const metadata = { title: 'FAQ' };

export default async function FaqPageEN() {
  const faqs = await getFaq('en');

  const items = faqs.map((f, i) => {
    const id = `q${i}`;
    const header = f.q;
    const renderParagraph = (p: string, key?: number) => {
      if (p.includes(CONTACT_EMAIL)) {
        const [before, after] = p.split(CONTACT_EMAIL);
        return (
          <p key={key}>
            {before}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">{CONTACT_EMAIL}</a>
            {after}
          </p>
        );
      }
      return <p key={key}>{p}</p>;
    };
    const content = Array.isArray(f.a)
      ? <div className="space-y-3">{f.a.map((p, idx) => renderParagraph(String(p), idx))}</div>
      : renderParagraph(String(f.a));
    return { id, header, content };
  });

  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="heading-condensed mb-8 text-3xl text-center">FAQ</h1>
        <div className="pl-4 md:pl-8">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
