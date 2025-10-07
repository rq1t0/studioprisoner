"use client";
import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || 0) > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      aria-label="Scroll to top"
      className={
        'fixed bottom-5 right-5 z-50 rounded-full border border-border bg-background/80 p-3 text-sm text-foreground/90 shadow transition-all hover:shadow-lg focus-ring ' +
        (show ? 'opacity-100' : 'pointer-events-none opacity-0')
      }
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}

