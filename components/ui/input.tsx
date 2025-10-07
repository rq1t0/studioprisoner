import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm outline-none ring-offset-background placeholder:text-foreground/50 focus:ring-2 focus:ring-accent',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

