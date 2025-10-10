"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() || '/';
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Keep header stable on load

  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const rawPath = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  // Avoid hydration mismatch by deferring path-aware logic until mounted
  const logicalPath = mounted ? rawPath : '/';
  const isEn = mounted ? logicalPath.startsWith('/en') : false;
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
    // Close mobile drawer if present
    setOpen(false);
    const BASEP = process.env.NEXT_PUBLIC_BASE_PATH || '';
    // Only force reload when switching EN -> JP. JP -> EN keeps client navigation (no reload).
    if (to === 'jp' && isEn) {
      e.preventDefault();
      const dest = switchHref('jp');
      const url = BASEP ? `${BASEP}${dest}` : dest;
      window.location.assign(url || '/');
    }
  };
  // logo click default behavior (client-side navigation) restored

  return (
    <header className="header-entrance fixed top-0 left-0 right-0 z-[200] border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[64px] items-center justify-between px-6 md:px-8 md:h-[72px] pt-safe">
        <Link href={mapHref('/')} aria-label="ホームページに移動" className="focus-ring inline-flex items-center">
          <Image
            src={`${process.env.NODE_ENV === 'production' ? 'https://rq1t0.github.io/studioprisoner' : ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo-white.png`}
            alt="STUDIO PRISONER"
            width={200}
            height={40}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 160px, 200px"
            className="h-10 md:h-11 w-auto"
            quality={85}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav hidden items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 md:flex" aria-label="メインナビゲーション">
          {nav.map((n) => {
            const isActive = logicalPath === n.href || logicalPath === `/en${n.href === '/' ? '' : n.href}`;
            const href = mapHref(n.href) || '/';
            return (
              <Link
                key={n.href}
                href={href}
                className={cn(
                  'nav-link px-2 py-2 text-[14px] sm:text-[15px] transition-colors focus-ring font-medium md:font-semibold',
                  isActive ? 'text-foreground is-active' : 'text-foreground/85 hover:text-foreground'
                )}
              >
                {n.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-2 text-xs text-foreground/80">
            <Link href={switchHref('en')} prefetch={false} onClick={handleLangClick('en')} className={cn('nav-link focus-ring font-medium md:font-semibold', logicalPath.startsWith('/en') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground')}>EN</Link>
            <span className="text-foreground/50">/</span>
            <Link href={switchHref('jp')} prefetch={false} onClick={handleLangClick('jp')} className={cn('nav-link focus-ring font-medium md:font-semibold', !logicalPath.startsWith('/en') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground')}>JP</Link>
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="lang-switcher inline-flex items-center rounded-full border border-border/60 bg-background/70 px-1 py-0.5 text-xs backdrop-blur">
            <Link
              href={switchHref('en')}
              prefetch={false}
              onClick={handleLangClick('en')}
              className={cn(
                'px-2 py-0.5 rounded-full transition-colors',
                isEn ? 'bg-accent text-black' : 'text-foreground/85 hover:text-foreground'
              )}
            >
              EN
            </Link>
            <Link
              href={switchHref('jp')}
              prefetch={false}
              onClick={handleLangClick('jp')}
              className={cn(
                'px-2 py-0.5 rounded-full transition-colors',
                !isEn ? 'bg-accent text-black' : 'text-foreground/85 hover:text-foreground'
              )}
            >
              JP
            </Link>
          </div>
          <button
            aria-label="メニューを開く"
            className="mobile-menu-btn focus-ring rounded"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="inline-block h-5 w-6">
              <span className={cn(
                "block h-0.5 w-6 bg-foreground transition-all duration-300",
                open ? "rotate-45 translate-y-2" : ""
              )}></span>
              <span className={cn(
                "mt-1.5 block h-0.5 w-6 bg-foreground transition-all duration-300",
                open ? "opacity-0" : ""
              )}></span>
              <span className={cn(
                "mt-1.5 block h-0.5 w-6 bg-foreground transition-all duration-300",
                open ? "-rotate-45 -translate-y-2" : ""
              )}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={cn(
          'mobile-menu-backdrop fixed inset-0 z-[290] bg-black/60 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      {/* Mobile centered modal menu */}
      <div
        className={cn(
          'mobile-menu-panel fixed inset-0 z-[300] grid place-items-center p-6 md:hidden transition-all',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="ナビゲーションメニュー"
        onClick={() => setOpen(false)}
      >
        <div
          className={cn(
            'glass-panel glass-ring w-full max-w-sm relative',
            'transform-gpu transition-all duration-300',
            open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="menu-spotlight" aria-hidden />
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <span className="heading-condensed text-base font-semibold tracking-wide">MENU</span>
            <button aria-label="メニューを閉じる" className="close-btn focus-ring rounded p-1 text-foreground/80 hover:text-foreground" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <div className="px-2 pb-3">
            <nav className="mx-2 max-h-[60vh] overflow-y-auto pb-2">
              <ul className="space-y-1.5">
                {nav.map((n) => {
                  const isActive = logicalPath === n.href || logicalPath === `/en${n.href === '/' ? '' : n.href}`;
                  const href = mapHref(n.href) || '/';
                  return (
                    <li key={n.href} className="menu-item-stagger" style={{ animationDelay: `${nav.indexOf(n) * 50}ms` }}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors focus-ring',
                          isActive ? 'bg-white/10 text-foreground' : 'hover:bg-white/5 text-foreground/90'
                        )}
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[12px]">{n.label.charAt(0)}</span>
                        <span className="flex-1 text-[15px]">{n.label}</span>
                        <span aria-hidden className="text-foreground/60 transition-transform group-hover:translate-x-0.5">➔</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-2 flex justify-center pb-safe">
              <div className="relative inline-flex items-center rounded-full border border-white/10 bg-white/5 px-1 py-1 text-xs text-foreground/85">
                <span
                  className={cn(
                    'lang-toggle-bg absolute inset-y-1 w-1/2 rounded-full bg-accent/90 transition-transform',
                    isEn ? 'translate-x-0' : 'translate-x-full'
                  )}
                  aria-hidden
                />
                <Link
                  href={switchHref('en')}
                  prefetch={false}
                  onClick={(e) => { setOpen(false); /* no reload JP->EN */ handleLangClick('en')(e); }}
                  className={cn('relative z-10 px-3 py-0.5 rounded-full transition-colors', isEn ? 'text-black' : 'hover:text-foreground')}
                >EN</Link>
                <Link
                  href={switchHref('jp')}
                  prefetch={false}
                  onClick={(e) => { setOpen(false); handleLangClick('jp')(e); }}
                  className={cn('relative z-10 px-3 py-0.5 rounded-full transition-colors', !isEn ? 'text-black' : 'hover:text-foreground')}
                >JP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
