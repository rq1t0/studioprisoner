"use client";
import { useEffect } from 'react';

export function EnReloadRedirect() {
  useEffect(() => {
    try {
      const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
      let isReload = false;
      const nav = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (nav && nav.length > 0 && nav[0].type) {
        isReload = nav[0].type === 'reload';
      } else if ((performance as any).navigation) {
        // Legacy fallback
        const legacy = (performance as any).navigation;
        isReload = legacy.type === 1; // 1 = TYPE_RELOAD
      }
      if (isReload) {
        const home = base || '/';
        window.location.replace(home);
      }
    } catch (_) {
      // noop
    }
  }, []);
  return null;
}

