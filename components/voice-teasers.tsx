import { Voice } from '@/types';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';

type Props = {
  voices: Voice[];
  count?: number; // how many to show (default 3)
  align?: 'left' | 'center' | 'right';
  seeMoreHref?: string;
  seeMoreLabel?: string;
};

export function VoiceTeasers({ voices, count = 3, align = 'center', seeMoreHref = '/voice', seeMoreLabel = 'もっと見る' }: Props) {
  const items = voices.slice(0, count);
  const wrapAlign = align === 'right' ? 'md:max-w-5xl md:ml-auto' : align === 'center' ? 'md:max-w-5xl mx-auto' : '';
  const headingClass = align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'flex items-end justify-between';
  const showInlineLink = align === 'left';
  return (
    <div className={wrapAlign}>
      <div className={headingClass + ' mb-6'}>
        <h3 className="heading-condensed text-2xl md:text-3xl">VOICE</h3>
        {showInlineLink ? (
          <Link href={seeMoreHref} className="nav-link text-sm">{seeMoreLabel}</Link>
        ) : (
          <div className={align === 'center' ? 'mt-2' : ''}>
            <Link href={seeMoreHref} className="nav-link text-sm">{seeMoreLabel}</Link>
          </div>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((v, i) => (
          <Reveal key={v.name + i} delay={i * 120}>
            <article className="card-hover h-full rounded-xl border border-border/70 bg-gradient-to-b from-[#121318] to-[#0f1014] p-6 shadow-[0_0_20px_rgba(90,168,255,0.08)]">
              <div className="space-y-3 text-sm md:text-base text-foreground/90">
                {v.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <footer className="mt-5 border-t border-border/60 pt-3 text-sm text-foreground/80">
                <div className="font-medium">{v.name}</div>
                <div className="text-foreground/60">{v.role}</div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
