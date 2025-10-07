"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function toggleLocalePath(path: string, to: 'en' | 'ja') {
  const isEn = path.startsWith('/en');
  if (to === 'en') {
    return isEn ? path : path === '/' ? '/en' : `/en${path}`;
  } else {
    return isEn ? path.replace(/^\/en/, '') || '/' : path;
  }
}

export function LangSwitcher({ className = '', showMobile = false }: { className?: string; showMobile?: boolean }) {
  const pathname = usePathname() || '/';
  const en = toggleLocalePath(pathname, 'en');
  const ja = toggleLocalePath(pathname, 'ja');
  return (
    <div className={(showMobile ? 'flex' : 'hidden md:flex') + ' items-center gap-2 ' + className}>
      <Link href={en} className="nav-link text-xs text-foreground/80 hover:text-foreground focus-ring">EN</Link>
      <span className="text-foreground/50">/</span>
      <Link href={ja} className="nav-link text-xs text-foreground/80 hover:text-foreground focus-ring">JP</Link>
    </div>
  );
}
