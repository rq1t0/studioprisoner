import Image from 'next/image';
import Link from 'next/link';
import { Voice } from '@/types';
import { Reveal } from '@/components/reveal';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','600'] });

type Props = {
  voices: Voice[];
  align?: 'left' | 'center' | 'right';
  headingAlign?: 'left' | 'center' | 'right';
  ctaHref?: string;
  ctaLabel?: string;
};

export function VoiceShowcase({ voices, align = 'right', headingAlign, ctaHref = '/voice', ctaLabel = '続きを読む' }: Props) {
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
        <h3 className={`${raleway.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>VOICE</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {items.map((v, i) => (
          <Reveal key={v.name + i} delay={i * 120}>
            <article className="rounded-xl border border-border/60 bg-gradient-to-b from-[#121318] to-[#0f1014] p-5 md:p-6">
              <div className="grid grid-cols-[100px,1fr] xs:grid-cols-[120px,1fr] sm:grid-cols-[180px,1fr] md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr] xl:grid-cols-[320px,1fr] items-start gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-md">
                  <Image
                    src={v.image || `${process.env.NODE_ENV === 'production' ? 'https://rq1t0.github.io/studioprisoner' : ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/works/work-1.svg`}
                    alt={`${v.name} のアートワーク画像`}
                    fill
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 360px"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                <div>
                  <h4 className="heading-condensed text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-1 md:mb-2">{v.name} / {v.role}</h4>
                  <p className="mt-2 text-[13px] xs:text-[14px] sm:text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground/90 line-clamp-4 md:line-clamp-5">
                    {(v.body || []).join(' ')}
                  </p>
                  <div className="mt-3">
                    <Link href={ctaHref} className="focus-ring text-sm md:text-base text-foreground/80 underline underline-offset-4 hover:text-foreground">
                      {ctaLabel}
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
