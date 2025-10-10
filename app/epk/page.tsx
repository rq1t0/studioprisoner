import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/utils';
import { Section } from '@/components/section';
import { getEpk } from '@/lib/getData';

export const metadata = { title: 'EPK' };

export default async function EpkPage() {
  const epk = await getEpk();
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-3xl">EPK</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-foreground/90">{epk.shortBio}</p>
          <p className="text-foreground/80">{epk.longBio}</p>
          <div className="mt-6 flex gap-3">
            <Link href={epk.oneSheetPdf} className="focus-ring inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-black" download>
              Download EPK (PDF)
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('お問い合わせ / ご依頼について')}`} className="focus-ring inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-foreground">Contact</a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
          <Image src={epk.hero} alt="EPK hero" fill className="object-cover" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:grid-cols-2">
        {epk.photos.map((p, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-md border border-border/70">
            <Image src={p} alt={`Press photo ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </Section>
  );
}
