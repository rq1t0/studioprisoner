import Image from 'next/image';
import Link from 'next/link';
import { Voice } from '@/types';
import { Reveal } from '@/components/reveal';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300','400','600'] });

type Props = {
  voices: Voice[];
  align?: 'left' | 'center' | 'right';
  headingAlign?: 'left' | 'center' | 'right';
};

export function VoiceShowcase({ voices, align = 'right', headingAlign }: Props) {
  const items = voices.slice(0, 2);
  const wrapAlign = align === 'right'
    ? 'md:max-w-5xl md:ml-auto'
    : align === 'center'
    ? 'md:max-w-5xl mx-auto'
    : '';
  const toAlignClass = (a: 'left'|'center'|'right') => (a === 'right' ? 'text-right' : a === 'center' ? 'text-center' : 'text-left');
  const headingClass = headingAlign ? toAlignClass(headingAlign) : toAlignClass(align);

  return (
    <section aria-label="Voice" className={wrapAlign}>
      <div className={headingClass + ' mb-6'}>
        <h3 className={`${raleway.className} text-2xl md:text-3xl`}>VOICE</h3>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {items.map((v, i) => (
          <Reveal key={v.name + i} delay={i * 120}>
            <article className="rounded-xl bg-gradient-to-b from-[#121318] to-[#0f1014] p-5 md:p-6">
              <div className="grid grid-cols-[160px,1fr] sm:grid-cols-[200px,1fr] md:grid-cols-[280px,1fr] lg:grid-cols-[320px,1fr] items-start gap-5 md:gap-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-md">
                  <Image src={v.image || '/images/works/work-1.svg'} alt={`${v.name} artwork`} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="heading-condensed text-lg md:text-2xl text-foreground/90 mb-1 md:mb-2">{v.name} / {v.role}</h4>
                  {(() => {
                    const preview = (v.body || []).join(' ');
                    return (
                      <p className="mt-2 text-base md:text-lg leading-relaxed text-foreground/90 line-clamp-4 md:line-clamp-5">{preview}</p>
                    );
                  })()}
                  <div className="mt-3">
                    <Link href="/voice" className="focus-ring text-sm md:text-base text-foreground/80 underline underline-offset-4 hover:text-foreground">
                      続きを読む
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
