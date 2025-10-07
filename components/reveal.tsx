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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    io.observe(el);
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

