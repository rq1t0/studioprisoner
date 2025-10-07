import { ReactNode } from 'react';

type Item = { id: string; header: ReactNode; content: ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-border/60">
      {items.map((item) => (
        <details key={item.id} className="group">
          <summary className="cursor-pointer list-none px-0 py-4 outline-none transition-colors hover:text-foreground">
            <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs">Q</span>
            {item.header}
          </summary>
          <div className="pb-4 pl-0 text-foreground/80">
            <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs">A</span>
            <div className="mt-2">{item.content}</div>
          </div>
        </details>
      ))}
    </div>
  );
}

