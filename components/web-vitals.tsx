'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    // シンプルなパフォーマンス監視
    if (typeof window !== 'undefined') {
      const handleLoad = () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`[Performance] Page Load Time: ${loadTime}ms`);
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return null;
}
