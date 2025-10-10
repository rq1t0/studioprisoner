"use client";
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
};

export function Reveal({ children, as = 'div', delay = 0, className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    
    // パフォーマンス最適化されたIntersection Observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { 
        rootMargin: '100px 0px -10% 0px', 
        threshold: 0.05,
        // パフォーマンス最適化
        root: null
      }
    );
    
    // リクエストアイドルコールバックで遅延実行
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        io.observe(el);
      });
    } else {
      setTimeout(() => {
        io.observe(el);
      }, 0);
    }
    
    return () => io.disconnect();
  }, []);

  const Comp: any = as;
  return (
    <Comp
      ref={ref as any}
      className={["reveal", visible && "is-visible", className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${Math.max(0, delay)}ms` }}
    >
      {children}
    </Comp>
  );
}

