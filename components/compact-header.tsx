"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type React from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/works', label: 'WORKS' },
  { href: '/voice', label: 'VOICE' },
  { href: '/media', label: 'MEDIA' },
  { href: '/faq', label: 'FAQ' },
];

export function CompactHeader() {
  const pathname = usePathname() || '/';
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const logicalPath = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const [visible, setVisible] = useState(false);
  const [dirUp, setDirUp] = useState(true);
  const isEn = logicalPath.startsWith('/en');
  const prefix = isEn ? '/en' : '';
  const enSupported = new Set(['/','/about','/services','/works','/voice','/media','/faq','/case-studies','/contact','/epk']);
  const mapHref = (href: string) => {
    if (!isEn) return href;
    if (enSupported.has(href)) return prefix + (href === '/' ? '' : href);
    return href;
  };
  const handleLangClick = (to: 'en' | 'jp') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to === 'jp') {
      e.preventDefault();
      window.location.assign('/');
    }
  };
  const switchHref = (to: 'en' | 'jp') => {
    if (to === 'en') {
      if (isEn) return pathname;
      const base = '/' + (pathname.split('/')[1] || '');
      return enSupported.has(base) ? `/en${pathname === '/' ? '' : pathname}` : '/en';
    } else {
      if (!isEn) return pathname;
      const stripped = pathname.replace(/^\/en/, '') || '/';
      return stripped;
    }
  };

  useEffect(() => {
    let last = window.scrollY || 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      // show after scrolling a bit
      setVisible(y > 120);
      setDirUp(y < last || y < 10);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-200 will-change-transform' +
        ' ' +
        (visible ? (dirUp ? 'translate-y-0' : '-translate-y-full') : '-translate-y-full')
      }
      aria-label="Compact header"
    >
      <div className="border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-[56px] items-center justify-between px-4 md:px-6">
          <Link href="#main" className="sr-only focus:not-sr-only focus-ring rounded px-2 py-1">Skip to content</Link>
          <Link href="/" className="heading-condensed text-base font-semibold tracking-wide focus-ring">STUDIO PRISONER</Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main (compact)">
            {nav.map((n) => {
              const active = logicalPath === n.href || logicalPath === `/en${n.href === '/' ? '' : n.href}`;
              const href = mapHref(n.href) || '/';
              return (
                <Link
                  key={n.href}
                  href={href}
                  className={
                    'nav-link px-1.5 py-2 text-[14px] transition-colors focus-ring font-medium md:font-semibold ' +
                    (active ? 'text-foreground' : 'text-foreground/80 hover:text-foreground')
                  }
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-2 hidden items-center gap-2 text-xs text-foreground/80 md:flex">
            <Link href={switchHref('en')} prefetch={false} onClick={handleLangClick('en')} className="nav-link focus-ring font-medium md:font-semibold">EN</Link>
            <span className="text-foreground/50">/</span>
            <Link href={switchHref('jp')} prefetch={false} onClick={handleLangClick('jp')} className="nav-link focus-ring font-medium md:font-semibold">JP</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
