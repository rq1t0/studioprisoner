'use client';

import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/utils';

export function Footer({ lang = 'ja' }: { lang?: 'ja' | 'en' }) {
  const tagline = lang === 'en' ? 'A place to hone the contours of sound and story.' : '音と物語の輪郭を研ぎ澄ます場所。';
  const contactLabel = lang === 'en' ? 'Contact:' : 'お問い合わせ:';
  const socialLabel = lang === 'en' ? 'Social' : 'SNS';
  const prefix = lang === 'en' ? '/en' : '';

  // Footer duplication is prevented by rendering per-locale layouts only.

  return (
    <footer className="mt-24 border-t border-border/60 bg-background/80">
      <div className="container grid gap-6 py-10 md:grid-cols-3">
        <div>
          <div className="heading-condensed text-sm font-semibold">STUDIO PRISONER</div>
          <p className="mt-2 text-sm text-foreground/70">{tagline}</p>
          <p className="mt-3 text-sm">
            {contactLabel} {' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(lang === 'en' ? 'Project inquiry' : 'お問い合わせ / ご依頼について')}`} className="underline underline-offset-4 focus-ring font-medium text-foreground">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <ul className="grid gap-2">
            <li><Link href={`${prefix}/about`} className="hover:underline">ABOUT</Link></li>
            <li><Link href={`${prefix}/services`} className="hover:underline">SERVICES</Link></li>
            <li><Link href={`${prefix}/works`} className="hover:underline">WORKS</Link></li>
          </ul>
        </nav>

        <div className="text-sm">
          <div className="mb-2 font-medium">{socialLabel}</div>
          <div className="flex items-center gap-4">
            <a
              href="https://example.com/x"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              className="group inline-flex items-center justify-center rounded-md border border-border/60 p-2 transition-colors hover:bg-muted focus-ring"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 4l7.5 8.3L4.8 20h2.5l5-6 4.9 6H20l-7.3-8.7L19.1 4h-2.5l-4.5 5.4L7.5 4H4z" fill="#fff" className="opacity-90 group-hover:opacity-100" />
              </svg>
              <span className="sr-only">X</span>
            </a>
            <a
              href="https://example.com/instagram"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="group inline-flex items-center justify-center rounded-md border border-border/60 p-2 transition-colors hover:bg-muted focus-ring"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="1.6" className="opacity-90 group-hover:opacity-100" />
                <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-foreground/60">
        © 2026 STUDIO PRISONER
      </div>
    </footer>
  );
}
