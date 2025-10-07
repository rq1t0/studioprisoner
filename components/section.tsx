import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = { className?: string; children: ReactNode; id?: string };

export function Section({ className, children, id }: Props) {
  return (
    <section id={id} className={cn('section', className)}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

