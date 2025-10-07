"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
// import { LangSwitcher } from './lang-switcher';
import { Logo } from './logo';

const nav = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/works', label: 'WORKS' },
  { href: '/voice', label: 'VOICE' },
  { href: '/media', label: 'MEDIA' },
  { href: '/faq', label: 'FAQ' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || '/';

  // opaque on scroll (client-only)
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || document.documentElement.scrollTop) > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const logicalPath = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const isEn = logicalPath.startsWith('/en');
  const prefix = isEn ? '/en' : '';
  const enSupported = new Set(['/','/about','/services','/works','/voice','/media','/faq','/case-studies','/contact','/epk']);
  const mapHref = (href: string) => {
    if (!isEn) return href;
    if (enSupported.has(href)) return prefix + (href === '/' ? '' : href);
    return href; // fallback to JP route when EN page does not exist
  };
  const switchHref = (to: 'en' | 'jp') => {
    if (to === 'en') {
      if (isEn) return logicalPath;
      const base = '/' + (logicalPath.split('/')[1] || '');
      return enSupported.has(base) ? `/en${logicalPath === '/' ? '' : logicalPath}` : '/en';
    } else {
      if (!isEn) return logicalPath;
      const stripped = logicalPath.replace(/^\/en/, '') || '/';
      return stripped;
    }
  };
  const handleLangClick = (to: 'en' | 'jp') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Always close mobile drawer state if present
    setOpen(false);
    if (to === 'jp') {
      // Force hard reload to JP top to avoid any lingering overlay/state
      e.preventDefault();
      window.location.assign('/');
    }
  };

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 border-b border-border/60 transition-colors duration-200 ' +
        (scrolled ? 'bg-background/95' : 'bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50')
      }
    >
      <div className="container flex h-[64px] items-center justify-between px-6 md:px-8 md:h-[72px]">
        <Link href="/" aria-label="Go to home" className="focus-ring inline-flex items-center">
          <Image src="/images/logo-white.png" alt="Studio Prisoner" width={200} height={40} className="h-10 md:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:gap-8 md:flex" aria-label="Main">
          {nav.map((n) => {
            const isActive = pathname === n.href || pathname === `/en${n.href === '/' ? '' : n.href}`;
            const href = mapHref(n.href) || '/';
            return (
              <Link
                key={n.href}
                href={href}
                className={cn(
                  'nav-link px-2 py-2 text-[15px] transition-colors focus-ring font-medium md:font-semibold',
                  isActive ? 'text-foreground is-active' : 'text-foreground/85 hover:text-foreground'
                )}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-2 text-xs text-foreground/80">
            <Link href={switchHref('en')} prefetch={false} onClick={handleLangClick('en')} className={cn('nav-link focus-ring font-medium md:font-semibold', pathname.startsWith('/en') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground')}>EN</Link>
            <span className="text-foreground/50">/</span>
            <Link href={switchHref('jp')} prefetch={false} onClick={handleLangClick('jp')} className={cn('nav-link focus-ring font-medium md:font-semibold', !pathname.startsWith('/en') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground')}>JP</Link>
          </div>
        </nav>

        {/* Mobile */}
        <button
          aria-label="Open menu"
          className="focus-ring rounded md:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="inline-block h-5 w-6">
            <span className="block h-0.5 w-6 bg-foreground"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground"></span>
          </span>
        </button>
      </div>

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-72 translate-x-full bg-[#111214] p-6 shadow-lg transition-transform md:hidden',
          open && 'translate-x-0'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="heading-condensed text-base font-semibold">MENU</span>
          <button aria-label="Close menu" className="focus-ring rounded" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="grid gap-2">
          {nav.map((n) => {
            const isActive = pathname === n.href || pathname === `/en${n.href === '/' ? '' : n.href}`;
            const href = mapHref(n.href) || '/';
            return (
              <Link
                key={n.href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'nav-link rounded px-2 py-3 text-base outline-none transition-colors hover:bg-muted focus-ring font-medium',
                  isActive ? 'text-foreground is-active' : 'text-foreground/90'
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 border-t border-border/60 pt-4 text-sm">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Link href={switchHref('en')} prefetch={false} onClick={handleLangClick('en')} className="underline underline-offset-4">EN</Link>
            <span className="text-foreground/50">/</span>
            <Link href={switchHref('jp')} prefetch={false} onClick={handleLangClick('jp')} className="underline underline-offset-4">JP</Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
