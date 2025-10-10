import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Item = { id: string; header: ReactNode; content: ReactNode };

export function Accordion({ items, className }: { items: Item[]; className?: string }) {
  return (
    <div className={cn('divide-y divide-border/60', className)}>
      {items.map((item) => (
        <details key={item.id} className="group">
          <summary className="cursor-pointer list-none px-0 py-4 outline-none transition-colors hover:text-foreground text-base md:text-lg">
            <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs">Q</span>
            {item.header}
          </summary>
          <div className="pb-4 pl-0 text-foreground/80 text-[15px] md:text-base leading-relaxed">
            <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs">A</span>
            <div className="mt-2">{item.content}</div>
          </div>
        </details>
      ))}
    </div>
  );
}
