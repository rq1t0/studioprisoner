import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'outline' };

export function Badge({ className, variant = 'default', ...props }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs',
        variant === 'default' && 'bg-muted text-foreground',
        variant === 'outline' && 'border border-border text-foreground',
        className
      )}
      {...props}
    />
  );
}

