"use client";
import Link from 'next/link';
import Image from 'next/image';
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
  { href: '/faq', label: 'FAQ' }
];

export function HeroOverlayNav() {
  const [show, setShow] = useState(true);
  const pathname = usePathname() || '/';
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const rawPath = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const logicalPath = mounted ? rawPath : '/';
  const isEn = mounted ? logicalPath.startsWith('/en') : false;
  const prefix = isEn ? '/en' : '';
  const enSupported = new Set(['/','/about','/services','/works','/voice','/media','/faq','/case-studies','/contact','/epk']);
  const mapHref = (href: string) => {
    if (!isEn) return href;
    if (enSupported.has(href)) return prefix + (href === '/' ? '' : href);
    return href;
  };
  const handleLangClick = (to: 'en' | 'jp') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only force reload when switching EN -> JP. JP -> EN uses client navigation.
    if (to === 'jp' && isEn) {
      e.preventDefault();
      const dest = switchHref('jp');
      window.location.assign(dest || '/');
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
    const onScroll = () => setShow((window.scrollY || 0) < 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={
        'pointer-events-none md:pointer-events-auto absolute left-1/2 top-6 z-60 w-full max-w-5xl -translate-x-1/2 text-center transition-opacity duration-150 ' +
        (show ? 'opacity-100' : 'opacity-0 pointer-events-none')
      }
    >
      <div className="inline-block rounded px-2 py-1">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo-white.png`} alt="Studio Prisoner logo" width={360} height={72} className="mx-auto h-auto w-[220px] sm:w-[280px] lg:w-[340px]" />
      </div>
      <div className="site-nav mt-3 hidden justify-center gap-6 md:flex">
        {nav.map((n) => (
          <Link key={n.href} href={mapHref(n.href)} className="nav-link px-2 py-2 text-[15px] text-foreground/85 transition-colors hover:text-foreground focus-ring font-medium md:font-semibold">
            {n.label}
          </Link>
        ))}
      </div>
      <div className="absolute right-0 top-0 hidden items-center gap-2 text-xs text-foreground/85 md:flex">
        <Link href={switchHref('en')} prefetch={false} onClick={(e) => { e.stopPropagation(); /* no reload on JP->EN */ }} className="nav-link focus-ring font-medium md:font-semibold">EN</Link>
        <span className="text-foreground/50">/</span>
        <Link href={switchHref('jp')} prefetch={false} onClick={(e) => { e.stopPropagation(); handleLangClick('jp')(e); }} className="nav-link focus-ring font-medium md:font-semibold">JP</Link>
      </div>
    </div>
  );
}
